// import React, { useState, useEffect } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
// export default function News() {
//   const [articles, setArticles] = useState([]);
//   const [search, setSearch] = useState('');
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=18ed2d1832924313ae196aabf8fb6d24');
//         const data = await response.json();
//         setArticles(data.articles);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };
 
//     fetchData();
//   }, []);
 
//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };
 
//   return (
//     <div className='container bg-secondary'>
//       <h1>Top Business Headlines</h1>
//       <input type="text" placeholder="Search by title" value={search} onChange={handleSearch} className="form-control mb-3" />
//       <div className='row bg-warning'>
//         {articles
//           .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
//           .map((item) => (
//             <div key={item.title} className='col-md-4 mb-4'>
//               <div className="card bg-info ">
//                 {item.urlToImage && <img src={item.urlToImage} className="card-img-top" alt={item.title} />}
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">{item.description}</p>
//                   <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-success">Read More</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// // import './News.css'; // Import external CSS file
 
// const likeIcon = 'https://cdn-icons-png.flaticon.com/512/1062/1062675.png';
// const unlikeIcon = 'https://cdn-icons-png.flaticon.com/512/15/15107.png';
// const commentIcon = 'https://cdn-icons-png.flaticon.com/512/9256/9256389.png';
 
// const News = () => {
//     const [businessArticles, setBusinessArticles] = useState([]);
//     const [sportsArticles, setSportsArticles] = useState([]);
//     const [generalArticles, setGeneralArticles] = useState([]);
 
//     const [likes, setLikes] = useState([]);
 
//     useEffect(() => {
//         const fetchBusinessNews = async () => {
//             const apiKey = '18ed2d1832924313ae196aabf8fb6d24';
//             try {
//                 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}&pageSize=10`);
//                 if (response.data.articles) {
//                     setBusinessArticles(response.data.articles);
//                     setLikes(Array(response.data.articles.length).fill(0));
//                 } else {
//                     console.error('No business articles found.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching business news:', error);
//             }
//         };
 
//         const fetchSportsNews = async () => {
//             const apiKey = '18ed2d1832924313ae196aabf8fb6d24';
//             try {
//                 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}&pageSize=6`);
//                 if (response.data.articles) {
//                     setSportsArticles(response.data.articles);
//                 } else {
//                     console.error('No sports articles found.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching sports news:', error);
//             }
//         };
 
//         const fetchGeneralNews = async () => {
//             const apiKey = '18ed2d1832924313ae196aabf8fb6d24';
//             try {
//                 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=6`);
//                 if (response.data.articles) {
//                     setGeneralArticles(response.data.articles);
//                 } else {
//                     console.error('No general articles found.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching general news:', error);
//             }
//         };
 
//         fetchBusinessNews();
//         fetchSportsNews();
//         fetchGeneralNews();
//     }, []);
 
//     const handleLike = (index) => {
//         // Update likes array with immutable approach
//         setLikes(prevLikes => {
//             const updatedLikes = [...prevLikes];
//             updatedLikes[index] += 1;
//             return updatedLikes;
//         });
//     };
 
//     return (
//         <div className="container">
//             {/* First row */}
//             <div className="row">
//                 <div className="col-md-6">
//                     <div id="carouselExampleDark" className="carousel carousel-dark slide">
//                         <div className="carousel-inner">
//                             {businessArticles.slice(0, 3).map((article, index) => (
//                                 <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
//                                     <img
//                                         src={article.urlToImage}
//                                         className="d-block w-100 carousel-image"
//                                         alt={article.title}
//                                     />
//                                     <div className="carousel-caption d-none d-md-block">
//                                         <h5>{article.title}</h5>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Previous</span>
//                         </button>
//                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Next</span>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="row row-cols-1 row-cols-md-2 g-4">
//                         {businessArticles.slice(3, 5).map((article, index) => (
//                             <div key={index} className="col">
//                                 <div className="card h-100">
//                                     <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{article.title}</h5>
//                                         <p className="card-text">{article.description}</p>
//                                     </div>
//                                     <div className="card-footer d-flex justify-content-between">
//                                         <div>
//                                             <img
//                                                 src={likeIcon}
//                                                 alt="Like"
//                                                 style={{ width: 20, height: 20, marginRight: 5, cursor: 'pointer' }}
//                                                 onClick={() => handleLike(index)}
//                                             />
//                                             <span>{likes[index]}</span>
//                                             <img src={commentIcon} alt="Comment" style={{ width: 20, height: 20, marginLeft: 10 }} />
//                                         </div>
//                                         <img src={unlikeIcon} alt="Unlike" style={{ width: 20, height: 20, cursor: 'pointer' }} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
 
