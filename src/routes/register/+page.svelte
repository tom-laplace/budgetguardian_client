<script>
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let confirmPassword = "";
  let username = "";
  let errors = {
    emptyFields: "",
    matchingPasswords: "",
    invalidEmail: "",
    invalidUsername: "",
    invalidPassword: "",
  };

  function validate() {
    errors = {
      emptyFields: "",
      matchingPasswords: "",
      invalidEmail: "",
      invalidUsername: "",
      invalidPassword: "",
    };
    if (!email || !password || !confirmPassword || !username) {
      errors.emptyFields = "Tout les champs doivent être remplis.";
    } else if (password !== confirmPassword) {
      errors.matchingPasswords = "Les mots de passe ne correspondent pas.";
    } else if (
      !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/)
    ) {
      errors.invalidPassword =
        "Le mot de passe doit contenir au moins 1 lettre, minuscule et majuscule, 1 chiffre, 1 caractère spécial et au moins 10 caractères.";
    } else if (username.length < 3) {
      errors.invalidUsername =
        "Le nom d'utilisateur doit faire au moins 3 caractères.";
    } else if (username.length > 20) {
      errors.invalidUsername =
        "Le nom d'utilisateur doit faire au maximum 20 caractères.";
    } else if (username.match(/[^a-zA-Z0-9]/)) {
      errors.invalidUsername =
        "Le nom d'utilisateur ne doit contenir que des lettres et des chiffres.";
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.invalidEmail = "L'adresse email n'est pas valide.";
    } else {
      return true;
    }
    return Object.keys(errors).length === 0;
  }

  async function register() {
    if (!validate()) {
      return;
    }
    const response = await fetch("https://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });

    if (response.ok) {
      goto("/login");
    } else {
      const data = await response.json();
      alert(data.error);
    }
  }
</script>

<div class="flex items-center justify-center h-screen">
  <div class="bg-white shadow-2xl rounded-lg max-w-md mx-auto p-8">
    <form on:submit|preventDefault={register}>
      <div class="mb-4">
        <label for="username" class="block text-gray-dark text-sm mb-2"
          >Nom d'utilisateur:</label
        >
        <input
          id="username"
          type="text"
          bind:value={username}
          class="border-2 border-gray-dark p-2 w-full"
          placeholder="Nom d'utilisateur"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-dark text-sm mb-2"
          >Email:</label
        >
        <input
          id="email"
          type="email"
          bind:value={email}
          class="border-2 border-gray-dark p-2 w-full"
          placeholder="Email"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-dark text-sm mb-2"
          >Mot de passe:</label
        >
        <input
          id="password"
          type="password"
          bind:value={password}
          class="border-2 border-gray-dark p-2 w-full"
          placeholder="Mot de passe"
          required
        />
      </div>
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-dark text-sm mb-2"
          >Confirmer le mot de passe:</label
        >
        <input
          id="confirmPassword"
          type="password"
          bind:value={confirmPassword}
          class="border-2 border-gray-dark p-2 w-full"
          placeholder="Confirmer le mot de passe"
          required
        />
      </div>
      {#if errors.emptyFields}
        <div class="text-red mb-4">{errors.emptyFields}</div>
      {/if}
      {#if errors.matchingPasswords}
        <div class="text-red mb-4">{errors.matchingPasswords}</div>
      {/if}
      {#if errors.invalidEmail}
        <div class="text-red mb-4">{errors.invalidEmail}</div>
      {/if}
      {#if errors.invalidUsername}
        <div class="text-red mb-4">{errors.invalidUsername}</div>
      {/if}
      {#if errors.invalidPassword}
        <div class="text-red mb-4">{errors.invalidPassword}</div>
      {/if}
      <button type="submit" class="text-white p-2 w-full bg-blue-light mt-4"
        >C'est parti !</button
      >
    </form>
    <div class="text-center mt-4">
      <p class="text-gray-dark font-bold">
        Déjà inscrit ?
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span class="underline cursor-pointer" on:click={() => goto("/login")}>
          Connectez vous juste ici
        </span>
      </p>
    </div>
  </div>
</div>
