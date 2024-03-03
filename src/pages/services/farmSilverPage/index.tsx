import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import FarmSilverCalculator from './ui/farmSilverCalculator';
import FarmSilverFAQ from './ui/farmSilverFAQ.tsx';

export default function FarmSilverPage() {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>Credits farm</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							Credits farming in World of Tanks is a difficult task, but above
							all – boring. The credit farm in random is not an enjoyable
							process, because of its monotony and playing at level 8 against
							the vehicles of 9-10 levels.
						</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<FarmSilverCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
			<ServiceHeader title='FAQ' />
			<div className='mt-5 mx-0'>
				<FarmSilverFAQ />
			</div>
		</div>
	);
}
