import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';

let vpref; //video component ref

export default P => {
	const
		{ splashVideoOnEnd, H, C1 } = P,
		onEnd = () => {
			console.log('splash video onEnd');
			splashVideoOnEnd();
		};


	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: C1/*VIDEO_BACKGROUNDCOLOR*/ }}>
			<Video
				source={require('../assets/1.mp4')} //1240X2206 ()
				ref={r => (vpref = r)}
				onEnd={onEnd}
				style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: H(2) }}
				resizeMode={'cover'}
			/>
		</View>
	);
};;
