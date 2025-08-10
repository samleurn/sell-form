import express from 'express'

import { home } from './app/interface/interface'

const app = express()

app.use(home)

export { app }
