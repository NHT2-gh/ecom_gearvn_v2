"use client";

import React, { useEffect } from "react";
import { useAddress } from "@/hooks/use-address";
import { useCheckout } from "@/hooks/use-checkout";
import { Loader2 } from "lucide-react";
import { Typography } from "@/components/v2/ui/typography";
import { Select, Option } from "@/components/v2/ui/select";
import { FormField } from "@/components/v2/form";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/schemas";

const labelMap = {
  province: "Tỉnh/Thành phố",
  district: "Quận/Huyện",
  ward: "Phường/Xã",
};

export default function AddressSelector() {
  const { shippingAddress, updateShippingAddress } = useCheckout();
  const {
    provinces,
    districts,
    wards,
    loading,
    error,
    loadDistricts,
    loadWards,
    validateAddress,
  } = useAddress();

  const {
    getValues,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  const [validationErrors, setValidationErrors] = React.useState<string[]>([]);
  // Validate address when it changes

  const values = getValues([
    "shippingAddress.province",
    "shippingAddress.district",
    "shippingAddress.ward",
  ]);

  useEffect(() => {
    if (values[0] != "") {
      updateShippingAddress({
        province: values[0],
      });
      loadDistricts(values[0]);
    }
    if (values[1] != "") {
      updateShippingAddress({
        district: values[1],
      });
      loadWards(values[1]);
    }
    if (values[2] != "") {
      updateShippingAddress({
        ward: values[2],
      });
    }
  }, [values[0], values[1], values[2]]);

  return (
    <div className="grid grid-cols-2 gap-3">
      {Object.keys(labelMap).map((key) => (
        <FormField
          key={key}
          name={`shippingAddress.${key}`}
          className="col-span-2"
          fieldType="select"
          fieldConfig={{
            children: (
              <>
                <Option value={""}>
                  Chọn {labelMap[key as keyof typeof labelMap]}
                </Option>
                {key === "province"
                  ? provinces.map((province) => (
                      <Option key={province.code} value={province.code}>
                        {province.name}
                      </Option>
                    ))
                  : key === "district"
                    ? districts.map((district) => (
                        <Option key={district.code} value={district.code}>
                          {district.name}
                        </Option>
                      ))
                    : wards.map((ward) => (
                        <Option key={ward.code} value={ward.code}>
                          {ward.name}
                        </Option>
                      ))}
              </>
            ),

            placeholder: `Chọn ${labelMap[key as keyof typeof labelMap]}`,
            value:
              key === "province"
                ? shippingAddress.province
                : key === "district"
                  ? shippingAddress.district
                  : shippingAddress.ward,
          }}
          options={{
            label: labelMap[key as keyof typeof labelMap],
            required: true,
            message: {
              type: errors.shippingAddress?.[key as keyof typeof labelMap]
                ?.message
                ? "error"
                : "success",
              text:
                errors.shippingAddress?.[key as keyof typeof labelMap]
                  ?.message || "",
            },
          }}
        />
      ))}

      <FormField
        name="shippingAddress.street"
        fieldType="input"
        fieldConfig={{
          type: "text",
        }}
        options={{
          label: "Tên đường",
          required: true,
          message: {
            type: errors.shippingAddress?.street?.message ? "error" : "success",
            text: errors.shippingAddress?.street?.message
              ? errors.shippingAddress?.street?.message
              : "",
          },
        }}
      />

      <FormField
        name="shippingAddress.houseNumber"
        fieldType="input"
        fieldConfig={{
          type: "text",
        }}
        options={{
          label: "Số nhà",
          required: true,
          message: {
            type: errors.shippingAddress?.houseNumber?.message
              ? "error"
              : "success",
            text: errors.shippingAddress?.houseNumber?.message
              ? errors.shippingAddress?.houseNumber?.message
              : "",
          },
        }}
      />
    </div>
  );
}
