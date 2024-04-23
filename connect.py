from pymongo import MongoClient

# Replace the uri string with your MongoDB deployment's connection string.
uri = "mongodb+srv://se33:se33@se3.mrwhfdo.mongodb.net/?retryWrites=true&w=majority&appName=Se3"
client = MongoClient(uri)
client.admin.command('ping')
print("connected to mongodb")



# # database and collection code goes here
# print(client)
# print(client.list_database_names())
# db = client.sample_guides
# print(db)

# print(db.list_collection_names())
# coll = db.planets
# print(coll)

# print(coll.count_documents({}))
# cursor = coll.find({"hasRings": True})
# print(len(list(cursor)))

# for doc in cursor:
#     print(doc)

# db = client.seproject3
# print(client.list_database_names())

# col = db.users
# col.insert_one({"name": "Alice", "email": "Alice@gmail.com"})



client.close()
