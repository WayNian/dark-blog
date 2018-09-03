const Router = require('koa-router');
const mongoose = require('mongoose');

const router = new Router()

router.post('/write', async (ctx) => {
    const Blog = mongoose.model('Blog')
    let newBlog = new Blog(ctx.request.body)
    await newBlog.save().then(() => {
        ctx.body = {
            code: 0,
            msg: '',
            data: {}
        }
    }).catch(error => {
        ctx.body = {
            code: 0,
            msg: '提交失败',
            data: {}
        }
    })
})

router.post('/list', async (ctx) => {
    const Blog = mongoose.model('Blog')
    await Blog.find().exec()
        .then((res) => {
            ctx.body = {
                code: 0,
                msg: '',
                data: {
                    blogList: res
                }
            }
        })
        .catch(() => {
            ctx.body = {
                code: 0,
                msg: '获取数据失败',
                data: {}
            }
        })

})

router.post('/info', async (ctx) => {
    ctx.body = {
        code: 200,
        msg: '',
        data: {
            content: '## Vue-markdownEditor\n```\naxios.interceptors.response.use(\n  response => {\n    if (response.status === 200) {\n      return Promise.resolve(response);\n    } else {\n      return Promise.reject(response);\n    }\n  },\n  // 服务器状态码不是200的情况    \n  error => {\n    console.log(\'error\', error);\n\n    // if (error.response.status) {\n    return Promise.reject(error);\n    // }\n  }\n);\n```'
        }
    }
})

module.exports = router