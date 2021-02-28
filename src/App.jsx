import React, { useState, useEffect } from 'react';

const App = () => {

    let filmDisplay = []

    const [Films, setFilms] = useState([])
    const [People, setPeople] = useState([])

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
       Films.map(film => (
            <div className="col-md-6" key={`film-card-${film.id}`} >
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{`${film.title}`}</h3>
                        <p className="card-text">{`${film.description}`}</p>
                    </div>
                </div>
            </div>
        ))
    }

    const handlePeople = () => {
        People.map(person => (
            <div className="col-md-6" key={`person-card-${person.id}`} >
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{`${person.name}`}</h3>
                        <p className="card-text">{`${person.age}`}</p>
                        <p className="card-text">{`${person.gender}`}</p>
                        <p className="card-text">{`${person.films[0]}`}</p>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center">Not "jib-lee"</h1>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark m-2" onClick={handleFilm}>Load Films</button>
                    <button className="btn btn-outline-dark m-2" onClick={handlePeople}>Load People</button>
                </div>
                <div className="row justify-content-center mt-5" id="film-container">
                    
                </div>
                <div className="row justify-content-center mt-5" id="people-container">
                    
                </div>
            </div>
        </div>
    )
}

export default App;