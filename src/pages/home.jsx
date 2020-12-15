import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getCharacterMovies } from "../actions/characters";

const Home = (props) => {
	const dispatch = useDispatch();
	const [movies, setMovies] = useState([]);
	const [selectedCharacted, setSelectedCharacter] = useState("Select Character");
	const [characters, setCharacters] = useState([]);
	const swData = useSelector((state) => state.characters);

	useEffect(() => {
		dispatch(getCharacters());
		return () => {
			return null;
		};
	}, []);

	useEffect(() =>{
		if(swData){
			setCharacters(swData.characters);
		};
	}, [swData && swData.characters]);

	useEffect(() => {
		if(swData.movies.length){
			setMovies(swData.movies);
		};
		return () => {
			return null;
		};
	}, [swData && swData.movies]);

	console.log(selectedCharacted)
	return (
		<div className="container">
			<h3>List of Characters</h3>
			<select onChange={(e) => {
				setSelectedCharacter(characters[e.target.value])
				dispatch(getCharacterMovies(characters[e.target.value]))
			}} value={selectedCharacted}>
				<option disabled={true} value="Select Character">Select Character</option>
				
				{characters && characters.map((item, index) =>{
					return (
						<option 
							key={item.name} 
							value={index}
						>
							{item.name}
						</option>
					);
				})}
			</select>

			<h3>List of movies</h3>
			<ul>
				{movies.length ? movies.map((item) =>{
					return(
					<li 
						key={item.title}
					>
						{item.title}
					</li>)
				}) : <h4>Please select a character</h4>}
			</ul>
		</div>
	);
};

export default Home;