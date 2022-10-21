import { convertToDecimals } from "@utils/helpers";

/**
 *
 * @param {*} data
 * @returns
 */
export const convertProductToFormData = (data) => {
  if (!data) {
    return {};
  }

  let formData = {
    Title: data.Title || "",
    Content: data.Content || "",
    TaxInclusive: data.TaxInclusive || false,
    HideOutOfStock: data.HideOutOfStock || false,
  };

  console.log("converted", formData);

  return formData;
};

/**
 *
 * @param {*} data
 * @returns
 */
export const convertGlobalQueryToDropdowns = (data) => {
  let dietaryNotes = [];
  let brands = [];
  let orderingOptions = [];

  if (data?.DietaryNotes) {
    // Example: { value: "gluten-free", label: "Gluten Free" }
    dietaryNotes = data?.DietaryNotes.map((item) => {
      return {
        value: item.ID,
        label: item.Title,
      };
    });
  }

  if (data?.Brands) {
    // Example:
    // {
    //     id: 2,
    //     name: "Coka-Cola",
    //     description: "Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century..",
    // },

    brands = data?.Brands.map((item) => {
      return {
        id: item.ID,
        name: item.Title,
        // description: item.Title, // TODO
      };
    });
  }

  if (data?.OrderingOptions) {
    // Example: { value: "dine-in", label: "Dine-in" },
    orderingOptions = data?.OrderingOptions.map((item) => {
      return {
        label: item,
        value: item,
      };
    });
  }

  return {
    dietaryNotes,
    brands,
    orderingOptions,
  };
};

/**
 *
 * @param {*} data
 * @returns
 */
export const convertStoreQueryToDropdowns = (data) => {
  let counters = [];
  let categories = [];

  if (data?.Counters?.nodes) {
    // Example: { id: 1, name: "Kitchen", description: "Kitchen description", },
    counters = data?.Counters?.nodes.map((item) => {
      return {
        id: item.ID,
        name: item.Title,
        // description: item.Title
      };
    });
  }

  if (data?.Categories?.nodes) {
    // Example: { id: 1, name: "Breakfast" },
    categories = data?.Categories?.nodes.map((item) => {
      return {
        id: item.ID,
        name: item.Title,
        // description: item.Title, // TODO
      };
    });
  }

  return {
    categories,
    counters,
  };
};

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
      sku: ProductVariation.InternalItemID,
      title: ProductVariation.Title,
      salePrice: convertToDecimals(ProductVariation.DefaultSalePrice),
      price: convertToDecimals(ProductVariation.DefaultRRP),
      stock: ProductVariation.StockOnHandUnits,
      makeDefault: ProductVariation.Default,
      remove: true,
    };

    list.push(data);
  });

  return list;
};
