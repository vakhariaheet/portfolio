import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
const Document = () => {
	return (
		<Html>
			<Head>
				<meta charSet='utf-8' />

				<meta name='theme-color' content='#000000' />
				<link rel='manifest' href='/manifest.json' />
				{/* Fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin={'true'}
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&family=Dancing+Script&family=Itim&family=Quando&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
				/>
				<Script
					strategy='lazyOnload'
					src='https://www.googletagmanager.com/gtag/js?id=G-Z33V64VG00'
					id='google-sc'
				/>
				<Script strategy='lazyOnload' id='google'>
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-Z33V64VG00');
				`}
				</Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
