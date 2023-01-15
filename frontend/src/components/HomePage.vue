<template>
    <div>
        <!-- carousel section -->
        <div id="carousel">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/topimg1.jpg" class="d-block w-100" alt="img1">
    </div>
    <div class="carousel-item">
      <img src="../assets/topimg2.jpg" class="d-block w-100" alt="img2">
    </div>
    <div class="carousel-item">
      <img src="../assets/topimg3.jpg" class="d-block w-100" alt="img3">
    </div>
    <div class="carousel-item">
      <img src="../assets/topimg4.jpg" class="d-block w-100" alt="img3">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>

        <!-- electricity cut info -->
        <section>
            <ElectricityCut></ElectricityCut>
        </section>

        <!-- complain -->
        <section>
           <ComplainComp></ComplainComp>
        </section>

        <!-- <div id="service"></div>
        <section>
            service
        </section> -->

        <!-- <div id="contact"></div>
        <section>
            contact
        </section> -->
    </div>
</template>

<script>
import ElectricityCut from './ElectricityCut.vue'
import ComplainComp from './ComplainComp.vue'
export default {
    name:'HomePage',
    components:{ElectricityCut , ComplainComp},
}
</script>