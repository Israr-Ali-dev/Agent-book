import { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import DropzoneExplanationField from "@components/DropzoneExplanationField";

const DropzoneImageField = (props) => {
  const { maxSize = 10485760, uploadedImage, setUploadedImage } = props;

  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file[0]);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      console.log({ file });

      const url = `${process.env.NEXT_PUBLIC_GRAPHQL_URI}file/upload/`;

      setLoading(true);

      await axios
        .post(url, formData, config)
        .then((response) => {
          if (response) {
            let uploadedImageData = {
              ID: response.data.data,
              Link: response.data.Link,
            };

            setUploadedImage(uploadedImageData);
          }
        })
        .catch((err) => console.log(err))
        .then(() => setLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles) => uploadImage(acceptedFiles)}
      accept="image/png"
      minSize={0}
      maxSize={maxSize}
    >
      {(dropzoneProps) => (
        <DropzoneExplanationField
          {...dropzoneProps}
          loading={loading}
          setUploadedImage={setUploadedImage}
          uploadedImage={uploadedImage}
          maxSize={maxSize}
        />
      )}
    </Dropzone>
  );
};

export default DropzoneImageField;
