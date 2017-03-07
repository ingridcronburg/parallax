import React from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic.animation';
import {TweenMax, TimelineMax} from "gsap";
import Layer from './Layer';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let controller = new ScrollMagic.Controller();

    let tweens = this.props.layers.map(layer => {
      return TweenMax.to(`.${this.props.name} .layer${layer.layer}`, 1, {top: "0", ease: Linear.easeNone});
    });

    let tween = new TimelineMax().add(tweens);

    let scene = new ScrollMagic.Scene({
      triggerElement: `.${this.props.name}-container`,
      triggerHook: 0,
      duration: parseInt(this.props.duration)
    })
    .setPin(`.${this.props.name}`)
    .setTween(tween)
    .addTo(controller);
  }

  render() {
    const layers = this.props.layers.map(layer => {
      return <Layer key={layer.id} layer={layer.layer} image={layer.image} top={layer.top} height={this.props.height} />;
    });

    const triggerClassName = `${this.props.name}-container`;
    const className = `parallax ${this.props.name}`;

    const style = {
      height: this.props.height
    };

    return <section className={triggerClassName}>
             <div className={className} style={style}>
               {layers}
             </div>
           </section>;
  }
}

module.exports = Parallax;
