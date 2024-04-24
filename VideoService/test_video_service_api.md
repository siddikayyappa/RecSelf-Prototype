## Create Video
### request
```
{
    'method': 'create_video',
    'timestamp': 'time.time()'
    'args': {
        'user_id': 'user_id',
        'topic_id': 'topic_id',
        'name': 'video_name',
        'url': 'video_url',
    }
}
```
### response
```
No response (handle failure) [notification]
```

## remove video 
### request
```
{
    'method': 'remove_video',
    'timestamp': 'time.time()',
    'args': {
        'user_id': 'user_id',
        'topic_id': 'topic_id',
        'name': 'video_name',
        'url': 'video_url',
    }
}
```
### response
```
No response
```

## upvote
### request
```
{
    'method': 'upvote_video',
    'timestamp': 'time.time()',
    'args': {
        'user_id': 'user_id',
        'topic_id': 'topic_id',
        'name': 'video_name',
        'url': 'video_url',
    }
}
```
### response
```
No response
```

## health
### request
```
{
    'method': 'downvote_video',
    'timestamp': 'time.time()',
    'args': {
        'user_id': 'user_id',
        'topic_id': 'topic_id',
        'name': 'video_name',
        'url': 'video_url',
    }
}
```
### response
```
No response
```