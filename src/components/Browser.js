
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browser = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useUpcoming();
 useTopRated();
 const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  return <div>
      <Header/>
      { showGptSearch ? (<GptSearch/>) : (<><MainContainer/>
      <SecondaryContainer/>
      </>)
       }
     
      
    </div>
  
}

export default Browser;
