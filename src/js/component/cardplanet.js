import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Cardplanet = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card displaycards p-1 m-2" style={{ width: "18rem" }}>
			<img
				src="https://img.europapress.es/fotoweb/fotonoticia_20150210180922_1200.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Population: {props.population} </p>
				<p className="card-text">Terrain: {props.terrain} </p>

				<div className="btn-group" role="group" aria-label="Basic mixed styles example">
					<Link to={"/planet/" + props.pos2}>
						<button type="button" className="btn btn-primary">
							Learn more!
						</button>
					</Link>
					<button type="button" className="btn btn-warning" onClick={() => actions.favFunction(props.name)}>
						♥
					</button>
				</div>
			</div>
		</div>
	);
};

Cardplanet.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	pos2: PropTypes.number
};
