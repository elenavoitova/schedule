const time = ["8.30-9.15", "9.30-10.15", "10.30-11.15","11.30-12.15","12.30-13.15"];

const world = {
    name: "ЯПС",
    zoom: "https://us05web.zoom.us/j/5023677910?pwd=UXlmdE9YV0taTWJLVWQ2SmdmVk44Zz09",
    teacher: "Вiкторiя Монтвiлас"
};

const math = {
    name: "Математика",
    zoom: "https://us05web.zoom.us/j/5023677910?pwd=UXlmdE9YV0taTWJLVWQ2SmdmVk44Zz09",
    teacher: "Вiкторiя Монтвiлас"
};

const ukr1 = {
    name: "Укр. мова",
    zoom: "https://us05web.zoom.us/j/5023677910?pwd=UXlmdE9YV0taTWJLVWQ2SmdmVk44Zz09",
    teacher: "Вiкторiя Монтвiлас"
}

const ukr2 = {
    name: "Укр. мова",
    zoom: "не монтвилас",
    teacher: 'Анна Кримець'
}

const eng = {
    name: "Англ. мова",
    teacher: "Анастасiя"
};

const fiz = {
    name: "Фiзкультура",
    zoom: "https://zoom.us/j/96486289680?pwd=LzMyc1ZtUThGMTI5UWVTR0x5Z2Rjdz09",
    teacher: "Вiталiй Болдирев"
};

const art = {
    name: "Мистецтво",
    teacher: "Вiкторiя Монтвiлас"
};

const monday1 = [ world, math, ukr1, eng, ukr1];

const monday2 = [ world, math, eng, ukr2, ukr1];

const tuesday = [world, math, fiz, ukr1];  

const thursday = [world, world, fiz, art];

const schedule1 = [monday1, tuesday, monday1, thursday, monday1];

const schedule2 = [monday2, tuesday, monday2, thursday, monday2];




export {schedule1, schedule2, time};