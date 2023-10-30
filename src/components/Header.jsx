import Navbar from "./Navbar";
import Logo from "./Logo";
import {CartWidget} from "./CartWidget";
import "./Header.css";

function Header (){

return(

    <header>
        <div className="headerSuperior">
            <Logo />       
            <CartWidget/>
        </div>
            <Navbar
                nombre1= "Inicio"
                nombre2= "Nosotros"
                nombre3 = "Peluqueria"
                nombre4 = "Productos"
            />
    </header>
)

}

export default Header;
