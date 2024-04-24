const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    topic: {
        type: String,
        required: true
    }
});

module.exports = Topic = mongoose.model('Admin', TopicSchema);