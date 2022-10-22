export default function auditChunks(tester, chunkSize = 2, rejectSticking = true) {
  if (
    this.length === 0 ||
    (this.length < chunkSize && rejectSticking)
  ) return false;
  
  const sticking = this.length % chunkSize;
  const target = this.length - (rejectSticking ? sticking : 0);
  
  for (let i = 0; i < target; i += chunkSize) {
    const currentChunk = this.slice(i, i + chunkSize);
    const chunkPassing = tester(...currentChunk);
    
    if (!chunkPassing) return false;
  }

  return true;
}