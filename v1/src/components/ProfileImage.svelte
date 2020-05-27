<script>
  export let width;
  export let imgSrc;
</script>

<style>
  .imgContainer {
    display: grid;
    justify-content: center;
    align-items: center;
    min-width: 3rem;
    border-radius: 50%;
    position: relative;
    padding-left: 1em;
  }
  /* .profileImage {
  } */
</style>

<section>
  <!-- {console.log(id)} -->
  <div class=" imgContainer">
    <img
      src={imgSrc}
      class="profileImage rounded-full"
      style="width:{width}; height: {width};"
      alt="profilex" />
  </div>
</section>
