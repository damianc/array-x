export default function thick() {
  return this.reduce((acc, curr) => {
    return [...acc, curr];
  }, []);
}