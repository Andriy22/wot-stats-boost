import { Radio, RadioGroup } from '@nextui-org/react';

interface WinRatePickerProps {
	onChange: (winRate: number) => void;
	disabled?: boolean;
}

export default function WinRatePicker({
	onChange,
	disabled = false,
}: WinRatePickerProps) {
	return (
		<RadioGroup
			isDisabled={disabled}
			onChange={e => onChange(Number(e.target.value))}
			label='Select your desired win rate'
			defaultValue='55'
		>
			<Radio value='55'>55%</Radio>
			<Radio value='60'>60% (+10% bonus)</Radio>
			<Radio value='65'>65% (+35% bonus)</Radio>
		</RadioGroup>
	);
}
