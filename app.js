const express = require('express')
const app = express();

const fn1 = require('./fn1')

app.locals.title = 'my title'
app.set('myTitle', 'myTitle')

// 设置路径太小写敏感
app.set('case sensitive routing', true)

// 设置渲染的视图在哪个目录,
app.set('views', 'views')
//设置模板引擎
app.set('view engine', 'ejs')

// app.get('/test', (req, res, next) => {
//     res.render('test', {pageBody: app.locals.title})
// })

// app.use(fn1)

const blog = require('./routes/blogs')
app.use('/blog', blog);


app.post('/test', (req, res, next) => {
    res.send('post test')
})

app.put('/test', (req, res, next) => {
    res.send('put test')

})

app.delete('/test', (req, res, next) => {
    res.send('delete test')

})

// 如果发现请求的body是一个json，就会把json解析成对象 放到request.body 中，
// 这样就没有on 'data' 事件了
app.use(express.json());
app.use(express.urlencoded())

// 设置静态服务器路径
app.use(express.static('yyy'))

// app.use((request, response, next) =>{
//     console.log(request.body);
//     response.send('hi')
//     next()
// });

app.listen(3000, () => {
    console.log('监听3000')
})

app.get('/users/:id', (request, res, next) =>{
    console.log(request.param('name'))
    console.log(request.param('id'))

    // 设置headers
    res.set('token', 'xxxx');
    // append 设置headers  可以追加一个一模一样的
    res.append('token', 'xxxx2');

    res.format({
        'text/plain': function () {
            res.send('hey')
        },

        'text/html': function () {
            res.send('<p>hey</p>')
        },

        'application/json': function () {
            res.send({ message: 'hey' })
        },

        default: function () {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable')
        }
    })

})

