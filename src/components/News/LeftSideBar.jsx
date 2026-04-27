import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <ul className="flex flex-col gap-3 mt-2">
                {
                    categories.news_category.map(c => {
                        return <li key={c.category_id} className={`${activeId === c.category_id && "bg-slate-300"} p-2 rounded-md text-gray-600`}>

                            <Link href={`/category/${c.category_id}`} className='block'> {c.category_name}</Link>
                        </li>
                    })
                }
            </ul>

        </div>
    );
};

export default LeftSideBar;