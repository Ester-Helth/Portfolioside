<template>
  <div class="about">
    
    <h2>CV</h2>

    <!-- CV-->
    <div class="left">
      <h1>Download mit CV her eller se det online herunder</h1>
    
      <a href="src/assets/Documents/CV.pdf" download="CV.pdf">
        <button>
          Download CV
        </button>
      </a>
    </div>
    
    <div class="center">
      <iframe src="src/assets/Documents/CV.pdf#toolbar=0&zoom=120"  frameborder="0"></iframe>
    </div>

    <!--video CV-->
    <div class="left">
      <h1>Video CV</h1>
    </div>
    
    
    
  </div>
</template>

<style>

.about {
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  padding: 50px 0;
}

.about .left {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

/*button*/

.about a {
  margin: 30px 0;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-image: none;
  border-radius: 30px;
  border: 1px solid var(--textcolor);
  transition: all 0.2s ease;
  font-family: "mrs-eaves-roman-all-petite-c", serif;
  font-weight: 400;
  font-style: normal;
  color: var(--textcolor);
  margin: 0 30px;
  
}

button:hover {
  box-shadow: 0 4px 3px 1px var(--thirdcolor), 0 6px 8px var(--thirdcolor), 0 -4px 4px var(--thirdcolor), 0 -6px 4px #FEFEFE, ;
}

button:active {
  box-shadow: 0 4px 3px 1px #c74343, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

button:focus {
  box-shadow: 0 4px 3px 1px #ae1d1d, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

/*CV pdf on page*/

.about .center {
  display: flex;
  align-items: center;
  justify-content: center;
}

iframe {
  height: 500px;
  width: 100%;
}

</style>
