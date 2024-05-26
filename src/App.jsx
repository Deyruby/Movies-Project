import React from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { UserProvider } from "./contexts/UserContext";
import { MoviesProvider } from "./contexts/MoviesContext";


function App() {
  return (
    <>
      <div>
        <UserProvider>
          <MoviesProvider>
            <Navbar />
            <MovieList />
          </MoviesProvider>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
