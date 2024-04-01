from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = "09b8049e0722d8956b107b38fa2eface"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

# Make sure "from flask_app import routes" remains below this comment, or a circular import occurs
from flask_app import routes
