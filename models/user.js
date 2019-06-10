const mongoose = require('mongoose')
// 连接数据库
// 指定连接的数据库不需要存在，插入第一条数据之后就会自动创建  
mongoose.connect('mongodb://localhost/Students',{ useNewUrlParser: true })
mongoose.set('useFindAndModify', false);

var Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('User', userSchema)