import React from 'react';

const LeftSideBar = ({categories}) => {
    return (
        <div>
            <ul className="flex flex-col gap-3 mt-2">
          {
            categories.news_category.map(c => {
              return <li key={c.category_id} className="bg-slate-100 p-2 rounded-md text-center text-gray-600">{c.category_name}</li>
            })
          }
        </ul>
            
        </div>
    );
};

export default LeftSideBar;