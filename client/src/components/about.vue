<template>
    <section class="page-section" id="/about"> 
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">About</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <!-- <img class="rounded-circle img-fluid" src="img/about/1.jpg" alt=""> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>1949-1960</h4>
                  <h4 class="subheading">{{$t('about.title')}}</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">{{$t('about.content')}}</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <!-- <img class="rounded-circle img-fluid" src="img/about/2.jpg" alt=""> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>1981-1990</h4>
                  <h4 class="subheading">{{$t('about.title2')}}</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted"> {{$t('about.content2')}}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <!-- <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt=""> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>2001-2010</h4>
                  <h4 class="subheading">{{$t('about.title3')}}</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">{{$t('about.content3')}}</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Since 2016</h4>
                  <h4 class="subheading">{{$t('about.title4')}}</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted"> {{$t('about.content4')}}</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part
                  <br>Of Our
                  <br>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section> 
</template>
<script>
export default {
    
}
</script>
<style lang="css">

</style>

