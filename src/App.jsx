import React, { useState, useEffect } from 'react';

const App = () => {

    const [Films, setFilms] = useState([])
    const [FilmsLoaded, setFilmsLoaded] = useState(false)
    const [People, setPeople] = useState([])
    const [PeopleLoaded, setPeopleLoaded] = useState(false)

    useEffect(() => {

        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => {
                return res.json();
            })
            .then(allFilms => {
                setFilms(allFilms);
            })

        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => {
                return res.json();
            })
            .then(allPeople => {
                setPeople(allPeople);
            })

    }, [])

    const handleFilm = () => {
        setPeopleLoaded(false)
        setFilmsLoaded(true)
    }

    const handlePeople = () => {
        setFilmsLoaded(false)
        setPeopleLoaded(true)
    }

    if (FilmsLoaded === false && PeopleLoaded === false) {
        return (
            <div className="container">
            <h1 className="text-center m-3">Not "Jib-ley"</h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark m-2" onClick={handleFilm}>Load Films</button>
                <button className="btn btn-outline-dark m-2" onClick={handlePeople}>Load People</button>
            </div>
            </div>
        )
    } else if (FilmsLoaded === true && PeopleLoaded === false) {
        return (
            <div className="container">
                <h1 className="text-center m-3">Not "Jib-ley"</h1>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark m-2" onClick={handleFilm}>Load Films</button>
                    <button className="btn btn-outline-dark m-2" onClick={handlePeople}>Load People</button>
                </div>
                <div className="row justify-content-center mt-5" id="film-container">
                    {Films.map(film => (
                        <div className="col-md-6" key={`film-card-${film.id}`} >
                            <div className="card mt-2 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">{`${film.title}`}</h3>
                                    <p className="card-text">{`${film.description}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)
            </div>
        )
    }


    if (PeopleLoaded === false && FilmsLoaded === false) {
        return (
            <div className="container">
            <h1 className="text-center m-3">Not "Jib-ley"</h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark m-2" onClick={handleFilm}>Load Films</button>
                <button className="btn btn-outline-dark m-2" onClick={handlePeople}>Load People</button>
            </div>
            </div>
        )
    } else if (PeopleLoaded === true && FilmsLoaded === false) {
        return (
            <div className="container">
                <h1 className="text-center m-3">Not "Jib-ley"</h1>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark m-2" onClick={handleFilm}>Load Films</button>
                    <button className="btn btn-outline-dark m-2" onClick={handlePeople}>Load People</button>
                </div>
                <div className="row justify-content-center mt-5" id="people-container">
                    {People.map(person => (
                        <div className="col-md-6" key={`person-card-${person.id}`} >
                            <div className="card mt-2 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">{`${person.name}`}</h3>
                                    <p className="card-text">{`${person.age}`}</p>
                                    <p className="card-text">{`${person.gender}`}</p>
                                    <p className="card-text d-inline">{`The film this person was in was `}</p>
                                    <a href={`${person.films[0]}`} className="d-inline" target="_blank">this</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    {/* return (
        <div>
            <div className="container">
                <h1 className="text-center">Not "jib-lee"</h1>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark m-2" onClick={handleFilm}>Load Films</button>
                    <button className="btn btn-outline-dark m-2" onClick={handlePeople}>Load People</button>
                </div>
                <div className="row justify-content-center mt-5" id="film-container">
                    {Films.map(film => (
                        <div className="col-md-6" key={`film-card-${film.id}`} >
                            <div className="card mt-2 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">{`${film.title}`}</h3>
                                    <p className="card-text">{`${film.description}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center mt-5" id="people-container">
                    {People.map(person => (
                        <div className="col-md-6" key={`person-card-${person.id}`} >
                            <div className="card mt-2 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">{`${person.name}`}</h3>
                                    <p className="card-text">{`${person.age}`}</p>
                                    <p className="card-text">{`${person.gender}`}</p>
                                    <p className="card-text d-inline">{`The film this person was in was `}</p>
                                    <a href={`${person.films[0]}`} className="d-inline" target="_blank">this</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )*/}
}


export default App;