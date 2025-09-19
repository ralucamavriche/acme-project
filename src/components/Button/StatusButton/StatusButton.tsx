import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

type StatusButtonProps = {
  isPaid: boolean;
};

const StatusButton = ({ isPaid }: StatusButtonProps) => {
  return (
    <div>
      {isPaid ? (
        <span className="inline-flex items-center rounded-full bg-green-500 px-2 py-1 text-xs text-white">
          Paid
          <CheckIcon className="ml-1 inline h-4 w-4" />
        </span>
      ) : (
        <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
          Pending
          <ClockIcon className="ml-1 inline h-4 w-4" />
        </span>
      )}
    </div>
  );
};

export default StatusButton;
