<script>
    function goToBrowse(event) {
      event.preventDefault();
      // Use assign() for a full redirect
      window.location.assign('/browse');
    }
  </script>
  
  <style>
    .auth-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }
    button {
      padding: 12px 24px;
      background-color: #0070f3;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background-color: #005bb5;
    }
  </style>
  
  <div class="auth-buttons">
    <button on:click={goToBrowse}>Log In</button>
    <button on:click={goToBrowse}>Sign Up</button>
  </div>