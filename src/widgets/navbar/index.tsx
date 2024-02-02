import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react';

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RouteName } from '../../shared/types/router';

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const navigate = useNavigate();

	const { pathname } = useLocation();

	const menuItems = [
		'Profile',
		'Dashboard',
		'Activity',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
		'Help & Feedback',
		'Log Out',
	];

	return (
		<>
			<Navbar onMenuOpenChange={setIsMenuOpen}>
				<NavbarContent>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className='sm:hidden'
					/>
					<NavbarBrand>
						<Link
							onClick={() => navigate(RouteName.HOME)}
							className='text-2xl font-thin text-inherit'
						>
							Elite-Boost
						</Link>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent
					className='hidden backdrop-blur sm:flex gap-4'
					justify='end'
				>
					<NavbarItem>
						<Link
							className='cursor-pointer'
							color={`${pathname === RouteName.HOME ? 'primary' : 'foreground'}`}
							onClick={() => navigate(RouteName.HOME)}
						>
							Home
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className='cursor-pointer'
							color={`${pathname !== RouteName.HOME ? 'primary' : 'foreground'}`}
							onClick={() => navigate(RouteName.HOME)}
						>
							Home
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className='cursor-pointer'
							color={`${pathname !== RouteName.HOME ? 'primary' : 'foreground'}`}
							onClick={() => navigate(RouteName.HOME)}
						>
							Home
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? 'primary'
										: index === menuItems.length - 1
											? 'danger'
											: 'foreground'
								}
								className='w-full'
								href='#'
								size='lg'
							>
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</>
	);
}
