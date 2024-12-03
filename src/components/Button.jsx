import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Base classes for buttons
  const baseClasses = `button relative inline-flex items-center justify-center h-11 rounded-md transition-colors ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""} hover:text-color-1`;

  // Additional styling for child content
  const spanClasses = "relative z-10 flex items-center justify-center";

  const renderButton = () => (
    <button
      className={baseClasses}
      onClick={onClick}
      aria-label={typeof children === "string" ? children : "button"}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={baseClasses}
      title={typeof children === "string" ? children : "link"}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
