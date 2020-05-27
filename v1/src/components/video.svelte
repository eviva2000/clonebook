<script>
  import { jData } from "../data.js";
  import FriendThumbnail from "./FriendThumbnail.svelte";
</script>

<style>
  #postImage {
    width: 100%;
  }
  #postImage img {
    width: 600px;
  }
  #videoContainer {
    margin-top: 2em;
    background-color: #fff;
    border-radius: 10px;
    padding-bottom: 1em;
  }
  #caption {
    padding: 1em 2em;
    font-size: 14px;
  }
  #like img {
    width: 1em;
  }
  #like {
    display: flex;
    align-items: center;
  }
  #like-comments {
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }
  #like-comments p {
    font-size: 12px;
    color: grey;
    margin-left: 1em;
  }
  hr {
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 1em 1em 0;
  }
</style>

<section
  id="videoContainer"
  style="display:{$jData.pageDisplayed == 'video' ? 'block' : 'none'}">

  <div style="padding-top:1px">
    <FriendThumbnail id="5" />
    <p class="p" style="font-size:10px;color:grey;margin-left:6em">6 hr ago</p>
  </div>
  <p id="caption">Video 1</p>
  <div id="postImage">
    <img src="assets/video.jpg" alt="" />
  </div>
  <hr />
  <div id="like-comments">
    <div id="like">
      <img src="assets/LIKE.png" alt="" />
      <p>8</p>
    </div>
    <div id="comments">
      <p>Commnets 19</p>
    </div>
  </div>
  <hr style="margin-top:0" />

</section>
