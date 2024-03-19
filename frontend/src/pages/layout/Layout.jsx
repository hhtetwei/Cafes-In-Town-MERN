import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
