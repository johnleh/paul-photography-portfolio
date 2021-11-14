import Link from "next/link";

const Header = () => {
    return (
        <nav>
            <div>
                <h1>Paul Le Houillier&apos;s Photography</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/albums"><a>Albums</a></Link>
        </nav>
    );
}
 
export default Header;