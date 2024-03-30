from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo


class RegistrationForm(FlaskForm):
    email = StringField("Registration Email", validators=[
                        DataRequired(), Email()])
    password = PasswordField("Registration Password", validators=[
                             DataRequired(), Length(min=5)])
    confirm_password = PasswordField("Confirm Password", validators=[
                                     DataRequired(), EqualTo("password")])
    policy_agreement = BooleanField(
        "I Agree with privacy and policy", validators=[DataRequired()])
    submit_to_register = SubmitField("Register!")


class LoginForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[
                             DataRequired(), Length(min=5)])
    remember_me = BooleanField("Remember Me", validators=[DataRequired()])
    submit_to_login = SubmitField("Sign in")
