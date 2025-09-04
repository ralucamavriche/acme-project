import { Link, Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-800 text-white p-4">Dashboard Header</header>
      <Link to="/">Go to Main</Link>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
