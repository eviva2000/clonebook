<script context="module">
  // context="module" is used when we want to call this function in another component
  import { jData } from "../data.js";
  import ChatWindow from "./ChatWindow.svelte";
</script>

<style>
  section {
    height: 55vh;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 70%;
    display: flex;
    justify-content: flex-end;
    z-index: 0;
  }
</style>

<section>
  {#each $jData.activeChats as chatUser}
    <ChatWindow
      user={chatUser}
      open={chatUser.activeChat === false ? false : true} />
  {/each}

</section>
