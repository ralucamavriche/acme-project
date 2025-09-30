import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import MainLayout from '../layouts/MainLayout';
import CustomersPage from '../pages/CustomersPage';
import DashboardPage from '../pages/DashboardPage';
import Home from '../pages/Home';
import InvoicesPage from '../pages/InvoicesPage';
import CreateInvoicePage from '../pages/InvoicesPage/CreateInvoicePage';
import UpdateInvoicePage from '../pages/InvoicesPage/UpdateInvoicePage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="invoices/create" element={<CreateInvoicePage />} />
        <Route path="invoices/:id/edit" element={<UpdateInvoicePage />} />
        <Route path="customers" element={<CustomersPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
