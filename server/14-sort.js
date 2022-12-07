const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

months.sort()

numbers.sort((a,b) => a - b) // ascendente
numbers.sort((a,b) => b - a) // descendente

words.sort((a,b) => a.localeCompare(b)) // para versiones antiguas

orders.sort((a,b) => b.total - a.total) // descendente
