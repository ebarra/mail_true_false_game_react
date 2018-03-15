import React from 'react';
import {connect} from 'react-redux';
import '../assets/sass/main_styles.sass';

import {GLOBAL_CONFIG} from '../config/config.js';
import {QUESTIONS} from '../config/questions.js';
import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, resetGame, initializegame, startgame, updateTimer, pauseTimer, unpauseTimer} from './../reducers/actions';

import SCORM from './SCORM.jsx';
import Controls from './Controls.jsx';
import Quiz from './Quiz.jsx';
import ModalGameEnd from './ModalGameEnd.jsx';
import ModalGameStart from './ModalGameStart.jsx';
import ModalGameInfo from './ModalGameInfo.jsx';
import ModalGameProgress from './ModalGameProgress.jsx';
import ModalGameReset from './ModalGameReset.jsx';
import ModalGameStop from './ModalGameStop.jsx';
import ModalCredits from './ModalCredits.jsx';
import Dark from './Dark.jsx';
import {UI} from '../config/config';

const INITIAL_STATE = {intervalId: 0, showModalStart:false, showModalInfo:false, showModalEnd:false, showModalProgress:false, showModalReset:false, showModalStop:false, showModalCredits:false};

export class App extends React.Component {
  constructor(props){
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.startGame = this.startGame.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = INITIAL_STATE;
    this.total_score = QUESTIONS.reduce((accumulator, currentValue) => { return accumulator + currentValue.score; }, 0);
  }
  resetState(){
    this.setState(INITIAL_STATE);
  }
  componentDidMount(){
    this.props.dispatch(initializegame(QUESTIONS));
    let myinterval = setInterval(() => this.props.dispatch(updateTimer()), 1000);
    this.setState({intervalId: myinterval});
  }
  componentWillUnmount(){
    console.log("CLEAR INTERVAL!");
    clearInterval(this.state.intervalId);
  }
  startGame(){
    this.props.dispatch(startgame());
  }
  handleCloseModal(name){
    if(name === "all"){
      this.setState(INITIAL_STATE);
    } else {
      let modalname = "showModal" + name;
      this.setState({[modalname]:false});
    }
    if(!this.props.game.game_ended){
      this.props.dispatch(unpauseTimer());
    }
  }
  showModal(name){
    let modalname = "showModal" + name;
    this.props.dispatch(pauseTimer());
    this.setState({[modalname]:true});
  }
  componentWillReceiveProps(nextProps){
    if(this.props.game.game_started === false && nextProps.game.game_started === true){
      this.setState({showModalStart:true});
    }
    if(this.props.game.game_ended === false && nextProps.game.game_ended === true){
      this.setState({showModalEnd:true});
    }
  }
  render(){
    let user_score = this.props.game.questions.reduce((accumulator, currentValue) => { return accumulator + currentValue.score_accomplished; }, 0);
    let showDarkLayer = this.state.showModalStart || this.state.showModalInfo || this.state.showModalProgress || this.state.showModalReset || this.state.showModalStop || this.state.showModalEnd || this.state.showModalCredits;
    return (
      <div id="container">
        <div className="main_header">
          <img className="detector_type_logo" src={UI.type_app_logo}/>
          <img className="fake_detector_logo" src={UI.app_logo}/>
          <div className="educalab">
            <p className="text_educalab">{UI.educalab_text}</p>
            <img className="educalab_logo" src={UI.educalab_logo}/>
          </div>
        </div>

        <Quiz dispatch={this.props.dispatch} game={this.props.game} index={this.props.game.index} questions={this.props.game.questions} />

        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <ModalGameStart show={this.state.showModalStart} handleClose={this.handleCloseModal} questions={this.props.game.questions} />
        <ModalGameInfo show={this.state.showModalInfo} handleClose={this.handleCloseModal} />
        <ModalGameProgress show={this.state.showModalProgress} dispatch={this.props.dispatch} handleClose={this.handleCloseModal} user_score={user_score} total_score={this.total_score} questions={this.props.game.questions} index={this.props.game.index}/>
        <ModalGameReset resetState={this.resetState} dispatch={this.props.dispatch} show={this.state.showModalReset} handleClose={this.handleCloseModal} />
        <ModalGameEnd resetState={this.resetState} dispatch={this.props.dispatch} show={this.state.showModalEnd} handleClose={this.handleCloseModal} user_score={user_score} total_score={this.total_score} questions={this.props.game.questions} index={this.props.game.index} time={this.props.game.time}/>
        <ModalGameStop resetState={this.resetState} dispatch={this.props.dispatch} show={this.state.showModalStop} handleClose={this.handleCloseModal} questions={this.props.game.questions} game_ended={this.props.game.game_ended}/>
        <ModalCredits show={this.state.showModalCredits} handleClose={this.handleCloseModal} />
        <Controls game={this.props.game} startGame={this.startGame} showModal={this.showModal} user_profile={this.props.user_profile} user_score={user_score} total_score={this.total_score} tracking={this.props.tracking} dispatch={this.props.dispatch} config={GLOBAL_CONFIG}/>
        <Dark show={showDarkLayer} onClick={() => this.handleCloseModal("all")}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
