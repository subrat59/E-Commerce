import { Cart } from "../Models/Cart.model.js"
import { Product } from "../Models/Product.model.js"
import { createError } from "../Utils/error.js"

export const addProduct=async (req,res,next)=>{
    try {
        const newProduct=new Product({
            name:req.body.name,
            description:req.body.name,
            category:req.body.name,
            img:req.body.name
        })
        await newProduct.save()
        console.log(newProduct)
        res.status(200).send("Product added Successfully")
    } catch (error) {
        next(createError(404,"Can't add product."))
    }
}

export const viewProduct=async (req,res,next)=>{
    try {
        const product=await Product.findOne({name:req.body.name})
        res.status(200).send(product)
    } catch (error) {
        next(createError(404,"Can't show product."))        
    }
}

export const addToCart = async (req, res, next) => {
  console.log(req.params.productId)
    try {
      // Find the cart based on customerId
      const cart = await Cart.findOne({ customerId: req.user.id });
      console.log("Hellodjncnjd")  
      if (!cart) {
        const newCart = new Cart({
          customerId: req.user.id,
          products: [
            {
              productId: req.params.productId,
              quantity: req.body.quantity
            }
          ]
        });
  
        // Save the new cart to the database
        await newCart.save();
  
        // Send a success response or do whatever is needed
        return res.status(200).json({ message: 'Product added to cart successfully' });
      }

      const existingProduct =await cart.products.find(
        (product) => product.productId === req.params.productId);
  
      if (existingProduct) {
        
        existingProduct.quantity = req.body.quantity;
      } else {
        // If the product is not in the cart, add it to the cart
        cart.products.push({
          productId: req.params.productId,
          quantity: req.body.quantity
        });
      }

      console.log(cart)
  
      // Save the updated cart to the database
      await cart.save();
  
      // Send a success response or do whatever is needed
      return res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
      console.error(error);
      next(createError(500, 'Internal Server Error'));
    }
  };

  export const removeCart = async (req, res, next) => {
    try {
      const cart = await Cart.findOne({ customerId: req.user.id });
      console.log(cart)
  
      if (!cart) {
        return next(createError(404, "Cart not found."));
      }
  
      const productIdToRemove = req.params.productId;
      const productToRemove = cart.products.find(
        (product) => product.productId === productIdToRemove
      );
      if (!productToRemove) {
        return next(createError(404, "Product not found in the cart."));
      }
  
      // Use $pull to remove the product from the products array
      cart.products.pull(productToRemove);
  
      // Save the updated cart
      await cart.save();    
  
      res.status(200).json({ message: "Product removed from cart successfully." });
    } catch (error) {
      console.log(error)
      next(createError(500, "Internal server error"));
    }
  };
  