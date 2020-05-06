<template>
    <div class="app-navbar">
        <scrollactive active-class="active" :offset="80" :duration="800" bezier-easing-value=".5,0,.35,1">
            <div id="navbar" :style="{ top: navTop }">
                <div class="navBar-left" v-if="!isMobile">
                    <router-link :to="{ name: 'Index', hash: '#intro' }" class="scrollactive-item">Home</router-link>
                    <router-link :to="{ path: '/#find' }" class="scrollactive-item">Find</router-link>
                    <router-link :to="{ path: '/#module' }" class="scrollactive-item">Portfolio</router-link>
                    <router-link :to="{ path: '/#testimonial' }" class="scrollactive-item">Testimonials</router-link>
                    <router-link :to="{ path: '/#company' }" class="scrollactive-item">Customers</router-link>
                    <router-link :to="{ path: '/#contact' }" class="scrollactive-item">Get in touch</router-link>
                    <div class="language-switcher">
                        <nav>
                            <ul>
                                <li class="language"><a href="example.com" lang="D">D</a></li>
                                <li class="language"><a href="example.com" lang="F">F</a></li>
                                <li class="language"><a href="example.com" lang="I">I</a></li>
                                <li class="language"><a href="example.com" lang="R">R</a></li>
                                <li class="language"><a href="example.com" lang="E">E</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="navBar-right">

                    <div class="logo-topBar">
                        <div class="company-name"><span>B Wahlstroem</span> Engineering GmbH</div>
                    </div>
                </div>
            </div>
            <Slide v-if="isMobile">
                <router-link :to="{ name: 'Index', hash: '#intro' }" class="scrollactive-item">Home</router-link>
                <router-link :to="{ path: '/#find' }" class="scrollactive-item">Find</router-link>
                <router-link :to="{ path: '/#module' }" class="scrollactive-item">Portfolio</router-link>
                <router-link :to="{ path: '/#testimonial' }" class="scrollactive-item">Testimonials</router-link>
                <router-link :to="{ path: '/#company' }" class="scrollactive-item">Customers</router-link>
                <router-link :to="{ path: '/#contact' }" class="scrollactive-item">Get in touch</router-link>
            </Slide>
        </scrollactive>
    </div>
</template>

<script>
    import {
        Slide
    } from 'vue-burger-menu';
    import {
        isMobile
    } from 'mobile-device-detect';

    export default {
        name: 'Navbar',
        components: {
            Slide
        },
        data() {
            return {
                navTop: "-60px",
                isMobile
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
            if (this.$route.path !== '/') {
                this.navTop = 0;
            }
        },
        methods: {
            onScroll() {
                const currentScrollPosition = window.pageYOffset

                if (!isMobile &&this.$route.path === '/') {
                    if (currentScrollPosition < 0) {
                        return
                    }

                    if (currentScrollPosition > 80) {
                        this.navTop = 0
                    } else {
                        this.navTop = null
                    }
                }

            }
        },
        watch: {
            $route() {
                if (this.$route.path !== '/') {
                    this.navTop = 0;
                }
                if (this.$route.path === '/') {
                    if (window.pageYOffset < 80) {
                        this.navTop = "-60px";
                    }
                }

            }
        }
    }
</script>

<style>

</style>