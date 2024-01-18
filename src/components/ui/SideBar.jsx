import logo from "../../assets/logo/YouTube-Logo.wine-cropped.png";

export default function SideBar() {
  const Item = ({ name, icon }) => {
    return (
      <div>
        <img src={icon} alt="" />
        <span>{name}</span>
      </div>
    );
  };

  return (
    <div className="h-full bg-white p-8 rounded-3xl shadow-xl">
      <div className="flex justify-center items-center">
        <img src={logo} alt="dark youtube logo" className="w-2/3" />
      </div>
    </div>
  );
}
