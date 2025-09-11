import { GlobeAltIcon } from '@heroicons/react/24/outline';

const AcmeLogo = () => {
  return (
    <div className="flex items-center">
      <GlobeAltIcon className="h-12 w-12 text-white rotate-[15deg]" />
      <h1 className="text-white text-[44px] leading-none">Acme</h1>
    </div>
  );
};

export default AcmeLogo;
