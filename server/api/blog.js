const Router = require('koa-router');
const mongoose = require('mongoose');

const router = new Router()

router.post('/write', async (ctx) => {
    ctx.body = '博客的相信信息'
})

router.post('/info', async (ctx) => {
    ctx.body = {
        code: 200,
        msg: '',
        data: {
            content: `<h2 id="vue-markdowneditor">Vue-markdownEditor</h2>
            <pre><code>axios.interceptors.response.use(
              <span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> {
                <span class="hljs-keyword">if</span> (response.status === <span class="hljs-number">200</span>) {
                  <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.resolve(response);
                } <span class="hljs-keyword">else</span> {
                  <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.reject(response);
                }
              },
              <span class="hljs-comment">// 服务器状态码不是200的情况    </span>
              error =&gt; {
                <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'error'</span>, error);
            
                <span class="hljs-comment">// if (error.response.status) {</span>
                <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.reject(error);
                <span class="hljs-comment">// }</span>
              }
            );
            </code></pre>`
        }
    }
})

module.exports = router
