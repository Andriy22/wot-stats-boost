import { Divider } from '@nextui-org/react';

interface IProps {
	title: string;
	size?: number | string;
}

export default function ServiceHeader({ title, size = '2xl' }: IProps) {
	return (
		<div className='w-fit'>
			<p className={`text-${size}`}>{title}</p>
			{/*<Divider className='bg-gradient-to-r from-fuchsia-600 to-purple-600' />*/}
			<Divider />
		</div>
	);
}