//             {/* Second row */}
//             <div className="row mt-4">
//                 <div className="col-md-6">
//                     <div className="row row-cols-1 row-cols-md-2 g-4">
//                         {sportsArticles.map((article, index) => (
//                             <div key={index} className="col">
//                                 <div className="card h-100">
//                                     <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{article.title}</h5>
//                                         <p className="card-text">{article.description}</p>
//                                     </div>
//                                     <div className="card-footer d-flex justify-content-between">
//                                         <div>
//                                             <img
//                                                 src={likeIcon}
//                                                 alt="Like"
//                                                 style={{ width: 20, height: 20, marginRight: 5, cursor: 'pointer' }}
//                                                 onClick={() => handleLike(index)}
//                                             />
//                                             <span>{likes[index]}</span>
//                                             <img src={commentIcon} alt="Comment" style={{ width: 20, height: 20, marginLeft: 10 }} />
//                                         </div>
//                                         <img src={unlikeIcon} alt="Unlike" style={{ width: 20, height: 20, cursor: 'pointer' }} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="row row-cols-1 row-cols-md-2 g-4">
//                         {generalArticles.slice(0, 3).map((article, index) => (
//                             <div key={index} className="col">
//                                 <div className="card h-100">
//                                     <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{article.title}</h5>
//                                         <p className="card-text">{article.description}</p>
//                                     </div>
//                                     <div className="card-footer d-flex justify-content-between">
//                                         <div>
//                                             <img
//                                                 src={likeIcon}
//                                                 alt="Like"
//                                                 style={{ width: 20, height: 20, marginRight: 5, cursor: 'pointer' }}
//                                                 onClick={() => handleLike(index)}
//                                             />
//                                             <span>{likes[index]}</span>
//                                             <img src={commentIcon} alt="Comment" style={{ width: 20, height: 20, marginLeft: 10 }} />
//                                         </div>
//                                         <img src={unlikeIcon} alt="Unlike" style={{ width: 20, height: 20, cursor: 'pointer' }} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
 
//             {/* Third row */}
//             <div className="row mt-4">
//                 <div className="col-md-6">
//                     <div className="row row-cols-1 row-cols-md-3 g-4">
//                         {generalArticles.slice(3, 6).map((article, index) => (
//                             <div key={index} className="col">
//                                 <div className="card h-100">
//                                     <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{article.title}</h5>
//                                         <p className="card-text">{article.description}</p>
//                                     </div>
//                                     <div className="card-footer d-flex justify-content-between">
//                                         <div>
//                                             <img
//                                                 src={likeIcon}
//                                                 alt="Like"
//                                                 style={{ width: 20, height: 20, marginRight: 5, cursor: 'pointer' }}
//                                                 onClick={() => handleLike(index)}
//                                             />
//                                             <span>{likes[index]}</span>
//                                             <img src={commentIcon} alt="Comment" style={{ width: 20, height: 20, marginLeft: 10 }} />
//                                         </div>
//                                         <img src={unlikeIcon} alt="Unlike" style={{ width: 20, height: 20, cursor: 'pointer' }} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="row row-cols-1 row-cols-md-2 g-4">
//                         {generalArticles.slice(6, 9).map((article, index) => (
//                             <div key={index} className="col">
//                                 <div className="card h-100">
//                                     <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{article.title}</h5>
//                                         <p className="card-text">{article.description}</p>
//                                     </div>
//                                     <div className="card-footer d-flex justify-content-between">
//                                         <div>
//                                             <img
//                                                 src={likeIcon}
//                                                 alt="Like"
//                                                 style={{ width: 20, height: 20, marginRight: 5, cursor: 'pointer' }}
//                                                 onClick={() => handleLike(index)}
//                                             />
//                                             <span>{likes[index]}</span>
//                                             <img src={commentIcon} alt="Comment" style={{ width: 20, height: 20, marginLeft: 10 }} />
//                                         </div>
//                                         <img src={unlikeIcon} alt="Unlike" style={{ width: 20, height: 20, cursor: 'pointer' }} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
 
