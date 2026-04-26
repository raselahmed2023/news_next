
async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;

};

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className=" grid grid-cols-12 mx-auto container mt-10 gap-4">
      <div className="col-span-3">
        <h2 className="font-bold text-2xl">All Category</h2>

        <ul className="flex flex-col gap-3 mt-2">
          {
            categories.news_category.map(c => {
              return <li key={c.category_id} className="bg-slate-100 p-2 rounded-md text-center text-gray-600">{c.category_name}</li>
            })
          }
        </ul>

      </div>



      <div className="font-bold text-2xl col-span-6">Dragon News Home</div>
      <div className="font-bold text-2xl col-span-3">Find Us On</div>

    </div>
  );
}
