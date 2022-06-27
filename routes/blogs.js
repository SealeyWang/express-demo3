const {Router} = require("express");

const router = Router()


router.get('/', (req, res) => {
    res.send('list')
})

router.get('/:id', (req, res) => {
    res.send('a blog')
})


router.get('/:id/edit', (req, res) => {
    res.send('edit a blog')
})
module.exports = router
