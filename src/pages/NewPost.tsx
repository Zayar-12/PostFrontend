
import { Form } from "react-router"
import { useAuth } from "../context/AuthContext"
const NewPost = () => {
  
  return (
    <div>New Post

      <Form method='post'>
        <input type="text" name='title'/><br />
        
        <textarea  name='body' /><br />
        <button type='submit'>Create New Post</button>
      </Form>
    </div>
  )
}

export default NewPost