<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style scoped>
span{
  background: #234;
  border-radius: 50%;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 4px;
  animation: dots .6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;

}
@keyframes dots {
  from {
    transform: translate3d(0,0,0);
  } to {
    transform: translate3d(0,30px,0);
  }
}
span:nth-child(1){
  animation-delay: .1s;
}
span:nth-child(2){
  animation-delay: .2s;
}
span:nth-child(3){
  animation-delay: .3s;
}
span:nth-child(4){
  animation-delay: .4s;
}
</style>