// export default News;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

// const News = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=18ed2d1832924313ae196aabf8fb6d24`);
//         if (response.data.articles) {
//           setArticles(response.data.articles);
//         } else {
//           setArticles([]);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredArticles = articles.filter((article) =>
//     article.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container-fluid bg-secondary py-4">
//       <h1 className="text-center mb-4">Top Headlines</h1>
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by title"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {filteredArticles.map((article) => (
//           <div key={article.title} className="col">
//             <div className="card bg-info">
//               {article.urlToImage && (
//                 <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//               )}
//               <div className="card-body">
//                 <h5 className="card-title">{article.title}</h5>
//                 <p className="card-text">{article.description}</p>
//                 <a
//                   href={article.url}
//                   className="btn btn-success"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// // const s = 'https://w7.pngwing.com/pngs/128/895/png-transparent-like-icon-facebook-social-media-like-button-thumb-signal-like-blue-angle-rectangle.png'
// import s from './images/like-removebg-preview.png'

// const News = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [count, setCount] = useState('0')
//   const [selectedCategory, setSelectedCategory] = useState('general'); 

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiKey = '18ed2d1832924313ae196aabf8fb6d24';
//       try {
//         const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=${apiKey}`);
//         if (response.data.articles) {
//           setArticles(response.data.articles);
//         } else {
//           setArticles([]);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [selectedCategory]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };
//   const sai ()=>{
//     setCount = count+1;
//   }

//   const filteredArticles = articles.filter((article) =>
//     article.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container-fluid bg-secondary py-4">
//       <h1 className="text-center mb-4">India News</h1>
//       <div className="row mb-3">
//         <div className="col-md-6 offset-md-3">
//           <div className="input-group">
//             <select className="form-select" onChange={handleCategoryChange} value={selectedCategory}>
//               <option value="general">General</option>
//               <option value="business">Business</option>
//               <option value="entertainment">Entertainment</option>
//               <option value="health">Health</option>
//               <option value="science">Science</option>
//               <option value="sports">Sports</option>
//               <option value="technology">Technology</option>
//             </select>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by title"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {filteredArticles.map((article) => (
//           <div key={article.title} className="col">
//             <div className="card bg-info">
//               {article.urlToImage && (
//                 <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//               )}
//               <div className="card-body">
//                 <h5 className="card-title">{article.title}</h5>
//                 {/* <p className="card-text">{article.description}</p> */}
//                 <img src={s} alt=''  style={{width:30,height:30}} onClick={sai}/>
//                 <br/>
//                 <a
//                   href={article.url}
//                   className="btn btn-success"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import s from './images/like-removebg-preview.png';

// const News = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [likeCount, setLikeCount] = useState(0); // State for like count
//   const [selectedCategory, setSelectedCategory] = useState('general');

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiKey = '18ed2d1832924313ae196aabf8fb6d24';
//       try {
//         const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=${apiKey}`);
//         if (response.data.articles) {
//           setArticles(response.data.articles);
//         } else {
//           setArticles([]);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [selectedCategory]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handleLikeClick = () => {
//     setLikeCount(likeCount + 1); // Increment like count when like icon is clicked
//   };

