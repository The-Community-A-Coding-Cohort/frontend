<script>
    let email = '';
    let password = '';
    let newEmail = '';
    let newPassword = '';
    let error = '';
    let success = '';
    let signInActive = false;
    let isClosing = false;
  
    async function handleLogin(event) {
      event.preventDefault();
      signInActive = true; // Fly & spin up
      isClosing = false;
      error = '';
      success = '';
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        if (res.ok) {
          window.location.href = '/browse';
        } else {
          const data = await res.json();
          error = data.error || 'Failed to log in.';
        }
      } catch (e) {
        error = e.message;
      }
    }
  
    function handleClose() {
      // The user clicks the bar (now X) => fly & spin down
      isClosing = true;
      setTimeout(() => {
        signInActive = false;
        isClosing = false;
      }, 1500);
    }
  
    async function handleRegister(event) {
      event.preventDefault();
      error = '';
      success = '';
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: newEmail, password: newPassword })
        });
        if (res.ok) {
          success = 'Registered successfully! Please log in.';
        } else {
          const data = await res.json();
          error = data.error || 'Failed to register.';
        }
      } catch (e) {
        error = e.message;
      }
    }
  </script>
  
  <style>
    /********************************************
     * Container
     ********************************************/
    .landing {
      width: 100vw;
      height: 100vh;
      background: #111;
      color: #fff;
      position: relative;
      font-family: sans-serif;
      overflow: hidden;
    }
  
    /********************************************
     * The single line: "Sign In | Register"
     * plus the bar that becomes X.
     ********************************************/
    .line {
      position: absolute;
      /* Center by default */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* So that "Sign In | Register" is on one line */
      white-space: nowrap;
      z-index: 9999;
    }
  
    .signIn, .bar, .register {
      cursor: pointer;
      user-select: none;
      position: relative; /* For the bar's pseudo-element */
      font-size: 1.2rem;
      margin: 0 0.5rem; /* spacing around the bar */
      transition: opacity 1.5s ease;
    }
  
    /* The bar will spin into an X via a pseudo-element */
    .bar::before {
      content: '|';
      position: absolute;
      left: 0; right: 0;
      text-align: center;
      transform-origin: center;
      opacity: 0;
    }
  
    /********************************************
     * The Form
     ********************************************/
    .fields {
      position: absolute;
      width: 200px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -20%);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1.5s ease;
    }
    .fields label {
      font-weight: bold;
      font-size: 0.9rem;
    }
    .fields input {
      padding: 0.3rem;
      border: 1px solid #444;
      background: #222;
      color: #fff;
      border-radius: 4px;
    }
  
    /********************************************
     * Default (not active)
     ********************************************/
    .landing:not(.active) .fields {
      opacity: 0;
      pointer-events: none;
    }
  
    /********************************************
     * Active State => Fly Up & Spin
     ********************************************/
    .landing.active:not(.closing) .fields {
      opacity: 1; /* Show form */
      pointer-events: auto;
    }
    /* Hide "Register" once Sign In is clicked */
    .landing.active:not(.closing) .register {
      opacity: 0;
      pointer-events: none;
    }
    /* The entire line flies up & to the right, and scales bigger */
    .landing.active:not(.closing) .line {
      animation: lineFlyUp 1.5s forwards;
    }
    /* The bar spins into X during the same 1.5s */
    .landing.active:not(.closing) .bar {
      animation: barSpinForward 1.5s forwards;
    }
    /* The bar's second slash => / => rotates to ~135° (855° mod 360) */
    .landing.active:not(.closing) .bar::before {
      animation: slashSpinForward 1.5s forwards;
      opacity: 1;
    }
  
    /********************************************
     * Closing State => Fly Down & Reverse Spin
     ********************************************/
    .landing.active.closing .line {
      animation: lineFlyDown 1.5s forwards;
    }
    .landing.active.closing .bar {
      animation: barSpinBackward 1.5s forwards;
    }
    .landing.active.closing .bar::before {
      animation: slashSpinBackward 1.5s forwards;
    }
  
    /********************************************
     * Keyframes
     ********************************************/
    /*
     * We'll move the line from center => ~2 inches up (~192px)
     * and slightly to the right (+30px).
     * We'll also scale from 1 => 1.5
     */
    @keyframes lineFlyUp {
      0% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        top: calc(50% - 192px);
        left: calc(50% + 30px);
        transform: translate(-50%, -50%) scale(1.5);
      }
    }
  
    @keyframes lineFlyDown {
      0% {
        top: calc(50% - 192px);
        left: calc(50% + 30px);
        transform: translate(-50%, -50%) scale(1.5);
      }
      100% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  
    /*
     * The bar => | => \ => 2.5 spins + final angle 225° => 945°
     * scale(1) => scale(1.5) too
     */
    @keyframes barSpinForward {
      0% {
        transform: rotate(0deg) scale(1);
      }
      100% {
        transform: rotate(945deg) scale(1.5);
      }
    }
    @keyframes barSpinBackward {
      0% {
        transform: rotate(945deg) scale(1.5);
      }
      100% {
        transform: rotate(0deg) scale(1);
      }
    }
  
    /* The slash => / => final angle ~135° => 855° mod 360 */
    @keyframes slashSpinForward {
      0% {
        transform: rotate(0deg) scale(1);
      }
      100% {
        transform: rotate(855deg) scale(1.5);
      }
    }
    @keyframes slashSpinBackward {
      0% {
        transform: rotate(855deg) scale(1.5);
      }
      100% {
        transform: rotate(0deg) scale(1);
      }
    }
  </style>
  
  <div class="landing {signInActive ? 'active' : ''} {isClosing ? 'closing' : ''}">
    <!-- One line with "Sign In | Register" -->
    <div class="line">
      <span class="signIn" on:click={handleLogin}>Sign In</span>
      <span class="bar" on:click={handleClose}>|</span>
      <span class="register" on:click={handleRegister}>Register</span>
    </div>
  
    <div class="fields">
      <label>Email</label>
      <input type="text" bind:value={email} />
      <label>Password</label>
      <input type="password" bind:value={password} />
      <button on:click={handleLogin}>Submit</button>
      {#if error}
        <div style="color: red;">{error}</div>
      {/if}
      {#if success}
        <div style="color: green;">{success}</div>
      {/if}
    </div>
  </div>