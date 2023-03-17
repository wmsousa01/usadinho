import { Link } from 'react-router-dom'
import React from 'react'
import '../components/Card.css'

const CommentCard = ({ comments }) => {

    console.log(comments)
  return (
    <div className='Comments'>
        <div key={comments._id} className="card bg-light mb-3" style={{width: "18rem"}}>
            <div className='card-header'>{ comments.user }</div>
              <div className='card-body'>
                <p className='card-text h5'>{ comments.text }</p>
            </div>
        </div>
    </div>

  )
}

export default CommentCard