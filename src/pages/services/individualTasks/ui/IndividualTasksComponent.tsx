import { Chip, Divider, Tab, Tabs } from '@nextui-org/react';

import { useEffect, useMemo, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore.ts';
import { usePersonalMissionsStore } from '../../../../app/stores/personalMissionsStore.ts';
import { IPersonalMissionsTabs } from '../../../../shared/types/personal-missions';
import {
	filterMissions,
	missions,
} from '../constants/personalMissions-constants.ts';
import PersonalMissionsList from './personalMissionsList.tsx';

interface IProps {
	initialTabKey: number;
	tabs: IPersonalMissionsTabs[];
}

const IndividualTasksComponent = ({ initialTabKey, tabs }: IProps) => {
	const { selectedMissions, reset } = usePersonalMissionsStore();
	const setOrderDetails = useOrderStore(state => state.setOrderDetails);

	const personalMissions = useMemo(
		() =>
			missions.map(mission => {
				const selectedMission = selectedMissions.find(x => x.id === mission.id);
				return {
					...mission,
					isSelected: selectedMission?.isSelected ?? false,
					withHonors: selectedMission?.withHonors ?? false,
				};
			}),
		[missions, selectedMissions],
	);

	const [currentTab, setCurrentTab] = useState(initialTabKey);

	useEffect(() => {
		const data = JSON.stringify(selectedMissions);
		const totalSum = selectedMissions.reduce(
			(acc, currentValue) => acc + currentValue.price,
			0,
		);
		setOrderDetails({ details: data, total: totalSum });
	}, [selectedMissions]);

	useEffect(() => {
		return () => {
			reset();
		};
	}, []);

	return (
		<div className='flex w-full flex-col'>
			<Tabs
				aria-label='Options'
				color='primary'
				defaultSelectedKey={currentTab}
				onSelectionChange={e => setCurrentTab(+e)}
				classNames={{ cursor: 'w-full' }}
			>
				{tabs.map(tab => (
					<Tab
						key={tab.key}
						title={
							<div className='flex items-center space-x-2'>
								<span>{tab.title}</span>
								<Chip size='sm' variant='faded'>
									{selectedMissions.filter(x => x.tank === tab.key).length}
								</Chip>
							</div>
						}
					>
						{filterMissions(personalMissions, currentTab).map(item => (
							<div key={item.title}>
								<PersonalMissionsList
									missions={item.missions}
									title={item.title}
								/>
								<Divider className={'my-3'}></Divider>
							</div>
						))}
					</Tab>
				))}
			</Tabs>
		</div>
	);
};

export default IndividualTasksComponent;
