const Equipamento = require('./equipamentos');

(async()=>{

    const database = require('./database');
    const Equipamento=require('./equipamentos')
    await database.sync();
})

const novoEquipamento = await Equipamento.create({

    nome: 'Escada',
    preco: 1500,
    descricao: 'Alto impacto'
});

console.log(novoEquipamento);

// lista os todos ou por pk

