import express from 'express'

import { home, about } from './app/interface/interface.js'

const app = express()

app.use(home)
app.use(about)

export { app }
