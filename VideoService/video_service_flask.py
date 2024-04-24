from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.json_util import dumps
import functions

# Setup Flask app
app = Flask(__name__)


# Database setup
uri = "mongodb+srv://se33:se33@se3.mrwhfdo.mongodb.net/?retryWrites=true&w=majority&appName=Se3"
client = MongoClient(uri)
client.admin.command('ping')
print("connected to mongodb")

## getting the video collection
db = client.seproject3
video_coll = db.video



@app.route('/create_video', methods=['POST'])
def create_video_endpoint():
    data = request.json
    data = functions.convert_to_object_id(data)
    success = functions.create_video(data['user_id'], data['topic_id'], data['name'], data['url'], video_coll)
    if success:
        return jsonify({"success": True, "message": "Video created successfully"}), 200
    else:
        return jsonify({"success": False, "message": "Failed to create video"}), 500


# Remove a video
@app.route('/remove_video', methods=['POST'])
def remove_video():
    data = request.json
    data = functions.convert_to_object_id(data)
    success = functions.remove_video(data['user_id'], data['topic_id'], data['name'], data['url'], video_coll)
    if success:
        return jsonify({"success": True, "message": "Video removed successfully"}), 200
    else:
        return jsonify({"success": False, "message": "Failed to remove video"}), 500    


# Upvote a video
@app.route('/upvote_video', methods=['POST'])
def upvote_video():
    data = request.json
    data = functions.convert_to_object_id(data)
    success = functions.upvote_video(data['user_id'], data['topic_id'], data['name'], data['url'], video_coll)
    if success:
        return jsonify({"success": True, "message": "Video upvoted successfully"}), 200
    else:
        return jsonify({"success": False, "message": "Failed to upvote video"}), 500


# Downvote a video
@app.route('/downvote_video', methods=['POST'])
def downvote_video():
    data = request.json
    data = functions.convert_to_object_id(data)
    success = functions.downvote_video(data['user_id'], data['topic_id'], data['name'], data['url'], video_coll)
    if success:
        return jsonify({"success": True, "message": "Video downvoted successfully"}), 200
    else:
        return jsonify({"success": False, "message": "Failed to downvote video"}), 500



if __name__ == '__main__':
    app.run(debug=True)
