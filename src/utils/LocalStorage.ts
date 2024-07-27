import { CartItem } from "../redux/cartSlice";

export class LocalStorage {
  static setCart(cart: CartItem[]): void {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart(): CartItem[] {
    const cartJson = localStorage.getItem("cart");
    const cart = cartJson ? JSON.parse(cartJson) : [];
    return cart as CartItem[];
  }

  static setNewItemId(id: number): void {
    localStorage.setItem("newItemId", id.toString());
  }

  static getNewItemId(): number {
    const newItemId = Number(localStorage.getItem("newItemId")) || 1;
    return newItemId;
  }
}
