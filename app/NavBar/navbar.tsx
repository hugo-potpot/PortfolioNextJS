import Link from 'next/link';

const NavBar = () => {
    const navLinks = [
        {
            name: 'About Me',
            link: '/'
        },
        {
            name: 'Work',
            link: '/work'
        },
        {
            name: 'Projects',
            link: '/projects'
        }
    ];

    return (
        <nav className="flex items-center justify-center w-full p-4 bg-gray-925">
            <div className="flex items-center space-x-4">
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.link} className="text-white hover:text-blue-900">
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
