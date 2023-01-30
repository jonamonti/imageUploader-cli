import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loader() {
	return (
		<View style={styles.viewLoader}>
      <View style={styles.viewLottie}>
      <Text style={styles.textLoader}>Uploading...</Text>
        <LottieView
            autoPlay
            source={require('../assets/animations/loading-bar.json')}
            style={styles.img}
          />
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	viewLoader: {
		height: '100%',
		width: '100%',
		backgroundColor: '#fafafb',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
  viewLottie:{
    position:'relative',
    backgroundColor: '#ffffff',
    borderRadius:9,
    height: 120,
    width:300,
  },
  textLoader:{
    position:'absolute',
    bottom:60,
    left:28
  },
  img:{
    width:'100%',
    marginBottom:30,
  }
});
