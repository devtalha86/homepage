<template>
    <div class="company">
        <section id="company">
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="col">
                        <h1><span class="bold">Our Customers</span><span class="borderBreak"><span>companies powered by our software</span></span></h1>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col slider">
                        <infinite-slide-bar duration="80s">
                            <div class="items">
                                <div v-for="item in items" :key="item.id">
                                    <img :src="item.url" :height="imgHeight" :width="imgWidth" alt="" />
                                </div>
                            </div>
                        </infinite-slide-bar>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import InfiniteSlideBar from 'vue-infinite-slide-bar'
    
    export default {
        name: 'Company',
        components: {
            InfiniteSlideBar
        },
        data() {
            return {
                imgWidth: '250',
                imgHeight: '100',
                items: [
                    { id:1, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png' },
                    { id:2, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png' },
                    { id:3, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png' },
                    { id:4, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png' },
                    { id:5, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png' },
                    { id:6, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png' },
                    { id:7, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png' },
                    { id:8, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png' },
                    { id:9, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png' },
                    { id:10, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png' },
                    { id:11, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png' },
                    { id:12, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png' },
                    { id:13, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png' },
                    { id:14, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png' }
                ]
            }
        }
    }
</script>

<style>
 .items { display: flex; justify-content: space-around; }
</style>