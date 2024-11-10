import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css'

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=55')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <div>
        <h1>Dragon Ball Characters</h1>
        {loading ? (
          <p>Loading characters...</p>
        ) : (
          <div className="container">
            <div className="row">
              {characters.map((character) => (
                <div key={character.id} className="col-6 col-md-4 mb-4 d-flex justify-content-center">
                  <Card style={{ width: '10rem', height: 'auto' }} >
                    <Card.Img variant="top" src={character.image} alt={character.name} className="card-image" />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
