import Logo from './Logo';
import Navbar from './Nav/Navbar';

const Header = () => (
	<header className='sticky top-0 z-50 flex justify-between items-center gap-8 p-8 md:p-20 pt-12 w-full text-white max-w-7xl mx-auto'>
		<Logo />
		<Navbar />
	</header>
);

export default Header;
