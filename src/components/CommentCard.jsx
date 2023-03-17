import { Link } from 'react-router-dom'
import React from 'react'
import '../components/Card.css'

const CommentCard = ({ comments }) => {

  console.log(comments)
  return (
    <div className='Comments'>
      <div key={comments._id} className="card bg-light mb-3" style={{ width: "auto" }}>
        <div className='card-header p-2'>
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1679085088~exp=1679085688~hmac=a2a8c73309580b62b5036364d65a93e386cfe19eb118b1893c25d8fddbf0752b" alt="avatar" cn width="25" height="25" />
            
            {comments.user}
          
        </div>
        <div className='card-body'>
          <p className='card-text h5'>{comments.text}</p>
        </div>
      </div>
    </div>


  )
}

export default CommentCard