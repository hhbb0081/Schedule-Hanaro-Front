import { MockAdminCustomer } from '@/mock/mockAdminCustomer';
import React from 'react';
import CustomerBox from './CustomerBox';

function CustomerContainer() {
  return (
    <div className='w-full rounded-[30px] px-5 py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]'>
      <div className='flex w-full items-center border-b-[2px] border-[#999999] pb-7'>
        <span className='w-[5%] text-center' />
        <span className='font-regular w-[15%] text-center text-[1rem] text-lightGrey'>
          이름
        </span>
        <span className='font-regular w-[20%] text-center text-[1rem] text-lightGrey'>
          전화번호
        </span>
        <span className='font-regular w-[25%] text-center text-[1rem] text-lightGrey'>
          생년월일
        </span>
        <span className='font-regular w-[25%] text-center text-[1rem] text-lightGrey'>
          이메일
        </span>
        <span className='font-regular w-[10%] text-center text-[1rem] text-lightGrey' />
      </div>

      <ul>
        {MockAdminCustomer.map(
          ({ userId, idx, name, mobile, birthdt, email }) => (
            <React.Fragment key={userId}>
              <CustomerBox
                userId={userId}
                idx={idx}
                name={name}
                mobile={mobile}
                birthdt={birthdt}
                email={email}
              />
            </React.Fragment>
          )
        )}
      </ul>
    </div>
  );
}

export default CustomerContainer;
