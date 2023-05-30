// @flow
import { FC } from 'react';
import Image from 'next/image';
import avt from '../../../public/images/avt.jpg'

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <div className="flex flex-col w-1/6 justify-center items-center">
      <Image src={avt} width="1000" height="200" alt="avt-nghia-dep-trai" />
      <p className="text-xs">This is me : </p>
      <h1 className="text-xl font-semibold">Nguyễn Đức Nghĩa</h1>
    </div>
  );
};

export default Profile;
