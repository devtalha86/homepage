<template>
    <div>
        <section id="testimonial">
            <div class="container-fluid carousel slide" id="testimonialCarousel">
                <div class="row no-gutters">
                    <div class="col-12">
                        <h1><span class="bold">Testimonials</span><span class="borderBreak"><span>what our customers say about us</span></span></h1>
                    </div>
                </div>
                <div class="remark-background">
                    <div class="carousel-inner">
                        <vueper-slides autoplay class="no-shadow" speed="3000">
                            <vueper-slide v-for="(slide, index) in slides" :key="index" :content="slide.content">
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

    // Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
    import 'vueperslides/dist/vueperslides.css'

    export default {
        components: {
            VueperSlides,
            VueperSlide
        },
        data: () => ({
            slides: [{
                    content: `<div class="item">
                            <div class="row">
                                <div class="col-12">
                                    <div class="testimonial">
                                        <blockquote>
                                            <p class="quotation">
                                               ssser No doubt, Lodur is a Wonder Software</p>
                                            <div class="sign">— Ricky Martin <span class="photo"><img src=".src/assets/image/photo.jpg" alt=""></span></div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>`
                },
                {
                    content: `<div class="item">
                            <div class="row">
                                <div class="col-12">
                                    <div class="testimonial">
                                        <blockquote>
                                            <p class="quotation">
                                               ssser No doubt, Lodur is a Wonder Software</p>
                                            <div class="sign">— Ricky Martin <span class="photo"><img src="@/assets/image/photo.jpg" alt=""></span></div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>`
                }
            ]
        })
    }
</script>

<style lang="scss">
    .vueperslide {
        white-space: nowrap
    }
</style>