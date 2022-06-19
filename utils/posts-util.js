import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

export function getPostData(postIdentifier) {
  // removes the file extension
  const postSlug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(postDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }
  return postData
}

export function getPostsFiles() {
  return fs.readdirSync(postDirectory)
}

export function getAllPosts() {
  const postFiles = getPostsFiles()
  const allPostData = postFiles.map((postFile) => {
    return getPostData(postFile)
  })

  const sortedPosts = allPostData.sort((PostA, PostB) =>
    PostA.date > PostB.date ? -1 : 1
  )
  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter((post) => post.isFeatured)
  return featuredPosts
}
