const audioId = 'background-musik';
const steps = 100;


export const changeSound = (duration, endVolume) => {
  const audio = document.getElementById(audioId);
  const currentVolume = audio.volume;
  const volumeStep = (endVolume - currentVolume) / steps;
  const durationStep = duration / steps;
  step(endVolume, volumeStep, durationStep);
}

const step = (endVolume, volumeStep, durationStep) => {
  const audio = document.getElementById(audioId);
  if (volumeStep > 0) {
    if (audio.volume + volumeStep >= endVolume) {
      audio.volume = endVolume;
      return;
    }
  } else {
    if (audio.volume + volumeStep <= endVolume) {
      audio.volume = endVolume;
      return;
    }
  }
  audio.volume = audio.volume + volumeStep
  setTimeout(() => {
    step(endVolume, volumeStep, durationStep)
  }, durationStep)
}


export const changeTrack = (oldMusic, newMusic) => {
  console.log('change track', oldMusic, newMusic);
  if (!oldMusic) {
    const audio = document.getElementById(audioId);
    audio.volume = newMusic.effects.start.soundRise.startVolume;
    audio.src = newMusic.src;
    audio.autoplay = true;
    changeSound(newMusic.effects.start.soundRise.duration, newMusic.effects.start.soundRise.endVolume);
  } else {
    changeSound(oldMusic.effects.end.soundDown.duration, newMusic.effects.end.soundDown.endVolume);

    setTimeout(() => {
      const audio = document.getElementById(audioId);
      audio.volume = newMusic.effects.start.soundRise.startVolume;
      audio.src = newMusic.src;
      audio.autoplay = true;
      changeSound(newMusic.effects.start.soundRise.duration, newMusic.effects.start.soundRise.endVolume);
    }, oldMusic.effects.end.soundDown.duration)
  }
}
