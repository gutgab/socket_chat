from flask import Flask, render_template
from flask_socketio import SocketIO,send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
conexion = SocketIO(app)

@app.route('/')
def indef():
    return render_template('chatsoporte.html')

@conexion.on('message')
def handle_message(msg):
    print("mensaje: " + msg)

if __name__ == '__main__':
    conexion.run(app)