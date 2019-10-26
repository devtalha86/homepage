<template>
    <div class="navbar">
        <div id="navbar" :style="[ navTop != null ? { top: navTop } : false ]">
            <a href="#intro" class="active">Home</a>
            <a href="#module">Portfolio</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#company">Customers</a>
            <a href="#contact">Get in touch</a>
            <div class="navBar-right">
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

            if(currentScrollPosition < 0) {
                return
            }

            if(currentScrollPosition > 80) {
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