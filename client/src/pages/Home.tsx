import { Link } from 'react-router-dom';
import '../assets/module.css';
export default function Home() {
  return (
    <div className='container flex flex-col items-center justify-center gap-2'>
      <h1 className='font-mono text-2xl text-center text-gray-50 md:text-6xl'>
        Compile Hub
      </h1>
      <p className='text-center text-gray-400 '>
        Your personal HTML, CSS, JavaScript Code compiler.
      </p>
      <br />
      <Link to='/compiler'>
        <button className='button' data-text='Awesome'>
          <span className='actual-text'>&nbsp;COMPILE&nbsp;</span>
          <span aria-hidden='true' className='hover-text'>
            &nbsp;COMPILE&nbsp;
          </span>
        </button>
      </Link>
    </div>
  );
}
