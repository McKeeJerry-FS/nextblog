import PropTypes from 'prop-types'
import Link from 'next/link'

export function Post({ _id, title, author }) {
  return (
    <article>
      <h2>
        <Link href={`/posts/${_id}`}>{title}</Link>
      </h2>
      <em>
        Written by <strong>{author?.username || 'Unknown'}</strong>
      </em>
    </article>
  )
}

Post.propTypes = {
  _id: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  contents: PropTypes.string,
}
