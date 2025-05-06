// expose.js

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select')
  const volumeSlider = document.getElementById('volume')
  const playButton = document.querySelector('#expose button')

  const audio = document.querySelector('#expose audio')
  const hornImage = document.querySelector('#expose img')
  const volumeIcon = document.querySelector('#volume-controls img')

  hornSelect.addEventListener('change', () => {
    const choice = hornSelect.value;
    console.log(choice)
    hornImage.src = `assets/images/${choice}.svg`
    hornImage.alt = `${choice.replace('-', ' ')} image`
    audio.src = `assets/audio/${choice}.mp3`
  })

  volumeSlider.addEventListener('input', () => {
    const vol = Number(volumeSlider.value)
    audio.volume = vol / 100;

    let level = 0;

    if (vol === 0)         
      level = 0;
    else if (vol < 33)     
      level = 1;
    else if (vol < 67)     
      level = 2;
    else                   
      level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  })

  playButton.addEventListener('click', () => {
    
    audio.play()
    if (hornSelect.value === 'party-horn')
    {
      console.log("con")
      jsConfetti.addConfetti();
    }
  })
} 