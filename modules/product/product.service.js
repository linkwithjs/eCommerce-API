const productModel = require("./product.model");
const supplierModel = require("../supplier/supplier.model");

const helper = require("./../../helpers/isValid")
//function for product
function save(data) {
    var newProduct = new productModel({});
    newProduct.name = data.name;
    newProduct.desc = data.description;
    newProduct.image = data.image;
    newProduct.images = data.images;
    newProduct.brand = data.brand;
    newProduct.price = data.price;
    newProduct.quantity = data.quantity;
    newProduct.category = data.categoryId;
    newProduct.subCategory = data.subCategoryId;
    newProduct.countInStock = data.countInStock;
    newProduct.isFeatured = data.isFeatured;
    newProduct.discount = data.discount;
    newProduct.supplier = data.supplierId;

    return newProduct.save();
  }

  //function for getting all user data
function getAll() {
    return productModel.find({});
  }

// function for get limit product
function getLimitProduct(){
  // define an empty query document
  const query = {};
  // sort in descending (-1) order by length
  //const sort = { length: -1 };
  const limit = 2;
  return productModel.find(query).sort( { "updatedAt": -1 }).limit(limit);

}

  //function for getting product by id
async function findById(id) {
   if (!helper.isValidId(id)) throw "Invalid product id:" + ` ${id}`;
    const product = await productModel.findById(id);
    if (!product) throw "Product with" + ` ${id} ` + "not found";
    return product;
  }

  //function for getting product by id
async function findBySupplierId(id) {
  if (!helper.isValidId(id)) throw "Invalid supplier id:" + ` ${id}`;
   const supplier = await supplierModel.findById(id);
   if (!supplier) throw "Supplier with" + ` ${id} ` + "not found";
   return supplier;
 }

  //function for updating product detail
async function update(id, data) {
    const product = await findById(id);
    // copy params to userDetail and save
    Object.assign(product, data);

    return product.save();
  }

  //function for deleting product
    async function remove(id) {
        const product = await findById(id);
        await product.remove(id);
    }
  
  module.exports = {
    save,
    getAll,
    findById,
    update,
    remove,
    findBySupplierId,
    getLimitProduct,

  }