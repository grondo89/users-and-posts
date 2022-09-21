import { getUsersAndPosts } from "./users-and-posts";

export class Letter {
	get usersAndPosts() {
		return getUsersAndPosts();
	}
}
