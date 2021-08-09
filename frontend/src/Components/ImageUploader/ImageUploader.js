import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import './ImageUploader.scss';

const ImageUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
  };


  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept=".jpg, .jpeg, .png"
      classNames={{
        inputLabel: "upload-label",
        dropzone: "dropzone-wrapper",
        preview: "preview-wrapper",
        inputLabelWithFiles: "input-label-with-files"
      }}
    />
  );
}
 
export default ImageUploader;