import { Link } from 'react-router-dom';
import AcmeLogo from '../AcmeLogo';

const Header = ({ variant = 'default' }: { variant: 'sidebar' | 'default' }) => {
  return (
    <div
      className={`flex items-end rounded-md bg-blue-500 p-4 ${variant === 'sidebar' ? `mb-2 md:h-40` : `h-20 md:h-52`} `}
    >
      <Link to="/">
        <AcmeLogo />
      </Link>
    </div>
  );
};

export default Header;
