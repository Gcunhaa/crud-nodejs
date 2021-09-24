const got = require('got')

const _MS_PER_DAY = 1000 * 60 * 60 * 24;


// Retorna a diferença de datas em dias
function dateDiffInDays(a, b) {
    
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}



const getAdressData = async (zipcode) => {
    
    const response = await got.get(`https://viacep.com.br/ws/${zipcode}/json/`).json();
    
    return response;
}

module.exports = {
    dateDiffInDays,
    getAdressData
}