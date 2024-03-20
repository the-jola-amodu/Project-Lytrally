from flask import Flask, render_template, url_for, flash, redirect, request
from forms import RegistrationForm, LoginForm

app = Flask(__name__, static_url_path='/static')

app.config['SECRET_KEY'] = "09b8049e0722d8956b107b38fa2eface"


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f"Welcome, {form.username.data}!", 'success')
        return redirect(url_for('home'))
    return render_template('signup.html', form=form)


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    form = LoginForm()
    if form.validate_on_submit():
        flash(f"Welcome, {form.username.data}!", 'success')
        return redirect(url_for('home'))
    return render_template('signin.html', form=form)


@app.route('/features')
def features():
    return render_template('features.html')


@app.route('/account')
def account():
    return render_template('account.html')


if __name__ == "__main__":
    app.run(debug=True)
