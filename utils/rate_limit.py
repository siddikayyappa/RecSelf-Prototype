from flask import Flask, request, jsonify
from datetime import datetime, timedelta

app = Flask(__name__)

# Define rate limiting parameters
TOKEN_BUCKET_CAPACITY = 100  # Maximum tokens in the bucket
TOKEN_REFILL_RATE = 1  # Tokens added per second
LAST_REQUEST_TIME = datetime.now(datetime.UTC)
TOKEN_BUCKET = TOKEN_BUCKET_CAPACITY

# Rate limiting middleware
@app.before_request
def rate_limiting():
    global LAST_REQUEST_TIME, TOKEN_BUCKET
    
    # Refill the token bucket
    now = datetime.now(datetime.UTC)
    time_diff = (now - LAST_REQUEST_TIME).total_seconds()
    tokens_to_add = time_diff * TOKEN_REFILL_RATE
    TOKEN_BUCKET = min(TOKEN_BUCKET + tokens_to_add, TOKEN_BUCKET_CAPACITY)
    LAST_REQUEST_TIME = now
    
    # Check if there are enough tokens
    if TOKEN_BUCKET < 1:
        return jsonify({"error": "Rate limit exceeded"}), 429
    
    # Consume a token
    TOKEN_BUCKET -= 1
