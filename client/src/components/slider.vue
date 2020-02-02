<template>
<div class="container">
  <div class="chat-container">
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?1">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?2">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?1">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?2">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?1">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?2">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?1">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?2">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?1">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
    <div class="message">
      <img class="avatar" src="https://placeimg.com/50/50/people?2">
      <div class="datetime">23/03/2016 20:40</div>
      <p>A message text</p>
    </div>
  </div>
  <form class="send-message-form">
    
    <input type="text" placeholder="Your message">
    <button type="submit">Send</button>
  </form>
</div>


    
</template>
<script>
export default {
    name: "slider",
    
    
};
</script>
<style lang="css">
*
  box-sizing border-box
  
.container{
  width :400
  margin 0 auto
  border solid 1px #ccc
  border-radius 5px
  overflow hidden}
  
.chat-container{
  height :400px
  overflow auto
  transform rotate(180deg)
  direction rtl}
  
  .message{
    border-bottom :solid 1px #ccc
    padding 20px
    transform rotate(180deg)
    direction ltr}
    
    .avatar{
      float :left
      margin-right 5px}
    
    .datetime{
      float: right
      color #999}

.send-message-form{
  
    width :100%
    border none
    font-size 16px
    padding 10px
  
   
}

</style>