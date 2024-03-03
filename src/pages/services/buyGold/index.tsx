import TotalCard from '../../../features/totalCard';
import BuyGoldCalculator from './ui/buyGoldCalculator.tsx';

export default function BuyGoldPage() {
	return (
		<div className='container'>
			<div className='py-8 px-4 rounded-lg shadow-lg'>
				<div className='container mx-auto grid md:grid-cols-3 gap-4 items-center'>
					<div className='md:col-span-1'>
						<h2 className='text-3xl font-bold uppercase'>Buy Gold</h2>
					</div>
					<div className='md:col-span-2 text-gray-400'>
						<p>text...</p>
					</div>
				</div>
			</div>

			<div className='grid items-start xl:grid-cols-2 grid-cols-1 gap-4 my-5'>
				<div className='w-full flex md:justify-center justify-start flex-col'>
					<BuyGoldCalculator />
				</div>
				<div className='w-full justify-end'>
					<TotalCard />
				</div>
			</div>
		</div>
	);
}
