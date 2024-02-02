import { Divider } from '@nextui-org/react';

interface IProps {
	title: string;
}

export default function ServiceHeader({ title }: IProps) {
	return (
		<div className='w-fit'>
			<p className='text-5xl'>{title}</p>
			<Divider className='bg-gradient-to-r from-fuchsia-600 to-purple-600' />
		</div>
	);
}
