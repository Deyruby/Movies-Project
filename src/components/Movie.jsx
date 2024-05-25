import React from "react";

const Movie = ({ movie }) => {

  const imgStyles ={
    height: '260px',
    objectFit: 'cover',
    
  }

  const isFavorite= true;

  return (
    <>
      <div className="card">
        <img src={movie.imageUrl} alt={movie.tittle} 
        className="card-img-top"
        style={imgStyles}
        />
    <div className="card-body">
      <h4>{movie.ttitle}</h4>
      <button className={`btn ${isFavorite ? 'btn-success' :  'btn-outline-primary'} `}> 
        Favoritos
      </button>
    </div>
      </div>
    </>
  );
};

export default Movie;
