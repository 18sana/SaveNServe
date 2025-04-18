import xgboost as xgb
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

model = xgb.Booster()
model.load_model("food_demand_model.json")

@app.route("/predict", methods=["POST"])
def predict():
    print("Received a request!")
    try:
        data = request.json

        # Check if data contains the required fields
        if not all(key in data for key in ['center_id', 'meal_id', 'checkout_price', 'base_price', 'emailer_for_promotion', 'homepage_featured', 'week', 'price_diff']):
            return jsonify({"error": "Missing required data"}), 400

        input_data = pd.DataFrame([{
            "center_id": data["center_id"],
            "meal_id": data["meal_id"],
            "checkout_price": data["checkout_price"],
            "base_price": data["base_price"],
            "emailer_for_promotion": data["emailer_for_promotion"],
            "homepage_featured": data["homepage_featured"],
            "week": data["week"],
            "price_diff": data["price_diff"]
        }])

        dmatrix = xgb.DMatrix(input_data, enable_categorical=False)
        prediction = model.predict(dmatrix)
        print(f"Prediction: {prediction}")
        return jsonify({"predicted_demand": int(prediction[0])})

    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__": 
    app.run(debug=True, host="0.0.0.0", port=8000)