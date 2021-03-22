import React from 'react';
import './App.css';

const lyrics = [
  "la la la",
  "I knew you was ----ing around Playing all innocent and ho'ing since the foundation",
  "I get no kick from champagne Mere alcohol doesn't thrill me at all So tell me why shouldn't it be true?"
];

const songName = [
  "la",
  "foundation",
  "champagne"
];


function genNew(event){

    var newNumber = 0;

    return newNumber =  Math.floor(Math.random() * 3);
  };  


function Second() {
  var number = genNew();
  const [searchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);  
  const [songTerm] = React.useState("");
  const [songResults, setsongResults] = React.useState([]);
  
  React.useEffect(() => {
    const results = lyrics.filter(lyric =>
      lyric.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  React.useEffect(() => {
    const results = songName.filter(song =>
      song.toLowerCase().includes(songTerm)
    );
    setsongResults(results);
  }, [songTerm]);

  return (
  
          <form>
            <div className="form-group">


              <label for="exampleFormControlTextarea1">{songResults[number]}</label>

              <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1"
                value={searchResults[number]} 
                rows="3">
              </textarea>

              </div>

            <button 
              type="button" 
              className='btn btn-info' 
              onClick={() => {navigator.clipboard.writeText(searchResults[number])}}>Copy Text
            </button>

            <button
              type="submit" 
              className='btn btn-danger' 
              onClick={genNew()}>Generate New 
            </button>

          </form>
  );
}

export default Second;
