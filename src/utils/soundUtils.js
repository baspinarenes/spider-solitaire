// Assets
import CannotDealSound from '../assets/audios/cannot-deal.ogg';
import DealSound from '../assets/audios/deal.ogg';
import HintSound from '../assets/audios/hint.ogg';
import MouseDownSound from '../assets/audios/mouse-down.ogg';
import MouseUpSound from '../assets/audios/mouse-up.ogg';
import NoHintSound from '../assets/audios/no-hint.ogg';
import OpeningSound from '../assets/audios/opening.ogg';
import ShutdownSound from '../assets/audios/shutdown.ogg';
import WinSound from '../assets/audios/win.ogg';

const audios = {
  'cannot-deal': CannotDealSound,
  deal: DealSound,
  hint: HintSound,
  'mouse-down': MouseDownSound,
  'mouse-up': MouseUpSound,
  'no-hint': NoHintSound,
  opening: OpeningSound,
  shutdown: ShutdownSound,
  win: WinSound,
};

export default function getSounds(...soundList) {
  const soundPlayFunctions = [];

  soundList.forEach((soundName) => {
    soundPlayFunctions.push(new Audio(audios[soundName]));
  });

  return soundPlayFunctions;
}
