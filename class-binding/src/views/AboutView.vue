<template>
  <div class="about">
    
    <h2>CV</h2>

    <!-- CV-->
    <div class="left">
      <h1>Rul gennem mit CV herunder eller download det her</h1>
    
      <span>&#x27F6</span>

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
      <a href="https://youtu.be/gTl6BYJTbcc">Link til min video</a>
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
  margin: 0;
  justify-content: space-between;
}

.about .left span {
  font-size: 40px;
}

/*button*/

.left a {
text-decoration: none;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 170px;
  height: 50px;
  background-color: var(--forthcolor);
  border-radius: 30px;
  border: 1px solid var(--textcolor);
  transition: all 0.2s ease;
  font-family: "mrs-eaves-roman-all-petite-c", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: var(--textcolor);
  
}

button:hover {
  box-shadow: 0px 3px 1px var(--textcolor),7px 6px 8px var(--textcolor), 8px -4px 4px var(--textcolor), 7px -5px 4px var(--whitecolor);

}

button:active {
  box-shadow: 0 4px 3px 1px var(--textcolor), 0 6px 8px var(--thirdcolor), 0 -4px 4px var(--textcolor), 0 -6px 4px var(--thirdcolor), inset 0 0 4px 3px rgb(194, 194, 194), inset 0 0 50px rgb(209, 209, 209);
}

button:focus {
  box-shadow: 0 4px 3px 1px var(--textcolor), 0 6px 8px var(--thirdcolor), 0 -4px 4px var(--textcolor), 0 -6px 4px var(--thirdcolor), inset 0 0 4px 3px rgb(194, 194, 194), inset 0 0 50px rgb(209, 209, 209);
}

/*CV pdf on page*/

.about .center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

iframe {
  height: 800px;
  width: 80%;
}

/*video CV*/

</style>
