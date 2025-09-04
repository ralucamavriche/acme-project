import { Link, Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const MainLayout: React.FC = () => (
  <div className="min-h-screen flex flex-col m-6">
    <Header />
    <Link to="/dashboard">Go to Dashboard</Link>
    <main className="flex-1">
      <Outlet />
    </main>
    <footer className="bg-gray-800 text-white p-4">Footer</footer>
  </div>
);

export default MainLayout;
