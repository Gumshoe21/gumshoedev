import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import Navbar from '@components/Navbar';

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 },
};

const ArticleLayout = ({ children, title }) => {
	const t = `${title} - Matthew Smilansky`;
	return (
		<>
			<motion.article
				initial='hidden'
				animate='enter'
				exit='exit'
				variants={variants}
				transition={{ duration: 0.4, type: 'easeInOut' }}
				style={{ position: 'relative' }}
			>
				<>
					{title && (
						<Head>
							<title>{t}</title>
							<meta name='twitter:title' content={t} />
							<meta property='og:title' content={t} />
						</Head>
					)}
					{children}
				</>
			</motion.article>
		</>
	);
};

export default ArticleLayout;
