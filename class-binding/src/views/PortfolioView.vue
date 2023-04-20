<template>
    <div>
    <!--{{ state }}-->
 <div class="portfolio-item-container">
    <h2>Portfolie</h2>

     <div v-for="item in state" :key="item" class="portfolio-item">
        
        <!--item text-->
        <div class="text-container">
            <div>
                <p class="p-category" :class="item.category">{{ item.category }}</p>
                <p>{{ item.description }}</p>
            </div>
            <div>
                <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
                    <button>{{ item.title }}</button>
                </RouterLink>
                <a :href="item.link" class="alink"></a>
            </div>
        </div>

        <!--images-->
        <div class="img-container"><img :src="item.image"></div>
     </div>
    </div>
 </div> 
</template>

<script setup>
    import portfoliodb from '../modules/portfoliodb'
    const { state } = portfoliodb()
</script>

<style scoped>

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
    color: rgb(199, 150, 82);
    border-left: 3px solid rgb(199, 150, 82);
}

.InDesign {
    color: rgb(209, 118, 113);
    border-left: 3px solid rgb(209, 118, 113);
}

.portfolio-item-container {
    display: flex;
    flex-direction: column;
    margin: 0 10% 0 30%;
}

.portfolio-item {
    border: 3px dashed var(--forthcolor);
    border-radius: 20px;
    margin: 15px 0;
    padding: 35px;
    display: flex;
    justify-content: space-between;   
}

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 30px;
}


.alink {
    color: rgb(91, 170, 203);
    font-weight: bold;
}

.alink:hover {
    color: rgb(203, 91, 177);
}

/*button effects*/
.text-container button:hover {
  box-shadow: 0 4px 3px 1px #809089, 0 6px 8px #66736e, 0 -4px 4px #5b6863, 0 -6px 4px #84938d, inset 0 0 3px 3px #CECFD1;;

}

/*imgages*/


img {
    max-height: 280px;
    max-width: 400px;
    border-radius: 20px;
}



</style>
