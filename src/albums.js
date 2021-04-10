import './App.css';
import React from "react";
import Doomsday from './Doomsday/tracklist.js'
import TakeMeToYourLeader from './TakeMeToYourLeader/tracklist.js'
import Vaudevillevillain from './vaudevilleVillain/tracklist.js'
import MmFood from './mmfood/tracklist.js'
import BornLikeThis from './BornLikeThis/tracklist.js'
import Madvillainy from './Madvillainy/tracklist.js'
import TheMouseAndTheMask from './TheMouseAndTheMask/tracklist.js'
import KeyToTheKuffs from './KeyToTheKuffs/tracklist.js'
import NehruvianDoom from './NehruvianDoom/tracklist.js'
import CzarfaceMeetsMetalFace from './CzarfaceMeetsMetalFace/tracklist.js'


export default class Album extends React.Component {
  constructor(){
    super();
    this.myRef = React.createRef();
    this.state = {
      Doomsday: true,
      TMTYL: true,
      VV: true,
      MMFood: true,
      BornLikeThis:true,
      Madvillainy:true,
      TheMouseAndTheMask:true, 
      KeyToTheKuffs:true,
      NehruvianDoom:true,
      CzarfaceMeetsMetalFace:true
    }
  }

  clearAlbums(){    
    this.setState({Doomsday: true})
    this.setState({TMTYL: true})
    this.setState({VV: true})
    this.setState({MMFood: true})
    this.setState({BornLikeThis: true})
    this.setState({Madvillainy: true})
    this.setState({TheMouseAndTheMask: true})
    this.setState({KeyToTheKuffs: true})
    this.setState({NehruvianDoom: true})
    this.setState({CzarfaceMeetsMetalFace: true})
  }

  changeDoomsday(){
    this.clearAlbums()
    this.setState({Doomsday: !this.state.Doomsday})    
    window.scrollTo(0, this.myRef.current.offsetTop )
    }
  

  changeTMTYL(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop)
    this.setState({TMTYL: !this.state.TMTYL})

  }

  changeVV(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop)
    this.setState({VV: !this.state.VV})
  }
  changeMMFood(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop);
    this.setState({MMFood: !this.state.MMFood})
  }
  changeBornLikeThis(){    
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop);
    this.setState({BornLikeThis: !this.state.BornLikeThis})
  }
  changeMadvillainy(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop);
    this.setState({Madvillainy: !this.state.Madvillainy})
  }
  changeTheMouseAndTheMask(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop);
    this.setState({TheMouseAndTheMask: !this.state.TheMouseAndTheMask})
  }
  changeKeyToTheKuffs(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop);
    this.setState({KeyToTheKuffs: !this.state.KeyToTheKuffs})
  }
  changeNehruvianDoom(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop);
    this.setState({NehruvianDoom: !this.state.NehruvianDoom})
  }
  changeCzarfaceMeetsMetalFace(){
    this.clearAlbums()
    window.scrollTo(0, this.myRef.current.offsetTop);
    this.setState({CzarfaceMeetsMetalFace: !this.state.CzarfaceMeetsMetalFace})
  }

  render(){

    let show_Doomsday = this.state.Doomsday ? "noShow" : "show";
    let show_TMTYL = this.state.TMTYL ? "noShow" : "show";
    let show_VV = this.state.VV ? "noShow" : "show";
    let show_MMFood = this.state.MMFood ? "noShow" : "show";
    let show_BornLikeThis = this.state.BornLikeThis ? "noShow" : "show";
    let show_Madvillainy = this.state.Madvillainy ? "noShow" : "show";
    let show_TheMouseAndTheMask = this.state.TheMouseAndTheMask ? "noShow" : "show";
    let show_KeyToTheKuffs = this.state.KeyToTheKuffs ? "noShow" : "show";
    let show_NehruvianDoom = this.state.NehruvianDoom ? "noShow" : "show";
    let show_CzarfaceMeetsMetalFace = this.state.CzarfaceMeetsMetalFace ? "noShow" : "show";


  return (  
<div> 
  <div ref={this.myRef} className={show_Doomsday}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeDoomsday.bind(this)} >
        <h5>Operation: Doomsday</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/03/MF-DOOM-Operation.jpeg"   alt="Doomsday" />
        <p><b>1999</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <Doomsday />
      </div>

    </div>
  </div>
</div>

<div  ref={this.myRef} className={show_TMTYL}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeTMTYL.bind(this)} >
        <h5>Take Me To Your Leader</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/d/d2/King_Geedorah_-_Take_Me_to_Your_Leader_album_cover.jpg"   alt="Doomsday" />
        <p><b>2003</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <TakeMeToYourLeader />
      </div>

    </div>
  </div>
