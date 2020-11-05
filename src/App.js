import React, { useEffect, useState } from 'react';
import { View, StatusBar, Dimensions, LayoutAnimation, ScrollView, Text, BackHandler } from 'react-native';
import { getStatusBarHeight as sbh } from 'react-native-status-bar-height';
import SImage from 'react-native-scalable-image';

import JPG from './JPG';
import Splash from './Splash';

const
	w = Dimensions.get('window').width,
	h = Dimensions.get('window').height,
	fh = sbh() + h, //durum çubuğu dahil tam yükseklik
	W = d => w * d / 100,
	H = d => h * d / 100,
	C1 = '#f6fcfd',
	jpg2 = require('../assets/x2.jpg'),
	jpg3 = require('../assets/x3.jpeg'),
	jpg4 = require('../assets/x4.jpeg'),
	jpg5 = require('../assets/x5.jpg'),
	jpg6 = require('../assets/x6.jpg'),
	jpg7 = require('../assets/x7.jpg'),
	footer = require('../assets/footer3.png');



let page_ = 1; //eventlistener içersinde stateHook a erişilemiyor



export default () => {
	const [page, setPage] = useState(1);

	const setPage_ = d => (page_ = d) && setPage(d);

	const prev = () => {
		setPage_(Math.max(page_, 3) - 1);
		return true;
	};

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', prev);
		return () => { }
	}, []);


	useEffect(() => LayoutAnimation.easeInEaseOut());


	return (
		<>
			<StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />

			<View style={{ flex: 1, backgroundColor: C1 }}>
				{page === 1 && <Splash splashVideoOnEnd={() => setTimeout(() => setPage_(2), 300)} H={H} C1={C1} />}

				{
					page !== 1 &&
					<ScrollView
						style={{}}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
					>
						<JPG w={w} jpg={jpg2} enabled={page === 2} next={() => setPage_(3)} />
						<JPG w={w} jpg={jpg3} enabled={page === 3} next={() => setPage_(4)} />
						<JPG w={w} jpg={jpg4} enabled={page === 4} next={() => setPage_(5)} />
						<JPG w={w} jpg={jpg5} enabled={page === 5} next={() => setPage_(6)} />
						<JPG w={w} jpg={jpg6} enabled={page === 6} next={() => setPage_(7)} />
						<JPG w={w} jpg={jpg7} enabled={page === 7} />
					</ScrollView>
				}

				{page !== 1 && <SImage source={footer} width={w} style={{ position: 'absolute', bottom: 0 }} />}
			</View>
		</>
	);
};
