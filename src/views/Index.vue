<template>
    <div class="index">
        <section id="intro">
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="col">
                        <div class="company-name"><span>B Wahlstroem</span> Engineering GmbH</div>
                    </div>
                </div>
            </div>
        </section>
        <Testimonial />
    </div>
</template>

<script>
import Testimonial from './Testimonial'

export default {
    name: 'Index',
    components: {
        Testimonial
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>