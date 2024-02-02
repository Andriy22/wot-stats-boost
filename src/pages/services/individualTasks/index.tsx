import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import IndividualTaskCard from './ui/individualTaskCard.tsx';

const IndividualTasksPage = () => {
	return (
		<div className='container'>
			<ServiceHeader title='Individual Tasks' />
			<div className='grid container items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<IndividualTaskCard
						withHonors={true}
						isSelected={true}
						title='Task 1'
					/>
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
		</div>
	);
};

export default IndividualTasksPage;
