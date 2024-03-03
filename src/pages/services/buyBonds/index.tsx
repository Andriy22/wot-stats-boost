import TotalCard from '../../../features/totalCard';
import BuyBondsCalculator from './ui/buyBondsCalculator.tsx';

export default function BuyBondsPage() {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>Buy Bonds</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>
							Bonds are the rarest in-game currency, allowing you to purchase
							the strongest vehicles of levels VIII and X, as well as upgraded
							equipment. But it's not easy to get them: you need to spend a lot
							of time in ranked battles or on the Global Map. If you don't want
							to waste your nerves and time, you can buy them from us.
						</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<BuyBondsCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
		</div>
	);
}
