<template>
    <div class="tb">
        <button @click="toggle"> Make the paragraph disappear! </button>
        <p id="text" v-show="isShown">
            This is some text <br>
            On multiple Lines <br>
            Make me disappear
        </p>
    </div>
</template>

<script>
export default {
    name: "toggleButton",
    data () {
        return {
            isShown: true
        };
    },
    methods: {
        toggle() {
            this.isShown = !this.isShown; 
        }
    }
}
</script>