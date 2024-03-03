import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import EventCalculator from './ui/eventCalculator.tsx';
import EventFAQ from './ui/eventFAQ.tsx';

const EventPage = () => {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>Event “Maneuvers”</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							In the “Maneuvers,” victories will allow your clan to progress
							through a series of 95 stages. Losses and draws do not roll back
							your progress. With each subsequent stage, a victory will bring
							more personal and clan glory points. The catch is that any
							vehicles that participated in your lost battles, as well as
							vehicles destroyed in battles you won, become “knocked out”: they
							will not be able to earn clan glory points and will block the
							clan’s progression. Hence, it is necessary to have a lot of Tier
							10 tanks at disposal
						</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<EventCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
			<ServiceHeader title='FAQ' />
			<div className='mt-5 mx-0'>
				<EventFAQ />
			</div>
		</div>
	);
};

export default EventPage;
