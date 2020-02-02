<template>
    <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Products</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="../assets/img/lp7.2.png" alt=""> 
          </a>
          <div class="portfolio-caption">
            <h4>{{$t('product.title1')}}</h4>
            <p class="text-muted">{{$t('product.content1')}}</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="../assets/img/high.jpg" alt=""> 
          </a>
          <div class="portfolio-caption">
            <h4>{{$t('product.title2')}}</h4>
            <p class="text-muted">{{$t('product.content2')}}</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="../assets/img/lp11.5_lp.png" alt=""> 
          </a>
          <div class="portfolio-caption">
            <h4>{{$t('product.title3')}}</h4>
            <p class="text-muted">{{$t('product.content3')}}</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="../assets/img/euc2.png" alt=""> 
          </a>
          <div class="portfolio-caption">
            <h4>{{$t('product.title4')}}</h4>
            <p class="text-muted">{{$t('product.content4')}}</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="../assets/img/euc3.png" alt=""> 
          </a>
          <div class="portfolio-caption">
            <h4>{{$t('product.title5')}}</h4>
            <p class="text-muted">{{$t('product.content5')}}</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="../assets/img/kompakt.png" alt=""> 
          </a>
          <div class="portfolio-caption">
            <h4>{{$t('product.title6')}}</h4>
            <p class="text-muted">{{$t('product.content6')}}</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="../assets/img/fex.png" alt=""> 
          </a>
          <div class="portfolio-caption">
            <h4>{{$t('product.title7')}}</h4>
            <p class="text-muted">{{$t('product.content7')}}</p>
          </div>
        </div>
        
       
      </div>
    </div>
  </section>
</template>
<script>
//import i18n from '@/i18n'

export default {
  name:"products",
  
    data: ()=>({
        portjason:[
            
            {
                img:require ('../assets/img/l1.png'),
                title: 'Common rail injector LI1',
                caption: 'The LI1 injector platform was developed for use in large series of light, medium and heavy-duty engines. With very short and slim designs and flexible connection dimensions, the compactly designed injectors ensure maximum freedom in the installation space of the engine.'
            },
            {
                img: require('../assets/img/high.jpg'),
                title: 'Common Rail High Pressure Pump LP9.2',
                caption: 'The LP9.2 high-pressure pump with a flow rate of 220 l / h is suitable for medium- and heavy-duty engines with a total displacement up to 13 l maximum.Due to the fuel-lubricated drive concept, the LP9.2 can be integrated without additional connection to the engine lubrication system.The lightweight and compact design with a weight of approximately 7 kg makes it easy to use in a wide variety of engine applications. Variants with different directions of rotation and variable connection orientation as well as flange geometry are available.'
            },
            {
                img: require('../assets/img/lp11.5_lp.png'),
                title: 'Common-rail high-pressure pump'+
                        'LP11.5_LP11.6',
                caption: "The oil-lubricated high-pressure pumps LP11.5 and LP11.6 were specially developed for large diesel applications, which are used primarily in the mining, rail, marine and power generation sectors. Maximum reliability under the toughest conditions with regard to vibrations with shock loads of up to 10 g, dust loads and temperatures from 30 ° C to +125 ° C is imperative here due to the far-reaching consequences of a device shutdown. The oil lubrication combined with the eccentric drive allow a lifespan of up to 15,000 hours."
                
                
                
                
            },
            {
              img:require('../assets/img/euc2.png'),
              title:'Engine control unit ECU2-HD',
              caption:"Uncompromisingly robust: Whether plugged or unplugged cable harness, the ECU2-HD is designed with protection class IP6K9K for use under the most extreme environmental conditions."
            },
            {
              img:require('../assets/img/euc3.png'),
              title:'Engine control unit ECU3',
              caption:" As an optimized control system for 6-cylinder diesel engines and mobile gas engines, the ECU3 convinces in on- and off-road applications. The ECU3 controls all engine functions as well as SCR or SCRoF systems from Liebherr"
            },
            {
              img:require('../assets/img/kompakt.png'),
              title:'Compact and powerful',
              caption:"Liebherr offers robust common rail systems for large engines in the power range up to five megawatts. Injectors with an integrated high-pressure accumulator ensure a very low pressure drop and precise metering of the injection quantity."
            },
            {
              img:require('../assets/img/fex.png'),
              title:'Flexible system solutions for up to 2,500 bar system pressure',
              caption:"For medium and heavy-duty engines for commercial vehicles and machines in the on- and off-highway area, Liebherr offers complete common rail system solutions in a modular design"
            }
        
        ]
    })
    
  
   
    
}
</script>
<style lang="css" >

</style>