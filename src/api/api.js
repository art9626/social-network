// import axios from "axios";

// const instance = axios.create({
//   baseURL: 'https://social-network.samuraijs.com/api/1.0',
//   withCredentials: true,
//   headers: {
//     "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
//   },
// });


// export const usersAPI = {
//   getFollow: (id) => {
//     return instance.post(`/follow/${id}`).then(res => res.data);
//   },


//   getUnfollow: (id) => {
//     return instance.delete(`/follow/${id}`).then(res => res.data);
//   },


//   getUsersData: (pageSize = 10, currentPage = 1) => {
//     return instance.get(`/users?count=${pageSize}&page=${currentPage}`).then(res => res.data);
//   },
// }


// export const profileAPI = {
//   getProfileData: (id) => {
//     return instance.get(`/profile/${id}`).then(res => res.data);
//   },

//   getStatus: (id) => {
//     return instance.get(`/profile/status/${id}`).then(res => res.data);
//   },

//   setStatus: (status) => {
//     return instance.put('/profile/status', { status }).then(res => res.data);
//   },

//   setProfilePhoto: (photo) => {
//     const formData = new FormData();
//     formData.append('image', photo);
//     return instance.put('/profile/photo', formData, {headers: {'Content-Type' : 'multipart/form-data'}}).then(res => res.data);
//   },

//   setProfileData: (data) => {
//     return instance.put('/profile', data).then(res => res.data);
//   },
// }


// export const authAPI = {
//   getAuthUserData: () => {
//     return instance.get('/auth/me').then(res => res.data);
//   },

//   login: (formData) => {
//     return instance.post('/auth/login', formData).then(res => res.data);
//   },

//   logout: () => {
//     return instance.post('/auth/logout');
//   },
// }






