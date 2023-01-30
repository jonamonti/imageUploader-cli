import { View, Text, Pressable, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function UploadScreen() {
	return (
		<View style={s.container}>
			<View style={s.innerContainer}>
				<View style={s.titleContainer}>
					<Text style={s.title}>Upload your image</Text>
					<Text style={s.text}>File should be Jpeg, Png ...</Text>
				</View>
				<View style={s.centralContainer}>
					<Pressable style={({ pressed }) => pressed && s.onPress}>
						<View style={s.animationContainer}>
							<LottieView
								source={require('../assets/animations/upload-files.json')}
								autoPlay
								autosize
							/>
						</View>
						<View style={s.textContainer}>
							<Text>Choose a file</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 400,
		width: 300,
		shadowColor: 'lightgray',
		shadowRadius: 4,
		shadowOpacity: 0.8,
		shadowOffset: { height: 0, width: 0 },
		elevation: 4,
		borderRadius: 20,
		backgroundColor: 'white',
	},
	innerContainer: {
		flex: 1,
		padding: 24,
		marginBottom: 24,
	},
	titleContainer: {
		flex: 2,
		justifyContent: 'center',
	},
	centralContainer: {
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
		// marginBottom: 16,
		backgroundColor: '#e9ecef',
		borderWidth: 2,
		borderStyle: 'dashed',
		borderColor: 'lightblue',
		borderRadius: 8,
	},
	animationContainer: {
		flex: 5,
		height: 200,
		width: 200,
	},
	textContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
	},
	text: {
		fontSize: 14,
		textAlign: 'center',
		marginVertical: 8,
	},
	onPress: {
		opacity: 0.5,
	},
});
