<template>
    <div class="app-navbar">
        <div id="navbar" :style="[ navTop != null ? { top: navTop } : false ]">
            <div class="navBar-left">
                <scrollactive active-class="active"
                :offset="80"
                :duration="800"
                bezier-easing-value=".5,0,.35,1">
                    <a href="#intro" class="scrollactive-item">Home</a>
                    <a href="#module" class="scrollactive-item">Portfolio</a>
                    <a href="#testimonial" class="scrollactive-item">Testimonials</a>
                    <a href="#company" class="scrollactive-item">Customers</a>
                    <a href="#contact" class="scrollactive-item">Get in touch</a>
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
                navTop: null,
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll() {
                const currentScrollPosition = window.pageYOffset

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
    }
</script>

<style>

</style>