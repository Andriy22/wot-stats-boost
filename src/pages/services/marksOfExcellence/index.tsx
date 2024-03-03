import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import MarksOfExcellenceCalculator from './ui/marksOfExcellenceCalculator.tsx';
import MarksOfExcellenceFAQ from './ui/marksOfExcellenceFAQ.tsx';

export default function MarksOfExcellence() {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>
							Marks of Excellence
						</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							In the heat of battle, marking one's achievements was a tradition.
							Special insignia were emblazoned upon tank barrels to showcase a
							commander's skill and tally of vanquished foes. This rite of valor
							has been carried into the world of World of Tanks. Our service
							pledges to bestow upon any tank the coveted marks of excellence.
							Ascend to the ranks of elite players by adorning your armored
							beast with these symbols of distinction. Once three marks are
							secured, they etch into history, indelible and everlasting.
						</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<MarksOfExcellenceCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
			<ServiceHeader title='FAQ' />
			<div className='mt-5 mx-0'>
				<MarksOfExcellenceFAQ />
			</div>
		</div>
	);
}
