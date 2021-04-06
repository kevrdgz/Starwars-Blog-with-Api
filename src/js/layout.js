import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters.js";
import { Planet } from "./views/planet.js";
import { Navbar } from "./component/navbar.js";
import { Login } from "./views/login.js";
import { Register } from "./views/register.js";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/characters/:charactersid">
							<Characters />
						</Route>
						<Route exact path="/planet/:planetid">
							<Planet />
						</Route>
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
