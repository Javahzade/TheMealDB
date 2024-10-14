import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Root} from './Root';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <SafeAreaProvider style={styles.area}>
      <Provider store={store}>
        <Root />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});

export default App;
