const CustomerMetadata = () => {
  return (
    <>
      <title>ACME | Customers</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="View, manage, and organize all your customers in one place with Acme. Easily access customer details, track activity, and streamline your business relationships."
      />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};
const CustomersPage: React.FC = () => (
  <>
    <CustomerMetadata />
    <div>
      <h1>Customers Page</h1>
      <p>This is the customers page placeholder.</p>
    </div>
  </>
);

export default CustomersPage;
