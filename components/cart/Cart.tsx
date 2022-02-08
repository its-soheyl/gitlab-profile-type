// next.js
import Link from 'next/link';
// style
import styles from './Cart.module.scss';
// loader spinner
import { TailSpin } from 'react-loader-spinner';
// materialUI
import { TextField } from '@mui/material';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../store/user/userAPI';
import { fetchUserToken } from '../../store/user/userSlice';
import { RootState } from '../../store/store';
import { useEffect, useRef } from 'react';

const Cart = () => {
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const inputRef: object | any = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(data);

  return (
    <div className={styles.cart}>
      <div className={styles.cart_body}>
        <div className={styles.cart_header}>
          <h3 className={styles.cart_header__title}>Already Member</h3>
        </div>
        <div className={styles.cart_main}>
          <TextField
            ref={inputRef}
            type="text"
            className={styles.cart_input}
            onChange={(e) => {
              dispatch(fetchUserToken(e.target.value));
            }}
            required
            id="outlined-required"
            label="Enter your Token"
            size="medium"
            color="secondary"
            focused
          />

          <button
            onClick={(e) => {
              e.preventDefault;
              fetchUser(data.token, dispatch);
            }}
            className={styles.cart_btn__send}
          >
            Send
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
            <Link href="/profileInfo" passHref>
              <button className={styles.cart_btn__show}>
                Show Profile Info
              </button>
            </Link>
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
