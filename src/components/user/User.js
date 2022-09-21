import React, { useState } from "react";
import RightArrow from "../../assets/images/RIGHT_ARROW.png";
import DownArrow from "../../assets/images/DOWN_ARROW.png";
import "./User.css";

const User = ({
	name,
	username,
	email,
	address,
	phone,
	website,
	company,
	posts,
}) => {
	const [userExpanded, setUserExpanded] = useState(false);
	const [postsExpanded, setPostsExpanded] = useState(false);

	const changeVisibility = () => {
		setUserExpanded(!userExpanded);
	};

	const changePostVisibility = () => {
		setPostsExpanded(!postsExpanded);
	};

	return (
		<>
			<div className="userContainer">
				<div onClick={changeVisibility} style={{ marginRight: 20 }}>
					{userExpanded ? (
						<img
							src={RightArrow}
							width={15}
							height={15}
							style={{ alignSelf: "baseline-position" }}
							alt="collapse"
						/>
					) : (
						<img
							src={DownArrow}
							width={15}
							height={15}
							style={{ alignSelf: "center" }}
							alt="expand"
						/>
					)}
				</div>
				{userExpanded ? (
					<div>
						<div>
							<div className="userInfoRow">Name: {name}</div>
							<div className="userInfoRow">Username: {username}</div>
							<div className="userInfoRow">Email: {email}</div>
							<div className="userInfoRow">Address: {address}</div>
							<div className="userInfoRow">Phone: {phone}</div>
							<div className="userInfoRow">Website: {website}</div>
							<div className="userInfoRow">Company: {company}</div>
						</div>
						<div className="userPostsContainer">
							<div onClick={changePostVisibility} style={{ marginRight: 20 }}>
								{postsExpanded ? (
									<img src={RightArrow} width={10} height={10} alt="expand" />
								) : (
									<img src={DownArrow} width={10} height={10} alt="collapse" />
								)}
							</div>
							{postsExpanded ? (
								posts.map((post, key) => {
									return (
										<div className="postInfoRow">
											<div className="postTitle">Title : {post.title}</div>;
											<div className="postBody">Body : {post.body}</div>;
										</div>
									);
								})
							) : (
								<div>Posts quantity: {posts.length}</div>
							)}
						</div>
					</div>
				) : (
					<div onClick={changeVisibility} style={{ textAlign: "start" }}>
						Name: {name}
					</div>
				)}
			</div>
		</>
	);
};

export default User;
