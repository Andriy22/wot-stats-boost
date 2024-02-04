import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import MarksOfExcellenceCalculator from './ui/marksOfExcellenceCalculator.tsx';

export default function MarksOfExcellence() {
	return (
		<div className='container'>
			<ServiceHeader size={'2xl'} title='Marks Of Excellence' />
			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<MarksOfExcellenceCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
		</div>
	);
}
