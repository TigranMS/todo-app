import express from 'express'
import { people } from './data/people.js'

const PORT = 8080

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.json(people.getAll())
})

app.post('/add', (req, res) => {
  res.json(people.add(req.body))
})

app.post('/remove', (req, res) => {
  people.remove(req.body.id)
  res.json({message: 'done'})
})

app.post('/edit', (req, res) => {
  res.json(people.edit(req.body.id, req.body.data))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})