exports.downloadGet = function(req, res) {
  var file = './public/upload-folder/'+ req.params.file + '.zip';
  res.download(file);
};