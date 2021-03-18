import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planet = () => {
	const { planetid } = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center">
			<div className="card m-auto " style={{ maxWidth: "1000px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src="https://www.definicionabc.com/wp-content/uploads/ciencia/Planeta-Jupiter.jpg"
							alt="..."
							width="300px"
							height="300px"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.planets[planetid].name}</h5>
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
						<p>{store.planets[planetid].name}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Climate</h5>
						<p>{store.planets[planetid].climate}</p>
					</div>

					<div className="col-sm text-danger">
						<h5>Population</h5>
						<p>{store.planets[planetid].population}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Orbital Period</h5>
						<p>{store.planets[planetid].orbital_period}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Rotation Period</h5>
						<p>{store.planets[planetid].rotation_period}</p>
					</div>
					<div className="col-sm text-danger">
						<h5>Diameter</h5>
						<p>{store.planets[planetid].diameter}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
