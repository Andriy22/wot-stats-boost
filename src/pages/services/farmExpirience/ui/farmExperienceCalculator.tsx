import { Checkbox, Slider, Textarea } from '@nextui-org/react';

import { useEffect, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore.ts';
import WinRatePicker from '../../../../features/winratePicker';
import { getPercentageIncreaseBasedOnWinRate } from '../../../../shared/utils/winRatePercentCalculator.ts';
import {
	farmExperiencePrice,
	farmExperienceSliderMarks,
} from '../constants/farmExperience-constants.ts';


const FarmExperienceCalculator = () => {
	const [xpAmount, setXpAmount] = useState(50);

	const [farmOnPremiumTank, setFarmOnPremiumTank] = useState(false);
	const [farmOnSPG, setFarmOnSPG] = useState(false);
	const [useMaxReserves, setUseMaxReserves] = useState(false);
	const [useFiftyReserves, setUseFiftyReserves] = useState(false);
	const [xpBonusForAllBattles, setXpBonusForAllBattles] = useState(false);

	const [tanksComment, setTanksComment] = useState('');

	const [desiredWinRate, setDesiredWinRate] = useState(50);

	const updateOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		const orderDetails = {
			xpAmount,
			farmOnPremiumTank,
			farmOnSPG,
			useMaxReserves,
			useFiftyReserves,
			xpBonusForAllBattles,
			desiredWinRate,
			tanksComment,
		};

		let totalPrice = farmExperiencePrice * xpAmount;
		let priceAdjustmentPercentage =
			100 + getPercentageIncreaseBasedOnWinRate(desiredWinRate);

		if (farmOnPremiumTank) {
			priceAdjustmentPercentage -= 10;
		}

		if (farmOnSPG) {
			priceAdjustmentPercentage *= 1.25;
		}

		if (useMaxReserves) {
			priceAdjustmentPercentage -= 50;
		}

		if (useFiftyReserves) {
			priceAdjustmentPercentage -= 25;
		}

		if (xpBonusForAllBattles) {
			priceAdjustmentPercentage *= 0.25;
		}

		totalPrice *= priceAdjustmentPercentage / 100;

		updateOrderDetails({
			details: JSON.stringify(orderDetails),
			total: +totalPrice.toFixed(2),
		});
	}, [
		xpAmount,
		farmOnPremiumTank,
		farmOnSPG,
		useMaxReserves,
		useFiftyReserves,
		xpBonusForAllBattles,
		desiredWinRate,
		tanksComment,
	]);

	return (
		<>
			<Slider
				size='sm'
				label='Enter amount of experience you need (in thousand):'
				className='w-full mt-5'
				defaultValue={xpAmount}
				minValue={50}
				step={1}
				maxValue={1000}
				onChange={e => setXpAmount(+e)}
				renderThumb={props => (
					<div {...props} className='relative flex items-center justify-center'>
						<div className='group p-1 bg-gradient-to-r from-green-400 to-blue-500 border border-gray-200 dark:border-gray-400/50 shadow-md rounded-full cursor-grab active:cursor-grabbing'>
							<span className='block w-5 h-5 bg-white rounded-full shadow-sm' />
						</div>
					</div>
				)}
				marks={farmExperienceSliderMarks}
			/>
			<Checkbox
				isSelected={farmOnPremiumTank}
				onChange={e => setFarmOnPremiumTank(e.target.checked)}
				className='mt-5 w-full'
			>
				Farm at premium tanks is required (-10%)
			</Checkbox>
			<Checkbox
				isSelected={farmOnSPG}
				onChange={e => setFarmOnSPG(e.target.checked)}
				className='mt-5 w-full'
			>
				Need experience farming on SPG (+25%)
			</Checkbox>
			<Checkbox
				isSelected={useFiftyReserves}
				onChange={e => {
					setUseFiftyReserves(e.target.checked);
					setUseMaxReserves(false);
				}}
				className='mt-5 w-full'
			>
				I will provide personal reserves +50% to experience (-25%)
			</Checkbox>
			<Checkbox
				isSelected={useMaxReserves}
				onChange={e => {
					setUseMaxReserves(e.target.checked);
					setUseFiftyReserves(false);
				}}
				className='mt-5 w-full'
			>
				I will provide personal reserves +100% to experience (-50%)
			</Checkbox>

			<Checkbox
				defaultSelected
				className='mt-5 w-full'
				isSelected={xpBonusForAllBattles}
				onChange={e => setXpBonusForAllBattles(e.target.checked)}
			>
				I will provide x5 to experience for all battles
			</Checkbox>

			<Textarea
				label='Enter the tank(s) name (if there are some – specify how many experience at each)'
				variant='bordered'
				placeholder='For example: IS3 - 50K, T10 - 100K'
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
};

export default FarmExperienceCalculator;
