<template>
    <div class="portfolio">
        <section id="module" style="margin-top:50px;">
            <div class="container-fluid carousel slide" id="moduleCarousel">
                <div class="row no-gutters">
                    <div class="col-6">
                        <h1><span class="bold">Portfolio</span><span class="borderBreak"><span>the tools we build</span></span></h1>
                    </div>
                </div>
                <PortfolioSingle />
                
            </div>
        </section>
    </div>
</template>

<script>
import PortfolioSingle from "./PortfolioSingle";

export default {
    name: "Portfolio",
    components: {
        PortfolioSingle
    }
};
</script>

<style lang="scss">

</style>