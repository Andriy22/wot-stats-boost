import { ComponentType, PropsWithChildren } from 'react';

export enum RouteName {
	HOME = '/',
	LOGIN = '/login',
	FARM_SILVER = '/services/farm-silver',
	PERSONAL_MISSIONS_1 = '/services/personal-missions-1',
	PERSONAL_MISSIONS_2 = '/services/personal-missions-2',
}

export interface IRoute {
	path: RouteName;
	component: ComponentType;
	layout?: ComponentType<PropsWithChildren>;
}
