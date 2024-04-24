import requests
import json
from bson.objectid import ObjectId

def test_create_video():
    url = 'http://127.0.0.1:5000/create_video'
    
    data = {
        "user_id": str(ObjectId()),
        "topic_id": str(ObjectId()),
        "name": "Sample Video",
        "url": "http://example.com/video"
    }
    
    response = requests.post(url, json=data)
    
    if response.status_code == 200:
        print("Test Passed: Video created successfully")
    else:
        print("Test Failed:", response.status_code, response.text)

    print(response.json())

if __name__ == "__main__":
    test_create_video()
