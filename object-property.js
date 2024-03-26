const students = [
    {id: 1, name: 'Omor Sanny'},
    {id: 2, name: 'Manna'},
    {id: 3, name: 'Moyuri'},
    {id: 4, name: 'Dipjol'},
];
const names = students.map(s=>s.name);
console.log(names);

const bigger = students.filter(s => s.id>=3);
console.log(bigger);