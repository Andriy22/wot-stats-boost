import ServiceHeader from '../../../features/serviceHeader';
import TotalCard from '../../../features/totalCard';
import FarmExperienceCalculator from './ui/farmExperienceCalculator.tsx';
import FarmExperienceFAQ from './ui/farmExperienceFAQ.tsx';

const FarmExperiencePage = () => {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>Experience farm</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							Experience is an essential part of a gaming process in World of
							Tanks, which helps to improve your account. The main point where
							the earned experience is applied is upgrading of tanks in the
							branches you need. Amount of experience you earn after the battle,
							depends on your battle efficiency. The bigger damage you cause,
							the more tanks you spot, and the more efficient you battle is –
							the more experience you get. Experience farms is our prior
							service, so we provide it quickly and accurately.
						</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<FarmExperienceCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
			<ServiceHeader title='FAQ' />
			<div className='mt-5 mx-0'>
				<FarmExperienceFAQ />
			</div>
		</div>
	);
};

export default FarmExperiencePage;
