<template>
    <div class="portfolio">
        <section id="module" style="margin-top:50px;">
            <div class="container-fluid carousel slide" id="moduleCarousel">
                <div class="row no-gutters">
                    <div class="col-6">
                        <h1><span class="bold">Portfolio</span><span class="borderBreak"><span>the tools we build</span></span></h1>
                    </div>
                </div>
                <div class="portfolio-single">
                  <div class="row more-modules" >
                    <PortfolioSingle 
                      v-for="module in controlModules"
                      :key="module.id"
                      module="module"
                    />
                  </div>
              </div>
                <div class="row" v-if="loadMore">
                    <div class="col">
                        <a href="#" id="loadMore" @click.prevent="contentLength += 4">Load More</a>
                    </div>
                </div>
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
    },
    mounted() {
        this.loadMore = true;
    },
    watch: {
        contentLength: function() {
            if(this.contentLength >= this.modules.length) {
                this.loadMore = false
            }
        }
    },
    computed: {
        controlModules: function () {
            let limitModules = this.modules.filter((item, index) => {
                if(this.contentLength > index) {
                    return {...item}
                }
                
            })
            return limitModules;
        }
        
    },
    data() {
      return {
          modules: [
              {
                  id: 1,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 2,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 3,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 78,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 11,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 22,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 34,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 42,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 5,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                              bulk of the card's content.`,
              },
              {
                  id: 6,
                  img: 'tech',
                  name: 'Module name',
                  text: `Some quick example text to build on the card title and make up the
                                    bulk of the card's content.`,
                    },
                    {
                        id: 7,
                        img: 'tech',
                        name: 'Module name',
                        text: `Some quick example text to build on the card title and make up the
                                    bulk of the card's content.`,
                    },
                    {
                        id: 8,
                        img: 'tech',
                        name: 'Module name',
                        text: `Some quick example text to build on the card title and make up the
                                    bulk of the card's content.`,
                    },
                ],
                contentLength: 4,
                loadMore: null
            }
      },
};
</script>

<style lang="scss">
.portfolio-single {
    margin-bottom: 60px;
}
.portfolio-single .module-item {
    margin-bottom: 30px;
}
</style>