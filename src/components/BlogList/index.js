import BlogItem from '../BlogItem'
// Write your JS code here
const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="ul-can">
      {blogsList.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
