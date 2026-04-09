import PropTypes from 'prop-types'

export function Post({ _id, title, author }) {
    return (
        <article>
            <h2>{title}</h2>
            <em>
                Written by <strong>{author.username}</strong>
            </em>
        </article>
    )
}

Post.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        username: PropTypes.string.isRequired,
    }).isRequired,
    contents: PropTypes.string,
}