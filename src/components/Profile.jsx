import React from 'react';

const Profile = () => {
  return ( 
    <div className='profile'>
      <img className='profile__img' alt='Theme' src='https://interessno.ru/wp-content/uploads/2020/01/p8jlfd5ot_m.jpg' />
      <div>
        ava + descr
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <ul>
          <li>
            Post 1
          </li>
          <li>
            Post 2
          </li>
          <li>
            Post 3
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Profile;