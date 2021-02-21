import * as React from 'react'
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg'

export function Facebook (props) {
	return (
		<Svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path
				d='M366 172.6h-74.9v-49.1c0-18.5 12.2-22.8 20.8-22.8h52.9V19.6l-72.8-.3c-80.8 0-99.2 60.5-99.2 99.2v54.1H146v83.6h46.7v236.5H291V256.2h66.3l8.7-83.6z'
				fill='#23599c'
			/>
		</Svg>
	)
}

export function Twitter (props) {
	return (
		<Svg
			viewBox='0 0 512 512'
			xmlns='http://www.w3.org/2000/svg'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinejoin='round'
			strokeMiterlimit={2}
			{...props}>
			<Path fill='none' d='M56 56h400v400H56z' />
			<Path
				d='M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.737 213.737 0 00512 97.176a209.705 209.705 0 01-60.334 16.527 105.426 105.426 0 0046.182-58.102 210.548 210.548 0 01-66.703 25.498 105.184 105.184 0 00-76.593-33.112c-57.682 0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 140.226A104.258 104.258 0 0120.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.898 104.898 0 01-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 01-130.458 45.056A213.688 213.688 0 010 416.827a297.42 297.42 0 00161.014 47.104'
				fill='#1da1f2'
				fillRule='nonzero'
			/>
		</Svg>
	)
}

export function Google (props) {
	return (
		<Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path
				d='M12 5c1.617 0 3.101.554 4.286 1.474l3.637-3.47A11.94 11.94 0 0012 0C7.392 0 3.397 2.6 1.386 6.41L5.43 9.603A6.996 6.996 0 0112 5z'
				fill='#F44336'
			/>
			<Path
				d='M23.896 13.502C23.96 13.01 24 12.509 24 12c0-.858-.094-1.693-.265-2.5H12v5h6.486a7.072 7.072 0 01-2.648 3.32l4.06 3.204a11.987 11.987 0 003.998-7.522z'
				fill='#2196F3'
			/>
			<Path
				d='M5 12c0-.843.157-1.648.43-2.397L1.386 6.41A11.94 11.94 0 000 12c0 1.997.495 3.876 1.358 5.533l4.05-3.197A6.972 6.972 0 015 12z'
				fill='#FFC107'
			/>
			<Path
				d='M12 19a6.997 6.997 0 01-6.592-4.664l-4.05 3.197C3.36 21.373 7.37 24 12 24c3.028 0 5.789-1.125 7.897-2.976l-4.059-3.205A6.831 6.831 0 0112 19z'
				fill='#00B060'
			/>
			<Path
				d='M12 23.75a12.416 12.416 0 01-8.952-3.779C5.245 22.438 8.436 24 12 24a11.94 11.94 0 008.888-3.96A12.406 12.406 0 0112 23.75zM12 14.25v.25h6.486l.101-.25z'
				opacity={0.1}
			/>
			<Path d='M23.994 12.147c.001-.05.006-.098.006-.147l-.002-.041c0 .063-.004.125-.004.188z' fill='#E6E6E6' />
			<Path d='M12 9.5v.25h11.786a12.487 12.487 0 00-.05-.25H12z' fill='#FFF' opacity={0.2} />
			<LinearGradient gradientUnits='userSpaceOnUse' id='prefix__a' x1={0} x2={24} y1={12} y2={12}>
				<Stop offset={0} stopColor='#fff' stopOpacity={0.2} />
				<Stop offset={1} stopColor='#fff' stopOpacity={0} />
			</LinearGradient>
			<Path
				d='M23.735 9.5H12v5h6.486C17.478 17.122 14.977 19 12 19a7 7 0 010-14c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-.082-.063A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.118 0 11.155-4.581 11.896-10.498.063-.492.104-.993.104-1.502 0-.858-.094-1.693-.265-2.5z'
				fill='url(#prefix__a)'
			/>
			<Path
				d='M15.789 5.89A6.932 6.932 0 0012 4.75a7 7 0 00-6.999 7.117A6.994 6.994 0 0112 5c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-3.637 3.22c-.157-.122-.33-.224-.497-.333z'
				opacity={0.1}
			/>
			<Path
				d='M12 .25c2.975 0 5.683 1.098 7.78 2.892l.143-.138-.11-.096A11.829 11.829 0 0012 0C5.373 0 0 5.373 0 12c0 .042.006.083.006.125C.074 5.555 5.415.25 12 .25z'
				fill='#FFF'
				opacity={0.2}
			/>
		</Svg>
	)
}