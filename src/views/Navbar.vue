<template>
    <div class="app-navbar">
        <div id="navbar" :style="{ top: navTop }">
            <div class="navBar-left">
                <scrollactive active-class="active"
                :offset="80"
                :duration="800"
                bezier-easing-value=".5,0,.35,1">

                <router-link :to="{ name: 'Index', hash: '#intro' }" class="scrollactive-item">Home</router-link>
                <router-link :to="{ path: '/#module' }" class="scrollactive-item">Portfolio</router-link>
                <router-link :to="{ path: '/#testimonial' }" class="scrollactive-item">Testimonials</router-link>
                <router-link :to="{ path: '/#company' }" class="scrollactive-item">Customers</router-link>
                <router-link :to="{ path: '/#contact' }" class="scrollactive-item">Get in touch</router-link>

                </scrollactive>
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
    </div>
</template>

<script>
    
    export default {
        name: 'Navbar',
        data() {
            return {
                navTop: "-60px"
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
            if(this.$route.name !== '/') {
                this.navTop = 0;
            }
        },
        methods: {
            onScroll() {
                const currentScrollPosition = window.pageYOffset

                if(this.$route.path === '/') {
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
        watch:{
            $route(){
                if(this.$route.name !== '/') {
                    this.navTop = 0;
                }
            }
        }
    }
</script>

<style>

</style>