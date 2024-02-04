import { Radio, RadioGroup } from '@nextui-org/react';

interface IProps {
	onChange: (e: number) => void;
	disabled?: boolean;
}

export default function WinRatePicker({ onChange, disabled = false }: IProps) {
	return (
		<RadioGroup
			isDisabled={disabled}
			onChange={e => onChange(+e.target.value)}
			label='Укажите желаемый гарантированный процент побед'
			defaultValue='55'
		>
			<Radio value='55'>55%</Radio>
			<Radio value='60'>60% (+10%)</Radio>
			<Radio value='65'>65% (+35%)</Radio>
		</RadioGroup>
	);
}
