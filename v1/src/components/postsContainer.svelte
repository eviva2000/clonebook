<script>
  import Post from "./Post.svelte";
  import { jData } from "../data.js";
  import ProfileImage from "./ProfileImage.svelte";
  let txtMessage;
  const handlePost = async () => {
    let form = new FormData(document.getElementById("newPostForm"));
    console.log(form);
    const newPost = {
      message: txtMessage
    };
    const connection = await fetch("http://localhost/createpost", {
      method: "post",
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => {
        let index = data.length - 1;
        console.log(data[index]);
      });
  };
</script>

<style>
  #newPost {
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    padding: 1em 0;
    margin-top: 1em;
    display: grid;
    grid-template-rows: repeat(3 1fr);
  }
  .firstRow {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }

  #formContainer {
    grid-column: 3/12;
  }
  hr {
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 1em 1em 0;
  }
  .secondRow {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
  }

  .segment {
    display: flex;
    align-items: center;
  }
  .segment img {
    width: 1em;
  }
  #tag {
    width: 1.5em;
  }
  .segment p {
    font-size: 14px;
    padding-left: 0.5em;
  }
  .thirdRow {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .thirdRow button {
    width: 100%;
    background-color: #0099ff;
    margin: 2em;
    border: none;
    color: #fff;
    height: 28px;
    border-radius: 5px;
    font-size: 12px;
    outline: none;
    cursor: pointer;
  }
  /* #dropOff {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  } */
</style>

<div
  id="postsContainer"
  style="display:{$jData.pageDisplayed == 'posts' ? 'block' : 'none'}">
  <!-- <div id="dropOff" /> -->

  <section id="newPost">
    <div class="firstRow">
      <!-- <div id="imgCircle" /> -->
      <ProfileImage id="imgCircle" imgSrc={$jData.image} width="2em" />
      <div id="formContainer">
        <form id="newPostForm" onsubmit="return false">
          <input
            type="text"
            name=""
            id=""
            placeholder={$jData.name}
            bind:value={txtMessage} />
          <button on:click={handlePost}>post here</button>
        </form>
      </div>
    </div>
    <hr />
    <div class="secondRow">
      <div class="segment">
        <img src="assets/photo.png" alt="" />
        <p>Photo/Video</p>
      </div>
      <div class="segment">
        <img id="tag" src="assets/tag friend.png" alt="" />
        <p>Tag friends</p>
      </div>
      <div class="segment">
        <img src="assets/feeling.png" alt="" />
        <p>Feeling/Activities</p>
      </div>
    </div>
    <div class="thirdRow">
      <button>Post</button>
    </div>
  </section>
  {#each $jData.posts as post}
    <Post id={post.id} />
  {/each}

</div>
