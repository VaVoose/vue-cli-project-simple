<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2> Look the project counter stored in the state is: {{ projectCount }}! </h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'About',
  computed: {
    ...mapState({
      projectCount: state => state.projectCount
    })
  }
}
</script>
