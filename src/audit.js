export default function audit(tester, frameSize = 2) {
  if (this.length < frameSize) return false;

  for (let i = 0; i < this.length - (frameSize - 1); i++) {
    const currentFrame = this.slice(i, i + frameSize);
    const framePassing = tester(...currentFrame);
    
    if (!framePassing) return false;
  }

  return true;
}