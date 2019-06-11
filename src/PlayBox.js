import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { 
  BlackBoxButtonComponent, 
  BlackTextButtonComponent 
} from './Buttons'
import emoji from 'node-emoji';
import { 
  ROC, 
  PAP, 
  SCI, 
  newGameState, 
  getEmojiForChoice 
} from './constants';

export default class PlayBox extends Component {
  constructor(props) {
    super(props)
    this.state = newGameState;
  }

  startCountdown = () => {
    const countdownTimer = setInterval(() => {
      this.setState({ timerShown: true, timer: this.state.timer - 1 })
      if (this.state.timer <= 0) {
        clearTimeout(countdownTimer);
        this.setState({timerShown: false})
        this.getWinner();
      }
      }, 500);
  }

  getWinner = () => {
    const { playerChoice } = this.state;
    let optionsArray = [ROC, PAP, SCI, ROC, PAP];

    if (playerChoice === PAP) {
      optionsArray = optionsArray.splice(1,3)
    } 
    if (playerChoice === SCI) {
      optionsArray = optionsArray.splice(2,3)
    }

    const computerChoice = this.getComputerChoice();
    this.setState({ computerChoice: computerChoice });
    const computerChoiceIndex = optionsArray.indexOf(computerChoice);

    if (computerChoiceIndex === 2) {
      this.props.updatePlayerTally();
      this.setState({ result: 'YOU WIN!' });
      return;
    } 
    if (computerChoiceIndex ===  1) {
      this.props.updateComputerTally();
      this.setState({ result: 'YOU LOOSE!' });
      return;
    } 

    this.setState({ result: "IT'S A DRAW!" });
  };

  getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return ROC;
      case 1:
        return PAP;
      case 2:
        return SCI;
      default: 
        return undefined;
    }
  }

  getPlayerChoice = (playerChoice) => {
    this.setState({ playerChoice: playerChoice })
  }

  renderPlayerInputBox() {
    return (
      <View style={styles.inputBox}>
        <View style={{flexDirection: 'row'}}>
          <BlackBoxButtonComponent 
            text={emoji.get(getEmojiForChoice[ROC])} 
            onPress={() => this.getPlayerChoice(ROC)} 
            fontSize={this.state.playerChoice === ROC ? 90 : 60}
          />
          <BlackBoxButtonComponent 
            text={emoji.get(getEmojiForChoice[PAP])} 
            onPress={() => this.getPlayerChoice(PAP)} 
            fontSize={this.state.playerChoice === PAP ? 90 : 60}
          />
          <BlackBoxButtonComponent 
            text={emoji.get(getEmojiForChoice[SCI])} 
            onPress={() => this.getPlayerChoice(SCI)} 
            fontSize={this.state.playerChoice === SCI ? 90 : 60}
          />
        </View>
        <View style={{justifyContent: 'flex-end'}}>
        {this.state.playerChoice && 
          <BlackTextButtonComponent 
            text={emoji.emojify(`PLAY ${this.state.playerChoice} :point_right:`)} 
            fontSize={25} 
            onPress={this.startCountdown} 
          />}
        </View>
      </View>
    );
  }

  renderResultBox() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.resultBox}>
          <View><Text style={{ fontSize: 90 }}>{emoji.get(getEmojiForChoice[this.state.playerChoice])}</Text></View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>vs</Text>
          <View><Text style={{ fontSize: 90 }}>{emoji.get(getEmojiForChoice[this.state.computerChoice])}</Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[{ fontSize: 35 }, styles.blackFont]}>{this.state.result}</Text>
        </View>
      </View>
    );
  }

  renderTimerBox() {
    return <Text style={[{ fontSize: 150 }, styles.blackFont]}>{this.state.timer}</Text>;
  }

  render() {
    return (
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <View style={styles.playBoxContainer}>
          {this.state.timerShown && this.renderTimerBox()}
          {!this.state.timerShown && (
            <View style={{ alignItems: 'center' }}>
              {this.state.result ? this.renderResultBox() : this.renderPlayerInputBox()}
            </View>
          )}
        </View>
        {this.state.result && 
          <BlackTextButtonComponent 
            text={emoji.emojify("PLAY AGAIN :point_right:")} 
            fontSize={20} 
            onPress={() => this.setState(newGameState)}
          />
        }
      </View>
    )
  }
}