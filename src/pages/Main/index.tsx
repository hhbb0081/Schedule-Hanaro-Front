import Header from '@/components/Header/Header';
import { PropsWithChildren } from 'react';

export function MainPage({ children }: PropsWithChildren) {
  return (
    <div className='App'>
      <Header />
      {children}
      <nav className='navbar'>네브</nav>
    </div>
  );
}
