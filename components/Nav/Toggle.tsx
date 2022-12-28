'use client';

import { FC } from 'react';

import { TogglePropTypes } from './types';

const Toggle: FC<TogglePropTypes> = props => {
	const { clickHandler, state } = props;

	return state ? (
		<div onClick={clickHandler} className='block relative md:hidden w-8 h-8 cursor-pointer'>
			<span className='absolute left-0 bottom-1/2 -translate-y-1/2 origin-center w-full h-1 bg-white rounded-lg rotate-45'></span>
			<span className='absolute left-0 bottom-1/2 -translate-y-1/2 origin-center w-full h-1 bg-white rounded-lg -rotate-45'></span>
		</div>
	) : (
		<div onClick={clickHandler} className='md:hidden flex flex-col w-8 h-6 justify-between cursor-pointer'>
			<span className='w-full h-1 bg-white rounded-lg'></span>
			<span className='w-full h-1 bg-white rounded-lg'></span>
			<span className='w-full h-1 bg-white rounded-lg'></span>
		</div>
	);
};

export default Toggle;
