import React from 'react'
import { UserCard } from '../(components)/userCard';

export const PatientsPage = () => {
  return (
    <div className="h-full flex-1 flex items-center justify-center ">
      <div className="w-3/4 grid grid-cols-3 grid-rows-2 gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}


