import LatestInvoices from '../../components/LatestInvoices';
import Stats from '../../components/Stats';

const DashboardMetadata = () => {
  return (
    <>
      <title>ACME | Dashboard</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Welcome to the Acme dashboard." />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};
const DashboardPage: React.FC = () => (
  <>
    <DashboardMetadata />
    <div className="flex h-full flex-col p-6 md:p-12">
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Stats />
      <div className="mt-6 grid w-full flex-1 grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="mb-4 text-xl md:text-2xl">Recent Revenue</h1>
          <div className="flex-grow rounded-xl bg-gray-50"></div>
        </div>
        <LatestInvoices />
      </div>
    </div>
  </>
);

export default DashboardPage;
