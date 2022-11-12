let theme = localStorage.getItem('theme')

if(theme == null){
  setTheme("light")
}
else{
  setTheme("dark")
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0 ; themeDots.length > i ; i++){
      themeDots[i].addEventListener('click' , function(){
        let mode = this.dataset.mode
        setTheme(mode)
      })
}

function setTheme(mode){
    if(mode == 'light'){
      document.getElementById('theme-style').href = './assets/styles/styles.css'
    }

    if(mode == 'dark'){
      document.getElementById('theme-style').href = './assets/styles/black.css'
    }

    localStorage.setItem('theme' , mode)
}
