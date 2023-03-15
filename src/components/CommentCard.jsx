import { Link } from 'react-router-dom'

const CommentCard = ({comment}) => {
    return (
        <div className='col-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ comment.user }</h5>
                    <p className="card-text">{comment.text}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard