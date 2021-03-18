import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = () => {
	const { charactersid } = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center">
			<div className="card m-auto " style={{ maxWidth: "1000px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src="https://i0.wp.com/www.jovenescatolicos.es/wp-content/uploads/2019/02/yo-soy-tu-padre-y-lo-sabes-26923.jpg?resize=696%2C696&ssl=1"
							alt="..."
							width="300px"
							height="300px"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.personajes[charactersid].name}</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container p-4">
				<hr className="bg-danger" />
				<div className="row ">
					<div className="col-sm text-danger">
						<h5>Name</h5>
						<p>{store.personajes[charactersid].name}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Birth Year</h5>
						<p>{store.personajes[charactersid].birth_year}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Gender</h5>
						<p>{store.personajes[charactersid].gender}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Height</h5>
						<p>{store.personajes[charactersid].height}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Skin Color</h5>
						<p>{store.personajes[charactersid].skin_color}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Eye Color</h5>
						<p>{store.personajes[charactersid].eye_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
