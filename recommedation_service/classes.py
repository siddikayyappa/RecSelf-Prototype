class VideoStrategyInterface:
    def get_videos(self, topic, database):
        raise NotImplementedError()

class UpvotesStrategy(VideoStrategyInterface):
    def get_videos(self, topic, database):
        return database.find({"topic": topic}).sort("upvotes", -1)

class UploadTimeStrategy(VideoStrategyInterface):
    def get_videos(self, topic, database):
        return database.find({"topic": topic}).sort("upload_time", -1)
    

class VideoManager:
    def __init__(self, strategy):
        self.strategy = strategy

    def get_top_videos(self, topic, database):
        return self.strategy.get_videos(topic, database)