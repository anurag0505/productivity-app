//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, CheckBox } from "react-native";
import React, { useState } from "react";

export default function Task() {
	const [task, setTask] = useState({});

	const [checkbox, setCheckbox] = useState({
		checkbox1: false,
		checkbox2: false,
		checkbox3: false,
	});

	const handleChange = (text, name) => {
		console.log(task);
		setTask((prevState) => ({ ...prevState, [name]: text }));

		console.log(name);
		console.log(task);
	};

	const handleCheckbox = (name) => {
		setCheckbox((prevState) => ({ ...prevState, [name]: !checkbox[name] }));
		console.log(checkbox);
	};

	return (
		<View style={styles.container}>
			<View style={styles.taskContainer}>
				<CheckBox
					style={styles.checkbox}
					value={checkbox.checkbox1}
					onValueChange={() => {
						handleCheckbox("checkbox1");
					}}
					name="checkbox1"
				/>
				<TextInput
					key="0"
					style={styles.input}
					placeholder="TYPE HERE"
					onChangeText={(text) => handleChange(text, "feild1")}
					name="feild1"
					value={"" || task.feild1}
				/>
			</View>

			<View style={styles.taskContainer}>
				<CheckBox
					style={styles.checkbox}
					value={checkbox.checkbox2}
					onValueChange={() => {
						handleCheckbox("checkbox2");
					}}
					name="checkbox2"
				/>
				<TextInput
					key="1"
					style={styles.input}
					placeholder="TYPE HERE"
					onChangeText={(text) => handleChange(text, "feild2")}
					name="feild2"
					value={"" || task.feild2}
				/>
			</View>

			<View style={styles.taskContainer}>
				<CheckBox
					style={styles.checkbox}
					value={checkbox.checkbox3}
					onValueChange={() => {
						handleCheckbox("checkbox3");
					}}
					name="checkbox3"
				/>
				<TextInput
					key="2"
					style={styles.input}
					placeholder="TYPE HERE"
					onChangeText={(text) => handleChange(text, "feild3")}
					name="feild3"
					value={"" || task.feild3}
				/>
			</View>
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
	Text: {
		backgroundColor: "yellow",
		color: "red",
	},
	input: {
		margin: 15,
		height: 40,
		borderWidth: 0,
		width: 380,
		border: 1,
	},
	checkbox: {
		alignSelf: "center",
		color: "black",
	},
	taskContainer: {
		flexDirection: "row",
	},
});
