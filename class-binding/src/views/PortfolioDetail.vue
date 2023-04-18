<template>
    <div>
        Details
        test : {{ id }}
       
        <button @click="$event=> goBack()"> Gå tilbage knap</button>

    <div v-if="portfolioDetails" class="portfolio-item">
        <p class="p-category" :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>
            <h4>{{ portfolioDetails.title }}</h4>
        <p>{{ portfolioDetails.description }}</p>
        <a :href="portfolioDetails.link" class="alink">LinkedIn</a>
        <img :src="portfolioDetails.image">
        <span>{{ portfolioDetails.teammembers }}</span>
     </div>

    </div>
</template>

<script setup>

import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb'
import {useRouter} from 'vue-router';

const router = useRouter ()

const goBack = () => {
    router.go(-1)
}

const { state } = portfoliodb () 

const props = defineProps ({
    id: String
})

const { id } = toRefs (props) 

const portfolioDetails = computed (
    () => {
        return state.value.find(item => item.id == id.value)
    }
)




</script>

<style scoped>

.p-category {
    font-weight: bold;
    text-transform: uppercase;
    padding-left: 8px;
    font-size: 20px;
}

.Web {
    color: rgb(1, 25, 181);
    border-left: 3px solid rgb(154, 101, 203);
}

.Video {
    color: rgb(184, 186, 140);
    border-left: 3px solid rgb(140, 186, 158);
}

.portfolio-item-container {
    display: flex;
    justify-content: flex-start;
}

.portfolio-item {
    border: 3px dotted rosybrown;
    margin: 10px;
    padding: 15px;

}

.alink {
    color: rgb(91, 170, 203);
    font-weight: bold;
}

.alink:hover {
    color: rgb(203, 91, 177);
}

</style>
