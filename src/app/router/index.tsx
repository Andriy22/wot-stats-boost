import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import NotFoundPage from '../../pages/notFoundPage';
import FarmSilverPage from '../../pages/services/farmSilverPage';
import PersonalMissionsFirst from '../../pages/services/individualTasks/ui/personalMissionsFirst.tsx';
import PersonalMissionsSecond from '../../pages/services/individualTasks/ui/personalMissionsSecond.tsx';
import MarksOfExcellence from '../../pages/services/marksOfExcellence';
import { IRoute, RouteName } from '../../shared/types/router';
import { SuspenseLayout } from '../../shared/ui/layouts';

const {
	HOME,
	LOGIN,
	FARM_SILVER,
	PERSONAL_MISSIONS_1,
	PERSONAL_MISSIONS_2,
	MARKS_OF_EXCELLENCE,
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
