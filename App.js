import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import LaunchScreen from "./src/LaunchScreen";
import { BlackTextButtonComponent } from "./src/Buttons";
import PlayBox from "./src/PlayBox";
import styles from "./src/styles";
import emoji from "node-emoji";
import { initialState } from "./src/constants";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onPress = stateChange => {
    return () => this.setState(stateChange);
  };

  renderPlayScreen() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={[{ fontSize: 50 }, styles.blackFont]}>
              LET'S PLAY!
            </Text>
            <BlackTextButtonComponent
              text={emoji.emojify(":point_left: RESTART ")}
              fontSize={15}
              onPress={this.onPress(initialState)}
            />
          </View>
          <PlayBox
            updatePlayerTally={this.onPress({
              playerTally: this.state.playerTally + 1
            })}
            updateComputerTally={this.onPress({
              computerTally: this.state.computerTally + 1
            })}
          />
          <View style={styles.tallyContainer}>
            <View style={styles.tallyName}>
              <Text style={styles.tallyNameText}>PLAYER</Text>
            </View>
            <View style={styles.tallyPoints}>
              <Text style={styles.tallyPointsText}>
                {this.state.playerTally}
              </Text>
            </View>
            <View style={styles.tallyPoints}>
              <Text style={styles.tallyPointsText}>
                {this.state.computerTally}
              </Text>
            </View>
            <View style={styles.tallyName}>
              <Text style={styles.tallyNameText}>COMPUTER</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  render() {
    if (this.state.launch) {
      return <LaunchScreen onPress={this.onPress({ launch: false })} />;
    } else {
      return this.renderPlayScreen();
    }
  }
}
