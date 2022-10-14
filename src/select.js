export default function select(from = 0, to = -1, step = 1) {
    const res = [];

    if (from < 0) from = this.length + from;
    if (to < 0) to = this.length + to;
    if (step <= 0) step = 1;

    for (let i = from; i <= to; i += step) {
        if (i < 0) continue;
        if (i >= this.length) break;

        res.push(this[i]);
    }
    
    return res;
}