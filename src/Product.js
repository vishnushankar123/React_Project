// import React, { useState, useEffect } from 'react';
// // import './Style1.css';
// import './Product.css';
// // import '../node_modules/bootstrap/dist/css/bootstrap.css';
// const s ='https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg'
// const p = 'https://th.bing.com/th/id/OIP.cNUM4xRZvgWgQ26qr5xL6wAAAA?w=474&h=772&rs=1&pid=ImgDetMain'
 
// export default function Product() {
//   const [state, setState] = useState([]);
//   const [search, setSearch] = useState("");
 
//   const state1 = (e) => {
//     setSearch(e.target.value);
//   };
 
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(json => setState(json));
//   }, []);
 
//   return (
//     <div className='container-fluid'>
//       <div className='row'>
//         <div className='col-md-3'>
//           <div className='sai'>
//           <img src={s} alt='' style={{borderRadius:50,height:100,width:100}} />
//           <br/>
//           Mens
//           </div>
//           </div>
//           <div className='col-md-3 margin-bottom-10'>
//           <img src={p} alt='' style={{borderRadius:50,height:100,width:100,marginBottom:20}} />

//           </div>

    
        
//       </div>
//      <input type="text" className="form-control mb-3" placeholder="Search" value={search} onChange={state1} />
//       <div className='row'>
//         {state.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
//           <div key={item.id} className='col-md-4 mb-4'>
//             <div className="card h-100">
//               <img src={item.image} className="card-img-top" alt={item.title} style={{width:300,height:300}} />
//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <h4 className='card-title'>{item.price}</h4>
//                 <p className="card-text">{item.description.slice(0, 100)}...</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
 

import React, { useState, useEffect } from 'react';
import './Product.css';

const mensImageUrl = 'https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg';
const womensImageUrl = 'https://th.bing.com/th/id/OIP.cNUM4xRZvgWgQ26qr5xL6wAAAA?w=474&h=772&rs=1&pid=ImgDetMain';
const otherImageUrl = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022173/Croma%20Assets/Computers%20Peripherals/Storage%20Devices/Images/237689_0_fsipj6.png?tr=w-480';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(null); // state to track selected category

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Filter products based on selected category
  const filteredProducts = products.filter(item => {
    if (!category) return true; // show all products if no category selected
    if (category === 'men') {
      return item.category.toLowerCase() === "men's clothing";
    } else if (category === 'women') {
      return item.category.toLowerCase() === "women's clothing";
    } else if (category === 'harddisk') {
      return item.category.toLowerCase() === 'electronics' && item.title.toLowerCase().includes('hard drive');
    }
    return true;
  });

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleImageClick = () => {
    // Handle click on the additional image (otherImageUrl) here if needed
    console.log('Clicked on additional image');
  };

  return (
    <div className='container-fluid' style={{ backgroundColor: 'aquamarine', minHeight: '100vh', padding: '20px' }}>
      <div className='container-fluid'>
        {/* First Row: Men's, Women's Images, and Additional Image */}
        <div className='row mb-4'>
          <div className='col-md-2' onClick={() => handleCategoryClick('men')}>
            <div className={`category ${category === 'men' ? 'active' : ''}`}>
              <img src={mensImageUrl} alt='Men' style={{ borderRadius: '50%', height: 100, width: 100 }} />
              <br />
              Mens
            </div>
          </div>
          <div className='col-md-2' onClick={() => handleCategoryClick('women')}>
            <div className={`category ${category === 'women' ? 'active' : ''}`}>
              <img src={womensImageUrl} alt='Women' style={{ borderRadius: '50%', height: 100, width: 100 }} />
              <br />
              Womens
            </div>
          </div>
          <div className='col-md-2' onClick={() => handleCategoryClick('harddisk')}>
            <img src={otherImageUrl} alt='Other' style={{ borderRadius: '50%', height: 100, width: 100, cursor: 'pointer' }} />
            <br />
            Hard Disk
          </div>
        </div>

        {/* Second Row: Search Input */}
        <div className='row mb-4'>
          <div className='col-md-4'>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Third Row: Products Grid */}
        <div className='row'>
          {filteredProducts
            .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
            .map(item => (
              <div key={item.id} className='col-md-4 mb-4'>
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ objectFit: 'cover', height: 300 }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h4 className='card-title'>{item.price}</h4>
                    <p className="card-text">{item.description.slice(0, 100)}...</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

