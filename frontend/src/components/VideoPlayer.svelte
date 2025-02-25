<script>
  export let src = '';
  let videoElement;
  
  function play() {
    videoElement.play();
  }
  
  function pause() {
    videoElement.pause();
  }
</script>

<div class="video-container bg-black rounded-lg overflow-hidden">
  <video bind:this={videoElement} src={src} class="w-full" controls={false}></video>
  <div class="controls flex justify-center gap-4 bg-neutral p-4">
    <button on:click={play} class="btn btn-primary">Play</button>
    <button on:click={pause} class="btn btn-secondary">Pause</button>
  </div>
</div>