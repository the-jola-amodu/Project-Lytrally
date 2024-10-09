from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from flask_login import current_user
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from flask_app.models import User
from wtforms.widgets import TextArea
from flask_ckeditor import CKEditorField


class RegistrationForm(FlaskForm):
    first_name = StringField("First Name", validators=[DataRequired()])
    last_name = StringField("Last Name", validators=[DataRequired()])
    email = StringField("Email", validators=[
                        DataRequired(), Email()])
    password = PasswordField("Password", validators=[
                             DataRequired(), Length(min=5)])
    confirm_password = PasswordField("Confirm Password", validators=[
                                     DataRequired(), EqualTo("password")])
    policy_agreement = BooleanField(
        "I Agree with privacy and policy", validators=[DataRequired()])
    submit_to_register = SubmitField("Register!")

    def validate_email(self, email):

        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError(
                'That email has been taken. Please choose a different email')


class LoginForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[
                             DataRequired(), Length(min=5)])
    remember_me = BooleanField("Remember Me")
    submit_to_login = SubmitField("Sign in")


class UpdateAccountForm(FlaskForm):
    first_name = StringField("First Name", validators=[DataRequired()])
    last_name = StringField("Last Name", validators=[DataRequired()])
    email = StringField("Email", validators=[
                        DataRequired(), Email()])
    picture = FileField("Update Profile Picture", validators=[
                        FileAllowed(['jpg', 'png'])])
    submit_to_update = SubmitField("Update")

    def validate_email(self, email):
        if email.data != current_user.email:
            user = User.query.filter_by(email=email.data).first()
            if user:
                raise ValidationError(
                    'That email has been taken. Please choose a different email')


class DocumentForm(FlaskForm):
    title = StringField(validators=[DataRequired()])
    content = CKEditorField('Content')
