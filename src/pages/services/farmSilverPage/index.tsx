import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import FarmSilverCalculator from './ui/farmSilverCalculator';

export default function FarmSilverPage() {
	return (
		<div className='container'>
			<ServiceHeader title='Farm Silver' />
			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<FarmSilverCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
			{/*<ServiceHeader title='FAQ' />*/}
			{/*<div className='mt-5 mx-0'>*/}
			{/*	<FarmSilverFAQ />*/}
			{/*</div>*/}
		</div>
	);
}
