<script lang="ts">
  import FilmCard from './FilmCard.astro';
  import type { Film } from '../types';

  export let films: Film[] = [{
    id: '1',
    title: 'The Shawshank Redemption 1000 1000 ',
    posterUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/dazed-and-confused-poster-indie-movie-jacob-martin.jpg',
    genre: 'Drama',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '2',
    title: 'The Dark Knight',
    posterUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/midsommar.jpg?w=800',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '3',
    title: 'The Dark Knight',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNWU4YWY5ZGItZTgxNC00N2MwLTlkNTktZDc2MDAwOWY2OTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '4',
    title: 'The Dark Knight',
    posterUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/midsommar.jpg?w=8000',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '5',
    title: 'The Dark Knight',
    posterUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/dazed-and-confused-poster-indie-movie-jacob-martin.jpg',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '6',
    title: 'The Shawshank Redemption',
    posterUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/dazed-and-confused-poster-indie-movie-jacob-martin.jpg',
    genre: 'Drama',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '7',
    title: 'The Dark Knight',
    posterUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/midsommar.jpg?w=800',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '8',
    title: 'The Dark Knight',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNWU4YWY5ZGItZTgxNC00N2MwLTlkNTktZDc2MDAwOWY2OTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '9',
    title: 'The Dark Knight',
    posterUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/midsommar.jpg?w=8000',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: '10',
    title: 'The Dark Knight',
    posterUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/dazed-and-confused-poster-indie-movie-jacob-martin.jpg',
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    videoUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  }
  ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 gap-6 p-8 place-items-center">
  {#each films as film (film.id)}
    <FilmCard {film} />
  {/each}
</div>