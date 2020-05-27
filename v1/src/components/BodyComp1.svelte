<script>
  import ProfileImage from "./ProfileImage.svelte";
  import { jData } from "../data.js";
</script>

<style>
  #comp1 {
    height: 100vh;
  }
  .userDetail {
    display: flex;
    align-items: center;
    margin-top: 1em;
  }
  .userDetail p {
    font-size: 12px;
  }
  .favorits {
    margin-top: 1em;
  }
  .favorits img {
    width: 25px;
  }
  .favicon {
    padding: 0.6em 1em;
    display: flex;
    align-items: center;
  }
  .favicon h6 {
    padding-left: 1em;
  }
  hr {
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 0 1em 1em;
  }
</style>

<div id="comp1">
  <div class="firstRow">
    <div class="userDetail">
      <ProfileImage imgSrc={$jData.image} width="1.2em" />
      <p>{$jData.name} {$jData.lastname}</p>
    </div>
    <div class="favorits">
      <div class="favicon">
        <img src="assets/videoplay.png" alt="" />
        <h6>Watch</h6>
      </div>
      <div class="favicon">

        <img
          src="assets/events.png"
          alt=""
          style="box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);" />
        <h6>Events</h6>

      </div>
      <div class="favicon">

        <img src="assets/friends.png" alt="" />
        <h6>Friends</h6>

      </div>

      <div id="memories" />
    </div>
    <hr />
  </div>
  <div class="secondRow">
    <p>Shortcuts</p>

  </div>
</div>
