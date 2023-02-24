import React, {useState} from 'react'


const searchBar = () => {


// const searchResult = post.filter(post => post.title.includes)


 const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  
  if (searchTerm.length > 0) {
      posts.filter((post) => {
      return post.title.includes(searchTerm);
  });
  }
  
  return (
     <div>
  
  <input
     type="search"
     placeholder="Search here"
     onChange={handleChange}
     value={searchTerm} />

     </div>
  )
};

     
     

export default searchBar;