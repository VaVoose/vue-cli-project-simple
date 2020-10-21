<template>
    <div>
        This is the Admin Edit
        <div> 
            <a-form>
                <a-form-item label="Firstname"> 
                    <a-input v-model="fname" placeholder="Firstname" />
                </a-form-item>
                <a-form-item label="Lastname"> 
                    <a-input v-model="lname" placeholder="Lastname" />
                </a-form-item>
                <a-form-item label="Category"> 
                    <a-input v-model="cat" placeholder="Category" />
                </a-form-item>
                <a-form-item> 
                    <a-button @click.prevent="addUser" type="primary"> Submit </a-button>
                </a-form-item>
            </a-form>
            <a-icon :type='showLoader'/>
        </div>
    </div>
</template>

<script>
import { /*mapMutations,*/ mapState } from 'vuex';

export default {
    name: 'Edit',
    data() {
        return {
            fname: "",
            lname: "",
            cat: "",
        }
    },
    computed: {
        ...mapState([
            'showLoader'
        ])
    },
    methods: {
        addUser(){
            //Done with and action
            this.$store.dispatch('pushUser', {fName: this.fname, lName: this.lname, cat: this.cat});
            //Done with a Mutation directly
            //this.$store.commit('addUser', {fName: this.fname, lName: this.lname, cat: this.cat});
            //the above can also be written as
            /*
            this.$store.commit({
                type: 'addUser',
                newUser: {fName: this.fname, lName: this.lname, cat: this.cat}
            })
            //Then the mutation handler would ().push(payload.newUser)
            */
        }
        
    }
}
</script>

