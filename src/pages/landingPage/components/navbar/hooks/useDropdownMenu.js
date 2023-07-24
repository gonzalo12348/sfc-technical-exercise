import React, { useState } from 'react';

const useDropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return { showMenu, toggleMenu };
};

export default useDropdownMenu;