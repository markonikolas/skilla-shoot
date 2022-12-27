import Image from 'next/image';
import Link from 'next/link';

import LogoSrc from '../assets/images/logo.png';

const Logo = () => (
	<Link href='/' className='cursor-pointer font-bold min-w-[2rem]'>
		<Image className='' src={LogoSrc} alt='Logo' height={32} width={32} />
	</Link>
);

export default Logo;
