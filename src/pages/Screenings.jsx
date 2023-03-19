import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Screening from '../components/Screening';


const Screenings = () => {
    const [screeningsData, setScreeningsData] = useState([]);
    const [screenings, setScreenings] = useState([]);

    useEffect(() => {
        (async () => {
            const screeningsData = await (await fetch('/api/screenings/?sort=time')).json();
            setScreeningsData(screeningsData);
            setScreenings(screeningsData);
        })();
    }, []);

    const [movieTitles, setMovieTitles] = useState({});
    const [auditoriumNames, setAuditoriumNames] = useState({});
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const moviesData = await (await fetch('/api/movies')).json();
            const auditoriumsData = await (await fetch('/api/auditoriums')).json();
            setMovieTitles(moviesData.reduce((obj, movie) => {
                obj[movie.id] = movie.title;
                return obj;
            }, {}));
            setAuditoriumNames(auditoriumsData.reduce((obj, auditorium) => {
                obj[auditorium.id] = auditorium.name;
                return obj;
            }, {}));
            setCategories(moviesData.reduce((obj, movie) => {
                obj[movie.id] = movie.description.categories;
                return obj;
            }, {}));
        }
        fetchData();
    }, []);


    const handleCategorySelect = (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === "all") {
            setScreenings(screeningsData);
        } else {
            const filteredScreenings = screeningsData.filter(
                (screening) => categories[screening.movieId]?.includes(selectedCategory)
            );
            setScreenings(filteredScreenings);
        }
    }

    return (
        <Container className="text-center">
            <div className="d-flex justify-content-center my-4">
                <select
                    className="form-select"
                    onChange={handleCategorySelect}
                >
                    <option value="all">All categories</option>
                    {Object.values(categories).flatMap((cats) => cats).filter((cat, i, arr) => arr.indexOf(cat) === i).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <Row className="justify-content-center align-items-center mt-4" style={{ height: '100%' }}>
                {screenings.map(({ id, time, movieId, auditoriumId }) => (
                    <Col key={id} className="my-4">
                        <Screening
                            id={id}
                            time={time}
                            movieId={movieId}
                            movieTitle={movieTitles[movieId]}
                            auditoriumId={auditoriumId}
                            auditoriumName={auditoriumNames[auditoriumId]}
                            category={categories[movieId]}
                        />
                    </Col>
                ))}
            </Row>
        </Container>




    );
};

export default Screenings;