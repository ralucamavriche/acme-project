const InvoiceMetadata = () => {
  return (
    <>
      <title>ACME | Invoices</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="View, manage, and organize all your invoices in one place with Acme. Easily access invoice details, track activity, and streamline your business relationships."
      />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};
const InvoicesPage: React.FC = () => (
  <>
    <InvoiceMetadata />
    <div>
      <h1>Invoices Page</h1>
      <p>This is the invoices page placeholder.</p>
    </div>
  </>
);

export default InvoicesPage;
