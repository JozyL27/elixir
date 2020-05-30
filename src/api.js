import axios from 'axios';

export default axios.create({
	// baseURL: 'https://api-v3.igdb.com/'
	baseURL: 'http://localhost:8000/'
});