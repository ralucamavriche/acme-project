import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
