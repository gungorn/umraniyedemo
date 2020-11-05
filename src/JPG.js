import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import SImage from 'react-native-scalable-image';
import { getStatusBarHeight as sbh } from 'react-native-status-bar-height';


export default P => {
	const { w, jpg, enabled, next } = P;

	return (
		<View style={{ flex: 1, paddingTop: sbh(), display: enabled ? 'flex' : 'none', opacity: enabled ? 1 : 0 }}>
			<TouchableOpacity onPress={next} activeOpacity={1}>
				<SImage source={jpg} width={w} />
			</TouchableOpacity>
		</View>
	);
};;
