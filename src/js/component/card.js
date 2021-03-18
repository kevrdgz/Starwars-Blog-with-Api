import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card displaycards p-1 m-2" style={{ width: "18rem" }}>
			<img
				src="https://eloutput.com/app/uploads-eloutput.com/2019/12/baby-yoda-2.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Gender: {props.gender} </p>
				<p className="card-text">Hair Color: {props.haircolor}</p>
				<p className="card-text">Eye-Color: {props.eyecolor}</p>
				<div className="btn-group" role="group" aria-label="Basic mixed styles example">
					<Link to={"/characters/" + props.pos}>
						<button type="button" className="btn btn-primary m-1">
							Learn more!
						</button>
					</Link>
					<button
						type="button"
						className="btn btn-warning m-1"
						onClick={() => actions.favFunction(props.name)}>
						♥
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	haircolor: PropTypes.string,
	eyecolor: PropTypes.string,
	pos: PropTypes.number
};
