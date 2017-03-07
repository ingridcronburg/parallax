import React from 'react';

class Layer extends React.Component {
  render() {
    const style = {
      position: 'absolute',
      top: this.props.top,
      height: this.props.height,
      left: 0,
      zIndex: this.props.layer,
      background: `url('img/${this.props.image}') no-repeat`
    };

    const className = `layer layer${this.props.layer}`;

    return <div className={className} style={style}></div>;
  }
}

module.exports = Layer;
