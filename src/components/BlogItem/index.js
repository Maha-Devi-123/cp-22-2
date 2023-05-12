// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="ul-can">
      <div className="name-time-can">
        <h1 className="user-name">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="user-prof">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
