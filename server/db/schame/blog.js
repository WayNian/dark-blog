const mongoose = require('mongoose');
const Schame = mongoose.Schema

const blogSchame = new Schame({
    title: String,
    content: String,
    createAt: {
        type: Date,
        default: new Date()
    },
    updateAt: Date,
    //阅读数
    readNum: Number,
    //标签 [java, JavaScript]
    label: Array
    //评论
    // comment: {
    //     type: Array,
    //     id: {

    //     }
    // }
}, {
    collection: 'blog'
})

mongoose.model('Blog', blogSchame)