<script>
  import "../app.css";
  import Sidebar from "../lib/Sidebar.svelte";
</script>

<div style="display: flex;">
  <Sidebar />
  <div style="flex: 1;">
    <slot />
  </div>
</div>