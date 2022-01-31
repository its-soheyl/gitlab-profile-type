// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
// next.js
import Image from 'next/image';

// ==========================================================

export default function ProfileHeader() {
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const url = data.users.avatar_url;

  console.log(data.users.avatar_url);
  return (
    <>
      {data.users.length > 0 && (
        <Image src={data.users.avatar_url} alt="Avatar" />
      )}
      <h4>{data.users.name}</h4>
      <h4>{data.users.state}</h4>
      <h4>{data.users.username}</h4>
      <h4>{data.users.email} </h4>
      <span>{data.users.followers}</span>
      <span>{data.users.following}</span>
    </>
  );
}
