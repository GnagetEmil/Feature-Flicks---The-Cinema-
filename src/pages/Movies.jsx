// import necessary hooks from React
import { useState, useEffect } from 'react';

// import our Movie component
import Movie from '../Movie';

const Movies = () => {
    // A variable that will contain a list of movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Self-executing asyncronous anonomyous function
        (async () => {
            // Fetch all the movies from the REST api
            // and store them in the state variable movies
            setMovies(await (await (fetch('/api/movies'))).json());
        })();
    }, []);

    return (
        <div>
            {/* Loop through all movies and display each movie */}
            {movies.map(({ id, title, description }) => <Movie
                key={id}
                title={title}
                description={description}
            />)}
        </div>
    );

};

export default Movies;
