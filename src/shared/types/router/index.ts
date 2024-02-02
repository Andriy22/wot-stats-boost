import { ComponentType, PropsWithChildren } from 'react';

export enum RouteName {
	HOME = '/',
	LOGIN = '/login',
	FARM_SILVER = '/services/farm-silver',
	INDIVIDUAL_TASKS = '/services/individual-tasks',
}

export interface IRoute {
	path: RouteName;
	component: ComponentType;
	layout?: ComponentType<PropsWithChildren>;
}
