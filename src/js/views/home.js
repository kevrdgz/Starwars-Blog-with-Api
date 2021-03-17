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

	setInterval(() => {
		store.personajes.length > 0 ? setCargo(true) : "";
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
									name={store.personajes[index].name}
									gender={store.personajes[index].gender}
									haircolor={store.personajes[index].hair_color}
									eyecolor={store.personajes[index].eye_color}
								/>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}

			<h1 className="m-5 text-danger">Planets</h1>

			<div className="cardsconteiner m-auto">
				<Cardplanet />
				<Cardplanet />
				<Cardplanet />
				<Cardplanet />
				<Cardplanet />
			</div>
		</div>
	);
};
