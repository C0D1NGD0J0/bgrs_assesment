import React from 'react'

export default function MoviesList(props) {
  const { movies } = props;
  
  return (
    <ul className="character-movies">
				{movies.length ? movies.map((item) =>{
					
					return(
          <li
          key={item.title}
          className="character-movies__item"
					>
						{item.title}
					</li>)
				}) : <h4>Please select a character</h4>}
			</ul>
  )
};