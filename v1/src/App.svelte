<script>
  import Nav from "./components/Nav.svelte";
  import Body from "./components/Body.svelte";
  import ChatContainer from "./components/chatContainer.svelte";
  import { jData } from "./data.js";

  //**************USING SERVER SIDE EVENTS*************
  // let eventResource = new EventSource("http://localhost/getData");
  // eventResource.addEventListener("message", function(event) {
  //   let responseData = JSON.parse(event.data);
  //   $jData.unreadMessages = [
  //     ...responseData.unreadMessages,
  //     ...$jData.unreadMessages
  //   ];
  // });

  //**************USING INTERVAL*************
  // const getAllDataForThisUser = async () => {
  //   let connection = await fetch("http://localhost/getData");
  //   let responseData = await connection.json();
  //   $jData.unreadMessages = [
  //     ...responseData.unreadMessages,
  //     ...$jData.unreadMessages
  //   ];
  //   console.log($jData);
  // };
  // setInterval(() => {
  //   getAllDataForThisUser();
  // }, 3000);
  //****************************
</script>

<style>

</style>

<main>
  <Nav />
  <Body />
  <ChatContainer />
</main>
