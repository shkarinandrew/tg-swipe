import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from '../../assets/icons';

const navList = [
  {
    path: '/',
    icon: <Navigate.SwopeIcon />,
  },
  {
    path: '/bonus',
    icon: <Navigate.CalendarIcon />,
  },
  {
    path: '/wallet',
    icon: <Navigate.WalletIcon />,
  },
  {
    path: '/profile',
    icon: <Navigate.ProfileIcon />,
  },
];

const Navigation: FC = () => {
  return (
    <nav className='mt-4 flex items-center justify-between py-1.5 px-3 border border-[#FFB9C3] rounded-full w-full'>
      {navList.map(({ path, icon }) => (
        <NavLink
          to={path}
          className={({ isActive }) =>
            `${
              isActive ? 'bg-[#FF5069] text-white' : 'bg-white text-[#555555]'
            } h-14 w-14 rounded-full border border-[#D4D4D4] flex justify-center items-center transition-colors`
          }
        >
          {icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
