<template>
    <div class="tb">
        <button @click="toggle" :id="condStyle"> Make the paragraph disappear! </button>
        <p id="text" v-show="isShown">
            This is some text <br>
            On multiple Lines <br>
            Make me disappear
        </p>
    </div>
</template>

<script>
export default {
    name: "ToggleButton",
    data () {
        return {
            isShown: true,
            condStyle: "small"
        };
    },
    methods: {
        toggle() {
            this.isShown = !this.isShown;

            if (this.condStyle == "small") this.condStyle = "big";
            else this.condStyle = "small";
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