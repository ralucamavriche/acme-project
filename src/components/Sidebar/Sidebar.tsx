import {
  DocumentDuplicateIcon,
  HomeIcon,
  PowerIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header';

const categoryList: Array<{ name: string; icon: React.ElementType; href: string }> = [
  {
    name: 'Home',
    icon: HomeIcon,
    href: '/dashboard',
  },
  {
    name: 'Invoices',
    icon: DocumentDuplicateIcon,
    href: '/dashboard/invoices',
  },
  {
    name: 'Customers',
    icon: UserGroupIcon,
    href: '/dashboard/customers',
  },
];

const NavbarLink = ({
  isSignOut,
  isActive,
  Icon,
  name,
  href,
}: {
  isSignOut: boolean;
  isActive: boolean;
  Icon: React.ElementType;
  name: string;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className={`mr-2 flex items-center justify-center gap-2 rounded-lg p-3 md:mr-0 md:justify-start ${!isSignOut ? 'grow md:mb-2' : ''} ${
        isActive ? 'bg-sky-100 text-blue-600' : 'bg-gray-50 hover:bg-sky-100 hover:text-blue-600'
      }`}
    >
      <Icon className="w-6" />
      <h1 className="hidden text-sm md:block">{name}</h1>
    </Link>
  );
};
const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="flex w-full flex-col px-3 py-4 md:min-h-screen md:w-64 md:px-2">
      <Header variant="sidebar" />
      <div className="flex flex-row md:grow md:flex-col">
        <div className="flex grow flex-row md:grow-0 md:flex-col">
          {categoryList.map(({ icon: Icon, href, name }) => (
            <NavbarLink
              key={name}
              isSignOut={false}
              isActive={location.pathname === href}
              Icon={Icon}
              name={name}
              href={href}
            />
          ))}
        </div>
        <div className="mb-2 hidden grow rounded-lg bg-gray-50 md:block"></div>
        <NavbarLink
          isSignOut={true}
          isActive={false}
          Icon={PowerIcon}
          name={'Sign Out'}
          href={'/'}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
