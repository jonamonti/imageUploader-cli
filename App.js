import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UploadScreen from './screens/UploadScreen';

export default function App() {
	return (
		<View style={s.container}>
			<UploadScreen />
			<StatusBar style='auto' />
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
