from pymongo import MongoClient
from functions import *
from bson.objectid import ObjectId

# Replace the uri string with your MongoDB deployment's connection string.
uri = "mongodb+srv://se33:se33@se3.mrwhfdo.mongodb.net/?retryWrites=true&w=majority&appName=Se3"
client = MongoClient(uri)
client.admin.command('ping')
print("connected to mongodb")


db = client.seproject3
topic = ObjectId()
user = ObjectId()
create_video(user, topic, "video1", "url1", db.video)
upvote_video(user, topic, "video1", "url1", db.video)
upvote_video(user, topic, "video1", "url1", db.video)
upvote_video(user, topic, "video1", "url1", db.video)
upvote_video(user, topic, "video1", "url1", db.video)
upvote_video(user, topic, "video1", "url1", db.video)

downvote_video(user, topic, "video1", "url1", db.video)
downvote_video(user, topic, "video1", "url1", db.video)
remove_video(user, topic, "video1", "url1", db.video)

# close client
client.close()
