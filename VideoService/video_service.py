from kafka import KafkaProducer, KafkaConsumer
import json, time, sys
from functions import *
from pymongo import MongoClient
from bson.objectid import ObjectId
    
    
if __name__ == "__main__":
    BOOTSTRAP_SERVER = 'localhost:9092'
    print("kafka bootstrap server ", BOOTSTRAP_SERVER)

    uri = "mongodb+srv://se33:se33@se3.mrwhfdo.mongodb.net/?retryWrites=true&w=majority&appName=Se3"
    client = MongoClient(uri)
    client.admin.command('ping')
    print("connected to mongodb")
    db = client.seproject3
    video_collection = db.video

    consumer = KafkaConsumer('VideoServer', bootstrap_servers=BOOTSTRAP_SERVER)
    print("Starting Video Server")

    for msg in consumer:
        request = json.loads(msg.value.decode('utf-8'))
        request['args']['topic_id'] = ObjectId(request['args']['topic_id'])
        request['args']['user_id'] = ObjectId(request['args']['user_id'])
        
        # Process RPC request
        if(request['method'] == 'create_video'):
            create_video(request['args']['user_id'], request['args']['topic_id'], request['args']['name'], request['args']['url'], video_collection)
        elif(request['method'] == 'remove_video'):
            remove_video(request['args']['user_id'], request['args']['topic_id'], request['args']['name'], request['args']['url'], video_collection)
        elif(request['method'] == 'upvote_video'):
            upvote_video(request['args']['user_id'], request['args']['topic_id'], request['args']['name'], request['args']['url'], video_collection)
        elif(request['method'] == 'downvote_video'):
            downvote_video(request['args']['user_id'], request['args']['topic_id'], request['args']['name'], request['args']['url'], video_collection)
        else:
            print("Invalid method")
        



















# Test cases    
# if __name__ == "__main__":
#     BOOTSTRAP_SERVER = sys.argv[-1]
#     print(BOOTSTRAP_SERVER)
    
#     node_manager = NodeManager()
#     node_manager.create_node()
#     print(node_manager.nodes)
#     print(node_manager.nodes[1].is_active)
#     node_manager.nodes[1].activate_node()
#     print(node_manager.nodes[1].is_active) 
#     time.sleep(1)
    
#     health = node_manager.get_health(1)
#     print(health)
    
#     run_out = node_manager.run_process_on_node(1, 
#             {
#                 'name': 'install',
#                 'path': '../agent',
#                 'command': 'bash install.sh',
#             }
#     )
#     print(run_out)
    
#     output = node_manager.reset_node(1)
#     print(output, "\n")
    
    # output = node_manager.remove_node(1)
    # print(output)
   