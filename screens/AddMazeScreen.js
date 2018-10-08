import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { withNavigationFocus } from 'react-navigation';

export default class AddMazeScreen extends React.Component {
  static navigationOptions = {
    title: "Ariadne's Thread",
  };

  state = {
    focusedScreen: true,
    hasCameraPermission: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true })
    );
    navigation.addListener('willBlur', () =>
      this.setState({ focusedScreen: false })
    );
  }

  render() {
    const { hasCameraPermission, focusedScreen } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (focusedScreen){
      return (this.cameraView());
    } else {
      return <View />;
    }
  }

  cameraView() {
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
            {/* <TouchableOpacity
              style={{
                flex: 0.2,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
              }}>
              <Text
                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}Reload{' '}
              </Text>
            </TouchableOpacity> */}
          </View>
        </Camera>
      </View>
    );
  }
}
