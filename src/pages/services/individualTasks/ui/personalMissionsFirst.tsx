import ServiceHeader from '../../../../features/serviceHeader';
import TotalCard from '../../../../features/totalCard';
import {
	personalMissionsFirstStageTabs,
	personalMissionsFirstStageTabsKeys,
} from '../constants/personalMissions-constants.ts';
import IndividualTasksComponent from './IndividualTasksComponent.tsx';
import PersonalMissionsFAQ from './personalMissionsFAQ.tsx';

const PersonalMissionsFirst = () => {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl  font-bold uppercase'>
							Personal Mission 1.0
						</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							Completing of personal missions allows you to demonstrate your
							skills, leaning on yourself only. The main goal of completing of
							personal missions is getting of the unique vehicles. There are
							several quests developed for every type of tank: 14 of them
							include basic combat tasks, and the last one is final, after you
							complete it successfully, you will get that cherished tank to your
							hangar. The quests begin with the simple tasks and step by step
							their difficulty increases. At this level lots of gamers require
							some help, so they ask us for the professional assistance.
						</p>
					</div>
				</div>
			</div>

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
			<ServiceHeader title='FAQ' />
			<div className='mt-5 mx-0'>
				<PersonalMissionsFAQ />
			</div>
		</div>
	);
};

export default PersonalMissionsFirst;
