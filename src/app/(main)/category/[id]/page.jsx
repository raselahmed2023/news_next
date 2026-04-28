import LeftSideBar from "@/components/News/LeftSideBar";
import RightSideBar from "@/components/News/RightSideBar";

async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data;
}

async function getNewsByCategories({ category_id }) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    return data.data;
}

export default async function CategoryNews({ params }) {
    const { id } = await params;

    const categories = await getCategories();
    const news = await getNewsByCategories({ category_id: id });

    return (
        <div className="grid grid-cols-12 mx-auto container mt-10 gap-4">
            <div className="col-span-3">
                <h2 className="font-bold text-2xl">All Category</h2>
                <LeftSideBar categories={categories} />
            </div>

            <div className="col-span-6">
                <h2 className="font-bold text-2xl">Dragon News Home</h2>
                {news.map(n => (
                    <div key={n._id} className=" p-4 mb-5 mt-2 border rounded-md border-gray-400">
                        <h2>{n.title}</h2>
                    </div>
                ))}
            </div>
            
            <div className="col-span-3">
                <h2 className="font-bold text-2xl">Find Us On</h2>
                <RightSideBar />
            </div>
        </div>
    );
}