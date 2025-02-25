<script>
    import { onMount, onDestroy } from 'svelte';
    import filmsData from '../data/films.json';
  
    // For demonstration, we'll use the first 10 films.
    // Replace this with your filtering logic if needed.
    let movies = filmsData.slice(0, 10);
    
    // Configuration:
    // Assume each film poster container is 200px wide plus a 20px gap = 220px total.
    const filmWidth = 220; // pixels
    const totalWidth = movies.length * filmWidth; // e.g., 10 * 220 = 2200px
    // Duration = totalWidth / speed (100px per second).
    const duration = totalWidth / 40; // e.g., 2200 / 100 = 22 seconds
  
    let currentIndex = 0;
    let interval;
  
    onMount(() => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % movies.length;
      }, 3000);
    });
    
    onDestroy(() => {
      clearInterval(interval);
    });
  
    // Toggle buttons logic (if needed to switch view modes):
    let viewMode = 'top';
    function toggleViewMode(mode) {
      viewMode = mode;
      // For demo, we always use the same movies array.
      currentIndex = 0;
    }
  </script>
  
  <style>
    /* The carousel container takes up the full width of the screen */
    .carousel-container {
      width: 100vw;
      height: 400px; /* Fixed height; adjust as needed */
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      margin-bottom: 16px;
      perspective: 1000px; /* for 3D flip effect (used on images) */
    }
    
    /* The slider holds all the film posters side-by-side */
    .slider {
      display: flex;
      flex-direction: row;
      align-items: center;
      /* The animation uses CSS custom properties for dynamic values */
      animation: scroll var(--duration) linear infinite;
    }
    
    /* Each film poster container (sized as in your film grid) */
    .film {
      flex: 0 0 auto;
      width: 200px;
      margin-right: 20px;
    }
    
    /* The scrolling animation moves the slider to the left by the full width of one set */
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-1 * var(--totalWidth)));
      }
    }
    
    /* The flip animation for individual images (like flipping through a magazine) */
    .flip {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: flipIn 0.8s ease-out;
    }
    @keyframes flipIn {
      0% {
        transform: perspective(1000px) rotateY(90deg);
        opacity: 0;
      }
      100% {
        transform: perspective(1000px) rotateY(0deg);
        opacity: 1;
      }
    }
    
    /* Toggle buttons styling */
    .toggle-buttons {
      margin-top: 8px;
      text-align: center;
    }
    .toggle-buttons button {
      margin: 0 8px;
      padding: 8px 16px;
      background: #333;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .toggle-buttons button.active {
      background: #555;
    }
  </style>
  
  <!-- Apply the CSS custom properties for duration and totalWidth via inline style -->
  <div class="carousel-container" style="--duration: {duration}s; --totalWidth: {totalWidth}px;">
    <div class="slider">
      {#each movies as movie}
        <div class="film">
          <img src={movie.posterUrl} alt={movie.title} class="flip" />
        </div>
      {/each}
      <!-- Duplicate the movies so the scroll can loop seamlessly -->
      {#each movies as movie}
        <div class="film">
          <img src={movie.posterUrl} alt={movie.title} class="flip" />
        </div>
      {/each}
    </div>
  </div>
  <div class="toggle-buttons">
    <button class:active={viewMode === 'top'} on:click={() => toggleViewMode('top')}>
      Top 10 Most Viewed (Last 2 Weeks)
    </button>
    <button class:active={viewMode === 'featured'} on:click={() => toggleViewMode('featured')}>
      Featured Films
    </button>
  </div>