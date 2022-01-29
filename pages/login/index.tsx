// next.js
import Image from 'next/image';
// import image from assets file
import logo from '../../public/assets/images/gitlab-icon-rgb.svg';
// style
import styles from '../../styles/Login.module.scss';
// Cart
import Cart from '../../components/cart/Cart';

// ================================================================

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftGroup}>
        <h1 className={styles.leftGroup_title}>CHECK YOUR</h1>
        <h2 className={styles.leftGroup_description}>Profile and Projects</h2>
        <Image className={styles.leftGroup_logo} src={logo} alt="logo" />
      </div>
      <div className={styles.rightGroup}>
        <Cart />
      </div>
    </div>
  );
}

export default Login;
