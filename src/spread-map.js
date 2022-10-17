export default function spreadMap(mapper) {
  return this.reduce((acc, curr, idx) => {
    let res = mapper(curr, idx);
    
    try {
      return [...acc, ...res];
    } catch (e) {
      return [...acc, res];
    }
  }, []);
}