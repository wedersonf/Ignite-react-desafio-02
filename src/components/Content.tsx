import { useEffect } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";
import { GenreResponseProps } from "./SideBar";

export interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface ContentProps {
  movies: MovieProps[];
  onChangeMovies(response: MovieProps[]): void;
  selectedGenre: GenreResponseProps;
  onChangeSelectedGenre(genre: GenreResponseProps): void;
  selectedGenreId: number;
}

export function Content({ 
    movies, 
    onChangeMovies,
    selectedGenre, 
    onChangeSelectedGenre, 
    selectedGenreId 
  }: ContentProps) {
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      onChangeMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      onChangeSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}