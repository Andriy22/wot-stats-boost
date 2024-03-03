import { Slider } from '@nextui-org/react';

import { useEffect, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore';
import {
	buyGoldPrice,
	buyGoldSliderMarks,
} from '../constants/buyGold-constants.ts';

export default function BuyGoldCalculator() {
	const [goldAmount, setGoldAmount] = useState(5000); // Amount of silver to farm

	const updateOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		const orderDetails = {
			type: 'buy-gold',
			goldAmount,
		};

		const totalPrice = goldAmount * buyGoldPrice;

		updateOrderDetails({
			details: JSON.stringify(orderDetails),
			total: +totalPrice.toFixed(2),
		});
	}, [goldAmount]);

	return (
		<>
			<Slider
				size='sm'
				label='Choose the number of bonds you need: '
				className='w-full mt-5'
				defaultValue={goldAmount}
				minValue={5000}
				step={250}
				maxValue={20000}
				onChange={e => setGoldAmount(+e)}
				renderThumb={props => (
					<div {...props} className='relative flex items-center justify-center'>
						<div className='group p-1 bg-gradient-to-r from-green-400 to-blue-500 border border-gray-200 dark:border-gray-400/50 shadow-md rounded-full cursor-grab active:cursor-grabbing'>
							<span className='block w-5 h-5 bg-white rounded-full shadow-sm' />
						</div>
					</div>
				)}
				marks={buyGoldSliderMarks}
			/>
		</>
	);
}
