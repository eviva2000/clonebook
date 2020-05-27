<script>
  import { jData } from "../data.js";
  // 'export' means it s injected from other components
  export let id;
  let name = $jData.friends.find(jFriend => jFriend.id == id).name;
  let lastname = $jData.friends.find(jFriend => jFriend.id == id).lastname;
  $: status = $jData.friends.find(jFriend => jFriend.id == id).status;
</script>

<style>
  #imgCircle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: darkgray;
  }
  #statusCircle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 1.2em;
  }
  .friend {
    display: flex;
    align-items: center;
    margin: 1em 1em 0;
  }
  .friendInfo {
    padding-left: 1em;
    font-size: 12px;
    font-weight: bold;
  }
</style>

<section class="friend">
  <div id="imgCircle">
    <div
      id="statusCircle"
      style="background-color: {status === 1 ? 'green' : ''} ;border: {status === 1 ? 'white solid 1px' : ''}" />
  </div>
  <div class="friendInfo">{name} {lastname}</div>
</section>
