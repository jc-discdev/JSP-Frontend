'use client';

import React from 'react';
import '@/styles/global.scss';
import useThemeValues from '@/hooks/useThemeValues';
import { CacheProvider } from '@chakra-ui/next-js';
import {
	Box,
	extendTheme,
	ChakraProvider,
	ColorModeScript,
} from '@chakra-ui/react';

const theme = extendTheme({
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { getThemeValue } = useThemeValues();

	return (
		<html lang="en">
			<head>
				<title>
					JSPaste - The developer website for easy code sharing.
				</title>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>

				<meta name="title" content="JSPaste" />
				<meta
					name="description"
					content="Create and share code with JSPaste! The developer website for easy code sharing."
				/>
				<meta
					name="keywords"
					content="JSPaste,developer,javascript,hastebin,TSPaste,pastebin,tnfAngel"
				/>
				<meta name="theme-color" content="#FFE184" />
				<meta name="author" content="JSPaste" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://jspaste.eu/" />
				<meta property="og:site_name" content="JSPaste" />
				<meta property="og:title" content="JSPaste" />
				<meta
					property="og:description"
					content="Create and share code with JSPaste! The developer website for easy code sharing."
				/>
				<meta property="og:image" content="/logo.webp" />
				<meta
					property="og:keywords"
					content="JSPaste,developer,javascript,hastebin,TSPaste,pastebin,tnfAngel"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://jspaste.eu/" />
				<meta property="twitter:title" content="JSPaste" />
				<meta
					property="twitter:description"
					content="JSPaste for real-time data on system performance and status."
				/>
				<meta property="twitter:image" content="/logo.webp" />
				<meta property="twitter:site" content="@tnfAngel" />
				<meta property="twitter:site:id" content="@tnfAngel" />
				<meta property="twitter:creator" content="@tnfAngel" />
				<meta property="twitter:creator:id" content="@tnfAngel" />

				<link rel="icon" type="image/x-icon" href="./favicon.ico" />
			</head>
			<body>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<ChakraProvider theme={theme}>
					<CacheProvider>
						<Box h="100%" w="100%" bg={getThemeValue('editor')}>
							{children}
						</Box>
					</CacheProvider>
				</ChakraProvider>
			</body>
		</html>
	);
}
