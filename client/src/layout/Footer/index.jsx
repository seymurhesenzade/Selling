import "../Footer/style.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer>
          <div className="about">
            <h3>ABOUT US</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div className="links">
            <h3>QUICK LINKS</h3>
            <p>
              <div> About Us </div>
              <div>Services</div>
              <div>Testimonials</div>
              <div>Contact</div>
              <div>Us</div>
            </p>
          </div>
          <div className="follow">
            <h3>Follow Us</h3>
            <FaFacebookF style={{ color: "gray" }} />
            <FaTwitter style={{ color: "gray", marginLeft: "7px" }} />
            <FaInstagram style={{ color: "gray", marginLeft: "7px" }} />
            <FaLinkedinIn style={{ color: "gray", marginLeft: "7px" }} />
          </div>
          <div className="product">
            <h3>FEATURED PRODUCT</h3>
            <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" />
            <p>Leather Brown Shoe</p>
            <p>$60.00</p>
            <button>Add To Cart</button>
          </div>
        </footer>
        <div className="finish"><p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p></div>
      </div>
    </>
  );
};

export default Footer;
