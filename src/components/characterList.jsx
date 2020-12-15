import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getCharacterMovies } from "../actions/characters";

export default function CharacterList(props) {
	const { characters } = props;
	const dispatch = useDispatch();
	const [selectedCharacted, setSelectedCharacter] = useState("Select Character");
	
	const handleChange = (e) =>{
		setSelectedCharacter(e.target.value)
		dispatch(getCharacterMovies(characters[e.target.value]))
	};

	return (
		<select onChange={handleChange} value={selectedCharacted}>
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
	)
};