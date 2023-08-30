import express from "express"
import { v4 as uuid } from "uuid"

type Post = Record<string, any>

const app = express()

const posts = {} as Post

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/posts", (req, res) => {
  res.send(posts)
})

app.post("/posts", (req, res) => {
  try {
    const id = uuid()
    const { title }: Post = req.body
    posts[id] = {
      id,
      title,
    }

    res.status(201).send(posts[id])
  } catch (err) {
    res.status(400).send(err)
  }
})

app.listen(8080, () => {
  console.log("Listening on PORT 8080")
})
