import { ReactComponent as Logo } from '../public/Logo.svg';
import { ReactComponent as MenuIcon } from '../public/Menu.svg';

interface HeaderProps {

};

function Header({}: HeaderProps) {
    return (<>
    <header className="bg-white">
        <div className="flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <Logo />
            </a>

            <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <a
                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                            href="#"
                        >
                            Login
                        </a>

                        <a
                            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                            href="#"
                        >
                            Register
                        </a>
                    </div>

                    <button
                        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </div>
    </header>
    </>);
}

export default Header;