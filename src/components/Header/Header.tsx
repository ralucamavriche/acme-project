import { Link } from 'react-router-dom';
import AcmeLogo from '../AcmeLogo';

const Header = ({ variant = 'default' }: { variant: 'sidebar' | 'default' }) => {
  if (variant === 'sidebar') {
    return (
      <div className="mb-2 flex items-end rounded-md bg-blue-500 p-4 md:h-40">
        <Link to="/">
          <AcmeLogo />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-20 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      <Link to="/">
        <AcmeLogo />
      </Link>
    </div>
  );
};

export default Header;
