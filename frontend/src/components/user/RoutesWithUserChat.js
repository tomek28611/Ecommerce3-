import React from 'react';
import { Outlet } from 'react-router-dom';
import UserChat from './UserChat';

const RoutesWithUserChat = () => {
  return (
    <>
        <UserChat />
        <Outlet />
    
    </>
  )
}

export default RoutesWithUserChat