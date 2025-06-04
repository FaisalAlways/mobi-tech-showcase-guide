
export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: 'Flagship' | 'Gaming' | 'Budget' | 'Camera' | 'Business';
  featured: boolean;
  specifications: {
    display: {
      size: string;
      resolution: string;
      type: string;
      refreshRate: string;
    };
    processor: {
      chipset: string;
      cpu: string;
      gpu: string;
    };
    memory: {
      ram: string;
      storage: string;
      expandable: boolean;
    };
    camera: {
      rear: string;
      front: string;
      features: string[];
    };
    battery: {
      capacity: string;
      charging: string;
      wireless: boolean;
    };
    connectivity: {
      network: string;
      wifi: string;
      bluetooth: string;
      nfc: boolean;
    };
    design: {
      dimensions: string;
      weight: string;
      colors: string[];
      material: string;
    };
    os: string;
  };
}

export const phones: Phone[] = [
  {
    id: '1',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Flagship',
    featured: true,
    specifications: {
      display: {
        size: '6.8"',
        resolution: '3120 x 1440',
        type: 'Dynamic AMOLED 2X',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 3',
        cpu: 'Octa-core',
        gpu: 'Adreno 750'
      },
      memory: {
        ram: '12GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '200MP + 50MP + 10MP + 12MP',
        front: '12MP',
        features: ['100x Space Zoom', 'Night Mode', '8K Video']
      },
      battery: {
        capacity: '5000mAh',
        charging: '45W Fast Charging',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 7',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '162.3 x 79.0 x 8.6 mm',
        weight: '232g',
        colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet'],
        material: 'Titanium Frame'
      },
      os: 'Android 14'
    }
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Flagship',
    featured: true,
    specifications: {
      display: {
        size: '6.7"',
        resolution: '2796 x 1290',
        type: 'Super Retina XDR OLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'A17 Pro',
        cpu: 'Hexa-core',
        gpu: '6-core GPU'
      },
      memory: {
        ram: '8GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '48MP + 12MP + 12MP',
        front: '12MP',
        features: ['ProRAW', 'ProRes', 'Cinematic Mode']
      },
      battery: {
        capacity: '4441mAh',
        charging: '27W Fast Charging',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '159.9 x 76.7 x 8.25 mm',
        weight: '221g',
        colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
        material: 'Titanium'
      },
      os: 'iOS 17'
    }
  },
  {
    id: '3',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 899,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Camera',
    featured: true,
    specifications: {
      display: {
        size: '6.73"',
        resolution: '3200 x 1440',
        type: 'LTPO AMOLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 3',
        cpu: 'Octa-core',
        gpu: 'Adreno 750'
      },
      memory: {
        ram: '16GB',
        storage: '512GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 50MP + 50MP + 50MP',
        front: '32MP',
        features: ['Leica Optics', '8K Video', 'Master Photography']
      },
      battery: {
        capacity: '5300mAh',
        charging: '90W Fast Charging',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 7',
        bluetooth: '5.4',
        nfc: true
      },
      design: {
        dimensions: '161.4 x 75.3 x 9.2 mm',
        weight: '224g',
        colors: ['Black', 'White'],
        material: 'Ceramic Back'
      },
      os: 'Android 14'
    }
  },
  {
    id: '4',
    name: 'ROG Phone 8',
    brand: 'ASUS',
    price: 799,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Gaming',
    featured: false,
    specifications: {
      display: {
        size: '6.78"',
        resolution: '2448 x 1080',
        type: 'AMOLED',
        refreshRate: '165Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 3',
        cpu: 'Octa-core',
        gpu: 'Adreno 750'
      },
      memory: {
        ram: '16GB',
        storage: '512GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 13MP + 5MP',
        front: '32MP',
        features: ['Gaming Recording', 'Pro Video']
      },
      battery: {
        capacity: '6000mAh',
        charging: '65W Fast Charging',
        wireless: false
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 7',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '173.0 x 77.0 x 8.9 mm',
        weight: '225g',
        colors: ['Storm White', 'Phantom Black'],
        material: 'Glass Back'
      },
      os: 'Android 14'
    }
  },
  {
    id: '5',
    name: 'Pixel 8a',
    brand: 'Google',
    price: 499,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Budget',
    featured: false,
    specifications: {
      display: {
        size: '6.1"',
        resolution: '2400 x 1080',
        type: 'OLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Google Tensor G3',
        cpu: 'Octa-core',
        gpu: 'Mali-G715'
      },
      memory: {
        ram: '8GB',
        storage: '128GB',
        expandable: false
      },
      camera: {
        rear: '64MP + 13MP',
        front: '13MP',
        features: ['Magic Eraser', 'Night Sight', 'Portrait Mode']
      },
      battery: {
        capacity: '4492mAh',
        charging: '18W Fast Charging',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '152.1 x 72.7 x 8.9 mm',
        weight: '193.5g',
        colors: ['Obsidian', 'Porcelain', 'Bay', 'Mint'],
        material: 'Plastic Back'
      },
      os: 'Android 14'
    }
  }
];

export const brands = ['Samsung', 'Apple', 'Xiaomi', 'ASUS', 'Google', 'OnePlus', 'Oppo', 'Vivo'];
export const categories = ['Flagship', 'Gaming', 'Budget', 'Camera', 'Business'];
