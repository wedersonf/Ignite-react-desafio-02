import { useState } from 'react';

import { SideBar, GenreResponseProps } from './components/SideBar'
import { Content, MovieProps } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        selectedGenre={selectedGenreId} 
        onChangeSelectedGenre={setSelectedGenreId} 
      />

      <Content 
        movies={movies} 
        onChangeMovies={setMovies} 
        selectedGenre={selectedGenre} 
        onChangeSelectedGenre={setSelectedGenre}
        selectedGenreId={selectedGenreId}
      />
    </div>
  )
}