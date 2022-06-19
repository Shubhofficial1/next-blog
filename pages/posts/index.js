import AllPosts from './all-posts'
import { getAllPosts } from '../../utils/posts-util'

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts,
    },
  }
}

export default AllPostsPage
