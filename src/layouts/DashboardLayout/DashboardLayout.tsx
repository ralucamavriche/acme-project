import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-6">
        <Link to="/">Go to Main</Link>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
