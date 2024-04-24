from kafka import KafkaProducer
import json, time
from pymongo import MongoClient
from bson.objectid import ObjectId
import functions


topic1 = ObjectId()
user1 = ObjectId()

requests = [
# {
#     'method': 'create_video',
#     'args': {
#         'user_id': user1,
#         'topic_id': topic1,
#         'name': 'video1',
#         'url': 'vido1.url.com',
#     }
# },
# {
#     'method': 'upvote_video',
#     'args': {
#         'user_id': user1,
#         'topic_id': topic1,
#         'name': 'video1',
#         'url': 'vido1.url.com',
#     }
# },
# {
#     'method': 'downvote_video',
#     'args': {
#         'user_id': user1,
#         'topic_id': topic1,
#         'name': 'video1',
#         'url': 'vido1.url.com',
#     }
# },
# {
#     'method': 'remove_video',
#     'args': {
#         'user_id': user1,
#         'topic_id': topic1,
#         'name': 'video1',
#         'url': 'vido1.url.com',
#     }
# },
]


if __name__ == "__main__":
    producer = KafkaProducer(bootstrap_servers='localhost:9092')
    for request in requests:
        request['timestamp'] = time.time()
        producer.send("VideoServer", json.dumps(request, cls=functions.JSONEncoder).encode('utf-8'))
    producer.flush()