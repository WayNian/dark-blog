const mongoose =require('mongoose');
const Schame = mongoose.Schema

const blogSchame = new Schame({
    title: {
        type: String
    },
    content: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date
    },
    //阅读数
    readNum: {
        type: Number,
    },
    //评论
    // comment: {
    //     type: Array,
    //     id: {
        
    //     }
    // }
},{
    collection: 'blog'
})

mongoose.model('Blog', blogSchame)