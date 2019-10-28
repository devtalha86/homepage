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
        <Company />
        <Contact />
    </div>
</template>

<script>
import Testimonial from './Testimonial';
import Company from './Company';
import Contact from './Contact';

export default {
    name: 'Index',
    components: {
        Testimonial,
        Company,
        Contact
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>