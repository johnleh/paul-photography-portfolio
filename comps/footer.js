import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer_box">
                    <div id="footer_contact_box">
                        <h2>Paul Le Houillier's Photography</h2>
                        <p>Email</p>

                        <div className="social_icons">
                            <p>Instagram</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
                <div className="footer_box">
                    <Link href="/"><a className="footer_button">Home</a></Link>
                    <Link href="/about"><a className="footer_button">About</a></Link>
                    <Link href="/albums"><a className="footer_button">Albums</a></Link>
                </div>
                <div className="footer_box">

                </div>
            </div>
        </div>
     );
}
 
export default Footer;
/* Old Footer
        <div className="footer-container">
            <div className="footer-content">
                <ul className="footer_nav">
                    <li className = "footer_nav_block">
                        <p>Paul Le Houillier&apos;s Photography</p>
                        <p>Paul Le Houillier</p>
                        <p>Insta</p>
                        <p>Facebook</p>
                        <p>Email</p>
                    </li>
                    <li className = "footer_nav_line"></li>
                    <li className = "footer_nav_block"> 
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/albums"><a>Albums</a></Link>
                    </li>
                    <li className = "footer_nav_line"></li>
                    <li className = "footer_nav_block">

                    </li>
                </ul>
            </div>
        </div>  
*/