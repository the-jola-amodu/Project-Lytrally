from flask import Flask, render_template
from whitenoise import WhiteNoise

app = Flask(__name__)
app.wsgi_app = WhiteNoise(app.wsgi_app, root="/static", prefix="/static/style")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/signin')
def signin():
    return render_template('signin.html')

@app.route('/features')
def features():
    return render_template('features.html')

@app.route('/account')
def account():
    return render_template('account.html')

if __name__ == "__main__":
    app.run(debug=True)
