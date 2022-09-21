import axios from "axios";

export const getAllPosts = () => {
	return axios.get(`https://jsonplaceholder.typicode.com/users/`);
};
