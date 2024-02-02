import './App.css';
import { withProviders } from './app/providers/withProviders';
import { AppRouter } from './app/router';
import Footer from './widgets/footer';
import NavBar from './widgets/navbar';

const App = () => {
	return (
		<>
			<div className='flex flex-col h-screen justify-between'>
				<div>
					<NavBar />
					<AppRouter />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default withProviders(App);
