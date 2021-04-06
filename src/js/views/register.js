import React, { useState, useEffect, useContext } from "react";

import { Link, useParams, Redirect } from "react-router-dom";

import { DropdownButton, Dropdown, ButtonGroup, Button, Form } from "react-bootstrap";

import { Context } from "../store/appContext";

export const Register = () => {
	const { charactersid } = useParams();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSummit = e => {
		e.preventDefault();
		let response = {
			email: email,
			password: password,
			username: username
		};

		fetch("https://3000-purple-bird-85pge3g8.ws-us03.gitpod.io/user", {
			method: "POST",
			body: JSON.stringify(response),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(error => console.log(error));
	};

	return (
		<div className="container-fluid text-center">
			<h1>Register</h1>
			<Form onSubmit={() => handleSummit(event)}>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>User Name</Form.Label>
					<Form.Control
						placeholder="User Name"
						onChange={event => setUsername(event.target.value)}
						value={username}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={event => setEmail(event.target.value)}
						value={email}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={event => setPassword(event.target.value)}
						value={password}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			{auth ? <Redirect to="/" /> : null}
		</div>
	);
};
