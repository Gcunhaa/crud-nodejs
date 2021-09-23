(async () => {
    const database = require('./db');
    const User = require('./models');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();