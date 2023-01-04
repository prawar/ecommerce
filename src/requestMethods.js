import axios from 'axios';

const BASE_URL = "https://mundras-backend.onrender.com/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODBiZWRmYTQ1MjMwYTRiMWViOWE3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzU4ODQ2OCwiZXhwIjoxNjUzODQ3NjY4fQ.ZE9XhHq-rGu2ojoKAep3HwHdG7QvEUQLkOAEN4pjzO4";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})