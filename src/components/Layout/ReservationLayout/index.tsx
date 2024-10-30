import ReservationHeader from '@/components/Header/ReservationHeader';
import Nav from '@/components/Nav/Nav';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export function ReservationLayout() {
  const [ActiveTab, setTab] = useState<'visit' | 'call'>('call');
  const location = useLocation();
  const navigate = useNavigate();

  const ChangeTab = (newTab: 'visit' | 'call') => {
    setTab(newTab);
    navigate(`/reservation/${newTab}`);
  };
  useEffect(() => {
    console.log('rerender');
  });

  const noLayoutPaths = [
    '/reservation/visit/',
    '/reservation/call/',
    '/reservation/inquiry/,',
  ];

  const hasNoLayout = noLayoutPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  if (hasNoLayout) {
    return <Outlet />;
  }

  return (
    <>
      <ReservationHeader />
      <div className='w-[90%] justify-self-center'>
        <div className='mb-[1.75rem] flex flex-col items-center'>
          <div className='mt-[2.1875rem] flex w-full justify-center'>
            <button
              className={`text-center transition-all duration-300 ease-in-out ${
                ActiveTab === 'visit'
                  ? 'scale-105 font-bold text-[#2b2b2b]'
                  : 'scale-100 text-[#a6a6a6]'
              } ml-[5rem] mr-auto md:ml-[6.8rem] lg:ml-[6.8rem]`}
              onClick={() => ChangeTab('visit')}
            >
              방문 상담
            </button>
            <button
              className={`text-center transition-all duration-300 ease-in-out ${
                ActiveTab === 'call'
                  ? 'scale-105 font-bold text-[#2b2b2b]'
                  : 'scale-100 text-[#a6a6a6]'
              } ml-auto mr-[4rem] md:mr-[5.5rem] lg:mr-[5.5rem]`}
              onClick={() => ChangeTab('call')}
            >
              전화 / 1:1 상담
            </button>
          </div>

          <div className='relative mt-[0.5rem] h-[.125rem] w-full bg-[#d9d9d9]'>
            {/* 선택된 탭의 검은색 밑줄 */}
            <div
              className={`absolute h-[.125rem] transform bg-[#464646] transition-all duration-700 ease-in-out ${
                ActiveTab === 'visit'
                  ? 'left-0 w-1/2 scale-x-100'
                  : 'right-0 w-1/2 scale-x-100'
              }`}
              style={{
                transformOrigin:
                  ActiveTab === 'visit' ? 'left center' : 'right center',
              }}
            />
          </div>
        </div>
        <Outlet />
      </div>
      <footer>
        <Nav />
      </footer>
    </>
  );
}
