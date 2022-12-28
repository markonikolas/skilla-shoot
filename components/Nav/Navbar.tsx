'use client';

import { useState } from 'react';

import Link from 'next/link';

import Toggle from './Toggle';

const Navbar = () => {
	const [menuState, setMenuState] = useState(false);

	const handleMenuState = () => setMenuState(() => !menuState);

	return (
		<>
			<nav
				className={`${
					menuState ? 'flex glass' : 'hidden'
				} flex-col absolute bg-[#090909] z-50 top-[112px] left-0 w-screen h-[calc(100vh-112px)] justify-between py-[80px] sm:py-[120px] md:py-0 md:flex md:flex-row md:static md:w-auto md:h-auto md:bg-transparent gap-8 items-center text-sm tracking-widest font-jost`}>
				<Link href='/#welcome' className='hover:text-gray-100 transition-colors text-2xl md:text-base'>
					Home
				</Link>
				<Link href='/#work' className='hover:text-gray-100 transition-colors text-2xl md:text-base'>
					Work
				</Link>
				<Link href='/#about' className='hover:text-gray-100 transition-colors text-2xl md:text-base'>
					About
				</Link>
				<Link href='/#contact' className='hover:text-gray-100 transition-colors text-2xl md:text-base'>
					Contact
				</Link>
			</nav>

			<Toggle clickHandler={handleMenuState} state={menuState} />
		</>
	);
};

export default Navbar;
