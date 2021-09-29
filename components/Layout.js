import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <title>My styled page</title>
          <link href='/static/styles.css' rel='stylesheet' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap'
            rel='stylesheet'
          />
        </Head>
      </div>
      <main className='flex flex-col items-center w-full font-body'>
        {children}
      </main>
    </>
  );
};

export default Layout;
