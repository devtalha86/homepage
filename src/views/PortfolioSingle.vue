<template>
    <div class="portfolio-single">
        <div class="row more-modules" >
            <div class="col-md-3 module-item" v-for="module in controlModules" :key="module.id">
                <div class="card bg-light">
                    <img class="card-img-top" :src="getImgUrl(module.img)" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title border-bottom pb-3">{{ module.name }} <a href="#"
                                class="float-right btn btn-sm d-inline-flex share"><span
                                    class="lodur-icon-eye"></span></a></h5>
                        <p class="card-text">{{ module.text }}</p>
                        <router-link :to="{ name: 'PortfolioDetail', params: { module_id: module.id } }" class="btn btn-sm btn-read-more float-right">Read more <i class="fas fa-angle-double-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="loadMore">
            <div class="col">
                <a href="#" id="loadMore" @click.prevent="contentLength += 4">Load More</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortfolioSingle",
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
        methods: {
            getImgUrl(pic) {
                return '//placeimg.com/280/180/'+pic;
            }
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
            
        }
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