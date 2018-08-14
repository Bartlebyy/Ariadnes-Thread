import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class AddMazeScreen extends React.Component {
  static navigationOptions = {
    title: "Ariadne's Thread",
  };

  state = {
    hasCameraPermission: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    // console.log('render');
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      // console.log('null camera permission');
      return <View />;
    } else if (hasCameraPermission === false) {
      // console.log('false camera permission');
      return <Text>No access to camera</Text>;
    } else {
      // console.log('Render correct view');
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ flex: 1 }}
            type="Camera.Constants.Type.back"
            >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.forceUpdate()
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Reload{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
