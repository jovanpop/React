import React from 'react';
import PropTypes from 'prop-types';

export function Movies(props){
    console.log(props);
return(
    <div>
        <table border="5" width="100%">
            <thead>
                <tr>
                    <th><h3>Name</h3></th>
                    <th><h3>Date</h3></th>
                    <th><h3>Genre</h3></th>
                    <th><h3>Plot</h3></th>
                    <th><h3>Imdb Link</h3></th>
                    <th><h3>Image</h3></th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map((movie,i)=>{
                    return(
                        <tr key={i} align="center">
                            <td width="10%" ><h2>{movie.name}</h2></td>
                            <td width="5%"><h3>{movie.date}</h3></td>
                            <td width="5%"><h3>{movie.genre}</h3></td>
                            <td align="left">{movie.plot}</td>
                            <td width="5%"><h3>{movie.link}</h3></td>
                            <td>{movie.img}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)}

Movies.propTypes={
    movies: PropTypes.array.isRequired
}