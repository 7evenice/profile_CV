// @flow
import { FC, useState } from 'react';

interface NavbarProps {
  setGetID: (id: string) => void;
}

const Navbar: FC<NavbarProps> = ({setGetID}) => {
  const [isActive, setIsActive] = useState('')
  const handleClick = (id: string) => {
    setGetID(id);
    setIsActive(id);
    // console.log(id);
  };

  return (
    <div className="">
      <nav className="nav flex flex-col justify-between h-full gap-10 ">
        <button
          onClick={() => handleClick('INTRODUCTION')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'INTRODUCTION' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="INTRODUCTION"
        >
          INTRODUCTION
        </button>
        <button
          onClick={() => handleClick('CAREER')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'CAREER' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="CAREER"
        >
          CAREER GOALS
        </button>
        <button
          onClick={() => handleClick('PROJECT')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'PROJECT' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="PROJECT"
        >
          PROJECT
        </button>
        <button
          onClick={() => handleClick('SKILL')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'SKILL' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="SKILL"
        >
          SKILL
        </button>
        <button
          onClick={() => handleClick('OVERVIEW')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'OVERVIEW' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="OVERVIEW"
        >
          OVERVIEW
        </button>
        <button
          onClick={() => handleClick('ACADEMIC')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'ACADEMIC' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="ACADEMIC"
        >
          ACADEMIC
        </button>
        <button
          onClick={() => handleClick('WORK')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'WORK' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="WORK"
        >
          WORK EXPERIENCE
        </button>
        <button
          onClick={() => handleClick('CERTIFICATE')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'CERTIFICATE' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="CERTIFICATE"
        >
          CERTIFICATE
        </button>
        <button
          onClick={() => handleClick('TECH')}
          className={`nav-link p-1  rounded-md text-center hover:bg-green-600 ${
            isActive === 'TECH' ? 'bg-green-600' : 'bg-slate-500'
          }`}
          id="TECH"
        >
          TECH-FRAMEWORK
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
