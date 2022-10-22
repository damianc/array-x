export default function chunkByGroup(grouper = item => 0) {
  const grouped = this.x.group(grouper);
  const groupLabels = Object.keys(grouped).sort((a, b) => a.localeCompare(b));
  
  return groupLabels.reduce((acc, curr) => {
    return [...acc, grouped[curr]];
  }, []);
}