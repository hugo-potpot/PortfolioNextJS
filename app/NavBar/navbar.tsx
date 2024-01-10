import Link from 'next/link';

const NavBar = () => {
    const navLinks = [
        {
            name: 'Accueil',
            link: '/'
        },
        {
            name: 'Expériences',
            link: '/work'
        },
        {
            name: 'Projets',
            link: '/projects'
        }
    ];

    return (
        <nav className="flex items-center justify-center w-full p-7 bg-gray-925">
            <div className="flex items-center space-x-4">
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.link} className="text-white border-b-2 border-transparent hover:border-b-2 hover:border-white">
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
