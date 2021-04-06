import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<ButtonGroup aria-label="Basic example">
				<DropdownButton id="dropdown-basic-button" title={"Favorites"} className="m-1">
					{store.favlist.length > 0 ? (
						store.favlist.map((item, index) => {
							return (
								<Dropdown.Item key={index}>
									{item.name}{" "}
									<Button onClick={() => actions.favFunctionDelete(item.id)}>
										<i className="fas fa-trash-alt" />
									</Button>
								</Dropdown.Item>
							);
						})
					) : (
						<Dropdown.Item>Empty</Dropdown.Item>
					)}

					{}
				</DropdownButton>
				<Button variant="danger" className="m-1">
					{store.favlist.length}
				</Button>
			</ButtonGroup>
		</nav>
	);
};
