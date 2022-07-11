import React from 'react';
import { scrollTo } from '../../utils/utils';
import './Navbar.scss';
export interface NavbarProps {
	homeRef: HTMLDivElement | null;
	projectsRef: HTMLDivElement | null;
	contactRef: HTMLDivElement | null;
}
const Navbar: React.FC<NavbarProps> = ({
	contactRef,
	homeRef,
	projectsRef,
}) => {
	return (
		<nav>
			<li
				tabIndex={1}
				onPointerDown={(event) =>
					scrollTo({ ele: homeRef, event, eventType: 'pointer' })
				}
				onKeyDown={(event) =>
					scrollTo({ ele: homeRef, event, eventType: 'key' })
				}
			>
				Home
			</li>
			<li
				tabIndex={2}
				onPointerDown={(event) =>
					scrollTo({ ele: projectsRef, event, eventType: 'pointer' })
				}
				onKeyDown={(event) =>
					scrollTo({ ele: projectsRef, event, eventType: 'key' })
				}
			>
				Projects
			</li>
			<li
				tabIndex={3}
				onPointerDown={(event) =>
					scrollTo({ ele: contactRef, event, eventType: 'pointer' })
				}
				onKeyDown={(event) =>
					scrollTo({ ele: contactRef, event, eventType: 'key' })
				}
			>
				Contact
			</li>
		</nav>
	);
};

export default Navbar;
