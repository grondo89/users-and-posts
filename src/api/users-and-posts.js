import axios from "axios";
import { remove } from "lodash";

export const getUsersAndPosts = async () => {
	try {
		const userRawData = (
			await axios.get(`https://jsonplaceholder.typicode.com/users/`)
		).data;

		const postsRawData = (
			await axios.get(`https://jsonplaceholder.typicode.com/posts`)
		).data;

		const usersWithPosts = userRawData.map((user, i) => {
			const { address } = user;

			const filteredPosts = remove(postsRawData, {
				userId: Number(user.id),
			});

			return {
				...user,
				posts: filteredPosts,
				company: user.company.name,
				address: address.street
					.concat(" ", address.suite)
					.concat(" ", address.city),
			};
		});

		return usersWithPosts;
	} catch (error) {
		return {
			error: true,
			status: error.response.status,
			message: error.message,
			name: error.name,
		};
	}
};
