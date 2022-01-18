import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    return ( 
        <>
            { children }
            <Footer/>
        </>
     );
}
 
export default Layout;