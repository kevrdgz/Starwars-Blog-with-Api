import React, { useContext, useState } from "react";
import "../../styles/home.scss";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Card } from "../component/card.js";
import { Cardplanet } from "../component/cardplanet.js";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);
	const [cargo2, setCargo2] = useState(false);

	setInterval(() => {
		store.personajes.length > 0 ? setCargo(true) : "";
		store.planets.length > 0 ? setCargo2(true) : "";
	}, 2000);

	return (
		<div className="text-center m-5">
			<h1 className="m-3 text-danger">Characters</h1>
			{cargo ? (
				<div className="cardsconteiner m-auto">
					{store.personajes.map((item, index) => {
						return (
							<div className="displaycards" key={index}>
								<Card
									name={item.name}
									gender={item.gender}
									haircolor={item.hair_color}
									eyecolor={item.eye_color}
									pos={index}
								/>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}

			<h1 className="m-5 text-danger">Planets</h1>

			{cargo2 ? (
				<div className="cardsconteiner m-auto">
					{store.planets.map((item2, index2) => {
						return (
							<div className="displaycards" key={index2}>
								<Cardplanet
									name={item2.name}
									population={item2.population}
									terrain={item2.terrain}
									pos2={index2}
								/>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}
		</div>
	);
};
