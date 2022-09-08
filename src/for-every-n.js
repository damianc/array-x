export default function forEveryN(blockSize, cb, fullBlocksOnly = false) {
  if (blockSize <= 0) return;

  for (let i = 0; i < this.length; i++) {
    const block = this.slice(i, i + blockSize);
    if (fullBlocksOnly && block.length < blockSize) break;

    cb(
      block,
      i,
      this
    );
  }
}