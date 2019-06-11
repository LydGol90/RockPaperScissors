import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { BlackTextButtonComponent } from './Buttons'
import emoji from 'node-emoji';
import { ROC, PAP, SCI } from './constants';

export default LaunchScreen = (props) => {    
  return (
  <View style={styles.launchContainer}>
    <View style={{ flexDirection: 'column' }}>
      <Text style={[{ fontSize: 40 }, styles.blackFont]}>
        {ROC}
      </Text>
      <Text style={[{ fontSize: 50 }, styles.blackFont]}>
        {PAP}
      </Text>
      <Text style={[{ fontSize: 60 }, styles.blackFont]}>
        {SCI}
      </Text>
    </View>
    <BlackTextButtonComponent 
      text={emoji.emojify("PLAY :point_right:")} 
      fontSize={50} 
      onPress={props.onPress} 
    />
  </View>
  );
}

