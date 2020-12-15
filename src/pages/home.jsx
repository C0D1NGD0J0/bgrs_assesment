import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getCharacterMovies } from "../actions/characters";

const Home = (props) => {
	const dispatch = useDispatch();
	const [characters, setCharacters] = useState([]);
	const [movies, setMovies] = useState([]);
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
	}, []);

	useEffect(() => {
		if(swData.movies.length){
			setMovies(swData.movies);
		};
		return () => {
			return null;
		};
	}, [swData.movies]);

	return (
		<div className="container">
			{swData.loading ? <h2>Loading...</h2> : null}

			<h3>List of Characters</h3>
			{characters.length ?
				<ul>
					{characters.map((item) =>{
						return(
						<li 
							key={item.name}
							onClick={() => dispatch(getCharacterMovies(item))}
						>
							{item.name}
						</li>)
					})}
				</ul> : <h4>Loading...1</h4>
			}

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