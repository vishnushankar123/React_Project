// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './Food1.css';
 
// const s = 'https://cdn-icons-png.flaticon.com/256/159/159606.png';
 
// export default function Food1() {
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [meals, setMeals] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
 
//     useEffect(() => {
//         axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
//             .then(res => {
//                 setCategories(res.data.categories);
//             })
//             .catch(error => {
//                 console.error('Error fetching categories: ', error);
//             });
//     }, []);
 
//     const fetchMealsByCategory = (category) => {
//         axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//             .then(res => {
//                 setMeals(res.data.meals);
//                 setSelectedCategory(category);
//             })
//             .catch(error => {
//                 console.error(`Error fetching meals for category ${category}: `, error);
//             });
//     };
 
//     const resetCategorySelection = () => {
//         setSelectedCategory(null);
//         setMeals([]);
//     };
 
//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };
 
//     const filteredMeals = meals.filter(meal => {
//         return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
//     });
 
//     return (
        
//         <div className='container'>
//             <div className='vishnu'>
//             {selectedCategory ? (
//                 <>
//                     <button className='btn btn-link mb-3' onClick={resetCategorySelection}>
//                         <img src={s} alt='' style={{ height: 50, width: 50, backgroundColor: 'white' }} />
//                     </button>
//                     <h2 className="text-center mb-4">{selectedCategory}</h2>
//                     <div className='row' style={{ marginBottom: 20 }}>
//                         <div className='col-md-5'>
//                             <input
//                                 type='text'
//                                 placeholder='Search meals...'
//                                 className='form-control'
//                                 value={searchTerm}
//                                 onChange={handleSearchChange}
//                             />
//                         </div>
//                     </div>
//                     <div className='row justify-content-center'>
//                         {filteredMeals.map(meal => (
//                             <div key={meal.idMeal} className='col-md-auto mb-3'>
//                                 <div className="card text-center" style={{ height: 300, width: 200, borderRadius: 40 }}>
//                                     <img
//                                         src={meal.strMealThumb}
//                                         className='card-img-top img-fluid'
//                                         alt={meal.strMeal}
//                                     />
//                                     <div className='sai'>
//                                         <div className="card-body">
//                                             <h5 className="card-title" style={{ color: 'white' }}>{meal.strMeal}</h5>
                                            
//                                             {/* <button>Show Integridents</button> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             ) : (
//                 <div className='row justify-content-center mb-4'>
//                     {categories.map(category => (
//                         <div key={category.idCategory} className='col-md-auto mb-3 text-center'>
//                             <button
//                                 className='btn btn-link'
//                                 onClick={() => fetchMealsByCategory(category.strCategory)}
//                             >
//                                 <img
//                                     src={category.strCategoryThumb}
//                                     className='img-fluid'
//                                     alt={category.strCategory}
//                                     style={{ width: '150px', height: '150px', borderRadius: '50%' }}
//                                 />
//                                 <h5 className='mt-2' style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
//                                     {category.strCategory}
//                                 </h5>
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './Food1.css';
 
// const s = 'https://cdn-icons-png.flaticon.com/256/159/159606.png';
 
// export default function Food() {
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [meals, setMeals] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
 
//     useEffect(() => {
//         axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
//             .then(res => {
//                 setCategories(res.data.categories);
//             })
//             .catch(error => {
//                 console.error('Error fetching categories: ', error);
//             });
//     }, []);
 
//     const fetchMealsByCategory = (category) => {
//         axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//             .then(res => {
//                 setMeals(res.data.meals);
//                 setSelectedCategory(category);
//             })
//             .catch(error => {
//                 console.error(`Error fetching meals for category ${category}: `, error);
//             });
//     };
 
//     const resetCategorySelection = () => {
//         setSelectedCategory(null);
//         setMeals([]);
//     };
 
//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };
 
//     const filteredMeals = meals.filter(meal => {
//         return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
//     });
 
//     return (
//         <div className='container' id='Food'>
//             {selectedCategory ? (
//                 <>
//                     <button className='btn btn-link mb-3' onClick={resetCategorySelection}>
//                         <img src={s} alt='' style={{ height: 50, width: 50, backgroundColor: 'white' }} />
//                     </button>
//                     <h2 className="text-center mb-4">{selectedCategory}</h2>
//                     <div className='row' style={{ marginBottom: 20 }}>
//                         <div className='col-md-5'>
//                             <input
//                                 type='text'
//                                 placeholder='Search meals...'
//                                 className='form-control'
//                                 value={searchTerm}
//                                 onChange={handleSearchChange}
//                             />
//                         </div>
//                     </div>
//                     <div className='row justify-content-center'>
//                         {filteredMeals.map(meal => (
//                             <div key={meal.idMeal} className='col-md-auto mb-3'>
//                                 <div className="card text-center" style={{ height: 300, width: 200, borderRadius: 40 }}>
//                                     <img
//                                         src={meal.strMealThumb}
//                                         className='card-img-top img-fluid'
//                                         alt={meal.strMeal}
//                                     />
//                                     <div className='sai'>
//                                         <div className="card-body">
//                                             <h5 className="card-title" style={{ color: 'white' }}>{meal.strMeal}</h5>
//                                             {/* <br/>
//                                             <button>Show Integridents</button> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             ) : (
//                 <div className='row justify-content-center mb-4'>
//                     {categories.map(category => (
//                         <div key={category.idCategory} className='col-md-auto mb-3 text-center'>
//                             <button
//                                 className='btn btn-link'
//                                 onClick={() => fetchMealsByCategory(category.strCategory)}
//                             >
//                                 <img
//                                     src={category.strCategoryThumb}
//                                     className='img-fluid'
//                                     alt={category.strCategory}
//                                     style={{ width: '150px', height: '150px', borderRadius: '50%' }}
//                                 />
//                                 <h5 className='mt-2' style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
//                                     {category.strCategory}
//                                 </h5>
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './Food1.css';

