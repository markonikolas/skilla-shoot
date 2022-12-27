'use client';

import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';

const Gallery = (props: {
	name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
}) => (
	<article>
		<h1>{props.name}</h1>
	</article>
);

export default Gallery;
