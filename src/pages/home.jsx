import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getCharacterMovies } from "../actions/characters";
import MoviesList from "../components/moviesList";
import CharactersList from "../components/characterList";

const Home = (props) => {
	const dispatch = useDispatch();
	const [movies, setMovies] = useState([]);
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


	if(swData && swData.loading){
		return <Spin size="large"/>
	};

	return (
		<div className="container">
			<h3>List of Characters</h3>
			<CharactersList characters={characters} />

			<h3>List of movies</h3>
			<MoviesList movies={movies}/>

			<h4>Name/Movie Year: {movies.length && <span> {`${movies[movies.length-1].title} /  ${movies[movies.length-1].release_date}`}</span>}</h4>
		</div>
	);
};

export default Home;