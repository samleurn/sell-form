import { Router } from "express"

const router = Router()

router.get('/about', (req, res, next) => {
    res.send('This is a simple project')
})

export default router