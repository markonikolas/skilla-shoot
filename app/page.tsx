import Image from 'next/image';

import Person from '../assets/images/person.png';
import GalleryNavbar from '../components/Gallery/GalleryNavbar';

const Home = () => (
	<>
		<main className='h-screen w-full flex flex-col absolute top-0 overflow-hidden bg-[#090909] md:flex md:justify-center'>
			<Image
				src={Person}
				height={1250}
				width={600}
				alt='person'
				className='absolute bottom-0 md:bottom-auto md:-top-64 left-1/2 -translate-x-1/2 opacity-50 '
			/>

			<section className='relative z-10 font-barlow text-white text-center px-8 md:flex md:flex-col md:text-left md:w-full max-w-7xl md:p-20 md:absolute md:bottom-0 md:mt-0 left-1/2 -translate-x-1/2 mt-[112px] pt-8'>
				<h1 className='font-black text-[10vmin] italic tracking-widest'>Miloš Lakićević</h1>
				<h2 className='uppercase tracking-[3px] font-light text-sm'>Photographer / Videographer</h2>
				<blockquote className='font-light tracking-widest mt-[55px] italic mx-auto max-w-md md:max-w-xl md:text-center md:text-[20px]'>
					“ The single most important component of a camera is the twelve inches behind it. “
				</blockquote>
			</section>

			<GalleryNavbar className='left-0 top-2/3 md:-translate-y-1/2 md:top-1/2 md:left-auto' />
		</main>
	</>
);

export default Home;