//   const filteredArticles = articles.filter((article) =>
//     article.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container-fluid bg-secondary py-4">
//       <h1 className="text-center mb-4">India News</h1>
//       <div className="row mb-3">
//         <div className="col-md-6 offset-md-3">
//           <div className="input-group">
//             <select className="form-select" onChange={handleCategoryChange} value={selectedCategory}>
//               <option value="general">General</option>
//               <option value="business">Business</option>
//               <option value="entertainment">Entertainment</option>
//               <option value="health">Health</option>
//               <option value="science">Science</option>
//               <option value="sports">Sports</option>
//               <option value="technology">Technology</option>
//             </select>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by title"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {filteredArticles.map((article) => (
//           <div key={article.title} className="col">
//             <div className="card bg-info">
//               {article.urlToImage && (
//                 <img src={article.urlToImage} className="card-img-top" alt={article.title} />
//               )}
//               <div className="card-body">
//                 <h5 className="card-title">{article.title}</h5>
//                 <img src={s} alt="Like" style={{ width: 30, height: 30, cursor: 'pointer' }} onClick={handleLikeClick} />
//                 <span style={{ marginLeft: 10 }}>{likeCount}</span> {/* Display like count */}
//                 <br />
//                 <a
//                   href={article.url}
//                   className="btn btn-success"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import s from './images/like-removebg-preview.png';
import p from './images/unlike-removebg-preview.png';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '18ed2d1832924313ae196aabf8fb6d24';
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=${apiKey}`);
        if (response.data.articles) {
          setArticles(response.data.articles.map(article => ({
            ...article,
            likeCount: 0,
            liked: false,
            unlikeCount: 0,
            unliked: false,
          })));
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLikeClick = (articleId) => {
    setArticles(prevArticles => prevArticles.map(article => {
      if (article.title === articleId && !article.liked) {
        return {
          ...article,
          liked: true,
          likeCount: article.likeCount + 1,
          unliked: false,
          unlikeCount: 0
        };
      } else if (article.title === articleId && article.liked) {
        return {
          ...article,
          liked: false,
          likeCount: 0
        };
      }
      return article;
    }));
  };

  const handleUnlikeClick = (articleId) => {
    setArticles(prevArticles => prevArticles.map(article => {
      if (article.title === articleId && !article.unliked) {
        return {
          ...article,
          unliked: true,
          unlikeCount: article.unlikeCount - 1,
          liked: false,
          likeCount: 0
        };
      } else if (article.title === articleId && article.unliked) {
        return {
          ...article,
          unliked: false,
          unlikeCount: 0
        };
      }
      return article;
    }));
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid bg-secondary py-4">
      <h1 className="text-center mb-4">India News</h1>
      <div className="row mb-3">
        <div className="col-md-6 offset-md-3">
          <div className="input-group">
            <select className="form-select" onChange={handleCategoryChange} value={selectedCategory}>
              <option value="general">General</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredArticles.map((article) => (
          <div key={article.title} className="col">
            <div className="card bg-info">
              {article.urlToImage && (
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              )}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <img
                  src={s}
                  alt="Like"
                  style={{ width: 30, height: 30, cursor: 'pointer' }}
                  onClick={() => handleLikeClick(article.title)}
                />
                <span style={{ marginLeft: 10 }}>{article.likeCount}</span> {/* Display individual like count */}
                <img
                  src={p}
                  alt="Unlike"
                  style={{ width: 40, height: 40, cursor: 'pointer', marginLeft: 10 }}
                  onClick={() => handleUnlikeClick(article.title)}
                />
                <span style={{ marginLeft: 10 }}>{article.unlikeCount}</span> {/* Display individual unlike count */}
                <br />
                <a
                  href={article.url}
                  className="btn btn-success"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
