var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  var formidable = require('formidable');
  var fs = require('fs');
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.path;
    var newpath = '/Users/vtcarvalho/documents/' + files.filetoupload.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('File uploaded and moved!');
      res.end();
    });
  });
});

/*
const multer = require('multer');

// cria uma instância do middleware configurada
const upload = multer({ dest: 'uploads/' });

// rota indicado no atributo action do formulário
router.post('/file/upload', upload.single('file'), 
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));
*/
module.exports = router;
