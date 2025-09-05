import { GlobeAltIcon } from '@heroicons/react/24/outline';
import '../../styles/index';

const Header = () => {
  return (
    <div className="bg-[var(--primary-color)] flex items-end rounded-lg p-4 h-20 md:h-52">
      <div className="flex items-center">
        <GlobeAltIcon className="h-12 w-12 text-white rotate-[15deg]" />
        <p className="text-white text-[44px] leading-none">Acme</p>
      </div>
    </div>
  );
};

export default Header;
