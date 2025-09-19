import { PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

type CreateInvoiceButtonProps = {
  path: string;
};
const CreateInvoiceButton = ({ path }: CreateInvoiceButtonProps) => {
  return (
    <Link
      to={path}
      className="flex h-10 items-center justify-center gap-4 rounded-lg bg-blue-600 px-4 text-white hover:bg-blue-500 md:mr-0 md:justify-start"
    >
      <span className="hidden text-sm md:block">Create Invoice</span>
      <PlusIcon className="h-4 w-4" />
    </Link>
  );
};
export default CreateInvoiceButton;
