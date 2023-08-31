import express from "express"
import cors from "cors"
import { v4 as uuid } from "uuid"

type Comment = Record<string, any>

const app = express()

const commentsByPostId = {} as Comment

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: "*" }))

app.get("/posts/:id/comments", (req, res) => {
  return res.status(201).send(commentsByPostId[req.params.id])
})
app.post("/posts/:id/comments", (req, res) => {
  const commentId = uuid()
  const { content } = req.body
  const comments = commentsByPostId[req.params.id]

  if (comments) {
    commentsByPostId[req.params.id].push({ id: commentId, content })
  } else {
    Object.assign(commentsByPostId, { [req.params.id]: [{ id: commentId, content }] })
  }

  return res.status(201).send(comments)
})

app.listen(8081, () => {
  console.log("Listening on PORT 8081")
})
