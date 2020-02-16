var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db2', { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) return console.log('connection ERR:' + err);
        return console.log('connection success');
    });

var Schema = mongoose.Schema

var studentSchema = Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: Number,
            enum: [0, 1],
            default: 0
        },
        hobby: {
            type: String,
        },
    }
)
module.exports = mongoose.model('Student', studentSchema)
