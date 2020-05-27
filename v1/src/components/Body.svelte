<script>
  import Comp1 from "./BodyComp1.svelte";
  import Comp2 from "./BodyComp2.svelte";
  import Comp3 from "./BodyComp3.svelte";
</script>

<style>
  #bodyContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
    grid-gap: 10px;
    background-color: #f1f2f5;
  }
</style>

<div id="bodyContainer">
  <Comp1 />
  <Comp2 />
  <Comp3 />

</div>
