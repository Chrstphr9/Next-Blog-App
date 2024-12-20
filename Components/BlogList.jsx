import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import Blogitem from './BlogItem'

const BlogList = () => { 

    const [menu, setMenu] = useState('All');

  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-prishdw text-white py-1 px-4 rounded-sm' : ""}>All</button>
            <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-prishdw text-white py-1 px-4 rounded-sm' : ""}>Technology</button>
            <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-prishdw text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
            <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-prishdw text-white py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item, index) => menu === "All" ? true : item.category === menu).map((item, index) => {
                return <Blogitem key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
            })}
        </div> 
    </div>
  )
}

export default BlogList;
