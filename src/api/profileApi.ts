import { ContactsType, PhotosType, UserProfileType } from "../redux/profilePageReducer";
import { instance, OperationResultType } from "./indexApi";




export const profileAPI = {
  getProfileData: (id: number | null) => {
    return instance.get<UserProfileType>(`/profile/${id}`).then(res => { editDataContacts(res.data); return res.data });
  },

  getStatus: (id: number) => {
    return instance.get<string>(`/profile/status/${id}`).then(res => res.data);
  },

  setStatus: (status: string) => {
    return instance.put<OperationResultType>('/profile/status', { status }).then(res => res.data);
  },

  setProfilePhoto: (photo: File) => {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put<OperationResultType<{ photos: PhotosType }>>('/profile/photo', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => res.data);
  },

  setProfileData: (data: UserProfileType) => {
    return instance.put<OperationResultType>('/profile', data).then(res => res.data);
  },
}

const editDataContacts = (data: UserProfileType) => {
  const { aboutMe, contacts, lookingForAJobDescription } = data;

  if (aboutMe === null) {
    data.aboutMe = '';
  }

  if (lookingForAJobDescription === null) {
    data.lookingForAJobDescription = '';
  }

  Object.keys(contacts).map((item: string) => {
    if (contacts[item as keyof ContactsType] === null) {
      return contacts[item as keyof ContactsType] = '';
    }
    return contacts[item as keyof ContactsType];
  })
};