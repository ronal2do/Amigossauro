exports.downloadGet = function(req, res) {
  var file = './public/upload-folder/file.zip';
  res.download(file);
};
