const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

    const { macadress, type, title, description, when } = req.body;

    if(!macadress)
    return res.status(400).json({ error: 'Macadress é obrigatorio'});
    else if(!type)
    return res.status(400).json({ error: 'Tipo é obrigatorio'});
    else if(!title)
    return res.status(400).json({ error: 'Título é obrigatorio'});
    else if(!description)
    return res.status(400).json({ error: 'Descrição é obrigatorio'});
    else if(!when)
    return res.status(400).json({ error: 'Data e Hora são obrigatorio'});
    
    else{
        let exists;

        if(req.params.id){
            exists = await TaskModel.
                        findOne(
                            {
                                '_id': {'$ne': req.params.id },
                                'when': {'$eq': new Date(when) },
                                'macadress': {'$in': macadress }
                            });
        }else {       
            if(isPast(new Date(when)))
                return res.status(400).json({ error: 'Escolha uma data e hora futura'});

            exists = await TaskModel.
                            findOne(
                                {
                                    'when': {'$eq': new Date(when)},
                                    'macadress': {'$in': macadress}
                                });
            }
        if(exists){
            return res.status(400).json({ error: 'Já existe uma tarefa nesse dia'});
        }

        next();
    }

}

module.exports = TaskValidation;