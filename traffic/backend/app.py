from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
import random
import traci
import os

app = Flask(__name__)

# Enable CORS
CORS(app)

# ---------------- DATABASE CONNECTION ----------------
conn = mysql.connector.connect(
    host="localhost",
    user="traffic_user",
    password="1234",
    database="traffic_db"
)

cursor = conn.cursor()

# ---------------- SUMO FUNCTION ----------------
def run_sumo():

    sumo_cmd = [
        "sumo",
        "-c",
        os.path.join("sumo", "katraj.sumocfg")
    ]

    traci.start(sumo_cmd)

    vehicle_count = 0

    for step in range(100):
        traci.simulationStep()
        vehicle_count = len(traci.vehicle.getIDList())

    traci.close()

    return vehicle_count

# ---------------- STORE TRAFFIC DATA ----------------
def store_data(count, level, signal):

    query = """
    INSERT INTO traffic_data (vehicle_count, traffic_level, signal_time)
    VALUES (%s, %s, %s)
    """

    cursor.execute(query, (count, level, signal))
    conn.commit()

# ---------------- HOME ROUTE ----------------
@app.route('/')
def home():
    return "Backend Running 🚀"

# ---------------- TRAFFIC API ----------------
@app.route('/traffic')
def traffic():

    count = random.randint(5, 30)

    if count > 20:
        level = "High"
        signal = 40
    else:
        level = "Low"
        signal = 20

    store_data(count, level, signal)

    return jsonify({
        "vehicle_count": count,
        "traffic_level": level,
        "signal_time": signal
    })

# ---------------- SUMO SIMULATION API ----------------
@app.route('/run-simulation')
def run_simulation():

    try:

        # TEMPORARY RANDOM DATA
        # Later replace with:
        # count = run_sumo()

        count = random.randint(10, 30)

        if count > 20:
            level = "High"
            signal = 40
        else:
            level = "Low"
            signal = 20

        return jsonify({
            "vehicle_count": count,
            "traffic_level": level,
            "signal_time": signal
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500

# ---------------- SIGNUP API ----------------
@app.route('/signup', methods=['POST'])
def signup():

    data = request.json

    name = data.get('name')
    email = data.get('email')
    mobile = data.get('mobile')
    password = data.get('password')

    try:

        query = """
        INSERT INTO users (username, phone, email, password)
        VALUES (%s, %s, %s, %s)
        """

        values = (name, mobile, email, password)

        cursor.execute(query, values)
        conn.commit()

        return jsonify({
            "message": "Signup successful"
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500

# ---------------- ADD VEHICLE API ----------------
@app.route('/add_vehicle', methods=['POST'])
def add_vehicle():

    data = request.json

    vehicle_number = data['vehicle_number']
    owner_id = data['owner_id']
    vehicle_type = data['vehicle_type']
    rto = data['rto_number']

    query = """
    INSERT INTO vehicles (vehicle_number, owner_id, vehicle_type, rto_number)
    VALUES (%s, %s, %s, %s)
    """

    cursor.execute(
        query,
        (vehicle_number, owner_id, vehicle_type, rto)
    )

    conn.commit()

    return jsonify({
        "message": "Vehicle added successfully"
    })

# ---------------- RUN SERVER ----------------
if __name__ == "__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )