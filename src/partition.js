export default function partition(partitioner = item => 0) {
  const grouped = this.x.group(item => +partitioner(item));
  const partitions = Object.keys(grouped).sort((a, b) => a - b);
  
  return partitions.reduce((acc, curr) => {
    return [...acc, grouped[curr]];
  }, []);
}