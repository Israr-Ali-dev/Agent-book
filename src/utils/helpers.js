import { twMerge } from "tailwind-merge";

export const cls = (...classes) => {
  //return classes.filter(Boolean).join(" ");
  /**
   *  allow props className to overwrite conflicting classes
   *
   *  https://github.com/dcastil/tailwind-merge
   */
  return twMerge(...classes);
};

export const firstPath = (router) => {
  const firstPath = router.asPath.split("/")?.[1];

  return "/" + firstPath;
};

export const isEqualFirstPathOnly = (router, href) => {
  const path = firstPath(router);

  return path.indexOf(href) > -1 ? true : false;
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

/**
 *
 * @param {*} str
 * @returns
 */
export const convertToDecimals = (num) => {
  if (num === null) {
    return num;
  }

  return parseFloat(num).toFixed(2);
};

/**
 * Helper to calculate bytes, kb, mb, gb
 *
 * @param {*} bytes
 * @param {*} decimals
 * @returns
 * @link https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
 */
export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

/**
 *
 * @param string relativeLink
 * @returns string
 */
export const getImageFullPath = (relativeLink) => {
  if (relativeLink.charAt(0) === "/") {
    relativeLink = relativeLink.substring(1);
  }

  return `${process.env.NEXT_PUBLIC_GRAPHQL_URI}${relativeLink}`;
};
