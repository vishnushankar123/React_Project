import React, { useState, useEffect } from 'react'; 
import './Pop.css';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
 
export default function Movies() {
  const [mediaType, setMediaType] = useState('movie');
  const [mediaList, setMediaList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
 
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const page1Response = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}`, {
          params: {
            api_key: "3b14397db23f64f9c18611942b30cb26",
            with_original_language: "te",
            page: 3
          }
        });
 
        const page2Response = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}`, {
          params: {
            api_key: "3b14397db23f64f9c18611942b30cb26",
            with_original_language: "te",
            page: 4
          }
        });
 
        const page3Response = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}`, {
          params: {
            api_key: "3b14397db23f64f9c18611942b30cb26",
            with_original_language: "te",
            page: 5
          }
        });
 
        const allMedia = [
          ...page1Response.data.results,
          ...page2Response.data.results,
          ...page3Response.data.results
        ];
 
        setMediaList(allMedia);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchMedia();
  }, [mediaType]);
 
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
 
  const filteredMedia = mediaList.filter(media => {
    if (mediaType === 'movie') {
      return media.title && media.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (mediaType === 'tv') {
      return media.name && media.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });
 
  const handleMediaTypeToggle = (type) => {
    setMediaType(type);
  };
 
  return (
    <div className="container-fluid" id='movie'>
      <div className='container' style={{marginTop:20}}>
      <h1 className="mt-5 mb-4" style={{color:'white'}}>Movies</h1>
 
      <div className="sai">
        <div className="mb-4">
          <button
            className={`btn ${mediaType === 'movie' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleMediaTypeToggle('movie')}
            style={{ marginRight: '10px' }}
          >
            Movies
          </button>
          <span></span>
          <button
            className={`btn ${mediaType === 'tv' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleMediaTypeToggle('tv')}
            style={{ marginRight: '10px' }}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className='col-md-4'>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder={`Search ${mediaType === 'movie' ? 'movies' : 'TV shows'} `}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      </div>
 
      <div className="row">
        {filteredMedia.map(media => (
          <div key={media.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              {media.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w1280${media.backdrop_path}`}
                  alt={`${media.title || media.name} Backdrop`}
                  className="card-img-top"
                />
              )}
              <div className="badge badge-pill badge-primary"
                   style={{
                     position: "absolute",
                     top: "10px",
                     right: "10px",
                     fontSize: "12px",
                     borderRadius: "50%",
                     padding: "6px 10px",
                     minWidth: "40px",
                     textAlign: "center",
                     backgroundColor:'black',
                     color:'white'
                   }}>
                {media.vote_count}%    
              </div>
              <div className="card-body">
                <h5 className="card-title">{media.title || media.name}</h5>
              </div>
              <div className="line"
              style={{
                width: 0,
                height: 6,
               
              backgroundColor:'yellow',
                marginTop:20
              }}
              >
               
                </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}