import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
const Document = () => {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='language' content='US' />

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/icons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icons/32x32.png'
				/>
				<link rel='icon' type='image/png' sizes='16x16' href='/16x16.png' />
				<link
					rel='mask-icon'
					href='icons/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#fff' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='icon' type='image/x-icon' href='/icons/favicon.ico' />
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
					href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap'
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
