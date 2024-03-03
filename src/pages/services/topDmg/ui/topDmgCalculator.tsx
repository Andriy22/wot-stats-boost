import { Slider, Textarea } from '@nextui-org/react';

import { useEffect, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore';
import WinRatePicker from '../../../../features/winratePicker';
import { getPercentageIncreaseBasedOnWinRate } from '../../../../shared/utils/winRatePercentCalculator';
import {
	topDmgPrice,
	topDmgSliderMarks,
} from '../constants/topDmg-constants.ts';

export default function TopDmgCalculator() {
	const [battlesAmount, setBattlesAmount] = useState(50); // Amount of silver to farm
	const [desiredWinRate, setDesiredWinRate] = useState(50); // Desired win rate percentage

	const [tanksComment, setTanksComment] = useState('');

	const updateOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		const orderDetails = {
			type: 'top-dmg',
			battlesAmount,
			tanksComment,
			desiredWinRate,
		};

		let totalPrice = topDmgPrice * battlesAmount;
		const priceAdjustmentPercentage =
			100 + getPercentageIncreaseBasedOnWinRate(desiredWinRate);

		totalPrice *= priceAdjustmentPercentage / 100;

		updateOrderDetails({
			details: JSON.stringify(orderDetails),
			total: +totalPrice.toFixed(2),
		});
	}, [battlesAmount, desiredWinRate]);

	return (
		<>
			<Slider
				size='sm'
				label='Choose the number of battles you need: '
				className='w-full mt-5'
				defaultValue={battlesAmount}
				minValue={50}
				step={1}
				maxValue={1000}
				onChange={e => setBattlesAmount(+e)}
				renderThumb={props => (
					<div {...props} className='relative flex items-center justify-center'>
						<div className='group p-1 bg-gradient-to-r from-green-400 to-blue-500 border border-gray-200 dark:border-gray-400/50 shadow-md rounded-full cursor-grab active:cursor-grabbing'>
							<span className='block w-5 h-5 bg-white rounded-full shadow-sm' />
						</div>
					</div>
				)}
				marks={topDmgSliderMarks}
			/>
			<Textarea
				label='Enter the tank(s) name which are needed to perform series of battle (if there are some – specify how many battles at each)'
				variant='bordered'
				placeholder='For example: IS3 - 10 battles, T10 - 40 battles'
				disableAutosize
				value={tanksComment}
				onChange={e => setTanksComment(e.target.value)}
				classNames={{
					base: 'max-w-lg mt-5 w-full',
					input: 'min-h-[40px]',
				}}
			/>
			<div className='mt-5 w-full'>
				<WinRatePicker onChange={e => setDesiredWinRate(+e)} />
			</div>
		</>
	);
}
