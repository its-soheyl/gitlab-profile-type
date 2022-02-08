import Image from 'next/image';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
// styles
import styles from './ProfileHeader.module.scss';

export default function ProfileHeader() {
  const data = useSelector((state: RootState) => state.user);

  return (
    <div className={styles.container}>
      <Image src={data.users.avatar_url} alt="avatar" />
      <h4 className={styles.name}>{data.users.name}</h4>
      <h4 className={styles.state}>{data.users.state}</h4>
      <h4 className={styles.username}>{data.users.username}</h4>
      <h4 className={styles.email}>{data.users.email} </h4>
      <span className={styles.followers}>{data.users.followers}</span>
      <span className={styles.following}>{data.users.following}</span>
    </div>
  );
}
