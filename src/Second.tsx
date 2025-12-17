import { useState } from "react";
import "./App.css";

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

function getRandomIndex() {
  return Math.floor(Math.random() * lyrics.length);
}

function Second() {
  const [index, setIndex] = useState<number>(getRandomIndex());

  const handleGenerateNew = () => {
    setIndex(getRandomIndex());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(lyrics[index]);
  };

  return (
    <div className="container-fluid bg-4">
      <form>
        <div className="row">
          <div className="col-sm-2" />

          <div className="col-sm-8">
            <div className="form-group">
              <label htmlFor="lyricsTextarea">
                {songName[index]}
              </label>

              <textarea
                className="form-control"
                id="lyricsTextarea"
                value={lyrics[index]}
                rows={3}
                readOnly
              />
            </div>
          </div>

          <div className="col-sm-2" />
        </div>

        <div className="row">
          <div className="col-sm-3" />

          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleCopy}
            >
              Copy Text
            </button>
          </div>

          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn-info"
              onClick={handleGenerateNew}
            >
              Generate New
            </button>
          </div>

          <div className="col-sm-3" />
        </div>
      </form>
    </div>
  );
}

export default Second;
