
function PostList({ posts }) {
  return (
    <section className="post-list">
      <h2>Community Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : (
        posts.map((post) => (
          <article className="post-card" key={post.id}>
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <small>{post.date}</small>
          </article>
        ))
      )}
    </section>
  )
}

export default PostList
