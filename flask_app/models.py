from datetime import datetime
from flask_app import db

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
