import $ from 'jquery';
import React from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic.animation';
import {TweenMax, TimelineMax} from "gsap";

class Sprite extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene()
    .on("update", (event) => {
      let classes = [];

      for (let i = 1; i <= parseInt(this.props.frames); i++) {
        classes.push(`${this.props.name}${i}`);
      }

      $(`.${this.props.name}`).removeClass(classes.join(' '));

      let frame = Math.floor(event.scrollPos / parseInt(this.props.resolution) % parseInt(this.props.frames)) + 1;

      $(`.${this.props.name}`).addClass(`${this.props.name}${frame}`);
    });

    controller.addScene(scene);
  }

  render() {
    const className = `sprite-container ${this.props.name}-container`;
    const style = {
      zIndex: this.props.layer
    };

    return <div className={className} style={style}>
             <div className={this.props.name}></div>
           </div>;
  }
}

module.exports = Sprite;
