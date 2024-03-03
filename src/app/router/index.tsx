import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import NotFoundPage from '../../pages/notFoundPage';
import BuyBondsPage from '../../pages/services/buyBonds';
import BuyGoldPage from '../../pages/services/buyGold';
import EventPage from '../../pages/services/event';
import FarmExperiencePage from '../../pages/services/farmExpirience';
import FarmSilverPage from '../../pages/services/farmSilverPage';
import PersonalMissionsFirst from '../../pages/services/individualTasks/ui/personalMissionsFirst.tsx';
import PersonalMissionsSecond from '../../pages/services/individualTasks/ui/personalMissionsSecond.tsx';
import MarksOfExcellence from '../../pages/services/marksOfExcellence';
import SquadPage from '../../pages/services/squad';
import TopDmgPage from '../../pages/services/topDmg';
import { IRoute, RouteName } from '../../shared/types/router';
import { SuspenseLayout } from '../../shared/ui/layouts';

const {
	HOME,
	LOGIN,
	FARM_SILVER,
	PERSONAL_MISSIONS_1,
	PERSONAL_MISSIONS_2,
	MARKS_OF_EXCELLENCE,
	FARM_EXPERIENCE,
	EVENT,
	SQUAD,
	BUY_BONDS,
	BUY_GOLD,
	TOP_DMG,
} = RouteName;

const routes: IRoute[] = [
	{
		path: HOME,
		component: HomePage,
	},
	{
		path: LOGIN,
		component: LoginPage,
	},
	{
		path: FARM_SILVER,
		component: FarmSilverPage,
	},
	{
		path: PERSONAL_MISSIONS_1,
		component: PersonalMissionsFirst,
	},
	{
		path: PERSONAL_MISSIONS_2,
		component: PersonalMissionsSecond,
	},
	{
		path: MARKS_OF_EXCELLENCE,
		component: MarksOfExcellence,
	},
	{
		path: FARM_EXPERIENCE,
		component: FarmExperiencePage,
	},
	{
		path: FARM_EXPERIENCE,
		component: FarmExperiencePage,
	},
	{
		path: EVENT,
		component: EventPage,
	},
	{
		path: TOP_DMG,
		component: TopDmgPage,
	},
	{
		path: BUY_GOLD,
		component: BuyGoldPage,
	},
	{
		path: BUY_BONDS,
		component: BuyBondsPage,
	},
	{
		path: SQUAD,
		component: SquadPage,
	},
];

const routesContent = routes.map(({ path, component: Component }) => (
	<Route key={path} path={path} element={<Component />}></Route>
));

export const AppRouter = () => {
	return (
		<SuspenseLayout>
			<Routes>
				{routesContent}
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</SuspenseLayout>
	);
};
