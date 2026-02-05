import React from "react";

import logoImg from '../assets/logo-fabricio.png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src={logoImg}
        alt="Fabrício Indústria Petroquímica"
        className="h-14 w-auto"
      />
    </div>
  );
};

export default Logo;