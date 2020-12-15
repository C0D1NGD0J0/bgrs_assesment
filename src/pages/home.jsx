import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../actions/characters";

const Home = (props) => {
	const dispatch = useDispatch();
	const [characterNames, setCharacterNames] = useState([]);
	const swData = useSelector((state) => state.characters);

	useEffect(() => {
		dispatch(getCharacters());
		return () => {
			return null;
		};
	}, []);

	useEffect(() =>{
		if(swData){
			const names = getCharactersNames(swData.characters);
			setCharacterNames(names);
		};
	}, []);

	const getCharactersNames = (characters) =>{
		let names = [];

		for(let item of characters){
			names.push(item.name)
		};

		return names;
	};

	return (
		<div className="container">
			<ul>
				{characterNames && characterNames.map((item) =>{
					console.log(item)
					return <li key={item}>{item}</li>
				})}
			</ul>
		</div>
	);
};

export default Home;