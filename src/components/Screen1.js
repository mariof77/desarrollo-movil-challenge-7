import React from 'react';
import { Text, Button, View } from 'react-native';

export default class Screen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen1!</Text>

        <Button
          title="Ir a Screen 2"
          onPress={() => this.props.navigation.navigate('Screen2')}
        />

        <Button
          title="Ir a Screen 3"
          onPress={() => this.props.navigation.navigate('Screen3')}
        />

      </View>
    );
  }
}
