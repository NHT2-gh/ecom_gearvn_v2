"use client";

import { useState, useEffect, useCallback } from "react";

// Types for Vietnamese address system
export interface Province {
  code: string;
  name: string;
  type: string;
}

export interface District {
  code: string;
  name: string;
  type: string;
  provinceCode: string;
}

export interface Ward {
  code: string;
  name: string;
  type: string;
  districtCode: string;
}

// Mock data - replace with actual API calls
const mockProvinces: Province[] = [
  { code: "01", name: "Hà Nội", type: "Thành phố Trung ương" },
  { code: "79", name: "Thành phố Hồ Chí Minh", type: "Thành phố Trung ương" },
  { code: "48", name: "Đà Nẵng", type: "Thành phố Trung ương" },
  { code: "92", name: "Cần Thơ", type: "Thành phố Trung ương" },
  { code: "31", name: "Hải Phòng", type: "Thành phố Trung ương" },
];

const mockDistricts: Record<string, District[]> = {
  "01": [
    { code: "001", name: "Ba Đình", type: "Quận", provinceCode: "01" },
    { code: "002", name: "Hoàn Kiếm", type: "Quận", provinceCode: "01" },
    { code: "003", name: "Tây Hồ", type: "Quận", provinceCode: "01" },
    { code: "004", name: "Long Biên", type: "Quận", provinceCode: "01" },
    { code: "005", name: "Cầu Giấy", type: "Quận", provinceCode: "01" },
  ],
  "79": [
    { code: "760", name: "Quận 1", type: "Quận", provinceCode: "79" },
    { code: "761", name: "Quận 2", type: "Quận", provinceCode: "79" },
    { code: "762", name: "Quận 3", type: "Quận", provinceCode: "79" },
    { code: "763", name: "Quận 4", type: "Quận", provinceCode: "79" },
    { code: "764", name: "Quận 5", type: "Quận", provinceCode: "79" },
  ],
};

const mockWards: Record<string, Ward[]> = {
  "001": [
    { code: "00001", name: "Phúc Xá", type: "Phường", districtCode: "001" },
    { code: "00002", name: "Trúc Bạch", type: "Phường", districtCode: "001" },
    { code: "00003", name: "Vĩnh Phúc", type: "Phường", districtCode: "001" },
  ],
  "760": [
    { code: "26734", name: "Tân Định", type: "Phường", districtCode: "760" },
    { code: "26735", name: "Đa Kao", type: "Phường", districtCode: "760" },
    { code: "26736", name: "Bến Nghé", type: "Phường", districtCode: "760" },
  ],
};

