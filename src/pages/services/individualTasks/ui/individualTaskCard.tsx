import { Card, CardBody, Checkbox } from '@nextui-org/react';

interface IProps {
	title: string;
	isSelected: boolean;
	withHonors: boolean;
}

const IndividualTaskCard = ({ title, isSelected, withHonors }: IProps) => {
	return (
		<Card
			className={`w-36 h-20 rounded-b-xl ${isSelected ? 'bg-opacity-30 bg-stripe-gradient' : ''} ${isSelected ? (withHonors ? 'bg-yellow-300' : 'bg-primary') : ''}`}
		>
			<CardBody className='backdrop-blur-2xl'>
				<Checkbox className='justify-start'>{title}</Checkbox>
				<Checkbox color={'warning'} className='justify-end pt-5' size='sm'>
					with honors
				</Checkbox>
			</CardBody>
		</Card>
	);
};

export default IndividualTaskCard;
