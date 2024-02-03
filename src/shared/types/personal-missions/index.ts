export interface IPersonalMissionsTabs {
	key: number | string;
	title: string;
	chip?: number;
}

export interface IPersonalMission {
	id: number;
	type: number;
	tank: number;
	price: number;
	title: string;

	isSelected?: boolean;
	withHonors?: boolean;
}

export interface IFilteredMissions {
	title: string;
	missions: IPersonalMission[];
}
