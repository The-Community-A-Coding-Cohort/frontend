<script lang="ts">
  import type { Film } from '../types';
  export let film: Film;
  import Image from 'astro:assets';
</script>

<div class="card w-full max-w-72">
  <figure>
    <Image src={film.posterUrl} alt={`Poster for ${film.title}`} />
  </figure>
  <div class="">
    <h2 class="text-sm text-center truncate max-w-100">{film.title}</h2>
    <!-- <p>{film.genre}</p>
    <div class="card-actions justify-end">
      <a href={`/films/${film.id}`} class="btn btn-outline">Watch</a>
    </div> -->
  </div> 
</div>