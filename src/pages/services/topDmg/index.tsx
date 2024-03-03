import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import TopDmgCalculator from './ui/topDmgCalculator.tsx';
import TopDmgFAQ from './ui/topDmgFAQ.tsx';

export default function TopDmgPage() {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>
							Battles for maximum damage
						</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							Medium damage level of the vehicles is an important rate, which is
							highly valued, especially when joining clans. On some tanks you
							can play successfully, but on the other ones you have average
							damage lower than 50% of players? We will easily raise your
							average damage for maximum. Moreover, you will get lots of useful
							bonuses. Ordering 100 battles and more, we guarantee the getting
							of “Mastery” or three Marks of Excellence.
						</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<TopDmgCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
			<ServiceHeader title='FAQ' />
			<div className='mt-5 mx-0'>
				<TopDmgFAQ />
			</div>
		</div>
	);
}
