import { Spin, Layout, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getCharacterMovies } from "../actions/characters";
import MoviesList from "../components/moviesList";
import CharactersList from "../components/characterList";
const { Content } = Layout;

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

	return (
		<Layout>
			<Content style={{height: '100vh'}}>
				<Row>
					<Col span={12} offset={6}>
						<div className="container">
							{swData && !swData.loading ?
								<>
									<div className="container__header">
										<h3 className="title">Select a Character</h3>
										<CharactersList characters={characters} />
									</div>

									<h3 className="title">List of movies</h3>
									<MoviesList movies={movies}/>

									<h4 className="most-recent">Name/Movie Year: {movies.length ? <span> {`${movies[movies.length-1].title} /  ${movies[movies.length-1].release_date}`}</span> : null}</h4>
								</> : <Spin size="large"/>
							}
						</div>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
};

export default Home;