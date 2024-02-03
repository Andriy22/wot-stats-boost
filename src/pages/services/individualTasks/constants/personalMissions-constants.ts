import {
	IPersonalMission,
	IPersonalMissionsTabs,
} from '../../../../shared/types/personal-missions';

export const personalMissionsFirstStageTabsKeys = {
	Stug: 1,
	Concept: 2,
	T55A: 3,
	Obj260: 4,
};

export const personalMissionsTanksTypes = {
	LT: 1,
	MT: 2,
	HT: 3,
	TD: 4,
	SPG: 5,
};

export const personalMissionsFirstStageTabs: IPersonalMissionsTabs[] = [
	{ key: personalMissionsFirstStageTabsKeys.Stug, title: 'StuG IV' },
	{ key: personalMissionsFirstStageTabsKeys.Concept, title: 'Т28 Сoncept' },
	{ key: personalMissionsFirstStageTabsKeys.T55A, title: 'Т55A' },
	{ key: personalMissionsFirstStageTabsKeys.Obj260, title: 'Object 260' },
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
];
