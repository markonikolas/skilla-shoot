import { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
	<main className='h-screen w-full flex flex-col justify-center items-center absolute top-0 overflow-hidden bg-[#080808]'>{children}</main>
);

export default Wrapper;
