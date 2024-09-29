import React from "react";

export const Logo = () => {
  return (
    <>
      <img
        src="/logo-white.png"
        height={24}
        width={24}
        alt="LOGO"
        className="hidden dark:block"
      />
      <img
        src="/logo-black.png"
        height={24}
        width={24}
        alt="LOGO"
        className="dark:hidden"
      />
    </>
  );
};
