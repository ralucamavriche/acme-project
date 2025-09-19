import { Meta, StoryObj } from '@storybook/react-vite/*';
import { MemoryRouter } from 'react-router-dom';
import CreateInvoiceButton from './CreateInvoiceButton';

const meta: Meta<typeof CreateInvoiceButton> = {
  component: CreateInvoiceButton,
  title: 'Components/Button/CreateInvoiceButton',
};

export default meta;

export const Default: StoryObj<typeof CreateInvoiceButton> = {
  render: () => (
    <MemoryRouter>
      <CreateInvoiceButton path="/invoices/create" />
    </MemoryRouter>
  ),
};
