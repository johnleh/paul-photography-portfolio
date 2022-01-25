import Link from "next/link";

const Header = () => {
    return (
        <nav>
            <h1 className="title">Paul Le Houillier&apos;s Photography</h1>
            <div className="nav_buttons">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <Link href="/albums"><a>Albums</a></Link>
            </div>
        </nav>
    );
}
 
export default Header;