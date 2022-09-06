export default function countAll(...labelFactories) {
  const map = {};

  function getLabels(item) {
    if (labelFactories.length === 0) {
      return [item];
    }

    const labels = [];
    labelFactories.forEach(lf => {
      const label = lf(item);
      if (label !== null) labels.push(label);
    });
    return labels;
  }

  this.forEach((item) => {
    const itemLabels = getLabels(item);
    
    itemLabels.forEach(label => {
      const cc = map[label] || 0;
      map[label] = cc + 1;
    });
  });

  return map;
}