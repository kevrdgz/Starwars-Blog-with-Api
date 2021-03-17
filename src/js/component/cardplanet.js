import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export const Cardplanet = () => {
	const [Name, setName] = useState();
	const [Population, setPopulation] = useState();
	const [Terrain, setTerrain] = useState();

	useEffect(() => {
		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch("https://www.swapi.tech/api/planets/1", requestOptions)
			.then(response => response.json())
			.then(
				result => (
					setName(result.result.properties.name),
					setPopulation(result.result.properties.population),
					setTerrain(result.result.properties.terrain)
				)
			)
			.catch(error => console.log("error", error));
	}, []);
	return (
		<div className="card displaycards p-1 m-2" style={{ width: "18rem" }}>
			<img
				src="https://img.europapress.es/fotoweb/fotonoticia_20150210180922_1200.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{Name}</h5>
				<p className="card-text">Population: {Population}</p>
				<p className="card-text">Terrain: {Terrain}</p>

				<div className="btn-group" role="group" aria-label="Basic mixed styles example">
					<Link to="/planet">
						<button type="button" className="btn btn-primary">
							Learn more!
						</button>
					</Link>
					<button type="button" className="btn btn-warning">
						♥
					</button>
				</div>
			</div>
		</div>
	);
};
