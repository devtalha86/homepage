<template>
    <div class="testimonial">
        <section id="testimonial">
            <div class="container-fluid carousel slide" id="testimonialCarousel">
                <div class="row no-gutters">
                    <div class="col-12">
                        <h1><span class="bold">Testimonials</span><span class="borderBreak"><span>what our customers say about us</span></span></h1>
                    </div>
                </div>
                <div class="remark-background">
                    <div class="carousel-inner">
                        <vueper-slides autoplay class="no-shadow" speed="3000" :touchable="false">
                            <vueper-slide v-for="slide in slides" :key="slide.id">
                                <div slot="slideContent">
                                    <div class="item">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="testimonial">
                                                    <blockquote>
                                                        <p class="quotation">{{ slide.quote }}</p>
                                                        <div class="sign">— {{ slide.author }} <span class="photo"><img :src="getImgUrl(slide.img)" alt=""></span></div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </vueper-slide>
                        </vueper-slides>
                    </div>
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
        name: 'Testimonial',
        components: {
            VueperSlides,
            VueperSlide
        },
        data(){
            return {
                slides: [
                    {
                        id: 1,
                        author: 'Ricky Martin',
                        img: 'photo.jpg',
                        quote: 'No doubt, Lodur is a Wonder Software'
                    },
                    {
                        id: 2,
                        author: 'Ricky Martin',
                        img: 'customer-2.png',
                        quote: 'No doubt, Lodur is a Wonder Software'
                    },
                    {
                        id: 3,
                        author: 'Ricky Martin',
                        img: 'photo.jpg',
                        quote: 'No doubt, Lodur is a Wonder Software'
                    }
                ]
            }
        },
        methods: {
            getImgUrl(pic) {
                return require('../assets/image/'+pic)
            }
        }
    }
</script>

<style lang="scss">
    .vueperslide {
        white-space: nowrap
    }
</style>