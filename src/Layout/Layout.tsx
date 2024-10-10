import { FC } from 'react';
import Footer from './Footer';
import Header from './Header';
import { LayoutProps } from './Layout.interface';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen w-full p-4'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
