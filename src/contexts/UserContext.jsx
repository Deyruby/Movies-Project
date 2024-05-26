import { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
  id: 2,
  name: "Noor",
  favoritesMovies: [1, 2],
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoriteMovieToUser = (movieId) => {
    const isFavorite = user?.favoritesMovies?.includes(movieId);
    const favoritesMovies = isFavorite
    ? user.favoritesMovies.filter((favMovieId)=> favMovieId !== movieId)
    : [... user.favoritesMovies, movieId]   

    setUser({
      ...user,
      favoritesMovies,
    });
  };
  const data = { user, login, logout, toggleFavoriteMovieToUser };
  return (
    <>
      <UserContext.Provider value={data}>{children}</UserContext.Provider>
    </>
  );
};

export { UserProvider };
export default UserContext;
