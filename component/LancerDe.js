import React, { PureComponent } from "react";

import De from "./De";
class LancerDe extends React.Component {
constructor(props){
  super(props);
  this.state={
    leftPhase:"",
    rightPhase:"",
    score :0,
    scoretrack:0,
    win:"",
    rolling:{display:"none"},
    elemstyle:{display:"block"},
    diceStyle:{display:"none"},
winStyle :{color:"transparent"},
event:"late",
  };
}
  random= ()=> {
 
    var leftnum = Math.floor(Math.random() * 6) + 1;
    var rightnum = Math.floor(Math.random() * 6) + 1;
    this.setState({leftPhase:leftnum,rightPhase:rightnum,rolling:{display:"none"},elemstyle:{display:"block"},diceStyle:{display:"block"},});

    if (leftnum == rightnum) {

this.setState({score:this.state.score+1,win:"YOU WON",winStyle:{color:"#1aff1a"}});

    } else {
      this.setState({win:"TRY AGAIN" ,winStyle:{color:"#df2121"}})

    }

   this.setState({scoretrack:this.state.scoretrack+1})
   if (this.state.scoretrack === 10) {this.setState({event:"restart"});}
  }

late=()=> {

 this.setState({rolling:{display:"block"},elemstyle:{display:"none"},diceStyle:{display:"none"}});
  setTimeout(this.random,300)
}
  restart = ()=> {

this.setState({
   leftPhase:"",
    rightPhase:"",
    score :0,
    scoretrack:0,
    win:"",
diceStyle:{display:"none"},
event:"late"
});
  }

btnCaller = ()=>{

if(this.state.event=="late"){this.late();}else{this.restart();}
}
  render(){

    return (
      <div class="container">
        <div class="gamecontainer">
          <div id="score"> {(this.state.scoretrack !== 10) ? "" : "YOUR SCORE IS " + this.state.score}</div>
          <De StyleElement={this.state.diceStyle} Dir="leftdice" Phase={this.state.leftPhase} />
          <div style={this.state.winStyle} id="win" >
 <img style={this.state.rolling} src="resources/roll.gif" alt="rolling" id="img"/>
<p style={this.state.elemstyle}>{this.state.win}</p>

</div>
          <De StyleElement={this.state.diceStyle} Dir="rightdice" Phase={this.state.rightPhase} />
          <div id="btn" onClick={this.btnCaller}>{(this.state.scoretrack !== 10) ? "Lancer les Des" : "restart"}</div>
        </div>
      </div>


    );
  }
}

export default LancerDe;
