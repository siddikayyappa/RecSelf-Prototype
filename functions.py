import json


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
        print("Video created successfully", json.dumps(video_document, indent=2))
        return True
    except:
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
        print("Video removed successfully", json.dumps(filter, indent=2))
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
        print("Video upvoted successfully", json.dumps(filter, indent=2))
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
        print("Video downvoted successfully", json.dumps(filter, indent=2))
        return True
    except:
        return False