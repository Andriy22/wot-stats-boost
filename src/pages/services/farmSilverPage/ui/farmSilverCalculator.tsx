import { Checkbox, Slider } from '@nextui-org/react';

import { useEffect, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore';
import WinRatePicker from '../../../../features/winratePicker';
import { getPercentByWinRate } from '../../../../shared/utils/winRatePercentCalculator';
import {
	farmSilverPrice,
	farmSilverSliderMarks,
} from '../constants/farmSilver-constants';

export default function FarmSilverCalculator() {
	const [amount, setAmount] = useState<number>(1);
	const [useReserves, setUseReserves] = useState<boolean>(false);
	const [isOneTank, setIsOneTank] = useState<boolean>(true);
	const [winRate, setWinRate] = useState<number>(50);

	const setOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		const details = { amount, useReserves, isOneTank, winRate };

		let sum = farmSilverPrice * amount;

		let percent = 100 + getPercentByWinRate(winRate);

		if (useReserves) {
			percent = percent - 35;
		}

		if (!isOneTank) {
			percent = percent - 5;
		}

		sum = sum * (percent / 100);

		setOrderDetails({
			details: JSON.stringify(details),
			total: +sum.toFixed(2),
		});
	}, [amount, useReserves, isOneTank, winRate]);

	return (
		<>
			<Slider
				size='sm'
				label='Amount of silver: '
				className='w-full mt-5'
				defaultValue={amount}
				minValue={1}
				onChange={e => setAmount(+e)}
				classNames={{
					base: 'max-w-md gap-3',
					track: 'border-s-primary-100',
					filler: 'bg-gradient-to-r from-primary-100 to-primary-500',
				}}
				renderThumb={props => (
					<div
						{...props}
						className='group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing'
					>
						<span className='transition-transform bg-gradient-to-br shadow-small from-primary-100 to-primary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80' />
					</div>
				)}
				marks={farmSilverSliderMarks}
			/>
			<Checkbox
				isSelected={useReserves}
				onChange={e => setUseReserves(!!e.target.checked)}
				className='mt-5 w-full'
			>
				В наличии личные резервы на +50% к серебру (-35%)
			</Checkbox>
			<Checkbox
				defaultSelected
				className='mt-5 w-full'
				isSelected={!isOneTank}
				onChange={e => setIsOneTank(!e.target.checked)}
			>
				У меня есть минимум 2 премиум танка 8 уровня из рекомендуемых (-5%)
			</Checkbox>
			<div className='mt-5 w-full'>
				<WinRatePicker onChange={(e: number) => setWinRate(+e)} />
			</div>
		</>
	);
}
