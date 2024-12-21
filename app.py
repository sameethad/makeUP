from flask import Flask, render_template, request, jsonify
from models import SkinProfile
from utils.makeup_suggestions import get_suggestions

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    profile = SkinProfile(
        skin_type=data['skinType'],
        undertone=data['undertone'],
        sensitivity=data['sensitivity'],
        texture=data['texture'],
        concerns=data['concerns']
    )
    suggestions = get_suggestions(profile)
    return jsonify(suggestions)

if __name__ == '__main__':
    app.run(debug=True)