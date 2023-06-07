import noteAssignFunctions from './note-assignments/getNoteAssignFunctions'
import { arrivalEffectCreate } from './arrivalEffects';

const flashElement = (elementId) => {
  const element = document.getElementById(elementId.replace(/ *\([^)]*\) */g, ""));
  element.style.animation = "full-fade-in 1s forwards";
  setTimeout(() => {
    element.style.animation = "full-fade-out 1s forwards";
  }, 1000);
  setTimeout(() => {
    element.style.animation = "full-fade-in 1s forwards";
  }, 2000);
  setTimeout(() => {
    element.style.animation = "full-fade-out 1s forwards";
  }, 3000);
  
}

const triggerAudioVisuals = (quantisedTubeData, instruments, arrivalEffects) => {
  quantisedTubeData.forEach((train) => {
    const note = noteAssignFunctions[train.lineName](train.stationName);
    setTimeout(() => {
      instruments[train.lineName].triggerAttackRelease(note, '4n');
      console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
      // flashElement(train.stationName);
      if (arrivalEffects) {arrivalEffectCreate(train.stationName, arrivalEffects)};
      // arrivalEffectCreate(`${train.stationName}x`);
    }, train.timeToStation * 1000)
  })
}

export default triggerAudioVisuals;
