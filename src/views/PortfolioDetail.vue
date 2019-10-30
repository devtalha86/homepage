<template>
    <div class="portfolio-detail">
        <section id="module" style="margin-top:50px;">
            <div class="container-fluid carousel slide">
                <div class="carousel-inner module-slider">
                    <vueper-slides  class="no-shadow" speed="3000" :bullets="false" :visible-slides="1" :slide-ratio="1/1" :initSlide=initId>
                        <vueper-slide v-for="module in modules" :key="module.id">
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
                                        <img :src="getImgUrl(module.org)" alt="">
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
                initId: 1,
                modules: [{
                        id: 1,
                        img: 'workflow-1.png',
                        org: 'org-1.jpg',
                        name: 'Module name',
                        text: `IP Address - The current WAN (Internet) IP Address. This field will be blank or 0.0.0.0 if the IP Address is assigned dynamically and there is no connection to Internet. Subnet Mask - The subnet mask associated with the WAN IP Address. Default Gateway - The Gateway currently used by the Router is shown here. When you use Dynamic IP as the connection Internet type, the Renew button will be displayed here. Click the Renew button to obtain new IP parameters dynamically from the ISP. And if you have got an IP address Release button will be displayed here. Click the Release button to release the IP address the Router has obtained from the ISP. DNS Server - The DNS (Domain Name System) Server IP addresses currently used by the Router. Multiple DNS IP settings are common. Usually, the first available DNS Server is used.`,
                    },
                    {
                        id: 2,
                        img: 'workflow-2.png',
                        org: 'org-1.jpg',
                        name: 'Module name',
                        text: `IP Address - The current WAN (Internet) IP Address. This field will be blank or 0.0.0.0 if the IP Address is assigned dynamically and there is no connection to Internet. Subnet Mask - The subnet mask associated with the WAN IP Address. Default Gateway - The Gateway currently used by the Router is shown here. When you use Dynamic IP as the connection Internet type, the Renew button will be displayed here. Click the Renew button to obtain new IP parameters dynamically from the ISP. And if you have got an IP address Release button will be displayed here. Click the Release button to release the IP address the Router has obtained from the ISP. DNS Server - The DNS (Domain Name System) Server IP addresses currently used by the Router. Multiple DNS IP settings are common. Usually, the first available DNS Server is used.`,
                    },
                    {
                        id: 3,
                        img: 'workflow-3.png',
                        org: 'org-1.jpg',
                        name: 'Module name',
                        text: `IP Address - The current WAN (Internet) IP Address. This field will be blank or 0.0.0.0 if the IP Address is assigned dynamically and there is no connection to Internet. Subnet Mask - The subnet mask associated with the WAN IP Address. Default Gateway - The Gateway currently used by the Router is shown here. When you use Dynamic IP as the connection Internet type, the Renew button will be displayed here. Click the Renew button to obtain new IP parameters dynamically from the ISP. And if you have got an IP address Release button will be displayed here. Click the Release button to release the IP address the Router has obtained from the ISP. DNS Server - The DNS (Domain Name System) Server IP addresses currently used by the Router. Multiple DNS IP settings are common. Usually, the first available DNS Server is used.`,
                    },
                    {
                        id: 4,
                        img: 'workflow-3.png',
                        org: 'org-1.jpg',
                        name: 'Module name',
                        text: `IP Address - The current WAN (Internet) IP Address. This field will be blank or 0.0.0.0 if the IP Address is assigned dynamically and there is no connection to Internet. Subnet Mask - The subnet mask associated with the WAN IP Address. Default Gateway - The Gateway currently used by the Router is shown here. When you use Dynamic IP as the connection Internet type, the Renew button will be displayed here. Click the Renew button to obtain new IP parameters dynamically from the ISP. And if you have got an IP address Release button will be displayed here. Click the Release button to release the IP address the Router has obtained from the ISP. DNS Server - The DNS (Domain Name System) Server IP addresses currently used by the Router. Multiple DNS IP settings are common. Usually, the first available DNS Server is used.`,
                    },
                ]
            }
        },
        created() {
            this.initId = parseInt(this.$route.params.module_id);
            window.scrollTo(0,0);
        },
        methods: {
            getImgUrl(pic) {
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
    padding-bottom: 54%!important
}

</style>