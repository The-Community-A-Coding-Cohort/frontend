<script>
  let title = "";
  let description = "";
  let genre = "";
  let posterUrl = "";
  let videoUrl = "";
  let error = "";
  let success = "";

  async function handleSubmit(event) {
    event.preventDefault();
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    if (!isAuthenticated) {
      error = "You must be logged in to add a movie.";
      return;
    }
    
    const movie = { title, description, genre, posterUrl, videoUrl };
    try {
      const res = await fetch('/api/add-movie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
      });
      const data = await res.json();
      if (res.ok) {
        success = "Movie added successfully!";
        error = "";
        title = "";
        description = "";
        genre = "";
        posterUrl = "";
        videoUrl = "";
      } else {
        error = data.error || "Failed to add movie.";
        success = "";
      }
    } catch (err) {
      error = err.message;
      success = "";
    }
  }
</script>

<div class="max-w-xl mx-auto bg-neutral p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-4 text-center">Add a New Movie</h2>
  {#if error}
    <div class="alert alert-error">
      <span>{error}</span>
    </div>
  {/if}
  {#if success}
    <div class="alert alert-success">
      <span>{success}</span>
    </div>
  {/if}
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <input type="text" placeholder="Title" bind:value={title} required class="input input-bordered w-full" />
    <textarea placeholder="Description" bind:value={description} required class="textarea textarea-bordered w-full"></textarea>
    <input type="text" placeholder="Genre" bind:value={genre} required class="input input-bordered w-full" />
    <input type="url" placeholder="Poster URL" bind:value={posterUrl} required class="input input-bordered w-full" />
    <input type="url" placeholder="Video URL" bind:value={videoUrl} required class="input input-bordered w-full" />
    <button type="submit" class="btn btn-primary w-full">Submit Movie</button>
  </form>
</div>