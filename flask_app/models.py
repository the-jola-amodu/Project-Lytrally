from datetime import datetime
from flask_app import db, login_manager
from flask_login import UserMixin


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


document_user_association = db.Table('document_user_association',
                                     db.Column('user_id', db.Integer,
                                               db.ForeignKey('user.id')),
                                     db.Column('document_id', db.Integer, db.ForeignKey('document.id')))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(), nullable=False)
    last_name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False,
                           default='default.jpg')
    password = db.Column(db.String(60), nullable=False)

    # Define many-to-many relationship with User through association table
    documents = db.relationship(
        'Document', secondary=document_user_association, backref='users', lazy='dynamic')

    def __repr__(self):
        return f"User('{self.first_name}', '{self.last_name}', '{self.email}', '{self.image_file}')"


class Document(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False, primary_key=True)
    date_created = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text)

    def __repr__(self):
        return f"Document('{self.title}', '{self.date_created}')"
