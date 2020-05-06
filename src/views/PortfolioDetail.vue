<template>
    <div class="portfolio-detail">
        <section id="module" style="margin-top:50px;">
            <div class="container-fluid carousel slide">
                <div class="carousel-inner module-slider">
                    <vueper-slides  class="no-shadow" speed="3000" :bullets="false" :visible-slides="1" :slide-ratio="1/1" :touchable="false" :initSlide=initId>
                        <vueper-slide v-for="module in $store.getters.modules" :key="module.id">
                            <div slot="slideContent" >
                                <div class="row no-gutters">
                                    <div class="col-6 text-left">
                                        <h1><span class="bold">Einsatzplanung</span><span class="borderBreak"><span>a
                                                    handy tool to plan an emergency</span></span></h1>
                                    </div>
                                    <div class="col-6 text-right vueperslides__arrows">                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <img class="img-fluid" :src="getImgUrl(module.img)" alt="">
                                    </div>
                                    <div class="col-6 text-left">
                                        <h2>{{ module.name }}</h2>
                                        <p>{{ module.text }}</p>
                                        <div>
                                            <button class="btn-details">See How It Works</button>
                                        </div>
                                        <img :src="getOrgImg('org-1.jpg')" alt="">
                                        <p class="remarks">
                                            This is a remark from one of our customers. The current WAN (Internet) IP
                                            Address.
                                            This field will be blank or 0.0.0.0 if the IP Address is assigned
                                            dynamically and
                                            there is no connection to Internet.
                                            <span>- Nils Wahlstrom, Fire Department</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </vueper-slide>
                    </vueper-slides>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {
        VueperSlides,
        VueperSlide
    } from "vueperslides";

    export default {
        name: "PortfolioDetail",
        components: {
            VueperSlides,
            VueperSlide
        },
        data() {
            return {
                initId: 1
            }
        },
        created() {
            this.initId = parseInt(this.$route.params.module_id);
            window.scrollTo(0,0);
        },
        methods: {
            getImgUrl(pic) {
                return '//placeimg.com/630/350/'+pic;
            },
            getOrgImg(pic) {
                return require('../assets/image/'+pic)
            }
        }
    };
</script>

<style lang="scss">
.portfolio-detail .vueperslide__content-wrapper {
    width: 100%
}
.portfolio-detail .vueperslides__parallax-wrapper {
    padding-bottom: 40%!important
}
</style>