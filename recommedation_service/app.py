from flask import Flask, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_caching import Cache
from flask import request
from bson import ObjectId
from bson import json_util
from classes import *
import datetime
import json
import requests


app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

uri = "mongodb+srv://Sudheer:sudheer@team3.n7ftxjm.mongodb.net/"
client = MongoClient(uri)
client.admin.command('ping')
print("connected to mongodb")

db = client.seproject3

topic1 = ObjectId()
topic2 = ObjectId()
user = ObjectId()

def insert_video(user, topic, video, url, upvotes, database):
    video = {
        "user": user,
        "topic": topic,
        "video": video,
        "url": url,
        "upvotes": upvotes,
        "upload_time": datetime.datetime.now(),
    }
    database.insert_one(video)
    return video

insert_video(user, topic1, "video1", "url1", 10, db.videos)
insert_video(user, topic1, "video2", "url2", 76, db.videos)
insert_video(user, topic1, "video3", "url3", 35, db.videos)
insert_video(user, topic1, "video4", "url4", 15, db.videos)
insert_video(user, topic1, "video5", "url5", 100, db.videos)
insert_video(user, topic2, "video6", "url6", 50, db.videos)

@app.route('/get_cache', methods=['GET'])
def fillcache(topic=None, strategy=None):
    if topic is None:
        topic = request.args.get('topic')
    if strategy is None:
        strategy = request.args.get('strategy')
    
    upvotes_strategy = UpvotesStrategy()
    upload_time_strategy = UploadTimeStrategy()

    if not topic or not strategy:
        return "Error: 'topic' and 'strategy' parameters are required.", 400

    video_manager = None
    if strategy == "upvotes":
        video_manager = VideoManager(upvotes_strategy)
        print("Retrieving videos by upvotes from cache...")
        print(topic)
    elif strategy == "upload_time":
        video_manager = VideoManager(upload_time_strategy)
        print("Retrieving videos by upload time from cache...")

    if video_manager:
        # Construct a unique cache key based on topic and strategy
        cache_key = f"{topic}_{strategy}"
        top_videos = cache.get(cache_key)

        if top_videos is None:
            top_videos = video_manager.get_top_videos(globals()[topic], db.videos)
            top_videos_list = list(top_videos)
            print(top_videos_list)
            cache.set(cache_key, top_videos_list, timeout=60)  # Set cache with timeout of 60 seconds
          
        top_videos = cache.get(cache_key)
        top_videos_list = list(top_videos)
        return json_util.dumps(top_videos_list)
    else:
        return "Error: Invalid strategy.", 400
    

@app.route('/get_recommendations/<topic>')
def get_recommendations(topic):
    response_upvotes = requests.get('http://localhost:5000/get_cache', params={'topic': topic, 'strategy': 'upvotes'})
    response_upload_time = requests.get('http://localhost:5000/get_cache', params={'topic': topic, 'strategy': 'upload_time'})
    top_videos_upvotes = response_upvotes.json()
    top_videos_upload_time = response_upload_time.json()
    unique_video_ids = []
    all_videos_list = []
    for video in top_videos_upvotes:
        video_id = video["_id"]
        if video_id not in unique_video_ids:
            all_videos_list.append(video)
            unique_video_ids.append(video_id)
    for video in top_videos_upload_time:
        video_id = video["_id"]
        if video_id not in unique_video_ids:
            all_videos_list.append(video)
            unique_video_ids.append(video_id)

    return json.dumps(all_videos_list, default=json_util.default)


if __name__ == "__main__":
    app.run(debug=True)
