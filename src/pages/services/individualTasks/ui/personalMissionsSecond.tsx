import ServiceHeader from '../../../../features/serviceHeader';
import TotalCard from '../../../../features/totalCard';
import {
	personalMissionsSecondStageTabs,
	personalMissionsSecondStageTabsKeys,
} from '../constants/personalMissions-constants.ts';
import IndividualTasksComponent from './IndividualTasksComponent.tsx';
import PersonalMissionsFAQ from './personalMissionsFAQ.tsx';

const PersonalMissionsSecond = () => {
	return (
		<div className='container'>
			<div className='text-white py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>
							Personal Mission 2.0
						</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							Three combat operations with different conditions and three new
							tanks as the main reward. Completing of combat tasks is limited by
							the levels of vehicles. Difficulty of every new personal mission
							2.0 changes in accordance with the vehicles. In every branch,
							after completing of the first 8-10 tasks, you will need to
							demonstrate your best tactical and driving skills. Usually,
							players have not enough time or skills to complete these tasks.
							Our service will help you to complete any personal mission
							successfully.
						</p>
					</div>
				</div>
			</div>

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
			<ServiceHeader title='FAQ' />
			<div className='mt-5 mx-0'>
				<PersonalMissionsFAQ />
			</div>
		</div>
	);
};

export default PersonalMissionsSecond;
