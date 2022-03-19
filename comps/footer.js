import Link from "next/link";

const Footer = () => {
    return ( 
        <div>
            {/*TODO: Make Better for mobile phones*/}
            <div className="footer-content">
                {/* Rightmost footer box */}
                <div className="footer_box">
                    <div id="footer_contact_box">
                        <h2>Paul Le Houillier's Photography</h2>
                        
                        <div className="contact_smaller_box">
                            {/*TODO: Change to Icons*/}
                            <p><a target="_blank" href="https://instagram.com/paul_le_houillier?utm_medium=copy_link">Instagram</a></p>
                            <p><a target="_blank" href="https://www.facebook.com/paul.lehouillier">Facebook</a></p>
                        </div>
                    </div>
                </div>
                {/* Middle footer box */}
                <div className="footer_box">
                    <table>
                        <tr>
                            <td><Link href="/"><a className="nav_button">Home</a></Link></td>
                            <td><Link href="/about"><a className="nav_button">About</a></Link></td>
                            <td><Link href="/albums"><a className="nav_button">Albums</a></Link></td>
                        </tr>
                        <tr>
                        </tr>
                        </table>
                </div>
                {/* Leftmost footer box */}
                <div className="footer_box">
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
