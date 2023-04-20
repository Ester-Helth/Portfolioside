<template>
    
<body>
    <div class="contact">
        
        <h2>Kontakt mig her</h2>

        <!-- the four icons--> 
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

        <!-- visitcard button--> 
        <a href="src/assets/Documents/Visitkort.pdf" download="Visitkort.pdf">
            <button>
            Download visitkort
            </button>
        </a>

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
    padding: 0;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* four icons */
.icons {
    margin: 30px 0px;
    display: flex;
    align-items: center;
}

.icons a img {
max-width: 50px;
max-height: 50px;
margin: 0 20px;
transition: 300ms;
}

.icons a img:hover {
    transform: scale(1.2);
}

/* visitcard button */
.contact button {
    height: 60px;
    margin-top: 10px;
}

.contact button:hover {
  box-shadow: 0 4px 3px 1px #fcf3ed, 0 6px 12px #e7dcd5, 0 -4px 4px #dfd5cf, 0 -6px 4px #fcf3ed, inset 0 0 3px 3px #CECFD1;;

}

.contact button:focus {
  box-shadow: 0 4px 3px 1px #fcf3ed, 0 6px 8px #dcd2cc, 0 -4px 4px #ede3dd, 0 -6px 4px #fcf3ed, inset 0 0 5px 1px #999, inset 0 0 30px rgb(199, 199, 199);;
}


  
  
  </style>