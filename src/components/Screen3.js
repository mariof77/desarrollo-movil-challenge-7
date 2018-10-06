import React from 'react';
import { Text, Button, View } from 'react-native';

export default  class Screen3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen3!</Text>

         <Button
          title="Ir a Screen 1"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />

        <Button
          title="Ir a Screen 3"
          onPress={() => this.props.navigation.navigate('Screen3')}
        />
        
      </View>
    );
  }
}
