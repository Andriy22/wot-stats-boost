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

	return (
		<>
			<Navbar onMenuOpenChange={setIsMenuOpen}>
				<NavbarContent className='bg-transparent'>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className='sm:hidden'
					/>
					<NavbarBrand>
						<Link
							onClick={() => navigate(RouteName.HOME)}
							className='text-2xl cursor-pointer font-thin text-inherit'
						>
							Elite-Boost
						</Link>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent
					className='hidden bg-transparent sm:flex gap-4'
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
							className='cursor-pointer backdrop-blur-0'
							color={`${pathname !== RouteName.HOME ? 'primary' : 'foreground'}`}
							onClick={() => navigate(RouteName.HOME)}
						>
							Our works
						</Link>
					</NavbarItem>
					<NavbarItem className='backdrop-blur'>
						<Link
							className='cursor-pointe r'
							color={`${pathname !== RouteName.HOME ? 'primary' : 'foreground'}`}
							onClick={() => navigate(RouteName.HOME)}
						>
							Contacts
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarMenu>
					<NavbarMenuItem>
						<Link
							color={`${pathname === RouteName.HOME ? 'primary' : 'foreground'}`}
							className='w-full'
							onClick={() => navigate(RouteName.HOME)}
							size='lg'
						>
							Home
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							color={`${pathname === RouteName.HOME ? 'primary' : 'foreground'}`}
							className='w-full'
							onClick={() => navigate(RouteName.HOME)}
							size='lg'
						>
							Our works
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							color={`${pathname === RouteName.HOME ? 'primary' : 'foreground'}`}
							className='w-full'
							onClick={() => navigate(RouteName.HOME)}
							size='lg'
						>
							Contacts
						</Link>
					</NavbarMenuItem>
				</NavbarMenu>
			</Navbar>
		</>
	);
}
