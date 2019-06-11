import React from 'react';
import { 
  TouchableOpacity, 
  Text 
} from 'react-native';

export const BlackTextButtonComponent = (props) => {
  return (      
    <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
      <Text style={[{ fontSize: props.fontSize }, styles.blackFont]}>{props.text}</Text>
    </TouchableOpacity> 
  );
}

export const BlackBoxButtonComponent = (props) => {
  return (      
    <TouchableOpacity onPress={props.onPress} style={styles.blackBoxButton}>
      <Text style={[{ fontSize: props.fontSize }, styles.blackFont]}>{props.text}</Text>
    </TouchableOpacity> 
  );
}