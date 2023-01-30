import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loader() {
	return (
		<View style={styles.viewLoader}>
			{/* <Text style={styles.titleUploading}>Uploading...</Text> */}
			<LottieView
				autoPlay
				source={require('../assets/animations/loading-bar.json')}
				autosize
			/>
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
});
