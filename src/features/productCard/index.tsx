import { Button, Card, CardFooter, Image } from '@nextui-org/react';

import { useNavigate } from 'react-router-dom';

interface IProps {
	title: string;
	img: string;
	url: string;
}

export default function ProductCard({ title, img, url }: IProps) {
	const navigate = useNavigate();

	const handleOrderClick = () => {
		navigate(url);
	};

	return (
		<Card
			isFooterBlurred
			className='group items-center overflow-hidden h-60 w-60 my-5 bg-white/10 rounded focus:outline-none focus:ring'
		>
			<div className='flex h-full w-full items-center justify-center'>
				<Image
					removeWrapper
					alt='Relaxing app background'
					height={200}
					width={200}
					className='z-0 object-cover'
					src={img}
				/>
			</div>

			<CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
				<div className='flex flex-grow gap-2 items-center'>
					<div className='flex flex-col mx-3'>
						<p className='text-small text-white/60'>{title}</p>
					</div>
				</div>
				<Button
					radius='full'
					onClick={handleOrderClick}
					color='primary'
					size='sm'
				>
					Order
				</Button>
			</CardFooter>
			<span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-primary transition-all duration-200 group-hover:w-full'></span>
			<span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-primary transition-all duration-200 group-hover:h-full'></span>
			<span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primary transition-all duration-200 group-hover:w-full'></span>
			<span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-primary transition-all duration-200 group-hover:h-full'></span>
		</Card>
	);
}
