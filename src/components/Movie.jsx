import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Movie = ({ movie }) => {
  const {user,toggleFavoriteMovieToUser}= useContext(UserContext)
  

  const imgStyles ={
    height: '260px',
    objectFit: 'cover',
    
  }

  const isFavorite= user?.favoritesMovies?.includes(movie.id)

  return (
    <>
      <div className="card">
        <img src={movie.imageUrl} alt={movie.tittle} 
        className="card-img-top"
        style={imgStyles}
        />
    <div className="card-body">
      <h4>{movie.tittle}</h4>
      {user?.id &&
      <button className={`btn ${isFavorite ? 'btn-success' :  'btn-outline-primary'} `} onClick={()=>toggleFavoriteMovieToUser(movie.id)}> 
      Favoritos
    </button>
      }
      
    </div>
      </div>
    </>
  );
};

export default Movie;
