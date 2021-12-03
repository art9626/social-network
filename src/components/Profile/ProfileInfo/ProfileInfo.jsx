import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return ( 
    <div>
      <img className={classes.img} alt='Theme' src='https://interessno.ru/wp-content/uploads/2020/01/p8jlfd5ot_m.jpg' />
      <div className={classes.profileDescription}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo;