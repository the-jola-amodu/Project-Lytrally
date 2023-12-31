from flask import Flask, render_template, url_for, flash, redirect, request
from forms import RegistrationForm, LoginForm

app = Flask(__name__, static_url_path='/static')

app.config['SECRET_KEY'] = "09b8049e0722d8956b107b38fa2eface"


@app.route('/', methods=['GET', 'POST'])
def index():
    login_form = LoginForm()
    registration_form = RegistrationForm()
    if request.method == 'POST':

        if login_form.submit1.data and login_form.validate():
            flash(f"Welcome, new user!", 'success')
            return redirect(url_for('index'))

        if registration_form.submit2.data and registration_form.validate():
            flash(f"Welcome, new user!", 'success')
            return redirect(url_for('index'))
    return render_template('index.html', form1=login_form, form2=registration_form)


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