</div>

<div ref={this.myRef} className={show_VV}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeVV.bind(this)} >
        <h5>Vaudeville Villain</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/48/Vaudevillevillain.jpg"   alt="Doomsday" />
        <p><b>2003</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <Vaudevillevillain />
      </div>

    </div>
  </div>
</div>

<div ref={this.myRef} className={show_MMFood}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeMMFood.bind(this)} >
        <h5>mm..Food</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg"   alt="Doomsday" />
        <p><b>2004</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <MmFood />
      </div>

    </div>
  </div>
</div>

<div ref={this.myRef} className={show_BornLikeThis}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeBornLikeThis.bind(this)} >
        <h5>Born Like This</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/c/ca/Born-like-this.jpg"   alt="Born Like This" />
        <p><b>2009</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <BornLikeThis />
      </div>

    </div>
  </div>
</div>


<div ref={this.myRef} className={show_Madvillainy}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeMadvillainy.bind(this)} >
        <h5>Madvillainy</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/5/5e/Madvillainy_cover.png"   alt="Madvillainy" />
        <p><b>2004</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <Madvillainy />
      </div>

    </div>
  </div>
</div>


<div ref={this.myRef} className={show_TheMouseAndTheMask}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeTheMouseAndTheMask.bind(this)} >
        <h5>The Mouse And The Mask</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/1/1e/Dangerdoom.jpg"   alt="The Mouse And The Mask" />
        <p><b>2005</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <TheMouseAndTheMask />
      </div>

    </div>
  </div>
</div>



<div ref={this.myRef} className={show_KeyToTheKuffs}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeKeyToTheKuffs.bind(this)} >
        <h5>Key To The Kuffs</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/e/e3/Key_To_The_Kuffs_Album_Cover.jpeg"   alt="Key To The Kuffs" />
        <p><b>2005</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <KeyToTheKuffs />
      </div>

    </div>
  </div>
</div>




<div ref={this.myRef} className={show_NehruvianDoom}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeNehruvianDoom.bind(this)} >
        <h5>NehruvianDoom</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/7/7c/NehruvianDOOM.jpg"   alt="NehruvianDoom" />
        <p><b>2014</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <NehruvianDoom />
      </div>

    </div>
  </div>
</div>

<div ref={this.myRef} className={show_CzarfaceMeetsMetalFace}>
    <div className="container-fluid bg-4  ">    
      <div className="row" >

      <div className="col-sm-1"></div>

      <div className="col-sm-2" onClick={this.changeCzarfaceMeetsMetalFace.bind(this)} >
        <h5>Czarface Meets Metal Face</h5>
        <img src="https://upload.wikimedia.org/wikipedia/en/5/5b/Czarface_Meets_Metal_Face.jpeg"   alt="Czarface Meets Metal Face" />
        <p><b>2018</b></p>
      </div>

      <div className="col-sm-1"></div>

      <div className="col-sm-6"> 
        <CzarfaceMeetsMetalFace />
      </div>

    </div>
  </div>
</div>

