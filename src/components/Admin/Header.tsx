import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import hanaLogoWhite from '../../assets/icons/hanaLogoWhite.svg';

function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className='fixed z-50 h-[9%] w-full bg-[#464646] py-[1rem] pl-[1.5rem] text-left shadow-[0_4px_50px_10px_rgba(0,0,0,0.07)]'>
      {isActive('/admin/offline') && (
        <div className='flex h-full items-center text-[1.5625rem] font-extrabold text-[#FFFFFF]'>
          하나은행 성수역점[11]
        </div>
      )}

      {!isActive('/admin/offline') && (
        <nav className='p-1rem flex h-full items-center justify-between'>
          <div className='ml-[2rem] flex items-center space-x-2'>
            <Link to='/admin/online'>
              <img
                src={hanaLogoWhite}
                alt='하나은행 로고'
                className='h-full w-full'
              />
            </Link>
          </div>

          <ul className='ml-[10rem] flex space-x-[3.125rem] text-[1.25rem]'>
            <li
              className={cn('text-[#969696] hover:text-white', {
                'text-[#FFFFFF]': isActive('/admin/online/call'),
              })}
            >
              <Link to='/admin/online/call'>전화 문의 목록</Link>
            </li>
            <li
              className={cn('text-[#969696] hover:text-white', {
                'text-[#FFFFFF]': isActive('/admin/online/inquiry'),
              })}
            >
              <Link to='/admin/online/inquiry'>1:1 문의 목록</Link>
            </li>
            <li
              className={cn('text-[#969696] hover:text-white', {
                'text-[#FFFFFF]': isActive('/admin/online/customer'),
              })}
            >
              <Link to='/admin/online/customer'>고객 관리</Link>
            </li>
            <li
              className={cn('text-[#969696] hover:text-white', {
                'text-[#FFFFFF]': isActive('/admin/online/mypage'),
              })}
            >
              <Link to='/admin/online/mypage'>마이페이지</Link>
            </li>
          </ul>

          <div className='mr-[4.6875rem]'>
            <span className='text-[1.5625rem] font-extrabold text-[#FFFFFF]'>
              강능요 사원 [11]
            </span>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
