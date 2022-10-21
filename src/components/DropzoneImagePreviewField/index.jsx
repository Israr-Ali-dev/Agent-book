import { TrashIcon } from "@heroicons/react/outline";

const DropzoneImagePreviewField = (props) => {
  const { getRootProps, getInputProps, uploadedImage, setUploadedImage } =
    props;

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <div className="flex p-4 border border-gray-light">
        <div className="flex-1">
          <div className="text-sm text-green-500">
            <img src={uploadedImage.Link} width={200} />
          </div>
        </div>
        <div className="justify-self-end">
          <button
            type="button"
            className="inline-flex items-center uppercase text-primary"
            onClick={(e) => {
              e.stopPropagation();
              setUploadedImage(null);
            }}
          >
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropzoneImagePreviewField;
