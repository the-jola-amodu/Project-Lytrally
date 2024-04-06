from flask import render_template, url_for, flash, redirect, request
from flask_app import app, db, bcrypt
from flask_app.forms import RegistrationForm, LoginForm
from flask_app.models import User, Document
from flask_login import login_user, current_user, logout_user, login_required


@app.route('/', methods=['GET', 'POST'])
def index():
    image_file = url_for(
        'static', filename='profile_pics/' + current_user.image_file)
    return render_template('index.html', page='Home', image_file=image_file)


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
    return render_template('signin.html', form=form)


@app.route('/features')
@login_required
def features():
    image_file = url_for(
        'static', filename='profile_pics/' + current_user.image_file)
    return render_template('features.html', page='features', image_file=image_file)


@app.route('/account')
@login_required
def account():
    image_file = url_for(
        'static', filename='profile_pics/' + current_user.image_file)
    return render_template('account.html', page='account', title='Account', image_file=image_file)


@app.route("/signout")
def signout():
    logout_user()
    return redirect(url_for('home'))
