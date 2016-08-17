exports.downloadGet = function(req, res) {
  var file = './public/upload-folder/'+ req.params.file + '.pdf';
  res.download(file);
};