from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

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