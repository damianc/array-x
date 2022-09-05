export default function group(...labelFactories) {
  const map = {};

  function getLabels(item) {
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
      if (!(label in map)) map[label] = [];
      map[label].push(item);
    });
  });

  return map;
}