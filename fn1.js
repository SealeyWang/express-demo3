const fn1 = (request, response, next) =>{
    response.render('test', {pageBody: request.app.locals.title})
    // app.get set 也能拿到但是不推荐
    // response.render('test', {pageBody: request.app.get('myTitle')})
};

module.exports = fn1
