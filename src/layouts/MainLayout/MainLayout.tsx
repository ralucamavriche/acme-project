import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const MainLayout: React.FC = () => (
  <div className="min-h-screen flex flex-col m-6">
    <Header />
    <main className="flex grow">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
