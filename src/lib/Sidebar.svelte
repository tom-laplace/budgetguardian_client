<script>
  import { goto } from "$app/navigation";
  import "../app.css";

  /**
   * @param {string | URL} path
   * @param {(MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }) | (KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement; })} event
   */
  function handleNavigation(path, event) {
    if (event instanceof KeyboardEvent && event.key !== "Enter") {
      return;
    }
    goto(path);
  }
</script>

<div
  class="flex flex-col h-screen bg-blue-dark text-white p-5 md:w-1/6 w-full items-center"
>
  <div class="mb-10 text-center">
    <img src="logo-clear.png" alt="Logo" class="mb-8 w-32 h-32" />
    <div
      class="font-bold text-2xl mb-4 cursor-pointer flex items-center gap-2 hover:border-b-2 hover:border-white"
      on:click|preventDefault={(e) => handleNavigation("/profil", e)}
      on:keydown|preventDefault={(e) => handleNavigation("/profil", e)}
    >
      <span class="material-icons">account_circle</span> Profil
    </div>
    <div
      class="font-bold text-2xl mb-4 cursor-pointer flex items-center gap-2 hover:border-b-2 hover:border-white"
      on:click|preventDefault={(e) => handleNavigation("/dashboard", e)}
      on:keydown|preventDefault={(e) => handleNavigation("/dashboard", e)}
    >
      <span class="material-icons">dashboard</span> Dashboard
    </div>
    <div
      class="font-bold text-2xl mb-4 cursor-pointer flex items-center gap-2 hover:border-b-2 hover:border-white"
      on:click|preventDefault={(e) => handleNavigation("/spendings", e)}
      on:keydown|preventDefault={(e) => handleNavigation("/spendings", e)}
    >
      <span class="material-icons">savings</span> Dépenses
    </div>
    <div
      class="font-bold text-2xl mb-4 cursor-pointer flex items-center gap-2 hover:border-b-2 hover:border-white"
      on:click|preventDefault={(e) => handleNavigation("/budget", e)}
      on:keydown|preventDefault={(e) => handleNavigation("/budget", e)}
    >
      <span class="material-icons">price_check</span> Budget
    </div>
  </div>
  <div class="mt-auto text-center">
    <div
      class="font-bold text-2xl mb-4 cursor-pointer flex items-center gap-2 hover:border-b-2 hover:border-white ml-4"
      on:click|preventDefault={(e) => handleNavigation("/settings", e)}
      on:keydown|preventDefault={(e) => handleNavigation("/settings", e)}
    >
      <span class="material-icons">settings</span> Paramètres
    </div>
    <button
      class="font-bold text-2xl bg-red rounded-sm text-white py-2 px-4 flex items-center gap-2"
      on:click={() => goto("/logout")}
    >
      <span class="material-icons">logout</span> Déconnexion
    </button>
  </div>
</div>
