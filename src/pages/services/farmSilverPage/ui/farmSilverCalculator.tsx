import { Checkbox, Slider } from '@nextui-org/react';

import { useEffect, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore';
import WinRatePicker from '../../../../features/winratePicker';
import { getPercentageIncreaseBasedOnWinRate } from '../../../../shared/utils/winRatePercentCalculator';
import {
	farmSilverPrice,
	farmSilverSliderMarks,
} from '../constants/farmSilver-constants';

export default function FarmSilverCalculator() {
	const [silverAmount, setSilverAmount] = useState(1); // Amount of silver to farm
	const [usePersonalReserves, setUsePersonalReserves] = useState(false); // State for using personal reserves
	const [hasMultiplePremiumTanks, setHasMultiplePremiumTanks] = useState(true); // User has multiple recommended premium tanks
	const [desiredWinRate, setDesiredWinRate] = useState(50); // Desired win rate percentage

	const updateOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		const orderDetails = {
			silverAmount,
			usePersonalReserves,
			hasMultiplePremiumTanks,
			desiredWinRate,
		};

		let totalPrice = farmSilverPrice * silverAmount;
		let priceAdjustmentPercentage =
			100 + getPercentageIncreaseBasedOnWinRate(desiredWinRate);

		if (usePersonalReserves) {
			priceAdjustmentPercentage -= 35; // Applying discount for using personal reserves
		}

		if (!hasMultiplePremiumTanks) {
			priceAdjustmentPercentage -= 5; // Applying discount for having multiple premium tanks
		}

		totalPrice *= priceAdjustmentPercentage / 100;

		updateOrderDetails({
			details: JSON.stringify(orderDetails),
			total: +totalPrice.toFixed(2),
		});
	}, [
		silverAmount,
		usePersonalReserves,
		hasMultiplePremiumTanks,
		desiredWinRate,
	]);

	return (
		<>
			<Slider
				size='sm'
				label='Amount of silver (millions): '
				className='w-full mt-5'
				defaultValue={silverAmount}
				minValue={1}
				step={1}
				maxValue={100}
				onChange={e => setSilverAmount(+e)}
				renderThumb={props => (
					<div {...props} className='relative flex items-center justify-center'>
						<div className='group p-1 bg-gradient-to-r from-green-400 to-blue-500 border border-gray-200 dark:border-gray-400/50 shadow-md rounded-full cursor-grab active:cursor-grabbing'>
							<span className='block w-5 h-5 bg-white rounded-full shadow-sm' />
						</div>
					</div>
				)}
				marks={farmSilverSliderMarks}
			/>
			<Checkbox
				isSelected={usePersonalReserves}
				onChange={e => setUsePersonalReserves(e.target.checked)}
				className='mt-5 w-full'
			>
				Have personal reserves for +50% silver (-35% discount)
			</Checkbox>
			<Checkbox
				defaultSelected
				className='mt-5 w-full'
				isSelected={!hasMultiplePremiumTanks}
				onChange={e => setHasMultiplePremiumTanks(!e.target.checked)}
			>
				I have at least 2 recommended premium tanks of tier 8 (-5% discount)
			</Checkbox>
			<div className='mt-5 w-full'>
				<WinRatePicker onChange={e => setDesiredWinRate(+e)} />
			</div>
		</>
	);
}
