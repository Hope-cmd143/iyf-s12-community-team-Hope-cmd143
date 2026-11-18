
import { useState } from 'react'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import './App.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'CommunityHub',
      content: 'Welcome to our community! Share your ideas and connect with others.',
      date: new Date().toLocaleDateString(),
    },
  ])

  function handleAddPost(newPost) {
    setPosts((currentPosts) => [newPost, ...currentPosts])
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>CommunityHub</h1>
        <p>Connect, share, and grow together.</p>
      </header>

      <main className="main-content">
        <CreatePost onAddPost={handleAddPost} />
        <PostList posts={posts} />
      </main>

      <footer className="app-footer">
        <p>CommunityHub — Building stronger communities together.</p>
      </footer>
    </div>
  )
}

export default App