export const useAddress = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const [loading, setLoading] = useState({
    provinces: false,
    districts: false,
    wards: false,
  });

  const [error, setError] = useState<string | null>(null);

  // Load provinces on mount
  useEffect(() => {
    loadProvinces();
  }, []);

  const loadProvinces = useCallback(async () => {
    try {
      setLoading((prev) => ({ ...prev, provinces: true }));
      setError(null);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // TODO: Replace with actual API call
      // const response = await fetch('/api/provinces');
      // const data = await response.json();

      setProvinces(mockProvinces);
    } catch (err) {
      setError("Không thể tải danh sách tỉnh/thành phố");
      console.error("Error loading provinces:", err);
    } finally {
      setLoading((prev) => ({ ...prev, provinces: false }));
    }
  }, []);

  const loadDistricts = useCallback(async (provinceCode: string) => {
    if (!provinceCode) {
      setDistricts([]);
      setWards([]);
      return;
    }

    try {
      setLoading((prev) => ({ ...prev, districts: true }));
      setError(null);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));

      // TODO: Replace with actual API call
      // const response = await fetch(`/api/districts?provinceCode=${provinceCode}`);
      // const data = await response.json();

      const districtData = mockDistricts[provinceCode] || [];
      setDistricts(districtData);
      setWards([]); // Reset wards when province changes
    } catch (err) {
      setError("Không thể tải danh sách quận/huyện");
      console.error("Error loading districts:", err);
    } finally {
      setLoading((prev) => ({ ...prev, districts: false }));
    }
  }, []);

  const loadWards = useCallback(async (districtCode: string) => {
    if (!districtCode) {
      setWards([]);
      return;
    }

    try {
      setLoading((prev) => ({ ...prev, wards: true }));
      setError(null);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));

      // TODO: Replace with actual API call
      // const response = await fetch(`/api/wards?districtCode=${districtCode}`);
      // const data = await response.json();

      const wardData = mockWards[districtCode] || [];
      setWards(wardData);
    } catch (err) {
      setError("Không thể tải danh sách phường/xã");
      console.error("Error loading wards:", err);
    } finally {
      setLoading((prev) => ({ ...prev, wards: false }));
    }
  }, []);

  // Helper functions
  const getProvinceByCode = useCallback(
    (code: string): Province | undefined => {
      return provinces.find((p) => p.code === code);
    },
    [provinces],
  );

  const getDistrictByCode = useCallback(
    (code: string): District | undefined => {
      return districts.find((d) => d.code === code);
    },
    [districts],
  );

  const getWardByCode = useCallback(
    (code: string): Ward | undefined => {
      return wards.find((w) => w.code === code);
    },
    [wards],
  );

  const formatFullAddress = useCallback(
    (address: {
      province?: string;
      district?: string;
      ward?: string;
      street?: string;
      houseNumber?: string;
    }): string => {
      const parts: string[] = [];

      if (address.houseNumber) parts.push(address.houseNumber);
      if (address.street) parts.push(address.street);

      const ward = address.ward ? getWardByCode(address.ward) : null;
      if (ward) parts.push(`${ward.type} ${ward.name}`);

      const district = address.district
        ? getDistrictByCode(address.district)
        : null;
      if (district) parts.push(`${district.type} ${district.name}`);

      const province = address.province
        ? getProvinceByCode(address.province)
        : null;
      if (province) parts.push(`${province.type} ${province.name}`);

      return parts.join(", ");
    },
    [getProvinceByCode, getDistrictByCode, getWardByCode],
  );

  const validateAddress = useCallback(
    (address: {
      province: string;
      district: string;
      ward: string;
      street: string;
      houseNumber: string;
    }): { isValid: boolean; errors: string[] } => {
      const errors: string[] = [];

      if (!address.province) errors.push("Vui lòng chọn tỉnh/thành phố");
      if (!address.district) errors.push("Vui lòng chọn quận/huyện");
      if (!address.ward) errors.push("Vui lòng chọn phường/xã");
      if (!address.street.trim()) errors.push("Vui lòng nhập tên đường");
      if (!address.houseNumber.trim()) errors.push("Vui lòng nhập số nhà");

      // Validate relationships
      if (address.province && address.district) {
        const district = getDistrictByCode(address.district);
        if (!district || district.provinceCode !== address.province) {
          errors.push("Quận/huyện không thuộc tỉnh/thành phố đã chọn");
        }
      }

      if (address.district && address.ward) {
        const ward = getWardByCode(address.ward);
        if (!ward || ward.districtCode !== address.district) {
          errors.push("Phường/xã không thuộc quận/huyện đã chọn");
        }
      }

      return {
        isValid: errors.length === 0,
        errors,
      };
    },
    [getDistrictByCode, getWardByCode],
  );

  // Reset functions
  const resetDistricts = useCallback(() => {
    setDistricts([]);
    setWards([]);
  }, []);

  const resetWards = useCallback(() => {
    setWards([]);
  }, []);

  const resetAll = useCallback(() => {
    setProvinces([]);
    setDistricts([]);
    setWards([]);
    setError(null);
  }, []);

  return {
    // Data
    provinces,
    districts,
    wards,

    // Loading states
    loading,
    error,

    // Actions
    loadProvinces,
    loadDistricts,
    loadWards,

    // Helpers
    getProvinceByCode,
    getDistrictByCode,
    getWardByCode,
    formatFullAddress,
    validateAddress,

    // Reset functions
    resetDistricts,
    resetWards,
    resetAll,
  };
};
