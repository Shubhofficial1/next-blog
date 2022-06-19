import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featuredPosts'
import { getFeaturedPosts } from '../utils/posts-util'

export default function Home(props) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
