import SideBar from "../ui/SideBar";

export default function Home() {
  return (
    <div className="h-full bg-gray-100 p-8 grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <SideBar />
      </div>
      <div className="col-span-9">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aut!
          Recusandae quos, dolores id delectus soluta esse aspernatur deserunt
          molestias, earum suscipit illum enim et quas accusantium? Repellendus,
          molestiae sint!
        </p>
      </div>
    </div>
  );
}
