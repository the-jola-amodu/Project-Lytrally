from flask import render_template, url_for, flash, redirect, request
from flask_app import app
from flask_app.forms import RegistrationForm, LoginForm
from flask_app.models import User, Document


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html', page='Home')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f"Welcome to Lytrally!", 'success')
        return redirect(url_for('index'))
    return render_template('signup.html', form=form, title='Get Started!', page='signup')


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    form = LoginForm()
    if form.validate_on_submit():
        flash(f"Welcome, {form.username.data}!", 'success')
        return redirect(url_for('home'))
    return render_template('signin.html', form=form, title='Login', page='signin')


@app.route('/features')
def features():
    return render_template('features.html', title='Getting some work done!', page='features')


@app.route('/account')
def account():
    return render_template('account.html', title='Profile', page='account')

# Creates tables in the database
# db.create_all()
