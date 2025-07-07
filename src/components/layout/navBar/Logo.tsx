import { useNavigate } from "react-router-dom";

interface LogoProps {
  onCloseMobile?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onCloseMobile }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <div
      onClick={handleLogoClick}
      className="text-primary font-bold text-xl cursor-pointer">
      Orlov Brand
    </div>
  );
};

export default Logo;
