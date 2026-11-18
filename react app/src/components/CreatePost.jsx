
import { useState } from 'react'

function CreatePost({ onAddPost }) {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!author.trim() || !content.trim()) {
      return
    }

    const newPost = {
      id: Date.now(),
      author: author.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString(),
    }

    onAddPost(newPost)
    setAuthor('')
    setContent('')
  }

  return (
    <section className="create-post">
      <h2>Share with the Community</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Your name</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="content">Your post</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="What's happening in your community?"
          rows="4"
          required
        />

        <button type="submit">Publish Post</button>
      </form>
    </section>
  )
}

export default CreatePost
