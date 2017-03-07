import React from 'react';
import ReactDOM from 'react-dom';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic.animation';
import {TweenMax, TimelineMax} from "gsap";
import Parallax from './lib/Parallax';
import Sprite from './lib/Sprite';

class App extends React.Component {
  componentDidMount() {
    let controller = new ScrollMagic.Controller();
    let tween = new TimelineMax().add([TweenMax.to('.bird', 1, {left: "100%", bottom: "100%", ease: Linear.easeNone})]);
    let scene = new ScrollMagic.Scene({duration: 1700, offset: 300})
    .setPin(".bird")
    .setTween(tween)

    controller.addScene(scene);
  }
  render() {
    const layers1 = [
      {id: 1, layer: 1, image: 'sky.png', top: "50px"},
      {id: 2, layer: 2, image: 'buildings.png', top: "300px"}
    ];

    const layers2 = [
      {id: 1, layer: 1, image: 'art.png', top: "50px"},
      {id: 2, layer: 2, image: 'grass.png', top: "500px"}
    ];

    return <div className="container">
             <Parallax name="parallax1" duration="2000" height="645px" layers={layers1}/>
             <Parallax name="parallax2" duration="2000" height="650px" layers={layers2}/>
             <Sprite name="bird" frames="14" resolution="20" layer="3"/>
           </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
