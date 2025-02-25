<script>
  let email = "";
  let password = "";

  function handleSubmit(event) {
    event.preventDefault();
    // Dummy authentication: simply set a flag
    localStorage.setItem("authenticated", "true");
    alert("Logged in! (Dummy authentication)");
    window.location.href = "/dashboard";
  }
</script>

<div class="max-w-md mx-auto bg-neutral p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <input
      type="email"
      placeholder="Email"
      bind:value={email}
      required
      class="input input-bordered w-full"
    />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      required
      class="input input-bordered w-full"
    />
    <button type="submit" class="btn btn-primary w-full">Login</button>
  </form>
</div>