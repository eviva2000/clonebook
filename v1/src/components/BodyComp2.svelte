<script>
  import Post from "./Post.svelte";
  import { jData } from "../data.js";
  import ProfileImage from "./ProfileImage.svelte";
  import VideoPage from "./video.svelte";
  import Posts from "./postsContainer.svelte";
  import Market from "./Market.svelte";
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
  #comp2 {
    height: 100vh;
  }

  /* #dropOff {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  } */
</style>

<div id="comp2">
  <Posts />
  <!-- <div id="dropOff" /> -->
  <VideoPage />
  <Market />

</div>
