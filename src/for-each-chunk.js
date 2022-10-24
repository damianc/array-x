export default function forEachChunk(chunkSize, cb) {
  if (chunkSize <= 0) return;
  
  for (let i = 0, ch = 1; i < this.length; i += chunkSize) {
    cb(
      this.slice(i, i + chunkSize),
      ch++,
      this
    );
  }
}