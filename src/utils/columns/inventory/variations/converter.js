import { convertToDecimals } from "@utils/helpers";

/**
 * Convert elvanti ProductVariation array into inventory table data
 * @param {*} dataList
 * @returns
 */
export const convertProductVariationDataToTable = (dataList) => {
  let list = [];

  if (!dataList) {
    return list;
  }

  // Purposely naming the node to be ProductVariation to simulate silverstripe's
  dataList.forEach((ProductVariation) => {
    let data = {
      id: ProductVariation.ID,
      item_image: ProductVariation.Product.ReSizedProductListingImage || null,
      item_name: ProductVariation.Product.Title,
      category: ProductVariation.Product.Categories?.nodes
        ?.map((category) => category.Title)
        .join(", "),
      item_cost: convertToDecimals(ProductVariation.DefaultSupplyPrice),
      prep_time: ProductVariation.PreparationTime,
      SOH: ProductVariation.StockOnHandUnits,
      edit: true,
      remove: true,
      parent_id: ProductVariation.Product.ID,
    };

    list.push(data);
  });

  return list;
};

/**
 * Convert inventory (edit) table data into elvanti ProductVariation array
 * @param {*} dataList
 * @returns
 */
export const convertTableDataToProductVariation = (editedCells) => {
  let list = [];
  const dataList = Object.entries(editedCells);

  if (!dataList || dataList.length <= 0) {
    return list;
  }

  // Purposely naming the node to be ProductVariation to simulate silverstripe's
  dataList.forEach(([key, item]) => {
    let data = {
      ID: key,
      DefaultSupplyPrice: item.item_cost?.modified,
      PreparationTime: item.prep_time?.modified,
      StockOnHandUnits: item.SOH?.modified,
    };

    list.push(data);
  });

  return list;
};
