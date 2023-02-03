export const host = "http://chart-server-nu.vercel.app:5000";
export const connect = `${host}/api/auth/connect`;
export const setWhale = `${host}/api/auth/setWhale`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const setUserNameRoute = `${host}/api/auth/setUserName`;
export const allUsersRoute = `${host}/api/auth/allUsers/`;
export const logoutRoute = `${host}/api/auth/logout`;
export const recommendRoute = `${host}/api/message/recommend/`;
export const sendMessageRoute = `${host}/api/message/addmsg`;
export const removeMessageRoute = `${host}/api/message/removemsg/`;
export const getAllMessagesRoute = `${host}/api/message/getmsg`;
export const getUserRoute = `${host}/api/auth/getuser`;
export const isValidRoute = `${host}/api/auth/isValidName`;