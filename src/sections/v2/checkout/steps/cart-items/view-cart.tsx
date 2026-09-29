import React, { useState, useEffect } from "react";
import { useCheckout } from "@/hooks/use-checkout";
import { CartItem } from "./components";
import { Typography } from "@/components/v2/ui/typography";
import { _cartItems } from "@/_mocks/_mock_checkout/_mock_cart_items";
import { Checkbox } from "@/components/v2/ui/input";
import { Button } from "@/components/v2/ui/button";
import { SVGTrash } from "@/assets/svgs/v2";
import { CartItem as CartItemType } from "@/types/v2/cart";

export default function CartItems() {
  const { cartItems, updateCartItems } = useCheckout();
  const [items, setItems] = useState<CartItemType[]>(
    cartItems.length > 0 ? cartItems : _cartItems,
  );

  // Sync selected items to store whenever items change
  useEffect(() => {
    const selectedItems = items.filter((item) => item.isSelected);
    updateCartItems(selectedItems);
  }, [items, updateCartItems]);

  const handleUpdateItem = (updatedItem: CartItemType) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    );
  };

  const isAllSelected =
    items.length > 0 && items.every((item) => item.isSelected);

  const handleSelectAll = (checked: boolean) => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isSelected: checked })),
    );
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  return items.length > 0 ? (
    <>
      <div className="flex justify-between items-center">
        <Checkbox
          checked={isAllSelected}
          onChange={(e) => handleSelectAll(e.target.checked)}
        >
          <Typography level="body-15" className="text-txt-secondary">
            Chọn tất cả {"(" + items.length + ")"}
          </Typography>
        </Checkbox>

        <Button color="secondary" onClick={handleRemoveAll}>
          <Typography fontWeight="semibold" className="text-txt-primary">
            Xoá tất cả
          </Typography>
          <SVGTrash width={16} height={16} stroke="var(--icon-primary)" />
        </Button>
      </div>
      <div role="list" className="w-full ">
        {items.map((item, idx) => (
          <CartItem key={item.id} item={item} onChange={handleUpdateItem} />
        ))}
      </div>
    </>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <Typography className="text-txt-secondary">Giỏ hàng trống</Typography>
    </div>
  );
}
