import { Accordion, AccordionItem } from '@nextui-org/react';

export default function FarmSilverFAQ() {
	return (
		<Accordion
			className='w-full'
			defaultExpandedKeys={['1']}
			variant='splitted'
		>
			<AccordionItem key='1' aria-label='Title 1' title='Title 1'>
				Text
			</AccordionItem>
			<AccordionItem key='2' aria-label='Title 2' title='Title 2'>
				Text
			</AccordionItem>
		</Accordion>
	);
}
