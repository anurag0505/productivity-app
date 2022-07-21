//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, CheckBox } from "react-native";
import Task from "./Task";

export default function App() {
	return (
		<View style={styles.container}>
			<Task />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
