import { View, Text, StyleSheet } from 'react-native';

/* export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.text}>
        Universal <Text style={styles.textRed}>React</Text> with Expo
      </Text>
    </View>
  );
} */

/* const styles = StyleSheet.create({
  text: {
    color: 'blue'
  },
  textRed: {
    color: 'red',
    textTransform: 'capitalize'

  },
});
 */
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewWhite}></View>
      <View style={styles.viewRed}>
        <Text>Bonjour</Text>
        <Text>Bonsoir</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  viewWhite: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewRed: {
    flex: 2,
    backgroundColor: 'red',
    gap: 19,
  },
});
