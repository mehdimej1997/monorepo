import axios from "axios"
import { useState } from "react"

const CommentCreate = ({ postId }: any) => {
  const [content, setContent] = useState("")

  const onSubmit = async (event: any) => {
    event.preventDefault()

    await axios.post(`http://localhost:8081/posts/${postId}/comments`, {
      content,
    })

    setContent("")
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
