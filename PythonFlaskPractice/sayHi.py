from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def sayHi():
    name = request.args.get("name", "Tom")
    return f'Hello, {name}!'

# $ env FLASK_APP=sayHi.py flask run
# * Serving Flask app "hello"
# * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)