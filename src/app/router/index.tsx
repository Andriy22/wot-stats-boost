import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import NotFoundPage from '../../pages/notFoundPage';
import FarmSilverPage from '../../pages/services/farmSilverPage';
import IndividualTasks from '../../pages/services/individualTasks';
import { IRoute, RouteName } from '../../shared/types/router';
import { SuspenseLayout } from '../../shared/ui/layouts/SuspenseLayout';

const { HOME, LOGIN, FARM_SILVER, INDIVIDUAL_TASKS } = RouteName;

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
		path: INDIVIDUAL_TASKS,
		component: IndividualTasks,
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
