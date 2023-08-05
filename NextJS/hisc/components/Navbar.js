import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-100">
            <div className="text-3xl font-bold text-blue-500">HISC</div>
            <div className="signin">
                <Link href="/signin">
                    <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                        Sign In
                    </button>
                </Link>
            </div>
        </nav>
    );
}
