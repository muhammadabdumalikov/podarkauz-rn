import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 

export const CardSkeleton = () => { 
	return ( 
		<View style={styles.container}> 
			{/* Placeholder card content */} 
			<View style={styles.placeholder} /> 
			<View style={styles.placeholder} /> 
			<View style={styles.placeholder} /> 
		</View> 
	); 
};

const styles = StyleSheet.create({ 
	container: { 
		backgroundColor: '#F6F6F6', 
		borderRadius: 13, 
		padding: 16, 
		marginBottom: 16, 
		marginTop: 50, 
	}, 
	placeholder: { 
		backgroundColor: '#ccc', 
		height: 16, 
		borderRadius: 4, 
		marginBottom: 8, 
	}, 
}); 
