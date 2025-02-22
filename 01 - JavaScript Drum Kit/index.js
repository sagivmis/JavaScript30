  const deactivateButton = e=>{
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  const playSound = e=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;
    
    key.classList.add('playing');
    audio.currentTime=0;
    audio.play();
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key=>key.addEventListener('transitionend', deactivateButton))
  document.addEventListener('keydown', playSound);
