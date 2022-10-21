import DropzoneImageLoadingIndicator from "@components/DropzoneImageLoadingIndicator";
import DropzoneImagePreviewField from "@components/DropzoneImagePreviewField";
import { formatBytes } from "@utils/helpers";

const DropzoneExplanationField = (props) => {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
    maxSize = null,
    loading,
    uploadedImage,
  } = props;

  if (!loading && uploadedImage) {
    return <DropzoneImagePreviewField {...props} />;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      {loading ? (
        <DropzoneImageLoadingIndicator />
      ) : (
        <div className="flex justify-center px-6 pt-5 pb-6 border border-gray-light">
          <div className="space-y-1 text-center">
            <svg
              className={`mx-auto h-12 w-12 text-gray-400 ${
                loading === true && "animate-spin"
              }`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="venue-logo-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
              >
                <span>Upload a file</span>
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF {maxSize > 0 ? `up to ${formatBytes(maxSize)}` : ""}
            </p>
            <div className="text-sm text-red-500">
              {fileRejections.map(({ file, errors }) => (
                <p key={file.path}>
                  {file.path} - {file.size} bytes
                  {errors.map((e) => (
                    <p key={e.code}>{e.message}</p>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropzoneExplanationField;
