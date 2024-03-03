import { Select, SelectItem, Slider } from '@nextui-org/react';

import { useEffect, useMemo, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore.ts';
import WinRatePicker from '../../../../features/winratePicker';
import {
	Nations,
	tankLevels,
	tankTypes,
} from '../../../../shared/constants/globalConstants';
import { mockedTanks } from '../../../../shared/mock';
import { getPercentageIncreaseBasedOnWinRate } from '../../../../shared/utils/winRatePercentCalculator.ts';
import { marksOfExcellenceSliderMarks } from '../constants/marksOfExcellenceConstants.ts';


const MarksOfExcellenceCalculator = () => {
	const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
	const [selectedNation, setSelectedNation] = useState<number | null>(null);
	const [selectedType, setSelectedType] = useState<number | null>(null);
	const [selectedTank, setSelectedTank] = useState<number | null>(null);
	const [currentValue, setCurrentValue] = useState(0);
	const [expectedValue, setExpectedValue] = useState(1);
	const [winRate, setWinrate] = useState(55);

	const setOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		setSelectedTank(null);
	}, [selectedLevel, selectedNation, selectedType]);

	const tanks = useMemo(
		() =>
			mockedTanks.filter(
				x =>
					x.level === selectedLevel &&
					x.nation === selectedNation &&
					x.type === selectedType,
			),
		[selectedLevel, selectedNation, selectedType],
	);

	useEffect(() => {
		if (expectedValue <= currentValue) {
			setExpectedValue(currentValue + 1);
		}
	}, [currentValue]);

	useEffect(() => {
		if (!selectedTank) {
			setCurrentValue(0);
			setExpectedValue(1);
		}
	}, [selectedTank]);

	useEffect(() => {
		const tank = tanks.find(x => x.id === selectedTank);

		if (!tank) {
			return;
		}

		const diff = expectedValue - currentValue;

		if (diff <= 0) {
			return;
		}

		let firstStage = 0;
		let secondStage = 0;
		let thirdStage = 0;

		// Calculate the first stage count
		if (currentValue < 65) {
			firstStage = Math.min(65, expectedValue) - currentValue;
		}

		// Calculate the second stage count
		if (expectedValue >= 65) {
			secondStage = Math.min(85, expectedValue) - Math.max(65, currentValue);
		}

		// Calculate the third stage count
		if (expectedValue >= 85) {
			thirdStage = expectedValue - Math.max(85, currentValue);
		}

		const details = {
			tank,
			winRate,
			currentValue,
			expectedValue,
		};

		let sum =
			tank.firstStage * firstStage +
			tank.secondStage * secondStage +
			thirdStage * tank.thirdStage;

		const percent = 100 + getPercentageIncreaseBasedOnWinRate(winRate);

		sum = sum * (percent / 100);

		setOrderDetails({
			details: JSON.stringify(details),
			total: +sum.toFixed(2),
		});
	}, [selectedTank, currentValue, expectedValue, winRate]);

	return (
		<>
			<div className='grid grid-cols-2 gap-8'>
				<Select
					isRequired
					label='Level'
					placeholder='Level'
					onChange={x => setSelectedLevel(+(x?.target?.value ?? 0))}
					className='w-full'
				>
					{tankLevels.map(level => (
						<SelectItem key={level.value} value={level.value}>
							{level.title}
						</SelectItem>
					))}
				</Select>
				<Select
					isRequired
					label='Nation'
					isDisabled={!selectedLevel}
					onChange={x => setSelectedNation(+(x?.target?.value ?? 0))}
					placeholder='Nation'
					className='w-full'
				>
					{Nations.map(nation => (
						<SelectItem key={nation.value} value={nation.value}>
							{nation.title}
						</SelectItem>
					))}
				</Select>
			</div>
			<div className='grid grid-cols-2 gap-8 mt-8'>
				<Select
					isRequired
					label='Type'
					isDisabled={!selectedNation}
					placeholder='Type'
					onChange={x => setSelectedType(+(x?.target?.value ?? 0))}
					className='w-full'
				>
					{tankTypes.map(level => (
						<SelectItem key={level.value} value={level.value}>
							{level.title}
						</SelectItem>
					))}
				</Select>
				<Select
					isRequired
					label='Nation'
					isDisabled={!selectedType}
					onChange={x => setSelectedTank(+(x?.target?.value ?? 0))}
					placeholder='Nation'
					className='w-full'
				>
					{tanks.map(tank => (
						<SelectItem key={tank.id} value={tank.id}>
							{tank.name}
						</SelectItem>
					))}
				</Select>
			</div>

			<Slider
				size='sm'
				label='Current %: '
				className='w-full mt-5'
				defaultValue={currentValue}
				minValue={0}
				isDisabled={!selectedTank}
				maxValue={94}
				onChange={e => setCurrentValue(+e)}
				renderThumb={props => (
					<div
						{...props}
						className='group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing'
					>
						<span className='transition-transform bg-gradient-to-br shadow-small from-primary-100 to-primary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80' />
					</div>
				)}
				marks={marksOfExcellenceSliderMarks}
			/>

			<Slider
				size='sm'
				label='Expected %: '
				className='w-full mt-5'
				defaultValue={expectedValue}
				minValue={currentValue}
				isDisabled={!selectedTank}
				value={expectedValue}
				maxValue={95}
				onChange={e => setExpectedValue(+e)}
				renderThumb={props => (
					<div
						{...props}
						className='group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing'
					>
						<span className='transition-transform bg-gradient-to-br shadow-small from-primary-100 to-primary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80' />
					</div>
				)}
				marks={marksOfExcellenceSliderMarks}
			/>

			<div className='mt-5 w-full'>
				<WinRatePicker
					disabled={!selectedTank}
					onChange={(e: number) => setWinrate(+e)}
				/>
			</div>
		</>
	);
};

export default MarksOfExcellenceCalculator;
