import styles from './postsGrid.module.css'
import PostItem from './post-item'
const PostsGrid = (props) => {
  const { posts } = props
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid
