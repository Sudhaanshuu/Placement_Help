from flask import Flask, request, render_template
import pickle
import numpy as np

app = Flask(__name__)

# Load the newly trained model
with open('rf_model_reduced.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# The selected features after feature selection
selected_features = [
    'Percentage in Software Engineering',
    'Percentage in Communication skills',
    'Percentage in Mathematics',
    'Percentage in Computer Networks',
    'Percentage in Electronics Subjects',
    'Percentage in Computer Architecture',
    'Percentage in Algorithms',
    'Acedamic percentage in Operating Systems',
    'Percentage in Programming Concepts',
    'public speaking points'
]

@app.route('/')
def home():
    return render_template('index.html', features=selected_features)

@app.route('/predict', methods=['POST'])
def predict():
    # Extract and convert the input values to the appropriate type
    features = []
    for feature in selected_features:
        value = float(request.form[feature])
        if feature == 'public speaking points' and (value < 0 or value > 10):
            return render_template('index.html', features=selected_features, 
                                   prediction_text="Invalid value for 'public speaking points'. Please enter a value between 0 and 10.")
        features.append(value)
    
    final_features = [np.array(features)]
    prediction = model.predict(final_features)
    
    # Get the job role based on the prediction
    predicted_job_role = prediction[0]

    return render_template('index.html', features=selected_features,
                           prediction_text=f'Predicted Job Role: {predicted_job_role}')

if __name__ == "__main__":
    app.run(debug=True)
