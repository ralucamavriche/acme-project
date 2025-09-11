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
    <div className="flex-grow p-6 md:p-12">
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Stats />
    </div>
  </>
);

export default DashboardPage;
