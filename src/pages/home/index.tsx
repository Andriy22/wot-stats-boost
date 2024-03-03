import { Divider } from '@nextui-org/react';

import ProductCard from '../../features/productCard';
import { RouteName } from '../../shared/types/router';
import GlobalFAQ from '../../widgets/global-faq';
import Statistic from '../../widgets/statistic';

export default function HomePage() {
	return (
		<div className='container'>
			<Statistic />
			<Divider className='inset-0 left-0 mt-5' />

			<div className={'mt-10 mb-5 text-3xl'}>Our Services</div>

			<div className='grid items-center xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4 '>
				<ProductCard
					title='Farm Silver'
					img='https://wot.raisen.ru/img/coins.svg'
					url={RouteName.FARM_SILVER}
				/>
				<ProductCard
					title='Personal missions 1.0'
					img='https://wot.raisen.ru/img/lbz.svg'
					url={RouteName.PERSONAL_MISSIONS_1}
				/>
				<ProductCard
					title='Personal missions 2.0'
					img='https://wot.raisen.ru/img/lbz.svg'
					url={RouteName.PERSONAL_MISSIONS_2}
				/>
				<ProductCard
					title='Marks Of Excellence'
					img='https://wot.raisen.ru/img/gun.svg'
					url={RouteName.MARKS_OF_EXCELLENCE}
				/>
				<ProductCard
					title='Experience farm'
					img='/10lvl.svg'
					url={RouteName.LOGIN}
				/>
				<ProductCard
					title='Test'
					img='https://wot.raisen.ru/img/gun.svg'
					url={RouteName.LOGIN}
				/>
				<ProductCard
					title='Test'
					img='https://wot.raisen.ru/img/gun.svg'
					url={RouteName.LOGIN}
				/>
				<ProductCard
					title='Test'
					img='https://wot.raisen.ru/img/gun.svg'
					url={RouteName.LOGIN}
				/>
				<ProductCard
					title='Test'
					img='https://wot.raisen.ru/img/gun.svg'
					url={RouteName.LOGIN}
				/>
				<ProductCard
					title='Test'
					img='https://wot.raisen.ru/img/gun.svg'
					url={RouteName.LOGIN}
				/>
			</div>

			<div>
				<GlobalFAQ />
			</div>
		</div>
	);
}
