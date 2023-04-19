<template>
    
<body>
    <div class="contact">
        
        <h2>Kontakt</h2>

        <div class="icons">
        <a href="https://www.linkedin.com/in/ester-helth-m%C3%B8ller/" target="_blank">
            <img src="../assets/Documents/linkedin.png" alt="">
        </a>
        <a href="mailto:ester22@live.dk" target="_blank">
            <img src="../assets/Documents/email.png" alt="">
        </a>
        <a href="tel:+4540221881" >
            <img src="../assets/Documents/phone.png" alt="">
        </a>
        <a href="https://www.instagram.com/ester_design_portfolio/" target="_blank">
            <img src="../assets/Documents/instagram.png" alt="">
        </a>
        </div>

    </div>
</body> 
  </template>
  
  <script setup>
  
  </script>
  
  
  <style scoped> 

body{
    background-image: url(../assets/Documents/visitkort.jpg);
    background-size: cover;
    height: 900px;
    width: 100%;
    top: 0;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icons {
    margin-top: 15px;
    display: flex;
    align-items: center;
}

.icons a img {
max-width: 50px;
max-height: 50px;
margin: 0 15px;
transition: 300ms;
}

.icons a img:hover {
    transform: scale(1.2);
}

  
  
  </style>