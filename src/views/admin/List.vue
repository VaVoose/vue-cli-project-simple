<template>
    <div>
        <h1>This is the list of frontend developers </h1>
        <h2>There are {{ frontendDevAmt }}  of frontend devs </h2>
        <ul>
            <li v-for="user in frontendDevs" :key="user.id"> 
                {{ user.id }} {{user.fName}} {{user.lName}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Admin-List',
    computed: {
        //mapGetters similar to mapState
        ...mapGetters([
            //Call the getter as the same name
            'frontendDevs',
            'frontendDevAmt'
            //rename the getter variable as something else (doesn't work if its within a set of other objects)
            //{fdLen: 'frontendDevAmt'}
        ])
    }
}
</script>