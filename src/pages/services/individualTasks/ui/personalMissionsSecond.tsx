import ServiceHeader from '../../../../features/serviceHeader';
import TotalCard from '../../../../features/totalCard';
import {
	personalMissionsSecondStageTabs,
	personalMissionsSecondStageTabsKeys,
} from '../constants/personalMissions-constants.ts';
import IndividualTasksComponent from './IndividualTasksComponent.tsx';

const PersonalMissionsSecond = () => {
	return (
		<div className='container'>
			<ServiceHeader title='Personal Missions 2.0' />
			<div className='grid items-start xl:grid-cols-3 grid-cols-1 gap-4 my-5'>
				<div className='w-full col-span-2 flex justify-start flex-col'>
					<div>
						<IndividualTasksComponent
							initialTabKey={personalMissionsSecondStageTabsKeys.Excalibur}
							tabs={personalMissionsSecondStageTabs}
						/>
					</div>
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
		</div>
	);
};

export default PersonalMissionsSecond;
