import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className=' w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center'>
      <Link to='/'>
        <h2 className='font-bold select-none '>Compile Hub</h2>
      </Link>
    </nav>
  );
};

export default Header;
