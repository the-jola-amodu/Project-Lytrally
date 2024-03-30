from flask import Flask, render_template, url_for, flash, redirect, request
from forms import RegistrationForm, LoginForm
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = "09b8049e0722d8956b107b38fa2eface"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

document_user_association = db.Table('document_user_association',
                                     db.Column('user_id', db.Integer,
                                               db.ForeignKey('user.id')),
                                     db.Column('document_id', db.Integer, db.ForeignKey('document.id')))


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False,
                           default='default.jpg')
    password = db.Column(db.String(60), nullable=False)

    # Define many-to-many relationship with User through association table
    posts = db.relationship(
        'Document', secondary=document_user_association, backref='authors', lazy='dynamic')

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"


class Document(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False, primary_key=True)
    date_created = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text)

   # Column to store user IDs associated with the document
    user_ids = db.Column(db.String(255), nullable=True)

    # Define many-to-many relationship with User through association table
    authors = db.relationship('User', secondary=document_user_association,
                              backref=db.backref('documents', lazy='dynamic'),
                              lazy='dynamic')

    def add_user(self, user):
        # Add a user to the list of associated users
        if user not in self.authors:
            self.authors.append(user)
            db.session.commit()

    def remove_user(self, user):
        # Remove a user from the list of associated users
        if user in self.authors:
            self.authors.remove(user)
            db.session.commit()

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_created}')"


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

# Creates tables in the database
# db.create_all()


if __name__ == "__main__":
    app.run(debug=True)
