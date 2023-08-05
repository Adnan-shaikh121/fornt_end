import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="text-white text-xl font-bold">HISC</div>
            <div className="footer-menu">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-signin">Sign In</div>
        </footer>
    );
}
