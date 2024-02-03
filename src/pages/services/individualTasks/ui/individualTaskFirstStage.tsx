import { Chip, Divider, Tab, Tabs } from '@nextui-org/react';

import { useEffect, useMemo, useState } from 'react';

import { useOrderStore } from '../../../../app/stores/orderStore.ts';
import { usePersonalMissionsStore } from '../../../../app/stores/personalMissionsStore.ts';
import {
	missions,
	personalMissionsFirstStageTabs,
	personalMissionsFirstStageTabsKeys,
	personalMissionsTanksTypes,
} from '../constants/personalMissions-constants.ts';
import PersonalMissionsList from './personalMissionsList.tsx';

const IndividualTaskFirstStage = () => {
	const { selectedMissions, reset } = usePersonalMissionsStore();
	const setOrderDetails = useOrderStore(state => state.setOrderDetails);

	const tabs = useMemo(() => personalMissionsFirstStageTabs, []);
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

	const [currentTab, setCurrentTab] = useState(
		personalMissionsFirstStageTabsKeys.Stug,
	);

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
				classNames={{
					cursor: 'w-full',
				}}
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
						{/*
						TODO:
						MAKE IT USING MAP INSTEAD OF HARD CODE
						*/}

						<PersonalMissionsList
							missions={personalMissions.filter(
								x =>
									x.type === personalMissionsTanksTypes.LT &&
									x.tank === currentTab,
							)}
							title={'LT'}
						/>
						<Divider className={'my-3'}></Divider>
						<PersonalMissionsList
							missions={personalMissions.filter(
								x =>
									x.type === personalMissionsTanksTypes.MT &&
									x.tank === currentTab,
							)}
							title={'MT'}
						/>
						<Divider className={'my-3'}></Divider>
						<PersonalMissionsList
							missions={personalMissions.filter(
								x =>
									x.type === personalMissionsTanksTypes.HT &&
									x.tank === currentTab,
							)}
							title={'HT'}
						/>
						<Divider className={'my-3'}></Divider>
						<PersonalMissionsList
							missions={personalMissions.filter(
								x =>
									x.type === personalMissionsTanksTypes.TD &&
									x.tank === currentTab,
							)}
							title={'TD'}
						/>
						<Divider className={'my-3'}></Divider>
						<PersonalMissionsList
							missions={personalMissions.filter(
								x =>
									x.type === personalMissionsTanksTypes.SPG &&
									x.tank === currentTab,
							)}
							title={'SPG'}
						/>
					</Tab>
				))}
			</Tabs>
		</div>
	);
};

export default IndividualTaskFirstStage;
