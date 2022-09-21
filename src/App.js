import React, { useState, useEffect } from "react";
import { Letter } from "./api/api";
import User from "./components/user/User";
import "./App.css";

function App() {
	const api = new Letter();
	const [data, setData] = useState([]);

	const fetchInformation = () => {
		api.usersAndPosts.then((res) => {
			if (res.error) {
				alert(
					`Error ${res.status}: There has been a problem with your request`
				);
				return;
			}

			setData(res);
		});
	};

	useEffect(() => {
		fetchInformation();
	}, []);

	return (
		<div className="App">
			<div className="buttonContainer">
				<div className="getInfoButton" onClick={fetchInformation}>
					GET USERS AND POSTS
				</div>
			</div>

			{data &&
				data.map((user, key) => {
					return (
						<div style={{ marginBottom: 15 }}>
							<User
								name={user.name}
								username={user.username}
								email={user.email}
								address={user.address}
								phone={user.phone}
								website={user.website}
								company={user.company}
								posts={user.posts}
								key={key}
							/>
						</div>
					);
				})}
		</div>
	);
}

export default App;
