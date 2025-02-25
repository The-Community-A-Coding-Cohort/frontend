<script lang="ts">
  import FilmCard from './FilmCard.svelte';
  import type { Film } from '../types';
  import filmsData from '../data/films.json';

  // Use the imported JSON data as the film list.
  export let films: Film[] = filmsData;
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
</style>

<div class="grid">
  {#each films as film (film.id)}
    <FilmCard {film} />
  {/each}
</div>