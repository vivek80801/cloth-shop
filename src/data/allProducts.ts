import {
    saleTags as featureSaleTags,
    products as featureProducts,
} from "./featureProducts";
import {
    saleTags as latestSaleTags,
    products as latestproducts,
} from "./latestProducts";

import { newProducts } from "./newProducts";

export const allProducts: any = []

newProducts.map(newProduct => allProducts.push(newProduct))
latestSaleTags.map((latestSaleTag) => allProducts.push(latestSaleTag));
latestproducts.map((latestproduct) => allProducts.push(latestproduct));
featureSaleTags.map((featureSaleTag) => allProducts.push(featureSaleTag));
featureProducts.map((featureProduct) => allProducts.push(featureProduct));