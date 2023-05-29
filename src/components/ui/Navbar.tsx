// @flow
import { FC } from 'react';

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className=''>
      <nav className="nav flex flex-col justify-between h-full gap-10 ">
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center" >
          INTRODUCTION
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center" >
          CAREER GOALS
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center " >
          PROJECT
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center " >
          SKILL
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center " >
          OVERVIEW
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center " >
          ACADEMIC
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center " >
          WORK EXPERIENCE
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center " >
          CERTIFICATE
        </button>
        <button className="nav-link p-1 bg-slate-500 rounded-md text-center " >
          TECH-FRAMEWORK
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
