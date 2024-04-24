import requests
import json
from bson.objectid import ObjectId

def test_create_video(base_url, user_id, topic_id, name, link):
    url =  base_url + '/create_video'
    data = {
        "user_id": str(user_id),
        "topic_id": str(topic_id),
        "name": name,
        "url": link
    }
    response = requests.post(url, json=data)
    if response.status_code == 200:
        print("Test Passed: Video created successfully")
    else:
        print("Test Failed:", response.status_code, response.text)
    print(response.json())


def test_remove_video(base_url, user_id, topic_id, name, link):
    url = base_url + '/remove_video'
    data = {
        "user_id": str(user_id),
        "topic_id": str(topic_id),
        "name": name,
        "url": link
    }
    response = requests.post(url, json=data)
    if response.status_code == 200:
        print("Test Passed: Video removed successfully")
    else:
        print("Test Failed:", response.status_code, response.text)
    print(response.json())


def test_upvote_video(base_url, user_id, topic_id, name, link):
    url = base_url + '/upvote_video'
    data = {
        "user_id": str(user_id),
        "topic_id": str(topic_id),
        "name": name,
        "url": link
    }
    response = requests.post(url, json=data)
    if response.status_code == 200:
        print("Test Passed: Video upvoted successfully")
    else:
        print("Test Failed:", response.status_code, response.text)
    print(response.json())


def test_downvote_video(base_url, user_id, topic_id, name, link):
    url = base_url + '/downvote_video'
    data = {
        "user_id": str(user_id),
        "topic_id": str(topic_id),
        "name": name,
        "url": link
    }
    response = requests.post(url, json=data)
    if response.status_code == 200:
        print("Test Passed: Video downvoted successfully")
    else:
        print("Test Failed:", response.status_code, response.text)
    print(response.json())



if __name__ == "__main__":
    base_url = 'http://127.0.0.1:5000'
    user1, topic1 = ObjectId(), ObjectId()
    print("user1", user1, "topic1", topic1)
    test_create_video(base_url, user1, topic1, "video1", "url1")
    test_upvote_video(base_url, user1, topic1, "video1", "url1")
    test_upvote_video(base_url, user1, topic1, "video1", "url1")
    
    user2, topic2 = ObjectId(), ObjectId()
    print("user2", user2, "topic2", topic2)
    test_create_video(base_url, user2, topic2, "video2", "url2")
    test_downvote_video(base_url, user2, topic2, "video2", "url2")
    test_downvote_video(base_url, user2, topic2, "video2", "url2")
    
    user3, topic3 = ObjectId(), ObjectId()
    print("user3", user3, "topic3", topic3)
    test_create_video(base_url, user3, topic3, "video3", "url3")
    test_remove_video(base_url, user3, topic3, "video3", "url3")