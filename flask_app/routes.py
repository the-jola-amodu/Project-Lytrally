from flask import render_template, url_for, flash, redirect, request
from flask_app import app, db, bcrypt
from flask_app.forms import RegistrationForm, LoginForm, UpdateAccountForm, DocumentForm
from flask_app.models import User, Document
from flask_login import login_user, current_user, logout_user, login_required
import secrets
import os
from PIL import Image


@app.route('/', methods=['GET', 'POST'])
def index():
    if current_user.is_authenticated:
        image_file = url_for(
            'static', filename='profile_pics/' + current_user.image_file)
        return render_template('index.html', page='Home', image_file=image_file)
    else:
        return render_template('index.html', page='Home')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if current_user.is_authenticated:
        return redirect(url_for('features'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data)
        user = User(first_name=form.first_name.data, last_name=form.last_name.data,
                    email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash(f"Your account has been created! Login to access Lytrally", 'success')
        return redirect(url_for('index'))
    return render_template('signup.html', form=form, title='Get Started!', page='signup')


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if current_user.is_authenticated:
        return redirect(url_for('features'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember_me.data)
            next_page = request.args.get('next')
            flash(
                f"Welcome, {user.first_name}! You are now logged in!", 'success')
            return redirect(next_page) if next_page else redirect(url_for('index'))
        else:
            flash(f"Login Unsuccessful. Please check login details", 'danger')
    return render_template('signin.html', form=form, title='Login', page='signin')


@app.route('/features', methods=['GET', 'POST'])
@login_required
def features():
    form = DocumentForm()
    if request.method == 'GET':
        form.title.data = "New_Untitled_Document"
    image_file = url_for(
        'static', filename='profile_pics/' + current_user.image_file)
    return render_template('features.html', form=form, page='features', image_file=image_file)


def save_picture(form_picture):
    random_hex = secrets.token_hex(8)
    _, file_extention = os.path.splitext(form_picture.filename)
    pic_filename = random_hex + file_extention
    pic_path = os.path.join(app.root_path, 'static/profile_pics', pic_filename)

    output_size = (125, 125)
    i = Image.open(form_picture)
    i.thumbnail(output_size)
    i.save(pic_path)
    return pic_filename


@app.route('/account', methods=['GET', 'POST'])
@login_required
def account():
    form = UpdateAccountForm()
    if form.validate_on_submit():
        if form.picture.data:
            picture_file = save_picture(form.picture.data)
            current_user.image_file = picture_file
        current_user.first_name = form.first_name.data
        current_user.last_name = form.last_name.data
        current_user.email = form.email.data
        db.session.commit()
        flash('Your account has been updated', 'success')
        return redirect(url_for('account'))
    elif request.method == 'GET':
        form.first_name.data = current_user.first_name
        form.last_name.data = current_user.last_name
        form.email.data = current_user.email
    image_file = url_for(
        'static', filename='profile_pics/' + current_user.image_file)
    return render_template('account.html', page='account', title='Account', image_file=image_file, form=form)


@app.route("/signout")
def signout():
    logout_user()
    return redirect(url_for('index'))


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template("500.html"), 500
