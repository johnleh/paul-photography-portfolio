import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer_box">
                    <div id="footer_contact_box">
                        <h2>Paul Le Houillier's Photography</h2>
                        

                        <div className="contact_smaller_box">
                            <p> <b>Paul Le Houillier </b></p>
                            <p><a target="_blank" href="https://instagram.com/paul_le_houillier?utm_medium=copy_link">Instagram</a></p>
                            <p><a target="_blank" href="https://www.facebook.com/paul.lehouillier">Facebook</a></p>
                        </div>
                    </div>
                </div>
                <div className="footer_box">
                    <table>
                        <tr>
                            <td><Link href="/"><a className="nav_button">Home</a></Link></td>
                            <td><Link href="/about"><a className="nav_button">About</a></Link></td>
                            <td><Link href="/contact"><a className="nav_button">Contact</a></Link></td>
                        </tr>
                        <tr>
                            <td><Link href="/albums"><a className="nav_button">Albums</a></Link></td>
                        </tr>
                        </table>
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