import api from './api';


export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

export const setUser = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}
export const removeUser = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }