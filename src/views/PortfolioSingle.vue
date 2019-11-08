<template>
  <div class="col-md-3 module-item">
      <div class="card bg-light">
          <img class="card-img-top" :src="getImgUrl(this.module.img)" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title border-bottom pb-3">{{ this.module.name }} <a href="#"
                      class="float-right btn btn-sm d-inline-flex share"><span
                          class="lodur-icon-eye"></span></a></h5>
              <p class="card-text">{{ this.module.text }}</p>
              <router-link :to="{ name: 'PortfolioDetail', params: { module_id: this.module.id } }" class="btn btn-sm btn-read-more float-right">Read more <i class="fas fa-angle-double-right"></i></router-link>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "PortfolioSingle",
        props: [
          'module'
        ],
        methods: {
            getImgUrl(pic) {
                return '//placeimg.com/280/180/'+pic;
            }
        }
    };
</script>

<style lang="scss">
.portfolio-single {
    margin-bottom: 60px;
}
.portfolio-single .this.module-item {
    margin-bottom: 30px;
}
</style>