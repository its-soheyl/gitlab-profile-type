// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
// next.js
import Image from 'next/image';

// ==========================================================

export default function ProfileHeader() {
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log(data.users.avatar_url);
  return (
    <>
      <Image src={data.users.avatar_url} alt="Avatar" />
    </>
  );
}
