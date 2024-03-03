const Statistic = () => {
	return (
		<div className='pt-20 pb-16 px-6'>
			<div className='flex flex-col items-center'>
				<h3 className='text-3xl text-center'>
					WORLD OF TANKS ACCOUNTS UPGRADING
				</h3>
				<span className='max-w-2xl text-center'>
					We offer a wide range of services for upgrading of tanks, completing
					of personal missions, silver farming and much more
				</span>
			</div>
			<div className='flex flex-row flex-wrap justify-center gap-16 pt-16 sm:gap-40'>
				<div className='flex flex-col items-center'>
					<h2 className='text-2xl text-blue-600'>500+</h2>
					<span className='text-center font-medium'>Completed orders</span>
				</div>
				<div className='flex flex-col items-center'>
					<h2 className='text-2xl text-blue-600'>5+</h2>
					<span className='text-center font-medium'>Years of experience</span>
				</div>
				<div className='flex flex-col items-center'>
					<h2 className='text-2xl text-blue-600'>70+</h2>
					<span className='text-center font-medium'>Clients</span>
				</div>
				<div className='flex flex-col items-center'>
					<h2 className='text-2xl text-blue-600'>8</h2>
					<span className='text-center font-medium'>Gamers in the team</span>
				</div>
			</div>
		</div>
	);
};

export default Statistic;
