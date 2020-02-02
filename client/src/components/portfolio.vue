<template>
    <section class="page-section" id="/products">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4" v-for="(obj, key) in portjason" :key="key">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">{{obj.headIng}}</h4>
          <p class="text-muted">{{obj.des}}</p>
        </div>
        
        
      </div>
    </div>
  </section>

</template>
<script>
export default {
  data: ()=>({
        portjason:[
            {
                img: 'src/something/img.png',
                headIng: 'photography',
                des: 'do it now!'
            },
            {
                img: 'src/something/img.png',
                headIng: 'explore',
                des: 'graphic designing!'
            },
            {
                img: 'src/something/img.png',
                headIng: 'travel',
                des: 'nanaga parbat'
            }
        
        ]
    })
    
}
</script>
<style lang="css">

</style>