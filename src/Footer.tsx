import { useContext } from 'react';
import { AppContext } from './context/AppContext';

import { ReactComponent as FacebookLogo } from './assets/Facebook.svg';
import { ReactComponent as InstagramLogo } from './assets/Instagram.svg';
import { ReactComponent as TwitterLogo } from './assets/Twitter.svg';
import { ReactComponent as GitHubLogo } from './assets/GitHub.svg';
import { ReactComponent as DribbleLogo } from './assets/Dribble.svg';
import { ReactComponent as LogoWLabel } from './assets/LogoWLabel.svg';


const socialIcons = [
    { site: 'Facebook',   url: '', icon: FacebookLogo },
    { site: 'Instagram',  url: '', icon: InstagramLogo },
    { site: 'Twitter',    url: '', icon: TwitterLogo },
    { site: 'GitHub',     url: '', icon: GitHubLogo },
    { site: 'Dribble',    url: '', icon: DribbleLogo },
];

function Footer() {
    const appContext = useContext(AppContext);

    return(<>
    <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center text-teal-600">
                <div className="w-48">
                    <LogoWLabel />
                </div>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                itaque neque.
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                {appContext?.menu?.map(i => (
                    <li key={i.label}>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href={i.url}>{i.label}</a>
                    </li>
                ))}
            </ul>

            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                {socialIcons.map(i => (
                    <li key={i.site}>
                        <a
                            href={i.url}
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">{i.site}</span>
                            <i.icon />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
    </>);
}

export default Footer;
