export default function unzip() {
  return this.reduce((acc, curr) => {
    if (!Array.isArray(curr)) return acc;

    const [l, r] = acc;
    const [cl, cr] = curr;

    return [
      [ ...l, cl ],
      [ ...r, cr ]
    ];
  }, [[], []]);
}