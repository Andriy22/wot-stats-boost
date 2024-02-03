import ProductCard from '../../features/productCard';
import { RouteName } from '../../shared/types/router';

export default function HomePage() {
	return (
		<div className='grid container items-center xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4 my-10'>
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
	);
}
