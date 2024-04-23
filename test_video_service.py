from kafka import KafkaProducer
import json, time
from pymongo import MongoClient
from bson.objectid import ObjectId

topic1 = 'topic1'
user1 = 'user1'

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
        producer.send("VideoServer", json.dumps(request).encode('utf-8'))
    producer.flush()