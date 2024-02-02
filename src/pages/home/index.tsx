import ProductCard from '../../features/productCard';
import { RouteName } from '../../shared/types/router';

export default function HomePage() {
	return (
		<div className='grid container items-center xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4 my-10'>
			<ProductCard
				title='Farm Silver'
				img='https://wot.raisen.ru/img/gun.svg'
				url={RouteName.FARM_SILVER}
			/>
			<ProductCard
				title='Test'
				img='https://wot.raisen.ru/img/gun.svg'
				url={RouteName.INDIVIDUAL_TASKS}
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
			<ProductCard
				title='Test'
				img='https://wot.raisen.ru/img/gun.svg'
				url={RouteName.LOGIN}
			/>
		</div>
	);
}
