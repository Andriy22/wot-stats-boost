import ServiceHeader from '../../../../features/serviceHeader';
import TotalCard from '../../../../features/totalCard';
import {
	personalMissionsFirstStageTabs,
	personalMissionsFirstStageTabsKeys,
} from '../constants/personalMissions-constants.ts';
import IndividualTasksComponent from './IndividualTasksComponent.tsx';

const PersonalMissionsFirst = () => {
	return (
		<div className='container'>
			<ServiceHeader title='Personal Missions 1.0' />
			<div className='grid items-start xl:grid-cols-3 grid-cols-1 gap-4 my-5'>
				<div className='w-full col-span-2 flex justify-start flex-col'>
					<div>
						<IndividualTasksComponent
							initialTabKey={personalMissionsFirstStageTabsKeys.Stug}
							tabs={personalMissionsFirstStageTabs}
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

export default PersonalMissionsFirst;
