const GlobalFAQ = () => {
	return (
		<div className='flex justify-center'>
			<div className='py-20 flex flex-col w-full'>
				<div className='flex flex-col items-center'>
					<span className='text-blue-600 text-2xl'>FAQ</span>
				</div>

				<div className='flex-col gap-10 text-justify pt-5 grid grid-cols-2'>
					<div>
						<div className='flex justify-center gap-5'>
							<div className='flex flex-col gap-3'>
								<h3 className='text-xl'>How does the website work?</h3>
								<span className='text-gray-400'>
									You select the service you need and place an order. We choose
									the most experienced driver, who can manage it and add you to
									a chat. Then you pay for the order in any convenient way.
									After we completed your order – enjoy the work done.
								</span>
							</div>
						</div>

						<div className='flex justify-center pt-5 gap-5'>
							<div className='flex flex-col gap-3'>
								<h3 className='text-xl'>What if my account would be stolen?</h3>
								<span className='text-gray-400'>
									Impossible! Your account is linked to your mobile phone
									number. Even if we wanted to change your account password, you
									would get a text message – without this verification it’s
									impossible to change the password.
								</span>
							</div>
						</div>
					</div>

					<div>
						<div className='flex justify-center gap-5'>
							<div className='flex flex-col gap-3'>
								<h3 className='text-xl'>
									Who will work on upgrading of my account?
								</h3>
								<span className='text-gray-400'>
									Upgrading of the accounts is provided by the professional
									players, who have large experience in World of Tanks. As a
									rule, they are former cyber sportsmen. They are vividly aware
									of gameplay mechanics and have purple statistics.
								</span>
							</div>
						</div>

						<div className='flex pt-5 justify-center gap-5'>
							<div className='flex flex-col gap-3'>
								<h3 className='text-xl'>
									Can I play while my account is being upgraded?
								</h3>
								<span className='text-gray-400'>
									Sure. We negotiate the time of your “gap”, but there could be
									some nuances for the particular orders. For example, if you
									ordered to get marks of excellence for IS-7, you can’t use
									this tank until we complete your order.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GlobalFAQ;
