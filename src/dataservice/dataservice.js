import axios from 'axios';

export const reverseGeoCoding = (obj) => {

    let response =  axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${obj.lat}&lon=${obj.lng}&format=json`)

    return response
}

export const postAPI = (obj) => {
    let response = axios.post(`http://localhost:4000/locations`,obj);
    return response
}

export const getAPI = () => {
    let response = axios.get(`http://localhost:4000/locations`);
    return response
}