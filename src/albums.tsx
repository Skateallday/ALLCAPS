import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

import Doomsday from "./Doomsday/tracklist";
import TakeMeToYourLeader from "./TakeMeToYourLeader/tracklist";
import VaudevilleVillain from "./vaudevilleVillain/tracklist";
import MmFood from "./mmfood/tracklist";
import BornLikeThis from "./BornLikeThis/tracklist";
import Madvillainy from "./Madvillainy/tracklist";
import TheMouseAndTheMask from "./TheMouseAndTheMask/tracklist";
import KeyToTheKuffs from "./KeyToTheKuffs/tracklist";
import NehruvianDoom from "./NehruvianDoom/tracklist";
import CzarfaceMeetsMetalFace from "./CzarfaceMeetsMetalFace/tracklist";

type AlbumKey =
  | "doomsday"
  | "tmtyl"
  | "vv"
  | "mmfood"
  | "bornlikethis"
  | "madvillainy"
  | "mouseandmask"
  | "keytokuffs"
  | "nehruviandoom"
  | "czarface";
  
type AlbumDetailProps = {
  title: string;
  year: number;
  children: React.ReactNode;
};

function AlbumDetail({ title, year, children }: AlbumDetailProps) {
  return (
    <div className="container-fluid bg-4">
      <h3>{title}</h3>
      <p>
        <b>{year}</b>
      </p>
      {children}
    </div>
  );
}

type AlbumTileProps = {
  title: string;
  year: number;
  onClick: () => void;
};

function AlbumTile({ title, year, onClick }: AlbumTileProps) {
  return (
    <div className="col-sm-4 hoverEffect" onClick={onClick}>
      <h5>{title}</h5>
      <p>
        <b>{year}</b>
      </p>
    </div>
  );
}

type AlbumGridProps = {
  onSelect: (album: AlbumKey) => void;
};

function AlbumGrid({ onSelect }: AlbumGridProps) {
  return (
    <div className="container-fluid bg-4 text-center">
      <h3>Albums</h3>

      <div className="row">
        <AlbumTile title="Operation: Doomsday" year={1999} onClick={() => onSelect("doomsday")} />
        <AlbumTile title="Take Me to Your Leader" year={2003} onClick={() => onSelect("tmtyl")} />
        <AlbumTile title="Vaudeville Villain" year={2003} onClick={() => onSelect("vv")} />
        <AlbumTile title="Mm..Food" year={2004} onClick={() => onSelect("mmfood")} />
        <AlbumTile title="Born Like This" year={2009} onClick={() => onSelect("bornlikethis")} />
        <AlbumTile title="Madvillainy" year={2004} onClick={() => onSelect("madvillainy")} />
        <AlbumTile title="The Mouse and the Mask" year={2005} onClick={() => onSelect("mouseandmask")} />
        <AlbumTile title="Key to the Kuffs" year={2012} onClick={() => onSelect("keytokuffs")} />
        <AlbumTile title="NehruvianDoom" year={2014} onClick={() => onSelect("nehruviandoom")} />
        <AlbumTile title="Czarface Meets Metal Face" year={2018} onClick={() => onSelect("czarface")} />
      </div>
    </div>
  );
}

export default function Album() {
  const [activeAlbum, setActiveAlbum] = useState<AlbumKey | null>(null);

  useEffect(() => {
    if (activeAlbum) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeAlbum]);

  return (
    <div>
      {activeAlbum === "doomsday" && (
        <AlbumDetail title="Operation: Doomsday" year={1999}>
          <Doomsday />
        </AlbumDetail>
      )}

      {activeAlbum === "tmtyl" && (
        <AlbumDetail title="Take Me to Your Leader" year={2003}>
          <TakeMeToYourLeader />
        </AlbumDetail>
      )}

      {activeAlbum === "vv" && (
        <AlbumDetail title="Vaudeville Villain" year={2003}>
          <VaudevilleVillain />
        </AlbumDetail>
      )}

      {activeAlbum === "mmfood" && (
        <AlbumDetail title="Mm..Food" year={2004}>
          <MmFood />
        </AlbumDetail>
      )}

      {activeAlbum === "bornlikethis" && (
        <AlbumDetail title="Born Like This" year={2009}>
          <BornLikeThis />
        </AlbumDetail>
      )}

      {activeAlbum === "madvillainy" && (
        <AlbumDetail title="Madvillainy" year={2004}>
          <Madvillainy />
        </AlbumDetail>
      )}

      {activeAlbum === "mouseandmask" && (
        <AlbumDetail title="The Mouse and the Mask" year={2005}>
          <TheMouseAndTheMask />
        </AlbumDetail>
      )}

      {activeAlbum === "keytokuffs" && (
        <AlbumDetail title="Key to the Kuffs" year={2012}>
          <KeyToTheKuffs />
        </AlbumDetail>
      )}

      {activeAlbum === "nehruviandoom" && (
        <AlbumDetail title="NehruvianDoom" year={2014}>
          <NehruvianDoom />
        </AlbumDetail>
      )}

      {activeAlbum === "czarface" && (
        <AlbumDetail title="Czarface Meets Metal Face" year={2018}>
          <CzarfaceMeetsMetalFace />
        </AlbumDetail>
      )}

      <AlbumGrid onSelect={setActiveAlbum} />
    </div>
  );
}
