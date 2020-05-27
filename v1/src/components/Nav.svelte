<script>
  import ProfileImage from "./ProfileImage.svelte";
  import { jData } from "../data.js";
  let txtSearch;
  let count = $jData.unreadMessages.length;
  // //server
  let ajUsers = [];
  const showSearchResults = () => {
    searchResultDisplay = "block";
  };
  const hideSearchResults = () => {
    searchResultDisplay = "none";
  };
  let searchResultDisplay = "none";

  const displayPage = nameOfPageToDisplay => {
    console.log(nameOfPageToDisplay);
    $jData.pageDisplayed = nameOfPageToDisplay;
  };
  //connect to an API and get data- takes time
  // Async - because it will take time to get the data
  const searchUsers = async () => {
    const connection = await fetch(
      "http://localhost/users?searchFor=" + txtSearch
    );
    // AWAIT So it wont go through before it has the data - because it will take time
    let data = await connection.json();
    ajUsers = data;
    showSearchResults();
    console.log(ajUsers);
  };
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: 10fr 20fr 10fr;
    align-items: center;
    padding: 0.5em 1em 0;
    width: 100%;
    background-color: #ffffff;
    height: 3rem;
    color: lightslategray;
    box-shadow: 0 1px 7px rgba(155, 155, 155, 0.12),
      0 1px 2px rgba(155, 155, 155, 0.12);
  }
  #searchContainer {
    position: relative;
    padding-left: 1em;
  }
  #searchResult {
    width: 100%;
    height: 25vh;
    color: #333;
    background-color: #fff;
    position: absolute;
    border: 1px solid grey;
    border-top: none;
    border-radius: 2px;
    overflow-y: scroll;
  }
  /* I will give the input a specific height and then use calc() for the top */

  #searchItem {
    display: flex;
    cursor: pointer;
    transition: all 0.02s linear;
  }
  #searchItem :hover {
    background-color: #f0f0f0;
    transition: all 0.02s linear;
  }
  .compNav1 {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  .compNav2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 400px;
    margin: 0 auto;
    grid-gap: 5em;
    height: 100%;
  }
  .compNav2 div {
    width: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .compNav3 {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
  }

  .userDetails {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iWrapper {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    background-color: #f1f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .iWrapper span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    background-color: #fa3e3e;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: 2px;
    font-size: 11px;
    color: #f0f0f0;
  }
  .iWrapper i {
    color: #333;
  }
</style>

<nav>
  <div class="compNav1">
    <div>Clonebook</div>
    <div id="searchContainer">
      <form>
        <input
          type="text"
          on:focus={searchUsers}
          on:input={searchUsers}
          on:blur={hideSearchResults}
          bind:value={txtSearch}
          placeholder="Search" />
      </form>
      <div id="searchResult" style="display:{searchResultDisplay}">
        {#each ajUsers as jUser}
          <div id="searchItem" style="">
            <div style="width:100%; padding:.5em ">
              {jUser.name} {jUser.lastname}
            </div>
          </div>
        {/each}

      </div>
    </div>
  </div>
  <div class="compNav2">
    <div
      class={$jData.pageDisplayed == 'posts' ? 'active' : ''}
      on:click={() => {
        displayPage('posts');
      }}>
      <i class="fas fa-house-user" />
    </div>
    <div
      class={$jData.pageDisplayed == 'video' ? 'active' : ''}
      on:click={() => {
        displayPage('video');
      }}>
      <i class="far fa-play-circle" />
    </div>
    <div
      class={$jData.pageDisplayed == 'market' ? 'active' : ''}
      on:click={() => {
        displayPage('market');
      }}>
      <i class="fas fa-shopping-basket" />
    </div>

  </div>
  <div class="compNav3">
    <div class="userDetails">
      <ProfileImage imgSrc={$jData.image} width="1.4em" />
      <p style="font-size:14px">{$jData.name}</p>
    </div>
    <div class="iWrapper">
      <i class="fas fa-plus" />
    </div>
    <div class="iWrapper">
      <span id="count">{count}</span>
      <i class="fab fa-facebook-messenger" />
    </div>
    <div class="iWrapper">
      <i class="far fa-bell" />
    </div>
    <div class="iWrapper">
      <i class="fas fa-sort-down" />
    </div>
  </div>
</nav>

<!-- "http://localhost/users?searchFor=" + txtSearch -->
