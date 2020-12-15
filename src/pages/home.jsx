import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../actions/characters";

const Home = (props) => {
	const dispatch = useDispatch();
	const swData = useSelector((state) => state.characters);

	useEffect(() => {
		dispatch(getCharacters());
		return () => {
			return null;
		};
	}, []);

	console.log(swData)
	return (
		<div className="container">
			<h1>Hello World</h1>
		</div>
	);
};

export default Home;