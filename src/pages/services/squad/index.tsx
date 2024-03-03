import TotalCard from '../../../features/totalCard';
import SquadCalculator from './ui/squadCalculator.tsx';

export default function SquadPage() {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>
							Squad with professionals
						</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							Boosting of percentage of victories is a very popular service, as
							beside the improving of statistics there is live communication and
							teamwork. The player watches the game of more experienced players
							and then becomes a better player themselves. Moreover, if the
							player follows all the instructions – the gaming process becomes
							more enjoyable and productive.
						</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<SquadCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
		</div>
	);
}
