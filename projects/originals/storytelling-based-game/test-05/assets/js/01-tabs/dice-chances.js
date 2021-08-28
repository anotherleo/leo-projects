// dice
function rolld2() {
    return Math.round(Math.random() * (2 - 1) + 1);
};
function rolld3() {
    return Math.round(Math.random() * (3 - 1) + 1);
};
function rolld6() {
    return Math.round(Math.random() * (6 - 1) + 1);
};
function rolld10() {
    return Math.round(Math.random() * (10 - 1) + 1);
};
function rolld20() {
    return Math.round(Math.random() * (20 - 1) + 1);
};
function rolld100() {
    return Math.round(Math.random() * (100 - 1) + 1);
};

function plus15perc(e) {
    return e += (e/100*15)
}