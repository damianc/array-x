export default function extractObject(obj, selection = null, mapping = null) {
  if (!selection && !mapping) return obj;

  let res = obj;

  if (Array.isArray(selection)) {
    res = selection.reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: obj[curr]
      };
    }, {});
  }

  if (typeof mapping === 'object' && mapping !== null) {
    const entries = Object.entries(mapping);
    
    res = entries.reduce((acc, [k, nk]) => {
      if (selection && !selection.includes(k)) return acc;
      
      const { [k]: kx, ...otherProps } = acc;
      
      return {
        ...otherProps,
        [nk]: kx
      };
    }, res);
  }

  return res;
}