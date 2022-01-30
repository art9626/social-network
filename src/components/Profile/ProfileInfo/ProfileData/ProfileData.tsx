import React from 'react';
import { ContactsType, UserProfileType } from '../../../../redux/profilePageReducer';

type PropsType = {
  userProfile: UserProfileType | null;
  activeEditMode: () => void;
  isOwner: boolean;
}

const ProfileData: React.FC<PropsType> = ({ userProfile, activeEditMode, isOwner }) => {
  return (
    userProfile &&
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
            .map((item: string) => {
              return <Contact key={item} contactName={item} contactValue={userProfile.contacts[item as keyof ContactsType]} />
            })
        }
      </ul>
      {
        isOwner && <button onClick={activeEditMode}>Edit</button>
      }
    </>
  );
}

type ContactPropsType = {
  contactName: string;
  contactValue: string;
}

const Contact: React.FC<ContactPropsType> = ({ contactName, contactValue }) => {
  return (
    <li>
      {contactName}: {contactValue}
    </li>
  );
}

export default ProfileData;