import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import IndividualTaskFirstStage from './ui/individualTaskFirstStage.tsx';

const IndividualTasksPage = () => {
	return (
		<div className='container'>
			<ServiceHeader title='Personal Missions 1.0' />
			<div className='grid items-start xl:grid-cols-3 grid-cols-1 gap-4 my-5'>
				<div className='w-full col-span-2 flex justify-start flex-col'>
					<div>
						<IndividualTaskFirstStage />
					</div>
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
		</div>
	);
};

export default IndividualTasksPage;
