import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  launchContainer: { 
    flex: 1, 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    backgroundColor: '#ffaaaa'
  },
  blackFont: {
    color: '#000', 
    fontWeight: 'bold', 
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffaaaa',
  },
  tallyName: {
    flex: 3, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  tallyNameText: {
    fontSize: 20, 
    color: '#000', 
    fontWeight: 'bold'
  },
  tallyPoints: {
    flex: 1, 
    backgroundColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  tallyPointsText: {
    fontSize: 20, 
    color: '#fff', 
    fontWeight: 'bold'
  },
  tallyContainer: { 
    flexDirection: 'row', 
    height: 50, 
    justifyContent: 'flex-end' 
  },
  playBoxContainer: { 
    backgroundColor: '#fff', 
    borderColor: "#000", 
    borderWidth: 10, 
    width: 300, 
    height: 300, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  blackBoxButton: { 
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 5
  },
  titleContainer: { 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginTop: 50 
  },
  inputBox: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  },
  resultBox: { 
    flex: 2, 
    flexDirection: 'row', 
    borderColor: '#0000', 
    borderWidth: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  }
});