import { Card, CardBody, Checkbox } from '@nextui-org/react';

import { usePersonalMissionsStore } from '../../../../app/stores/personalMissionsStore.ts';
import { IPersonalMission } from '../../../../shared/types/personal-missions';

interface IProps {
	mission: IPersonalMission;
}

const IndividualTaskCard = ({ mission }: IProps) => {
	const { setMission } = usePersonalMissionsStore();

	const handleChange = (selected: boolean) => {
		const copiedMission = { ...mission };

		copiedMission.isSelected = selected;

		setMission(copiedMission);
	};

	const handleHonorChange = (selected: boolean) => {
		const copiedMission = { ...mission };

		if (selected) {
			copiedMission.isSelected = selected;
		}

		copiedMission.withHonors = selected;

		setMission(copiedMission);
	};

	return (
		<Card
			className={`w-36 h-24 rounded-b-xl ${mission.title ? 'bg-opacity-30 bg-stripe-gradient' : ''} ${mission.isSelected ? (mission.withHonors ? 'bg-yellow-300' : 'bg-primary') : ''}`}
		>
			<CardBody className='backdrop-blur-2xl'>
				<Checkbox
					className='justify-start'
					onValueChange={handleChange}
					isSelected={mission.isSelected}
					defaultSelected={mission.isSelected}
				>
					<div>
						<p>{mission.title}</p>
						<p className={'text-xs'}> {mission.price.toFixed(2)}$</p>
					</div>
				</Checkbox>
				<Checkbox
					color={'warning'}
					onValueChange={handleHonorChange}
					isSelected={mission.withHonors}
					defaultSelected={mission.withHonors}
					className='justify-end pt-5'
					size='sm'
				>
					with honors
				</Checkbox>
			</CardBody>
		</Card>
	);
};

export default IndividualTaskCard;
