<<<<<<< HEAD
const fs = require("fs/promises");
const path = "./archivos/database.json";
class Contenedor{
    constructor(){};
    
    async getAll(){
        
        try {
            const objs = await fs.readFile(path, "utf-8");
            return  JSON.parse(objs);
        } catch (error) {
            return error;
        }
    };

    async getRandom(){
        const objs = await fs.readFile(path, "utf-8");
        let random = parseInt(Math.random() * JSON.parse(objs).length) + 1;
        return JSON.parse(objs).find( product => product.id === random );

    };
};

module.exports = Contenedor;
=======
const fs = require("fs/promises");
const path = "./archivos/database.json";
class Contenedor{
    constructor(){};
    
    async getAll(){
        
        try {
            const objs = await fs.readFile(path, "utf-8");
            return  JSON.parse(objs);
        } catch (error) {
            return error;
        }
    };

    async getRandom(){
        const objs = await fs.readFile(path, "utf-8");
        let random = parseInt(Math.random() * JSON.parse(objs).length) + 1;
        return JSON.parse(objs).find( product => product.id === random );

    };
};

module.exports = Contenedor;
>>>>>>> 33a1833c89ee26e8002ee731e97ead1789dd028d
