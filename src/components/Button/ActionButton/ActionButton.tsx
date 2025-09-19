import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
type ActionButtonProps = {
  action: 'update' | 'delete';
};
const ActionButton = ({ action }: ActionButtonProps) => {
  return (
    <button className="rounded-md border p-2 text-gray-700 hover:bg-gray-100">
      {action === 'update' ? <PencilIcon className="h-5 w-5" /> : <TrashIcon className="h-5 w-5" />}
    </button>
  );
};

export default ActionButton;
