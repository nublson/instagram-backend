const path = require("path");
const multer = require("multer");

// Exportando objeto com configurações do multer
module.exports = {
    // O Storage é onde o multer vai salvar as imagens (diskStorage = disco = dentro do nosso projeto)
    storage: new multer.diskStorage({
        // Destination é o local no disk onde ficarão armazenados os arquivos
        destination: path.resolve(__dirname, "..", "..", "uploads"),
        // Filename recebe uma função com os dados da requisição, o arquivo sendo enviado e um callback que é o chamado quando finalizarmos a configuração
        filename: function(req, file, cb) {
            // Vamos retornar o nome que queremos dar pra imagem (originalname)
            cb(null, file.originalname);
        }
    })
};
