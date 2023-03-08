export function sigmoid(x) {
    return 1 / (1 + Math.pow(Math.E, -x))
}

export function dsigmoid(x) {
    return sigmoid(x) * (1 - sigmoid(x))
}

export function lerp(a, b, p) {
    return a + (b - a) * p
}