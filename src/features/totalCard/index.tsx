import {
	Button,
	Checkbox,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	Select,
	SelectItem,
	Textarea,
	useDisclosure,
} from '@nextui-org/react';

import AnimatedNumber from 'react-animated-numbers';
import { useNavigate } from 'react-router-dom';

import { useOrderStore } from '../../app/stores/orderStore';
import { RouteName } from '../../shared/types/router';
import { CONTACT_METHODS } from './constants/totalCardConstants';

export default function TotalCard() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const navigate = useNavigate();

	const onModalClose = () => {
		onClose();

		navigate(RouteName.HOME);
	};

	const {
		total,
		isUrgent,
		setIsUrgent,
		name,
		setName,
		email,
		setEmail,
		contactType,
		setContactType,
		contactDetails,
		setContactDetails,
		comment,
		setComment,
		details,
	} = useOrderStore(state => state);

	const isOrderButtonDisabled =
		!name || !email || !contactType || !contactDetails || !total;

	const onMakeOrder = () => {
		const result = {
			details,
			total: total * (isUrgent ? 1.25 : 1),
			name,
			email,
			contactType,
			contactDetails,
			comment,
			isUrgent,
		};

		console.log(result);

		onOpen();
	};

	return (
		<>
			<div className='flex flex-col md:flex-row justify-center items-stretch w-full space-y-4 md:space-x-6 xl:space-x-8'>
				<div className='space-y-6 px-4 py-6 md:p-6 xl:p-8 w-full'>
					<h3 className='text-xl font-semibold leading-5'>Summary</h3>
					<div className='border-b border-gray-200 pb-4 flex flex-col items-center justify-center space-y-4 w-full'>
						<div className='w-full flex justify-between'>
							<p className='text-base leading-4'>Subtotal</p>
							<div className='flex justify-between text-base leading-4 text-gray-600 dark:text-gray-300'>
								<AnimatedNumber
									animateToNumber={+(total * (isUrgent ? 1.25 : 1)).toFixed(2)}
									className='justify-end w-auto'
									includeComma
									locale='en'
									transitions={index => ({
										type: 'spring',
										duration: index + 0.3,
									})}
								/>
								<span>$</span>
							</div>
						</div>
						<div className='w-full flex justify-between items-center'>
							<p className='text-base leading-4'>Discount</p>
							<div className='text-base leading-4 text-gray-600 dark:text-gray-300'>
								<span>-0.00$</span>
							</div>
						</div>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold leading-4'>Total</p>
						<div className='flex justify-between text-base font-semibold leading-4 text-gray-600 dark:text-gray-300'>
							<AnimatedNumber
								animateToNumber={+(total * (isUrgent ? 1.25 : 1)).toFixed(2)}
								className='justify-end w-auto'
								includeComma
								locale='en'
								transitions={index => ({
									type: 'spring',
									duration: index + 0.3,
								})}
							/>
							<span>$</span>
						</div>
					</div>
					<Checkbox
						isSelected={isUrgent}
						onChange={e => setIsUrgent(e.target.checked)}
						className='w-full mt-5'
					>
						Urgent Order (+25%)
					</Checkbox>
					<Input
						isRequired
						label='Name'
						value={name}
						onChange={e => setName(e.target.value)}
						className='w-full'
					/>
					<Input
						isRequired
						type='email'
						label='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='w-full'
					/>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						<Select
							label='Contact Method'
							placeholder='Select a contact method'
							defaultSelectedKeys={[contactType]}
							onChange={e => setContactType(e.target.value)}
							isRequired
							className='w-full'
						>
							{CONTACT_METHODS.map(method => (
								<SelectItem key={method.value} value={method.value}>
									{method.label}
								</SelectItem>
							))}
						</Select>
						<Input
							isRequired
							label={contactType}
							value={contactDetails}
							onChange={e => setContactDetails(e.target.value)}
							className='w-full'
						/>
					</div>
					<Textarea
						label='Comment'
						placeholder='Enter your comment here'
						value={comment}
						onChange={e => setComment(e.target.value)}
						className='w-full'
					/>
					<Button
						color='primary'
						isDisabled={isOrderButtonDisabled}
						onClick={onMakeOrder}
						className='w-full'
						variant={isOrderButtonDisabled ? 'bordered' : 'flat'}
					>
						MAKE AN ORDER
					</Button>
				</div>
			</div>

			<Modal
				backdrop='blur'
				isDismissable={false}
				isKeyboardDismissDisabled={false}
				isOpen={isOpen}
				size={'3xl'}
				onClose={onModalClose}
			>
				<ModalContent>
					<>
						<ModalBody>
							<section className=''>
								<div className='p-8 text-center sm:p-12'>
									<p className='text-sm font-semibold uppercase tracking-widest text-blue-500'>
										Your order is in the process
									</p>

									<h2 className='mt-6 text-3xl font-bold'>
										Your order has been successfully accepted! Thank you for
										choosing us - we will contact you soon!
									</h2>
								</div>
							</section>
						</ModalBody>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}
