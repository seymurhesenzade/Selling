import { element } from "prop-types";
import "../Header/style.scss";
import { Link } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const Header = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Selling.</h1>
          <nav>
            <ul>
              <li>
                <Link to={"/"} style={{ color: "black" }}>Home</Link>
                <Link to={"/addProduct"} style={{ color: "black", marginLeft: "35px" }}>
                  Products
                </Link>
                <Link style={{ color: "black", marginLeft: "35px" }}>
                  About Us
                </Link>
                <Link style={{ color: "black", marginLeft: "35px" }}>
                  Special
                </Link>
                <Link style={{ color: "black", marginLeft: "35px" }}>Blog</Link>
                <Link style={{ color: "black", marginLeft: "35px" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <section id="shop">
        {/* <img src="https://preview.colorlib.com/theme/selling/images/hero_2.jpg" alt="ShopPhoto" /> */}
        <h1>Shop With Us</h1>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
        </div>
        <div className="button">
          <button className="btn1">Shop now</button>
          <button className="btn2">Club Membership</button>
        </div>
      </section>

      
    </>
  );
};

export default Header;
