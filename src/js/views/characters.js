import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = () => {
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
							<h5 className="card-title">Card title</h5>
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
					<div className="col-sm text-danger">One of three columns</div>
					<div className="col-sm text-danger">One of three columns</div>
					<div className="col-sm text-danger">One of three columns</div>
					<div className="col-sm text-danger">One of three columns</div>
					<div className="col-sm text-danger">One of three columns</div>
					<div className="col-sm text-danger">One of three columns</div>
				</div>
			</div>
		</div>
	);
};
