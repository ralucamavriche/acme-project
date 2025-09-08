import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <div className="bg-primary flex items-end rounded-lg p-4 h-20 md:h-52">
      <div className="flex items-center">
        <GlobeAltIcon className="h-12 w-12 text-white rotate-[15deg]" />
        <h1 className="text-white text-[44px] leading-none">Acme</h1>
      </div>
    </div>
  );
};

export default Header;
