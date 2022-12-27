import Link from 'next/link';

const Navbar = () => (
	<nav className='hidden md:flex gap-8 items-center text-sm tracking-widest'>
		<Link href='/' className='hover:text-gray-100 transition-colors'>
			Home
		</Link>
		<Link href='/work' className='hover:text-gray-100 transition-colors'>
			Work
		</Link>
		<Link href='/about' className='hover:text-gray-100 transition-colors'>
			About
		</Link>
		<Link href='/contact' className='hover:text-gray-100 transition-colors'>
			Contact
		</Link>
	</nav>
);

export default Navbar;
