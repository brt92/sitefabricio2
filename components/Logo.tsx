import React from "react";

// Usando caminho absoluto a partir da raiz pública para evitar erros de importação
const logoImg = "/assets/logo-fabricio.png";

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