// const s = 'https://cdn-icons-png.flaticon.com/256/159/159606.png';

// export default function Food() {
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [meals, setMeals] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
//             .then(res => {
//                 setCategories(res.data.categories);
//             })
//             .catch(error => {
//                 console.error('Error fetching categories: ', error);
//             });
//     }, []);

//     const fetchMealsByCategory = (category) => {
//         axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//             .then(res => {
//                 setMeals(res.data.meals);
//                 setSelectedCategory(category);
//             })
//             .catch(error => {
//                 console.error(`Error fetching meals for category ${category}: `, error);
//             });
//     };

//     const resetCategorySelection = () => {
//         setSelectedCategory(null);
//         setMeals([]);
//     };

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const filteredMeals = meals.filter(meal => {
//         return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     return (
//         <div className='container' id='Food'>
//             {selectedCategory ? (
//                 <>
//                     <button className='btn btn-link mb-3' onClick={resetCategorySelection}>
//                         <img src={s} alt='' style={{ height: 50, width: 50, backgroundColor: 'white' }} />
//                     </button>
//                     <h2 className="text-center mb-4">{selectedCategory}</h2>
//                     <div className='row' style={{ marginBottom: 20 }}>
//                         <div className='col-md-5'>
//                             <input
//                                 type='text'
//                                 placeholder='Search meals...'
//                                 className='form-control'
//                                 value={searchTerm}
//                                 onChange={handleSearchChange}
//                             />
//                         </div>
//                     </div>
//                     <div className='row justify-content-center'>
//                         {filteredMeals.map(meal => (
//                             <div key={meal.idMeal} className='col-md-auto mb-3'>
//                                 <div className="card text-center" style={{ height: '100%', width: '200px', borderRadius: '40px', overflow: 'hidden' }}>
//                                     <img
//                                         src={meal.strMealThumb}
//                                         className='card-img-top img-fluid'
//                                         alt={meal.strMeal}
//                                         style={{ height: '200px', objectFit: 'cover' }}
//                                     />
//                                     <div className='card-body'>
//                                         <h5 className='card-title' style={{ color: 'white' }}>{meal.strMeal}</h5>
//                                         {/* Add any additional meal details or buttons here */}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             ) : (
//                 <div className='row justify-content-center mb-4'>
//                     {categories.map(category => (
//                         <div key={category.idCategory} className='col-md-auto mb-3 text-center'>
//                             <button
//                                 className='btn btn-link'
//                                 onClick={() => fetchMealsByCategory(category.strCategory)}
//                                 style={{ textDecoration: 'none' }}
//                             >
//                                 <img
//                                     src={category.strCategoryThumb}
//                                     className='img-fluid'
//                                     alt={category.strCategory}
//                                     style={{ width: '150px', height: '150px', borderRadius: '50%' }}
//                                 />
//                                 <h5 className='mt-2'>{category.strCategory}</h5>
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Food1.css';

const s = 'https://static1.squarespace.com/static/526499fbe4b098807d061a09/t/5888ae28b3db2ba59b370323/1485353338255/back+button.png';

export default function Food() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                setCategories(res.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories: ', error);
            });
    }, []);

    const fetchMealsByCategory = (category) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => {
                setMeals(res.data.meals);
                setSelectedCategory(category);
            })
            .catch(error => {
                console.error(`Error fetching meals for category ${category}: `, error);
            });
    };

    const resetCategorySelection = () => {
        setSelectedCategory(null);
        setMeals([]);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMeals = meals.filter(meal => {
        return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className='container-fluid' id='Food'>
            {/* <h1 style={{color:'white',textAlign:'center',padding:20,fontFamily:'Arial'}}></h1> */}
           <h5 style={{padding:2}}></h5>
            <div className='container'>
                {selectedCategory ? (
                    <>
                        <button className='btn btn-link mb-3' onClick={resetCategorySelection}>
                            <img src={s} alt='' style={{ height: 50, width: 50, backgroundColor: 'brown' }} />
                        </button>
                        <h2 className="text-center mb-4">{selectedCategory}</h2>
                        <div className='row' style={{ marginBottom: 20 }}>
                            <div className='col-md-5'>
                                <input
                                    type='text'
                                    placeholder='Search meals...'
                                    className='form-control'
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            {filteredMeals.map(meal => (
                                <div key={meal.idMeal} className='col-md-auto mb-3'>
                                    <div className="card text-center" style={{ height: '100%', width: '200px', borderRadius: '40px', overflow: 'hidden' }}>
                                        <img
                                            src={meal.strMealThumb}
                                            className='card-img-top img-fluid'
                                            alt={meal.strMeal}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <div className='card-body'>
                                            <h5 className='card-title' style={{ color: 'white' }}>{meal.strMeal}</h5>
                                            {/* Add any additional meal details or buttons here */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='row justify-content-center mb-4'>
                        {categories.map(category => (
                            <div key={category.idCategory} className='col-md-auto mb-3 text-center'>
                                <button
                                    className='btn btn-link'
                                    onClick={() => fetchMealsByCategory(category.strCategory)}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img
                                        src={category.strCategoryThumb}
                                        className='img-fluid'
                                        alt={category.strCategory}
                                        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                                    />
                                    <h5 className='mt-2'>{category.strCategory}</h5>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

