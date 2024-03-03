import { Divider } from '@nextui-org/react';

import { useEffect } from 'react';

import { useOrderStore } from '../../app/stores/orderStore.ts';
import ProductCard from '../../features/productCard';
import { RouteName } from '../../shared/types/router';
import GlobalFAQ from '../../widgets/global-faq';
import Statistic from '../../widgets/statistic';

export default function HomePage() {
	const reset = useOrderStore(state => state.reset);

	useEffect(() => {
		reset();
	}, []);

	return (
		<div className='container '>
			<Statistic />
			<Divider className='inset-0 left-0 mt-5' />

			<div className={'mt-10 mb-5 text-3xl'}>Our Services</div>

			<div className='grid items-center xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4 '>
				<ProductCard
					title='Farm Silver'
					img='/coins.svg'
					url={RouteName.FARM_SILVER}
				/>
				<ProductCard
					title='Personal missions 1.0'
					img='/lbz.svg'
					url={RouteName.PERSONAL_MISSIONS_1}
				/>
				<ProductCard
					title='Personal missions 2.0'
					img='/lbz.svg'
					url={RouteName.PERSONAL_MISSIONS_2}
				/>
				<ProductCard
					title='Marks Of Excellence'
					img='/gun.svg'
					url={RouteName.MARKS_OF_EXCELLENCE}
				/>
				<ProductCard
					title='Experience farm'
					img='/10lvl.svg'
					url={RouteName.FARM_EXPERIENCE}
				/>
				<ProductCard
					title='Event “Maneuvers”'
					img='/global_ivent.svg'
					url={RouteName.EVENT}
				/>
				<ProductCard
					title='Battles for maximum damage'
					img='/topdmg.svg'
					url={RouteName.TOP_DMG}
				/>
				<ProductCard
					title='Buy gold'
					img='/coins.svg'
					url={RouteName.BUY_GOLD}
				/>
				<ProductCard
					title='Buy bonds'
					img='/coins.svg'
					url={RouteName.BUY_BONDS}
				/>
				<ProductCard
					title='Squad with professionals'
					img='/vzvod.svg'
					url={RouteName.SQUAD}
				/>
			</div>

			<div>
				<GlobalFAQ />
			</div>
		</div>
	);
}
