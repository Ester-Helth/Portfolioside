<template>
    <div class="details">
       
    <div v-if="portfolioDetails" class="portfolio-item">
        <p class="p-category" :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>
        <p>{{ portfolioDetails.description }}</p>
        <h4>{{ portfolioDetails.details }}</h4>
        
        <a :href="portfolioDetails.link" target="_blank" class="alink">{{ portfolioDetails.linktext }}</a>
         <!--<span>{{ portfolioDetails.teammembers }}</span>-->
        <button @click="$event=> goBack()">Gå tilbage</button>
    </div>
    <div class="img-container">
        <img class="img1" :src="portfolioDetails.image">
        <img :src="portfolioDetails.imagetwo">
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

.details{
    margin: 30px 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 3px dashed var(--forthcolor);
    border-radius: 20px;

}
.p-category {
    font-weight: bold;
    padding-left: 8px;
    text-transform: uppercase;
    font-size: 23px;
    font-family: mrs-eaves-roman-lining, serif;
    font-weight: 400;
    font-style: normal;
}

.Photoshop {
    color: #a5cbea;
    border-left: 3px solid #a5cbea;
}

.PremierePro {
    color: #a5aeea;
    border-left: 3px solid #a5aeea;
}

.illustrator {
    color: #ffbd6d;
    border-left: 3px solid #ffbd6d;
}

.InDesign {
    color: rgb(220, 146, 142);
    border-left: 3px solid rgb(220, 146, 142);
}

.portfolio-item {
    margin: 40px 35px;
}

/*button effects*/

.details button {
    margin-top: 30px;
}
.details button:hover {
  box-shadow: 0 4px 3px 1px #809089, 0 6px 8px #66736e, 0 -4px 4px #5b6863, 0 -6px 4px #84938d, inset 0 0 3px 3px #CECFD1;
}

/*imgages*/
.img-container{
    margin: 40px 30px;
}

img {
    width: 40vw;
    border-radius: 10px;
    margin-top: 17px;
}

.img1 {
    margin-top: 0;
}

</style>
