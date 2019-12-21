import axios from 'axios';

const axiosQuote = axios.create({
    baseURL: 'https://quotes-js5.firebaseio.com/'
});

export default axiosQuote;