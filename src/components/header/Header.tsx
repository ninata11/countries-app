import Styles from "./header.module.css"
import { Link, NavLink, NavLinkRenderProps } from "react-router-dom"
const Header = () => {
     const handleActiveNav = ({isActive}:NavLinkRenderProps) => {
        if (isActive){
            return Styles["active_nav_item"];
         }else{
            return Styles["nav_item"];
         }
     }
    return (
        <header className={Styles.root}> 
            <Link className={Styles["logo"]} to="/">
        <h1 className={Styles.header}>Countries App</h1>
        </Link> 
        <div className={Styles.nav}>
        <NavLink className={handleActiveNav} to="articles">
        <div>Articles</div>
        </NavLink>
        <NavLink className={handleActiveNav} to="contact">
        <div>Contact</div>
        </NavLink>
        <NavLink className={handleActiveNav} to="about">
        <div>About Us</div>
        </NavLink>
        </div>
        </header> 
   )
}

export default Header