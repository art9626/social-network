import React from 'react';
import { ContactsType, UserProfileType } from '../../../../redux/profilePageReducer';

type PropsType = {
  userProfile: UserProfileType;
  activeEditMode: () => void;
  isOwner: boolean;
}

export const ProfileData: React.FC<PropsType> = ({ userProfile, activeEditMode, isOwner }) => {

  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = userProfile;

  return (
    <>
      <h2>{fullName}</h2>
      <p>About me: {aboutMe}</p>
      <p>Looking for a job: {lookingForAJob ? 'Yes' : 'No'}</p>
      {
        lookingForAJob &&
        <p>My skills: {lookingForAJobDescription}</p>
      }
      <h3>Contacts</h3>
      <ul>
        {
          Object.keys(contacts)
            .map((item: string) => {
              return <Contact key={item} contactName={item} contactValue={contacts[item as keyof ContactsType]} />
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