import React, {useState, useEffect} from 'react';

const App = () => {

    const [Films, setFilms] = useState([])
    const [People, setPeople] = useState([])

    const handleFilm = () => {
        console.log("placeholder")
    }
    
    const handlePeople = () => {
        console.log("placeholder")
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center">Not "jib-lee"</h1>
                <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark m-2" onClick={handleFilm}>Load Films</button>
                <button className="btn btn-outline-dark m-2" onClick={handlePeople}>Load People</button>
                </div>
            </div>
        </div>
    )
}

export default App;