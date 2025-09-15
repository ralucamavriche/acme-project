import { GlobeAltIcon } from '@heroicons/react/24/outline';

const AcmeLogo = () => {
  return (
    <div className="flex items-center">
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] text-white" />
      <h1 className="font-lusitana text-[44px] leading-none text-white">Acme</h1>
    </div>
  );
};

export default AcmeLogo;
