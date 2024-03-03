import { Radio, RadioGroup, Slider } from '@nextui-org/react';

import { useEffect, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore';
import {
	squad1Price,
	squad2Price,
	squadSliderMarks,
} from '../constants/squad-constants.ts';

export default function SquadCalculator() {
	const [battlesAmount, setBattlesAmount] = useState(50); // Amount of silver to farm

	const [squadSize, setSquadSize] = useState(1);

	const updateOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		const orderDetails = {
			type: 'squad',
			battlesAmount,
			squadSize,
		};

		const totalPrice =
			(squadSize === 1 ? squad1Price : squad2Price) * battlesAmount;

		updateOrderDetails({
			details: JSON.stringify(orderDetails),
			total: +totalPrice.toFixed(2),
		});
	}, [battlesAmount, squadSize]);

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
				marks={squadSliderMarks}
			/>

			<RadioGroup
				onChange={e => setSquadSize(Number(e.target.value))}
				label='How many professionals in a squad you’d like to have?'
				className='w-full mt-5'
				value={squadSize.toString()}
				defaultValue='1'
			>
				<Radio value='1'>1 (1 USD/battle)</Radio>
				<Radio value='2'>2 (2 USD/battle)</Radio>
			</RadioGroup>
		</>
	);
}
