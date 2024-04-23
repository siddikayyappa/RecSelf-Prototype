from pymongo import MongoClient

# Replace the uri string with your MongoDB deployment's connection string.
uri = "mongodb+srv://se33:se33@se3.mrwhfdo.mongodb.net/?retryWrites=true&w=majority&appName=Se3"
client = MongoClient(uri)
client.admin.command('ping')
print("connected to mongodb")
client.close()
