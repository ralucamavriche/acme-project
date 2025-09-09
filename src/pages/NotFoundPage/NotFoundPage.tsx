const NotFoundMetadata = () => {
  return (
    <>
      <title>ACME | 404 - Not Found</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="The page you are looking for does not exist on Acme. Please check the URL or return to the homepage."
      />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};

const NotFoundPage: React.FC = () => (
  <>
    <NotFoundMetadata />
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  </>
);

export default NotFoundPage;
