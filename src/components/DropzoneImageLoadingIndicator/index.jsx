const DropzoneImageLoadingIndicator = () => {
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div className="flex justify-center px-6 pt-5 pb-6 border border-gray-light">
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400 animate-spin"
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
        <div className="text-sm text-gray-600">
          <p className="pl-1">Uploading...</p>
        </div>
        <p className="text-xs text-gray-500">
          Please do not close your browser.
        </p>
      </div>
    </div>
  );
};

export default DropzoneImageLoadingIndicator;
