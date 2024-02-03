import ServiceHeader from '../../../../features/serviceHeader';
import { IPersonalMission } from '../../../../shared/types/personal-missions';
import IndividualTaskCard from './individualTaskCard.tsx';

interface IProps {
	missions: IPersonalMission[];
	title: string;
}

const PersonalMissionsList = ({ title, missions }: IProps) => {
	return (
		<>
			<ServiceHeader title={title} size={'2xl'} />
			<div
				className={
					'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid'
				}
			>
				{missions.map(mission => (
					<div key={mission.id} className={'mt-5'}>
						<IndividualTaskCard mission={mission} />
					</div>
				))}
			</div>
		</>
	);
};

export default PersonalMissionsList;
