import axios from "axios"
import { useEffect, useState } from "react"

const CommentList = ({ postId }: any) => {
  const [comments, setComments] = useState([])

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:8081/posts/${postId}/comments`)

    setComments(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderedComments =
    comments.length > 0 &&
    comments?.map((comment: any) => {
      return <li key={comment.id}>{comment.content}</li>
    })

  return <ul>{renderedComments}</ul>
}

export default CommentList
