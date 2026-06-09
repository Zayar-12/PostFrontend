
import { Form } from "react-router"
import { useAuth } from "../context/AuthContext"
const NewPost = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
        
        
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Create New Post</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Share your thoughts with the world</p>
        </div>

     
        <Form method='post' className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
            <input 
              type="text" 
              name='title' 
              placeholder="Give your post a catchy title..."
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content</label>
            <textarea 
              name='body' 
              rows={8}
              placeholder="Write your story here..."
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              required 
            />
          </div>

          <button 
            type='submit'
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition active:scale-[0.98]"
          >
            Publish Post
          </button>
        </Form>
      </div>
    </div>
  )
}

export default NewPost