<div ref={this.myRef} className="container-fluid bg-4 text-center">    
    <h3>Albums</h3>
        <div className="row">
            <div className="col-sm-4 hoverEffect" onClick={this.changeDoomsday.bind(this)}>
                  <h5>Operation: Doomsday</h5>
                  <img src="https://upload.wikimedia.org/wikipedia/en/0/03/MF-DOOM-Operation.jpeg"   alt="Doomsday" />
                  <p><b>1999</b></p>
            </div>
            <div className="col-sm-4 hoverEffect" onClick={this.changeTMTYL.bind(this)}> 
                <h5>Take Me to Your Leader</h5>
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d2/King_Geedorah_-_Take_Me_to_Your_Leader_album_cover.jpg"   alt="Take Me to Your Leader"/>
                <p><b>2003</b></p>
            </div>
            <div className="col-sm-4 hoverEffect"  onClick={this.changeVV.bind(this)}> 
                <h5>Vaudeville Villain    </h5>
                <img src="https://upload.wikimedia.org/wikipedia/en/4/48/Vaudevillevillain.jpg"   alt="Vaudeville Villain  "/>
                <p><b>2003</b></p>
            </div>
    </div>
</div>

<div className="container-fluid bg-3 text-center">    
<div className="row">
  <div className="col-sm-3 hoverEffect" onClick={this.changeMMFood.bind(this)}>
    <h5>Mm..Food
  </h5>
    <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg"  alt="Mm..Food"/>
    <p><b>2004</b></p>
  </div>
  <div className="col-sm-3 hoverEffect" onClick={this.changeBornLikeThis.bind(this)}> 
    <h5>Born Like This
  </h5>
    <img src="https://upload.wikimedia.org/wikipedia/en/c/ca/Born-like-this.jpg"   alt="Born Like This"/>
    <p><b>2009</b></p>
  </div>
  <div className="col-sm-3 hoverEffect " onClick={this.changeMadvillainy.bind(this)}> 
    <h5>Madvillainy
  </h5>
    <img src="https://upload.wikimedia.org/wikipedia/en/5/5e/Madvillainy_cover.png"  alt="Madvillainy"/>
    <p><b>2004</b></p>
  </div>
  <div className="col-sm-3 hoverEffect" onClick={this.changeTheMouseAndTheMask.bind(this)}>
    <h5>The Mouse and the Mask
  </h5>
    <img  src="https://upload.wikimedia.org/wikipedia/en/1/1e/Dangerdoom.jpg"   alt="The Mouse and the Mask"/>
    <p><b>2005</b></p>
  </div>
</div>
</div><br/>


<div className="container-fluid bg-4 text-center">    
  <div className="row">
    <div className="col-sm-4 hoverEffect" onClick={this.changeKeyToTheKuffs.bind(this)}>
      <h5>Key to the Kuffs</h5>
      <img src="https://upload.wikimedia.org/wikipedia/en/e/e3/Key_To_The_Kuffs_Album_Cover.jpeg"   alt="Key to the Kuffs"/>
      <p><b>2012</b></p>
    </div>
    <div className="col-sm-4 hoverEffect" onClick={this.changeNehruvianDoom.bind(this)}> 
      <h5>NehruvianDoom

    </h5>
      <img src="https://upload.wikimedia.org/wikipedia/en/7/7c/NehruvianDOOM.jpg"   alt="NehruvianDoom"/>
      <p><b>2014</b></p>
    </div>
    <div className="col-sm-4 hoverEffect" onClick={this.changeCzarfaceMeetsMetalFace.bind(this)}> 
      <h5>Czarface Meets Metal Face

    </h5>
      <img src="https://upload.wikimedia.org/wikipedia/en/5/5b/Czarface_Meets_Metal_Face.jpeg"   alt="Czarface Meets Metal Face"/>
      <p><b>2018</b></p>
    </div>
  </div>
</div><br/><br/>
</div>
  );
}}
