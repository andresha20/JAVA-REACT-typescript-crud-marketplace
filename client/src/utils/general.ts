export const brands = [
    { name: 'Audi', logo: `/images/audi.png` },
    { name: 'BMW', logo: `/images/bmw.png` },
    { name: 'Toyota', logo: `/images/toyota.png` },
]

export const getYears = () => {
    const currentDate: Date = new Date();
    const arrayOfYears = [];
    for (let i = 1900; i <= currentDate.getFullYear(); i++) {
        arrayOfYears.push(i);
    }
    return arrayOfYears.reverse();
}

export const menuItems = [
    { label: 'Inicio', name: '/' }, 
    { label: 'Catálogo', name: '/catalog' }
]

const generateArrayOfYears = () => {
    let max = new Date().getFullYear();
    let min = max - 100;
    let years = [];
  
    for (let i = max; i >= min; i--) {
        years.push({ value: i, label: i });
    }
    return years;
  }

export const filters = [
    { 
        name: "condition", label: "Condición", options: [
            { label: 'Usado', value: 1 },
            { label: 'Nuevo', value: 2 },
        ]
    },
    { 
        name: "fuelType", label: "Combustible", options: [
            { label: 'Gasolina', value: 1 },
            { label: 'Diesel', value: 2 },
            { label: 'Eléctrico', value: 3 },
            { label: 'Híbrido', value: 4 },
        ]
    },
    { 
        name: "transmission", label: "Transmisión", options: [
            { label: 'Manual', value: 1 },
            { label: 'Automática', value: 2 },
            { label: 'CVT', value: 3 },
        ]
    },
    { 
        name: "category", label: "Categoría", options: [
            { label: 'Carros y camionetas', value: 1 },
            { label: 'Carros', value: 2 },
            { label: 'Camionetas', value: 3 },
            { label: 'Camiones', value: 4 },
            { label: 'Motos', value: 5 },
            { label: 'Otros', value: 6 },
        ]
    },
    { 
        name: "year", label: "Año", options: generateArrayOfYears()
    },
    { 
        name: "brand", label: "Marca", options: brands.map((obj, i) => ({ 
            label: obj.name, 
            value: i + 1,
        }))
    },
    {
        name: "model", label: "Modelo", options: []
    },
    {
        name: "exchange", label: "Permuta", options: []
    },
    {
        name: "negotiable", label: "Negociable", options: []
    },
    {
        name: "bulletproof", label: "Blindaje", options: []
    },
]

export const convertToNumericFormat = (number: number) => {
    let withoutNonNumeric = number.toString().replace(/[^0-9]/g, "");
    let withCommas = withoutNonNumeric.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return withCommas;
}