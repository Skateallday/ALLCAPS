import React from 'react';
import './App.css';

const lyrics = [
  "Which is only good for my son, When I'm in the hood, razors on tongue, Nowadays it's amazing raising young, Rule number one: Keep your fazers on stun",
  "I knew you was ----ing around Playing all innocent and ho'ing since the foundation",
  "I get no kick from champagne Mere alcohol doesn't thrill me at all So tell me why shouldn't it be true?"
];

const songName = [
  "Fazers",
  "Fancy Clown",
  "One Beer Left"
];


function genNew(event){

    var newNumber = 0;
// eslint-disable-next-line
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
<div className="container-fluid bg-4  ">    
  <form>  

    <div className="row" >        
    <div className="col-sm-2"></div>

      <div className="col-sm-8">
        <div className="form-group">

            <label for="exampleFormControlTextarea1">{songResults[number]}</label>

            <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1"
            value={searchResults[number]} 
            rows="3">
            </textarea>

          </div>
        </div>
        <div className="col-sm-2"></div>

      </div>

      <div className='row'>
      <div className="col-sm-3"></div>

        <div className="col-sm-3">
          <button 
          type="button" 
          className='btn btn-success' 
          onClick={() => {navigator.clipboard.writeText(searchResults[number])}}>Copy Text
          </button>
        </div>

        <div className="col-sm-3">
          <button
          type="submit" 
          className='btn btn-info' 
          onClick={genNew()}>Generate New 
          </button>
        </div>
        <div className="col-sm-3"></div>

      </div>
  
  </form>
</div>

  );
}

export default Second;
