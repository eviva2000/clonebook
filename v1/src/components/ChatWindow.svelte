<script>
  import { jData } from "../data.js";
  import FriendThumbnail from "./FriendThumbnail.svelte";
  //   export let active = true;
  // export let open;
  export let user;
  const closeChat = e => {
    $jData.activeChats = $jData.activeChats.filter(chat => chat.id !== user.id);
    // e.stopPropagation();
  };
</script>

<style>
  #chatWindowContainer {
    width: 284px;
    display: grid;
    grid-template-rows: 2fr 9fr 3fr;

    background-color: #fff;
    border-radius: 10px;
    margin-left: 1em;
    /* padding: 1em; */
    height: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    bottom: 0;
  }

  /* #chatBarWrapper:hover {
    background: #f0f2f5;
  }
  #chatBar {
    grid-template-columns: 90fr 10fr;
  } */
  .closeChatWindow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .closeChatWindow i {
    transition: 0.1s ease-in;
  }
  .closeChatWindow i:hover {
    font-size: 1.1rem;
  }
  .chatHeader {
    display: grid;
    grid-template-columns: 8fr 2fr;
    transition: 0.2s ease;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
    z-index: 4;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .chatHeader div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chatHeader:hover {
    background: #f0f2f5;
  }

  .chatInputContainer {
    display: grid;
    border-top: 1px solid rgba(201, 208, 218, 0.4);
    height: 100%;
    width: 100%;
    padding: 0.5em;
  }

  .chatLikeButton {
    font-size: 1.1rem;
    color: #0099ff;
  }
  .sendMessage p,
  .receiveMessage p {
    border-radius: 18px;
    max-width: 70%;
    font-size: 13px;
    padding: 0.5em;
  }
  .receiveMessage p {
    background: #f1f0f0;
    display: inline-block;
  }
  .sendMessage p {
    background: #0099ff;
    float: right;
    color: #fff;
  }
  .messageWrapper {
    height: 100%;
    padding: 1em;
  }
  .iconsWrapper {
    display: grid;
    grid-template-columns: 88fr 12fr;
    align-items: center;
  }
  .iconsWrapper img {
    width: 22px;
  }
  .iconsWrapper :nth-child(1) {
    display: flex;
    align-items: center;
  }
  .iconsWrapper :nth-child(1) i {
    color: #a9a9a9;
    padding-left: 0.5em;
  }
</style>

<section id="chatWindow">
  <div id="chatWindowContainer">
    <div class="chatHeader ">
      <div>
        <p>{user.name + ' ' + user.lastname}</p>
      </div>
      <div class="closeChatWindow">

        <i class="m-1 fas fa-times" on:click={closeChat} />
      </div>
    </div>
    <div class=" messageWrapper">
      <div class="receiveMessage">
        <div>
          <p>Hi Ellen!</p>
        </div>

      </div>
      <div class="sendMessage">
        <p>Hey Cassandra!</p>
      </div>
    </div>
    <div class="chatInputContainer grid w-full p-1">
      <form class="flex items-center">
        <input
          style="padding:0;background:none;border-radius:none"
          class="rounded-full h-8 w-full bg-gray-200 p-2"
          type="text"
          placeholder="Type a message..." />
      </form>
      <div class="iconsWrapper">
        <div>
          <img src="assets/photo-grey.png" alt="" />
          <i class="fas fa-camera" />
          <i class="fas fa-smile" />
        </div>
        <div
          class="chatLikeButton flex items-center justify-center cursor-pointer">
          <i class=" far fa-thumbs-up" />
        </div>
      </div>
    </div>
  </div>

</section>
