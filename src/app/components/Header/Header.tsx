// components/HeaderComponent.js


  
  const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
      <header className="bg-gray-800 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-400">{title}</a>
            {/* Add more navigation links if needed */}
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  