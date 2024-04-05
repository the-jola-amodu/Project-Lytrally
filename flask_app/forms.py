from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from flask_app.models import User


class RegistrationForm(FlaskForm):
    first_name = StringField("First Name", validators=[DataRequired()])
    last_name = StringField("Last Name", validators=[DataRequired()])
    email = StringField("Registration Email", validators=[
                        DataRequired(), Email()])
    password = PasswordField("Registration Password", validators=[
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
