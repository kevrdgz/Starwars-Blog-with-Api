import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planet = () => {
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
