<template>
    <div>
    <!--{{ state }}-->
 <div class="portfolio-item-container">
    <h2>Portfolie</h2>

     <div v-for="item in state" :key="item" class="portfolio-item">
        <p class="p-category" :class="item.category">{{ item.category }}</p>
        <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
            <h4>{{ item.title }}</h4>
        </RouterLink>
        <p>{{ item.description }}</p>
        <a :href="item.link" class="alink"></a>
        <img :src="item.image">
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
    text-transform: uppercase;
    padding-left: 8px;
    font-size: 20px;
}

.Web {
    color: rgb(154, 101, 203);
    border-left: 3px solid rgb(154, 101, 203);
}

.Video {
    color: rgb(140, 186, 158);
    border-left: 3px solid rgb(140, 186, 158);
}

.portfolio-item-container {
    display: flex;
    flex-direction: column;
    margin: 0 10%;
}

.portfolio-item {
    border: 3px dotted var(--forthcolor);
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
