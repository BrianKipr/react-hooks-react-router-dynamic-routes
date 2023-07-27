//import React from "react";
//import { Route } from "react-router-dom";
//import MoviesList from "./MoviesList";

// function MoviesPage({ movies }) {
//   return (
//     <div>
//       <MoviesList movies={movies} />
//     </div>
//   );
// }
// export default MoviesPage;


// import React from "react";

// function MoviesList({ movies }) {
//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li key={movie.id}>{movie.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default MoviesList;


import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MoviesShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />

      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
