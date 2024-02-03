import {
	IFilteredMissions,
	IPersonalMission,
	IPersonalMissionsTabs,
} from '../../../../shared/types/personal-missions';

export const personalMissionsFirstStageTabsKeys = {
	Stug: 1,
	Concept: 2,
	T55A: 3,
	Obj260: 4,
};

export const personalMissionsSecondStageTabsKeys = {
	Excalibur: 5,
	Chimera: 6,
	Obj279: 7,
};

export const personalMissionsTanksTypes = {
	LT: 1,
	MT: 2,
	HT: 3,
	TD: 4,
	SPG: 5,
	Union: 6,
	Bloc: 7,
	Alliance: 8,
	Coalition: 9,
};

export const personalMissionsTanksLabels = {
	[personalMissionsTanksTypes.LT]: 'Light Tank',
	[personalMissionsTanksTypes.MT]: 'Medium Tank',
	[personalMissionsTanksTypes.HT]: 'Heavy Tank',
	[personalMissionsTanksTypes.TD]: 'Tank Destroyer',
	[personalMissionsTanksTypes.SPG]: 'SPG',
	[personalMissionsTanksTypes.Union]: 'Union',
	[personalMissionsTanksTypes.Bloc]: 'Bloc',
	[personalMissionsTanksTypes.Alliance]: 'Alliance',
	[personalMissionsTanksTypes.Coalition]: 'Coalition',
};

export const firstStageTankTypes = [
	personalMissionsTanksTypes.LT,
	personalMissionsTanksTypes.MT,
	personalMissionsTanksTypes.HT,
	personalMissionsTanksTypes.TD,
	personalMissionsTanksTypes.SPG,
];

export const secondStageTankTypes = [
	personalMissionsTanksTypes.Union,
	personalMissionsTanksTypes.Bloc,
	personalMissionsTanksTypes.Alliance,
	personalMissionsTanksTypes.Coalition,
];

export const personalMissionsFirstStageTabs: IPersonalMissionsTabs[] = [
	{ key: personalMissionsFirstStageTabsKeys.Stug, title: 'StuG IV' },
	{ key: personalMissionsFirstStageTabsKeys.Concept, title: 'Т28 Сoncept' },
	{ key: personalMissionsFirstStageTabsKeys.T55A, title: 'Т55A' },
	{ key: personalMissionsFirstStageTabsKeys.Obj260, title: 'Object 260' },
];

export const personalMissionsSecondStageTabs: IPersonalMissionsTabs[] = [
	{ key: personalMissionsSecondStageTabsKeys.Excalibur, title: 'Excalibur' },
	{ key: personalMissionsSecondStageTabsKeys.Chimera, title: 'Chimera' },
	{ key: personalMissionsSecondStageTabsKeys.Obj279, title: 'Object 279' },
];

export const missions: IPersonalMission[] = [
	{
		id: 1,
		title: 'LT1',
		type: personalMissionsTanksTypes.LT,
		tank: personalMissionsFirstStageTabsKeys.Stug,
		isSelected: true,
		price: 1,
	},
	{
		id: 2,
		title: 'LT2',
		type: personalMissionsTanksTypes.LT,
		tank: personalMissionsFirstStageTabsKeys.Stug,
		isSelected: true,
		withHonors: true,
		price: 2,
	},
	{
		id: 3,
		title: 'MT2',
		type: personalMissionsTanksTypes.MT,
		tank: personalMissionsFirstStageTabsKeys.Stug,
		price: 2,
	},
	{
		id: 4,
		title: 'LT3',
		type: personalMissionsTanksTypes.LT,
		tank: personalMissionsFirstStageTabsKeys.Concept,
		price: 2,
	},
	{
		id: 5,
		title: 'Union  1',
		type: personalMissionsTanksTypes.Union,
		tank: personalMissionsSecondStageTabsKeys.Excalibur,
		price: 2,
	},
	{
		id: 6,
		title: 'Alliance 1',
		type: personalMissionsTanksTypes.Alliance,
		tank: personalMissionsSecondStageTabsKeys.Excalibur,
		price: 2,
	},
];

export const filterMissions = (
	missions: IPersonalMission[],
	currentTab: number,
): IFilteredMissions[] => {
	const isFirstSeason = Object.values(
		personalMissionsFirstStageTabsKeys,
	).includes(currentTab);

	const result: IFilteredMissions[] = [];

	if (isFirstSeason) {
		firstStageTankTypes.forEach(item => {
			result.push({
				title: personalMissionsTanksLabels[item],
				missions: missions.filter(
					x => x.type === item && x.tank === currentTab,
				),
			});
		});
	} else {
		secondStageTankTypes.forEach(item => {
			result.push({
				title: personalMissionsTanksLabels[item],
				missions: missions.filter(
					x => x.type === item && x.tank === currentTab,
				),
			});
		});
	}

	return result;
};
