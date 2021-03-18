import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>

			<DropdownButton id="dropdown-basic-button" title={"Favorites" + " " + store.favlist.length}>
				{store.favlist.map((item, index) => {
					return (
						<Dropdown.Item key={index}>
							{item}{" "}
							<button onClick={() => actions.favFunctionDelete(index)}>
								<i className="fas fa-trash-alt" />
							</button>
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</nav>
	);
};
