<script>
  import ChatContainer from "./ChatContainer.svelte";
  import { jData } from "../data.js";
  import FriendThumbnail from "./FriendThumbnail.svelte";
  $: friends = $jData.friends.map(friend => friend);
  const showChatwindow = user => {
    //Checks if you have already an active chat with that user.
    let checkFriend = $jData.activeChats.find(friend => friend.id === user.id);
    //If not, it adds the friend in the activechat array in the store
    if (checkFriend === undefined) {
      user.activeChat = true;
      $jData.activeChats = [user, ...$jData.activeChats];
      console.log(user);
    }
  };
</script>

<style>
  .comp3Container {
    padding: 1em;
    z-index: 100;
  }
  #friend {
    cursor: pointer;
    padding: 0.5em;
  }
  #pizza {
    width: 11vw;
    border-radius: 5px;
    margin-top: 1em;
  }
  p {
    color: grey;
    font-size: 12px;
    margin-top: 0.4em;
  }
  h3 {
    color: grey;
    font-weight: 400;
  }
  h5 {
    font-weight: 400;
    color: #333;
  }
  .detailContainer {
    padding: 1em;
  }
  hr {
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 0 1em 1em;
  }
</style>

<div class="comp3Container">
  <div id="sponser">
    <h3>Sponsered</h3>
    <div class="detailContainer">
      <h5>Lebos pizza</h5>

      <p>Experience the trendy pizza spot in Pallo alto</p>
      <img id="pizza" src="assets/pizza.jpg" alt="pizza" />
    </div>
    <hr />
  </div>
  <div id="contactsContainer">
    <h3>Contacts</h3>
    {#each friends as friend}
      <div
        id="friend"
        on:click={() => {
          showChatwindow(friend);
        }}>
        <FriendThumbnail id={friend.id} />
      </div>
    {/each}
  </div>
</div>
