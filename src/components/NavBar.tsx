import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="border-2 border-[#222831] rounded-b-lg">
            <nav className="bg-[#222831] p-4">
                <ul className="flex space-x-4 justify-center">
                    <li>
                        <Link href="/" className="text-white font-semibold">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white font-semibold">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-white font-semibold">Projects</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white font-semibold">Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;