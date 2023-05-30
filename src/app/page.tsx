'use client'
import Navbar from '../components/ui/Navbar'
import Content from '../components/ui/Content'
import Profile from '../components/ui/Profile'
import { useState } from 'react';

interface HomeProps {
  setGetID: (id: string) => void;
  getID: string;
}


export default function Home(prop: HomeProps) {
  const [getID, setGetID] = useState('');

  return (
    <div className="flex flex-row justify-between mt-16 gap-10">
      <Navbar setGetID={setGetID}/>
      <Content getID={getID}/>
      <Profile />
    </div>
  );
}
