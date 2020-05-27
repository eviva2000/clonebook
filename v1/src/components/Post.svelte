<script>
  import { jData } from "../data.js";
  import FriendThumbnail from "./FriendThumbnail.svelte";
  export let id;
  let postId = $jData.posts.find(jPosts => jPosts.id === id);
  let authorId = postId.authorId;
  let caption = postId.caption;
  let image = postId.image;
  let createdAt = postId.createdAt;
  let likes = postId.likes;
  let comments = postId.comments;
</script>

<style>
  #postImage {
    width: 100%;
  }
  #postContainer {
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

<div id="postContainer">
  <div style="padding-top:1px">
    <FriendThumbnail id={authorId} />
    <p class="p" style="font-size:10px;color:grey;margin-left:6em">
      {createdAt}hr ago
    </p>
  </div>
  <p id="caption">{caption}</p>
  <div id="postImage">
    <img src={image} alt="" />
  </div>
  <hr />
  <div id="like-comments">
    <div id="like">
      <img src="assets/LIKE.png" alt="" />
      <p>{likes}</p>
    </div>
    <div id="comments">
      <p>Commnets {comments}</p>
    </div>
  </div>
  <hr style="margin-top:0" />
</div>
