import React, { Component, Fragment } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

class Timer extends Component {
  state = {
      timeRemaining: 0,
      hasStarted: false,
  };

  componentDidMount(){
      console.log(this.state);
      setInterval(() => {
          if (this.state.hasStarted && this.state.timeRemaining > 0) {
              this.setState(previousState => ({ timeRemaining: previousState.timeRemaining - 1 }));
          } else {

          }
      }, 1000);
  }

  setTimer = (input) => {
      if (input === "") {
          return;
      }
      let parsedInput = parseInt(input, 10);
      if (Number.isInteger(parsedInput)) {
          this.setState(() => ({timeRemaining: parsedInput}));
      } else {
          alert('Please enter a valid integer');
      }
  };

  startTimer = () => this.setState(previousState => ({ hasStarted: true }));
  resetTimer = () => this.setState(previousState => ({ hasStarted: false }));

  render() {
    console.log(this.state);
      if (!this.state.hasStarted) {
          return (
              <Fragment>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Time"
                onChangeText={(input) => this.setTimer(input)}
                value={this.state.timeRemaining.toString()}
              />
              <Button
                onPress={this.startTimer}
                title="Start Timer"
              />
              </Fragment>
          );
      } else if (this.state.timeRemaining > 0) {
          return <Text>{this.state.timeRemaining}</Text>;
      };

      return (
          <Button
            onPress={this.resetTimer}
            title="All Done!"
          />
      );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Timer />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 70,
  },
});
