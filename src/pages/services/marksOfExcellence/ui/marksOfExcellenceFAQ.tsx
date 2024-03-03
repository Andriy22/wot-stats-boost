const MarksOfExcellenceFaq = () => {
	return (
		<article className='space-y-6 p-5 rounded-lg shadow-lg'>
			<section>
				<p className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
					Essential conditions:
				</p>
				<ul className='list-disc list-inside space-y-2'>
					<li className='text-gray-700 dark:text-gray-300'>
						Active premium account
					</li>
					<li className='text-gray-700 dark:text-gray-300'>
						There must be enough silver to set the necessary parts, or enough
						gold to rearrange the parts, taking them from the other tank, if the
						order executor needs it.
					</li>
					<li className='text-gray-700 dark:text-gray-300'>
						Your crew should have 100% level in basic Skills and 2 full Perks
					</li>
					<li className='text-gray-700 dark:text-gray-300'>
						Ability to retrain the crew, if needed
					</li>
					<li className='text-gray-700 dark:text-gray-300'>
						The tank (or tanks) must have top-end equipment
					</li>
				</ul>
			</section>
		</article>
	);
};

export default MarksOfExcellenceFaq;
