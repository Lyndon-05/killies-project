
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";
import heroImg from "../assets/hero-banner.jpg";
import fbIcon from "../assets/social-facebook.png";
import igIcon from "../assets/social-instagram.png";
import googleIcon from "../assets/social-google.png";

export default function Home() {
  return (
    <div className={styles.homeContainer} style={{ height: '100%' }}>
    <div className={styles.home}>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Unleash Your Style with Killies 👕</h1>
          <p>Streetwear that redefines comfort and confidence.</p>
          <Link to="/shop" className={styles.ctaButton}>Shop Now</Link>
        </div>
        <img src={heroImg} alt="Hero banner" className={styles.heroImage} />
      </section>

      <section className={styles.featured}>
        <h2>Featured Collection</h2>
        <div className={styles.products}>
          <div className={styles.productCard}>Product 1</div>
          <div className={styles.productCard}>Product 2</div>
          <div className={styles.productCard}>Product 3</div>
        </div>
        <Link to="/shop" className={styles.viewAll}>View All Products</Link>
      </section>

      <section className={styles.about}>
        <h3>About Killies</h3>
        <p>
          Killies is a modern clothing brand inspired by individuality and creative expression.
          We deliver premium comfort with streetwise attitude.
        </p>
      </section>

      <section className={styles.connect}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcon}>
          <img src={fbIcon} alt="Facebook" />
          <img src={igIcon} alt="Instagram" />
          <img src={googleIcon} alt="Google" />
        </div>
        <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
        <button className={styles.subscribeButton}>Subscribe</button>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Killies. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </footer>
    </div>
    </div>
  );
}
