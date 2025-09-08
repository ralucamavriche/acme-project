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
    <div>
      <h1>Dashboard Page</h1>
      <p>This is the dashboard page placeholder.</p>
    </div>
  </>
);

export default DashboardPage;
