const GalleryNavbar = ({ className }: { className?: string }) => (
	<nav className={`fixed right-0 p-6 md:p-8 flex flex-col gap-y-4 ${className}`}>
		<div className='w-3 h-3 cursor-pointer bg-white opacity-80 rounded-full'></div>
		<div className='w-3 h-3 cursor-pointer bg-white opacity-50 rounded-full'></div>
		<div className='w-3 h-3 cursor-pointer bg-white opacity-20 rounded-full'></div>
	</nav>
);

export default GalleryNavbar;
