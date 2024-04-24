import json
from bson.objectid import ObjectId



class JSONEncoder(json.JSONEncoder):
    """ Extend JSONEncoder class to handle ObjectId types in MongoDB documents. """
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)





def create_video(user_id, topic_id, name, url, video_coll):
    video_document = {
        "user_id": user_id,
        "topic_id": topic_id,
        "name": name,
        "url": url,
        "votes": 0
    }
    try:
        video_coll.insert_one(video_document)
        print("Video created successfully", video_document)
        return True
    except Exception as e:
        print(e)
        return False


def remove_video(user_id, topic_id, name, url, video_coll):
    filter = {
        "user_id": user_id,
        "topic_id": topic_id,
        "name": name,
        "url": url
    }
    try:
        video_coll.delete_one(filter) 
        print("Video removed successfully", filter)
        return True
    except:
        return False
    

def upvote_video(user_id, topic_id, name, url, video_coll):
    filter = {
        "user_id": user_id,
        "topic_id": topic_id,
        "name": name,
        "url": url
    }
    try:
        video_coll.update_one(filter, {"$inc": {"votes": 1}})
        print("Video upvoted successfully", filter)
        return True
    except:
        return False


def downvote_video(user_id, topic_id, name, url, video_coll):
    filter = {
        "user_id": user_id,
        "topic_id": topic_id,
        "name": name,
        "url": url
    }
    try:
        video_coll.update_one(filter, {"$inc": {"votes": -1}})
        print("Video downvoted successfully", filter)
        return True
    except:
        return False