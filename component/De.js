import React, { PureComponent } from "react";
class De extends React.Component {
  render() {

    var alt = "dice phase" + this.props.Phase;
    var imageSrc = "resources/"+this.props.Phase+".png";
    return (
    <div id={this.props.Dir}>
      <img style={this.props.StyleElement} src={imageSrc} alt={alt} id="img"/>
      </div>
      )
      
  }
}

export default De;
