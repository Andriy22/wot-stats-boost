import { useEffect } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore.ts';
import { eventPrice } from '../constants/event-constants.ts';

const FarmExperienceCalculator = () => {
	const updateOrderDetails = useOrderStore(state => state.setOrderDetails);

	useEffect(() => {
		const orderDetails = {
			type: 'event',
		};

		const totalPrice = eventPrice;

		updateOrderDetails({
			details: JSON.stringify(orderDetails),
			total: +totalPrice.toFixed(2),
		});
	}, []);

	return (
		<>
			<div className='p-4 rounded-md'>
				<p className='mb-4'>
					After completing the order, you will be able to receive any of these
					tanks of your choice:
				</p>
				<ul>
					<li className='flex items-center mb-2'>
						<img src='/china.png' alt='China Flag' className='h-4 mr-2' />
						<img src='/ch52.svg' alt='Tank Icon' className='h-4 mr-2' />
						<span>116-F3</span>
					</li>
					<li className='flex items-center mb-2'>
						<img src='/china.png' alt='China Flag' className='h-4 mr-2' />
						<img src='/121.svg' alt='Tank Icon' className='h-4 mr-2' />
						<span>121B</span>
					</li>
					<li className='flex items-center mb-2'>
						<img src='/italy.png' alt='China Flag' className='h-4 mr-2' />
						<img src='/carro.svg' alt='Tank Icon' className='h-4 mr-2' />
						<span>Carro da Combattimento 45 t</span>
					</li>
					<li className='flex items-center mb-2'>
						<img src='/ussr.png' alt='China Flag' className='h-4 mr-2' />
						<img src='/907.svg' alt='Tank Icon' className='h-4 mr-2' />
						<span>Object 907</span>
					</li>
					<li className='flex items-center mb-2'>
						<img src='/usa.png' alt='China Flag' className='h-4 mr-2' />
						<img src='/e6.svg' alt='Tank Icon' className='h-4 mr-2' />
						<span>T95E6</span>
					</li>
					<li className='flex items-center mb-2'>
						<img src='/germany.png' alt='China Flag' className='h-4 mr-2' />
						<img src='/vk.svg' alt='Tank Icon' className='h-4 mr-2' />
						<span>VK 72.01 (K)</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default FarmExperienceCalculator;
