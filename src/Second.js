import React from 'react';
import './App.css';


class Second extends React.Component {

  state ={
    lyrics: [ 
              {id: 1, songName: "? (Questions)", songLyrics: "He cleans his metal mask with gasoline, they after him Last seen pulling chicks like a fiend pull a fast one Can't put shit past him Got niggas on his own team mad enough to blast him"},
              {id: 2, songName: "Fancy Clown", songLyrics: "I knew you was ----ing around Playing all innocent and ho'ing since the foundation Don't make me have to pound his tin crown face in"},
              {id: 3, songName: "One Beer", songLyrics: "I get no kick from champagne Mere alcohol doesn't thrill me at all So tell me why shouldn't it be true?"}
            ]
      };

render() {
  const { lyrics } = this.state; 

  return (
  <div class="jumbotron">
          <div class="container text-center">
    <h3>{"<"}ALLCAPS{">"} WHEN YOU SPELL THE MAN NAME {"<"}/ALLCAPS{">"}</h3>

    <p>The MF DOOM placeholder text generator</p>

      {lyrics.map(({id, songName, songLyrics}) => (

 

      <form>


        <div class="form-group">
          <label for="exampleFormControlTextarea1" key={id}>{songName}</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" key={id}  placeholder= {songLyrics} rows="3"></textarea>
        </div>
        <button type="submit" class='btn btn-info'>Copy Text </button>
        <button type="submit" class='btn btn-danger'>Generate New </button>
      </form>
          ))}
    </div>

    
  </div>
  );
}

}
export default Second;
