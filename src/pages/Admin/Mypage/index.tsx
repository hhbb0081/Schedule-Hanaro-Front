import React from 'react';

interface ProfileCircleProps {
  imageUrl: string;
  name: string;
}

const ProfileCircle: React.FC<ProfileCircleProps> = ({ imageUrl, name }) => (
  <div className='flex flex-col items-center'>
    <div className='h-24 w-24 overflow-hidden rounded-full bg-gray-300'>
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className='h-full w-full object-cover'
      />
    </div>
    <p className='mt-4 text-lg font-bold'>{name}</p>
  </div>
);

const AdminMyPage: React.FC = () => {
  return (
    <div className='mx-auto max-w-4xl p-6 font-sans'>
      <h2 className='mb-6 text-lg font-bold'>사원 정보</h2>
      <div className='flex items-start gap-6 rounded-lg bg-white p-6 shadow-md'>
        <ProfileCircle
          imageUrl='https://via.placeholder.com/100'
          name='강능요 사원'
        />
      </div>
    </div>
  );
};

export default AdminMyPage;
