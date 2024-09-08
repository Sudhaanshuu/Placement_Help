from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

# Load the model
with open('job_role_predictor.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        resume = request.form['resume']
        
       
        prediction = model.predict([resume])[0]
        
        return render_template('index.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)
