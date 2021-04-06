import React, { useState, useEffect, useContext } from "react";

import { Link, useParams, Redirect } from "react-router-dom";

import { DropdownButton, Dropdown, ButtonGroup, Button, Form } from "react-bootstrap";

import { Context } from "../store/appContext";

export const Login = () => {
	const { charactersid } = useParams();
	const { store, actions } = useContext(Context);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		const body = {
			username: username,
			password: password
		};

		fetch("https://3000-purple-bird-85pge3g8.ws-us03.gitpod.io/token", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
				actions.setFavList(data.list_fav);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid text-center">
			<h1>Login</h1>
			<Form onSubmit={() => handleSubmit(event)}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>User Name</Form.Label>
					<Form.Control placeholder="Enter User Name" onChange={event => setUsername(event.target.value)} />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={event => setPassword(event.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			{auth ? <Redirect to="/home" /> : null}
		</div>
	);
};
