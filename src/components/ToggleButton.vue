<template>
    <div class="tb">
        <div>
            <p> 
                Look! I'm using Vuex! <br>
                This is the global counter stored in ./store/index.js ! <br>
                {{ projectCount }} <br>

                This is the local counter for this page! <br>
                {{ count }} 
            </p>
            Local Buttons <br>
            <a-button type="primary" @click='increment'>+</a-button>
            <a-button type="ghost" @click='decrement'>-</a-button>
            <br> <br> Global Buttons <br>
            <a-button >+</a-button>
            <a-button >-</a-button>
        </div>
        <br>
        <a-button type="primary" @click="toggle" :id="condStyle"> Make the paragraph {{shownMessage}}! </a-button>
        <p id="text" v-show="isShown">
            This is some text <br>
            On multiple Lines <br>
            Make me disappear
        </p>
    </div>
</template>

<script>
//Simple very basic example of Vuex working
//These imports are only needed here since it is using Vuex locally
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
});

export default {
    name: "ToggleButton",
    data () {
        return {
            isShown: true,
            shownMessage: "disappear",
            condStyle: "small",
        };
    },
    methods: {
        toggle() {
            this.isShown = !this.isShown;

            if (this.condStyle == "small") {
                this.condStyle = "big";
                this.shownMessage = "appear";
            }
            else {
                this.condStyle = "small";
                this.shownMessage = "disappear";
            }
        },
        increment() {
            store.commit('increment');
        },
        decrement() {
            store.commit('decrement');
        }
    },
    //Always retrieve state data from computed property
    computed: {
        count() {
            return store.state.count;
        },
        projectCount() {
            return this.$store.state.projectCount;
        }
    }
}
</script>

<style scoped>
#small {
    font-size: 10px;
}
#big {
    font-size: 20px;
}
</style>