import {
	Button,
	Checkbox,
	Input,
	Select,
	SelectItem,
	Textarea,
} from '@nextui-org/react';

import AnimatedNumber from 'react-animated-numbers';

import { useOrderStore } from '../../app/stores/orderStore';
import { CONTACT_METHODS } from './constants/totalCardConstants';

export default function TotalCard() {
	const state = useOrderStore(state => state);

	return (
		<>
			<div className='flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8'>
				<div className='flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full space-y-6'>
					<h3 className='text-xl dark:text-white font-semibold leading-5 text-gray-800'>
						Summary
					</h3>
					<div className='flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4'>
						<div className='flex justify-between w-full'>
							<p className='text-base dark:text-white leading-4 text-gray-800'>
								Subtotal
							</p>
							<div className='text-base dark:text-gray-300 leading-4 text-gray-600'>
								<div className='flex justify-between'>
									<AnimatedNumber
										transitions={index => ({
											type: 'spring',
											duration: index + 0.3,
										})}
										animateToNumber={
											+(state.total * (state.isUrgent ? 1.25 : 1)).toFixed(2)
										}
										className='w-auto justify-end'
										includeComma
										locale='en'
									/>
									<span>$</span>
								</div>
							</div>
						</div>
						<div className='flex justify-between items-center w-full'>
							<p className='text-base dark:text-white leading-4 text-gray-800'>
								Discount
							</p>
							<div className='text-base dark:text-gray-300 leading-4 text-gray-600'>
								<div className='flex justify-between'>
									-0.00
									<span>$</span>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base dark:text-white font-semibold leading-4 text-gray-800'>
							Total
						</p>
						<div className='text-base dark:text-gray-300 font-semibold leading-4 text-gray-600'>
							<div className='flex justify-between'>
								<AnimatedNumber
									transitions={index => ({
										type: 'spring',
										duration: index + 0.3,
									})}
									animateToNumber={
										+(state.total * (state.isUrgent ? 1.25 : 1)).toFixed(2)
									}
									className='w-auto justify-end'
									includeComma
									locale='en'
								/>
								<span>$</span>
							</div>
						</div>
					</div>
					<Checkbox
						isSelected={state.isUrgent}
						onChange={e => state.setIsUrgent(!!e.target.checked)}
						className='mt-5 w-full'
					>
						Срочный заказ (+25%)
					</Checkbox>
					<Input
						isRequired
						type='text'
						label='Name'
						value={state.name}
						onChange={e => state.setName(e.target.value)}
						className='w-full'
					/>
					<Input
						isRequired
						type='email'
						label='Email'
						value={state.email}
						onChange={e => state.setEmail(e.target.value)}
						className='w-full'
					/>
					<div className='grid sm:grid-cols-2 gap-4 grid-cols-1'>
						<Select
							label='Contact method'
							placeholder='Contact method'
							className='w-full'
							defaultSelectedKeys={[state.contactType]}
							isRequired
							onChange={e => state.setContactType(e.target.value)}
						>
							{CONTACT_METHODS.map(method => (
								<SelectItem key={method.value} value={method.value}>
									{method.label}
								</SelectItem>
							))}
						</Select>
						<Input
							isRequired
							type='type'
							label={state.contactType}
							value={state.contactDetails}
							onChange={e => state.setContactDetails(e.target.value)}
							className='w-full'
						/>
					</div>
					<Textarea
						label='Comment'
						placeholder='Enter your comment'
						value={state.comment}
						onChange={e => state.setComment(e.target.value)}
						className='w-full'
					/>

					{!state.contactDetails ||
					!state.details ||
					!state.contactType ||
					!state.email ||
					!state.name ? (
						<Button
							color='primary'
							isDisabled={true}
							className='w-full'
							variant='bordered'
						>
							MAKE ORDER
						</Button>
					) : (
						<Button color='primary' className='w-full'>
							MAKE ORDER
						</Button>
					)}
				</div>
			</div>
		</>
	);
}
