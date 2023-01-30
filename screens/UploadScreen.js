import { View, Text, StyleSheet } from 'react-native';

export default function UploadScreen() {
	return (
		<View style={s.container}>
			<View style={s.innerContainer}>
				<View style={s.titleContainer}>
					<Text style={s.title}>Upload your image</Text>
					<Text style={s.text}>File should be Jpeg, Png</Text>
				</View>
				<View style={s.imageContainer}></View>
				<View style={s.buttonContainer}></View>
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
	},
	titleContainer: {
		flex: 2,
		justifyContent: 'center',
	},
	imageContainer: {
		flex: 6,
		backgroundColor: '#e9ecef',
		borderWidth: 2,
		borderStyle: 'dashed',
		borderColor: 'lightblue',
		borderRadius: 8,
	},
	buttonContainer: { flex: 2, borderWidth: 2 },
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
});
