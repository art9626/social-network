import React from 'react';

const ProfileData = ({ userProfile, activeEditMode, isOwner }) => {
  return (
    <>
      <h2>{userProfile.fullName}</h2>
      <p>About me: {userProfile.aboutMe}</p>
      <p>Looking for a job: {userProfile.lookingForAJob ? 'Yes' : 'No'}</p>
      {
        userProfile.lookingForAJob &&
        <p>My skills: {userProfile.lookingForAJobDescription}</p>
      }
      <h3>Contacts</h3>
      <ul>
        {
          Object.keys(userProfile.contacts)
            .map(item => {
              return <Contact key={item} contactName={item} contactValue={userProfile.contacts[item]} />
            })
        }
      </ul>
      {
        isOwner && <button onClick={activeEditMode}>Edit</button>
      }
    </>
  );
}

const Contact = ({ contactName, contactValue }) => {
  return (
    <li>
      {contactName}: {contactValue}
    </li>
  );
}

export default ProfileData;