export function submitDownloadForm() {
  return (res) => {
    const file = './public/upload-folder/file.zip';
    return res.download(file);
  };
}
