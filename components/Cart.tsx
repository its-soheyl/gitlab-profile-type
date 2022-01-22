import styles from '../styles/Cart.module.scss';
import { TailSpin } from 'react-loader-spinner';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/user/userAPI';
import { fetchUserToken } from '../store/user/userSlice';
import { RootState } from '../store/store';

const Cart = () => {
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log(data);

  return (
    <div className={styles.cart}>
      <div className={styles.cart_body}>
        <div className={styles.cart_header}>
          <h3 className={styles.cart_header__title}>Already Member</h3>
        </div>
        <div className={styles.cart_main}>
          <input
            className={styles.cart_input}
            type="text"
            placeholder="Enter your Token"
            onChange={(e) => {
              dispatch(fetchUserToken(e.target.value));
            }}
          />
          <button
            onClick={() => {
              fetchUser(data.token, dispatch);
            }}
            className={styles.cart_btn__send}
          >
            Submit
          </button>
          {data.loading ? (
            <TailSpin
              ariaLabel="loading"
              color="#ff600c"
              height={40}
              width={40}
            />
          ) : data.error ? (
            <p style={{ color: '#FF5151' }}>{data.error}</p>
          ) : data.error === '' || data.error ? (
            <button className={styles.cart_btn__show}>Show Profile Info</button>
          ) : null}
        </div>
      </div>
      <a
        href="https://gitlab.com/-/profile/personal_access_tokens"
        className={styles.cart_get__token}
      >
        {`Don't have an access token yet?`}
      </a>
    </div>
  );
};

export default Cart;
