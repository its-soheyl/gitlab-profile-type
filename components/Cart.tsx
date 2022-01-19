import type { NextPage } from 'next';
import styles from '../styles/Cart.module.scss';
import Loader from 'react-loader-spinner';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/user/userAPI';
import { fetchUserToken } from '../store/user/userSlice';

function Cart: NextPage(): void {}

export default Cart;
