import { Jost, Barlow } from '@next/font/google';

import './globals.css';
import Header from '../components/Header';

const jost = Jost({
	subsets: ['latin'],
	variable: '--font-jost',
});

const barlow = Barlow({
	subsets: ['latin'],
	variable: '--font-barlow',
	weight: ['300', '400', '700', '900'],
	style: ['normal', 'italic'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang='en' className={`${jost.variable} ${barlow.variable}`}>
		<body>
			<Header />
			{children}
		</body>
	</html>
);

export default RootLayout;
