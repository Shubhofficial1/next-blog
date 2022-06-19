import styles from './all-posts.module.css'
import PostGrid from '../../components/posts/posts-grid'

const AllPosts = (props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  )
}

export default AllPosts
