<template>
    <div>
        <div class="index-new">
            <div class="container">
                <!-- Links are to sibling routes -->
                <a-row class="links">
                    <a-col class="gutter-row" span="4">
                        <div>
                            <router-link to="/list">List Page</router-link>
                        </div>
                    </a-col>
                </a-row>
                <a-row class="links">
                    <a-col span="4">
                        <div>
                            <router-link to="/edit">Edit Page</router-link>
                        </div>
                    </a-col>
                </a-row>   
            </div>
            <router-view/>
        </div>
    </div>
</template>