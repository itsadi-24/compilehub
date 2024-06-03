import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className=' w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center '>
      <Link to='/'>
        <h2 className='flex font-bold select-none hover:text-green-500'>
          <HomeIcon size={22} />
          Home Page
        </h2>
      </Link>
    </nav>
  );
};

export default Header;
