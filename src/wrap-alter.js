export default function wrapAlter(proc) {
  const copy = [...this];
  const res = proc(copy);

  return res || copy;
}