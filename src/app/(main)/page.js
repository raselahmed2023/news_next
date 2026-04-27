import LeftSideBar from "@/components/News/LeftSideBar";
import RightSideBar from "@/components/News/RightSideBar";


async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;

};

export default async function HomePage() {
  const categories = await getCategories();
  return (
    <div className=" grid grid-cols-12 mx-auto container mt-10 gap-4">
      <div className="col-span-3">
        <h2 className="font-bold text-2xl">All Category</h2>
        <LeftSideBar categories={categories} ></LeftSideBar>
      </div>



      <div className="font-bold text-2xl col-span-6">Dragon News Home</div>

      
      <div className=" col-span-3">
        <h2 className="font-bold text-2xl"> Find Us On</h2>
       <RightSideBar></RightSideBar>
      </div>

    </div>
  );
}