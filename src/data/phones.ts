export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: 'Flagship' | 'Gaming' | 'Budget' | 'Camera' | 'Business';
  featured: boolean;
  productImages: string;
  productGallery: string[];
  productAddedON: string;
  productLastUpdated: string;
  productReleaseDate: string;
  productSoftwareInfo: string;
  productDisplay: string;
  productCamera: string;
  productRam: string;
  productBattery: string;
  productRating: Array<{
    user: string;
    rate: number | string;
  }>;
  productPros: string[];
  productCons: string[];
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
    official: string;
    unofficial: string;
    globalPrice: string;
  };
  launchInfo: {
    announced: string;
    status: string;
  };
  network: {
    Technology: string;
    band: string;
    bands: string;
    bandss: string;
    bandsss: string;
    Speed: string;
  };
  bodySpecs: {
    dimensions: string;
    weight: string;
    build: string;
    sim: string;
    others: string;
  };
  displaySpecs: {
    Type: string;
    Size: string;
    Resolution: string;
    Protection: string;
    Features: string;
  };
  platformSpecs: {
    OS: string;
    Chipset: string;
    CPU: string;
    GPU: string;
  };
  memorySpecs: {
    cardSlot: string;
    internal: string;
    ram: string;
    variants: string;
  };
  mainCamera: {
    type: string;
    cameras: string[];
    features: string[];
    video: string;
  };
  selfieCamera: {
    type: string;
    specs: string[];
    features: string[];
    video: string;
  };
  soundInfo: {
    loudspeaker: string;
    headphoneJack: string;
    audioFeatures: string[];
  };
  connectivityInfo: {
    WLAN: string;
    Bluetooth: string;
    GPS: string;
    NFC: string;
    FMRadio: string;
    USB: string;
    Infrared: string;
  };
  featuresInfo: {
    Sensors: string;
    SamsungDeX?: string;
    UWB?: string;
    CircleToSearch?: string;
  };
  batteryInfo: {
    Type: string;
    Capacity: string;
    Charging: string;
    WirelessCharging: string;
    ReverseWireless: string;
  };
  moreInfo: {
    MadeBy: string;
    Colors: string[];
    Models: string[];
  };
}

export const phones: Phone[] = [
  {
    id: '1',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1703065477962-80bb1b614fd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Flagship',
    featured: true,
    productImages: 'https://images.unsplash.com/photo-1703065477962-80bb1b614fd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    productGallery: [
      'https://images.unsplash.com/photo-1623950015175-ec6f6e28d183?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1565967249821-083c4775e5bc?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1612247905736-c283f684cd55?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    productAddedON: '22nd, Jan, 2025',
    productLastUpdated: '18th, May, 2025',
    productReleaseDate: '2025, February 03',
    productSoftwareInfo: 'Android 15, up to 7 major upgrades, One UI 7',
    productDisplay: '6.9 1440x3120 pixels',
    productCamera: '200MP 4320p',
    productRam: '12/16GB RAM Snapdragon 8 Elite',
    productBattery: '5000mAh 45W 15W',
    productRating: [
      { user: 'overall', rate: '10' },
      { user: 'Design', rate: 10 },
      { user: 'Display', rate: 10 },
      { user: 'Performance', rate: 10 },
      { user: 'Camera', rate: 10 },
      { user: 'Connectivity', rate: 10 },
      { user: 'Features', rate: 10 },
      { user: 'Battery', rate: 10 },
      { user: 'Usability', rate: 10 }
    ],
    productPros: [
      'Titanium frame, IP68 dust/water resistant.',
      '6.9-inch LTPO AMOLED 2X, 120Hz, HDR10+.',
      'Snapdragon 8 Elite with 12/16GB RAM.',
      'Triple rear camera 200MP with dual 50MP.',
      '5000mAh battery with 45W charging.'
    ],
    productCons: ['FM radio was unavailable.'],
    specifications: {
      display: {
        size: '6.9"',
        resolution: '3120 x 1440',
        type: 'Dynamic AMOLED 2X',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Elite',
        cpu: 'Octa-core',
        gpu: 'Adreno 830'
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
      os: 'Android 15',
      official: '12GB 256GB ৳2,36,999',
      unofficial: '12GB 256GB ৳1,16,000 / 12GB 512GB ৳1,28,000',
      globalPrice: '$1,300'
    },
    launchInfo: {
      announced: '2025, January 22',
      status: 'Available. Released 2025, February 03'
    },
    network: {
      Technology: 'GSM / CDMA / HSPA / EVDO / LTE / 5G',
      band: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
      bands: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
      bandss: '1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 32, 38, 39, 40, 41, 66',
      bandsss: '1, 2, 3, 5, 7, 8, 12, 20, 25, 26, 28, 38, 40, 41, 66, 75, 77, 78 SA/NSA/Sub6',
      Speed: 'HSPA, LTE (up to 7CA), 5G'
    },
    bodySpecs: {
      dimensions: '162.8 x 77.6 x 8.2 mm (6.41 x 3.06 x 0.32 in)',
      weight: '218 g (7.69 oz)',
      build: 'Glass front (Corning Gorilla Armor 2), glass back (Corning Gorilla Armor 2), titanium frame (grade 5)',
      sim: 'Nano-SIM + Nano-SIM + eSIM + eSIM (max 2 at a time)',
      others: 'IP68 dust/water resistant (up to 1.5m for 30 min) Stylus'
    },
    displaySpecs: {
      Type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)',
      Size: '6.9 inches, 116.9 cm² (~92.5% screen-to-body ratio)',
      Resolution: '1440 x 3120 pixels, 19.5:9 ratio (~505 ppi density)',
      Protection: 'Corning Gorilla Armor 2',
      Features: 'Always-on display DX anti-reflective coating'
    },
    platformSpecs: {
      OS: 'Android 15, up to 7 major Android upgrades, One UI 7',
      Chipset: 'Qualcomm Snapdragon 8 Elite (3 nm)',
      CPU: 'Octa-core (2x4.47 GHz Oryon V2 Phoenix L + 6x3.53 GHz Oryon V2 Phoenix M)',
      GPU: 'Adreno 830'
    },
    memorySpecs: {
      cardSlot: 'No',
      internal: '256/512 GB / 1TB UFS 4.0',
      ram: '12/16 GB',
      variants: '12GB 256GB / 12GB 512GB / 12GB 1TB / 16GB 1TB'
    },
    mainCamera: {
      type: 'Quad',
      cameras: [
        '200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, OIS',
        '10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, PDAF, OIS, 3x optical zoom',
        '50 MP, f/3.4, 111mm (periscope telephoto), 1/2.52", 0.7µm, PDAF, OIS, 5x optical zoom',
        '50 MP, f/1.9, 120˚ (ultrawide), 0.7µm, dual pixel PDAF, Super Steady video'
      ],
      features: ['Laser AF', 'Best Face', 'LED flash', 'auto-HDR', 'panorama'],
      video: '8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps, 10-bit HDR, HDR10+, stereo sound rec., gyro-EIS'
    },
    selfieCamera: {
      type: 'Single',
      specs: ['12 MP, f/2.2, 26mm (wide), 1/3.2", 1.12µm, dual pixel PDAF'],
      features: ['HDR', 'HDR10+'],
      video: '4K@30/60fps, 1080p@30fps'
    },
    soundInfo: {
      loudspeaker: 'Yes, with stereo speakers',
      headphoneJack: 'No',
      audioFeatures: ['32-bit/384kHz audio', 'Tuned by AKG']
    },
    connectivityInfo: {
      WLAN: 'Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct',
      Bluetooth: '5.4, A2DP, LE',
      GPS: 'GPS, GLONASS, BDS, GALILEO, QZSS',
      NFC: 'Yes',
      FMRadio: 'No',
      USB: 'USB Type-C 3.2, DisplayPort 1.2, OTG',
      Infrared: 'No'
    },
    featuresInfo: {
      Sensors: 'Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer',
      SamsungDeX: 'Samsung DeX, Samsung Wireless DeX (desktop experience support)',
      UWB: 'Ultra Wideband (UWB) support',
      CircleToSearch: 'Circle to Search'
    },
    batteryInfo: {
      Type: 'Non-removable Li-Ion',
      Capacity: '5000 mAh',
      Charging: '45W wired, PD3.0, 65% in 30 min',
      WirelessCharging: '15W wireless (Qi2 Ready)',
      ReverseWireless: '4.5W reverse wireless'
    },
    moreInfo: {
      MadeBy: 'South Korea',
      Colors: [
        'Titanium Silver Blue',
        'Titanium Black',
        'Titanium White Silver',
        'Titanium Gray',
        'Titanium Jade Green',
        'Titanium Jet Black',
        'Titanium Pink Gold'
      ],
      Models: [
        'SM-S938B',
        'SM-S938B/DS',
        'SM-S938U',
        'SM-S938U1',
        'SM-S938W',
        'SM-S938N',
        'SM-S9380',
        'SM-S938E',
        'SM-S938E/DS'
      ]
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
    productImages: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    productGallery: [
      'https://images.unsplash.com/photo-1623950015175-ec6f6e28d183?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565967249821-083c4775e5bc?q=80&w=1631&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1612247905736-c283f684cd55?q=80&w=1529&auto=format&fit=crop'
    ],
    productAddedON: '15th, Sep, 2023',
    productLastUpdated: '10th, Dec, 2023',
    productReleaseDate: '2023, September 22',
    productSoftwareInfo: 'iOS 17, upgradable to iOS 18',
    productDisplay: '6.7 2796x1290 pixels',
    productCamera: '48MP 4320p',
    productRam: '8GB RAM A17 Pro',
    productBattery: '4441mAh 27W 15W',
    productRating: [
      { user: 'overall', rate: '9' },
      { user: 'Design', rate: 9 },
      { user: 'Display', rate: 10 },
      { user: 'Performance', rate: 10 },
      { user: 'Camera', rate: 9 },
      { user: 'Connectivity', rate: 9 },
      { user: 'Features', rate: 9 },
      { user: 'Battery', rate: 8 },
      { user: 'Usability', rate: 10 }
    ],
    productPros: [
      'Premium titanium build quality',
      'Excellent camera system with ProRAW',
      'A17 Pro chip performance',
      'Long software support',
      'Premium ecosystem integration'
    ],
    productCons: ['No FM radio', 'Limited customization', 'High price'],
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
      os: 'iOS 17',
      official: '256GB $1,199',
      unofficial: '256GB $1,100 / 512GB $1,399',
      globalPrice: '$1,199'
    },
    launchInfo: {
      announced: '2023, September 12',
      status: 'Available. Released 2023, September 22'
    },
    network: {
      Technology: 'GSM / CDMA / HSPA / EVDO / LTE / 5G',
      band: 'GSM 850 / 900 / 1800 / 1900',
      bands: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
      bandss: '1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66',
      bandsss: '1, 2, 3, 5, 7, 8, 12, 20, 25, 26, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6',
      Speed: 'HSPA, LTE-A, 5G'
    },
    bodySpecs: {
      dimensions: '159.9 x 76.7 x 8.25 mm (6.30 x 3.02 x 0.32 in)',
      weight: '221 g (7.81 oz)',
      build: 'Glass front (Ceramic Shield), glass back, titanium frame',
      sim: 'Nano-SIM and eSIM or Dual eSIM',
      others: 'IP68 dust/water resistant (up to 6m for 30 min)'
    },
    displaySpecs: {
      Type: 'Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 2000 nits (outdoor)',
      Size: '6.7 inches, 110.2 cm² (~89.8% screen-to-body ratio)',
      Resolution: '2796 x 1290 pixels, 19.5:9 ratio (~460 ppi density)',
      Protection: 'Ceramic Shield glass',
      Features: 'Always-On display, ProMotion technology'
    },
    platformSpecs: {
      OS: 'iOS 17, upgradable to iOS 18',
      Chipset: 'Apple A17 Pro (3 nm)',
      CPU: 'Hexa-core (2x3.78 GHz + 4x2.11 GHz)',
      GPU: 'Apple GPU (6-core graphics)'
    },
    memorySpecs: {
      cardSlot: 'No',
      internal: '256GB / 512GB / 1TB',
      ram: '8GB',
      variants: '256GB / 512GB / 1TB'
    },
    mainCamera: {
      type: 'Triple',
      cameras: [
        '48 MP, f/1.78, 24mm (wide), 1/1.28", 1.22µm, dual pixel PDAF, sensor-shift OIS',
        '12 MP, f/2.8, 120mm (telephoto), 1/3.06", 1.0µm, PDAF, OIS, 5x optical zoom',
        '12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, dual pixel PDAF'
      ],
      features: ['LiDAR scanner', 'dual-LED dual-tone flash', 'HDR', 'panorama'],
      video: '4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10‑bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@30fps), stereo sound rec.'
    },
    selfieCamera: {
      type: 'Single',
      specs: ['12 MP, f/1.9, 23mm (wide), 1/3.6", PDAF, OIS'],
      features: ['HDR', 'Cinematic mode'],
      video: '4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS'
    },
    soundInfo: {
      loudspeaker: 'Yes, with stereo speakers',
      headphoneJack: 'No',
      audioFeatures: ['Spatial Audio playback', 'Dolby Atmos']
    },
    connectivityInfo: {
      WLAN: 'Wi-Fi 802.11 a/b/g/n/ac/6e, dual band, hotspot',
      Bluetooth: '5.3, A2DP, LE',
      GPS: 'GPS, GLONASS, GALILEO, BDS, QZSS',
      NFC: 'Yes',
      FMRadio: 'No',
      USB: 'USB Type-C 3.0, DisplayPort',
      Infrared: 'No'
    },
    featuresInfo: {
      Sensors: 'Face ID, LiDAR scanner, accelerometer, gyro, proximity, compass, barometer'
    },
    batteryInfo: {
      Type: 'Non-removable Li-Ion',
      Capacity: '4441 mAh',
      Charging: '27W wired, 50% in 30 min',
      WirelessCharging: '15W wireless (MagSafe), 7.5W wireless (Qi)',
      ReverseWireless: 'No'
    },
    moreInfo: {
      MadeBy: 'China',
      Colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
      Models: ['A3108', 'A3109', 'A3110', 'A3111']
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
    productImages: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    productGallery: [
      'https://images.unsplash.com/photo-1623950015175-ec6f6e28d183?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565967249821-083c4775e5bc?q=80&w=1631&auto=format&fit=crop'
    ],
    productAddedON: '25th, Feb, 2024',
    productLastUpdated: '15th, Mar, 2024',
    productReleaseDate: '2024, February 25',
    productSoftwareInfo: 'Android 14, MIUI 15',
    productDisplay: '6.73 3200x1440 pixels',
    productCamera: '50MP 8320p',
    productRam: '16GB RAM Snapdragon 8 Gen 3',
    productBattery: '5300mAh 90W 50W',
    productRating: [
      { user: 'overall', rate: '9' },
      { user: 'Design', rate: 9 },
      { user: 'Display', rate: 9 },
      { user: 'Performance', rate: 10 },
      { user: 'Camera', rate: 10 },
      { user: 'Connectivity', rate: 9 },
      { user: 'Features', rate: 9 },
      { user: 'Battery', rate: 9 },
      { user: 'Usability', rate: 8 }
    ],
    productPros: [
      'Outstanding camera system with Leica optics',
      'Powerful Snapdragon 8 Gen 3',
      'Fast 90W charging',
      'Premium ceramic build',
      'Excellent display quality'
    ],
    productCons: ['MIUI can be overwhelming', 'No headphone jack', 'Expensive'],
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
      os: 'Android 14',
      official: '16GB 512GB $899',
      unofficial: '12GB 256GB $799 / 16GB 512GB $899',
      globalPrice: '$899'
    },
    launchInfo: {
      announced: '2024, February 22',
      status: 'Available. Released 2024, February 25'
    },
    network: {
      Technology: 'GSM / CDMA / HSPA / EVDO / LTE / 5G',
      band: 'GSM 850 / 900 / 1800 / 1900',
      bands: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
      bandss: '1, 2, 3, 4, 5, 7, 8, 12, 17, 18, 19, 20, 26, 28, 32, 38, 39, 40, 41, 42, 66',
      bandsss: '1, 2, 3, 5, 7, 8, 20, 28, 38, 40, 41, 77, 78 SA/NSA/Sub6',
      Speed: 'HSPA, LTE-A, 5G'
    },
    bodySpecs: {
      dimensions: '161.4 x 75.3 x 9.2 mm (6.35 x 2.96 x 0.36 in)',
      weight: '224 g (7.90 oz)',
      build: 'Glass front, ceramic back, aluminum frame',
      sim: 'Dual Nano-SIM',
      others: 'IP68 dust/water resistant'
    },
    displaySpecs: {
      Type: 'LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+, 3000 nits (peak)',
      Size: '6.73 inches, 109.8 cm² (~90.2% screen-to-body ratio)',
      Resolution: '3200 x 1440 pixels, 20:9 ratio (~522 ppi density)',
      Protection: 'Corning Gorilla Glass Victus',
      Features: 'Always-on display'
    },
    platformSpecs: {
      OS: 'Android 14, MIUI 15',
      Chipset: 'Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)',
      CPU: 'Octa-core (1x3.3 GHz Cortex-X4 + 3x3.2 GHz Cortex-A720 + 2x3.0 GHz Cortex-A720 + 2x2.3 GHz Cortex-A520)',
      GPU: 'Adreno 750'
    },
    memorySpecs: {
      cardSlot: 'No',
      internal: '256GB / 512GB / 1TB UFS 4.0',
      ram: '12GB / 16GB',
      variants: '12GB 256GB / 16GB 512GB / 16GB 1TB'
    },
    mainCamera: {
      type: 'Quad',
      cameras: [
        '50 MP, f/1.6-4.0, 23mm (wide), 1", 1.6µm, PDAF, Laser AF, OIS',
        '50 MP, f/1.8, 75mm (telephoto), 1/2.51", 0.7µm, PDAF, OIS, 3.2x optical zoom',
        '50 MP, f/2.5, 120mm (periscope telephoto), 1/2.51", 0.7µm, PDAF, OIS, 5x optical zoom',
        '50 MP, f/1.8, 12mm, 122˚ (ultrawide), 1/2.51", 0.7µm, PDAF'
      ],
      features: ['Leica optics', 'LED flash', 'HDR', 'panorama'],
      video: '8K@24fps, 4K@30/60fps, 1080p@30/60/120/240/960fps, HDR10+, Dolby Vision HDR, gyro-EIS, OIS'
    },
    selfieCamera: {
      type: 'Single',
      specs: ['32 MP, f/2.0, 22mm (wide), 0.7µm'],
      features: ['HDR'],
      video: '4K@30/60fps, 1080p@30/60fps'
    },
    soundInfo: {
      loudspeaker: 'Yes, with stereo speakers',
      headphoneJack: 'No',
      audioFeatures: ['Hi-Res Audio', 'Harman Kardon tuned']
    },
    connectivityInfo: {
      WLAN: 'Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct',
      Bluetooth: '5.4, A2DP, LE, aptX HD, LHDC',
      GPS: 'GPS (L1+L5), GLONASS (G1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC',
      NFC: 'Yes',
      FMRadio: 'No',
      USB: 'USB Type-C 3.2, OTG',
      Infrared: 'Yes'
    },
    featuresInfo: {
      Sensors: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum'
    },
    batteryInfo: {
      Type: 'Non-removable Li-Po',
      Capacity: '5300 mAh',
      Charging: '90W wired, 80W wireless, 10W reverse wireless',
      WirelessCharging: '80W wireless',
      ReverseWireless: '10W reverse wireless'
    },
    moreInfo: {
      MadeBy: 'China',
      Colors: ['Black', 'White'],
      Models: ['2405CPX3DG', '2405CPX3DC']
    }
  },
  {
    id: '4',
    name: 'ROG Phone 8',
    brand: 'ASUS',
    price: 799,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Gaming',
    featured: true,
    productImages: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    productGallery: [
      'https://images.unsplash.com/photo-1623950015175-ec6f6e28d183?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565967249821-083c4775e5bc?q=80&w=1631&auto=format&fit=crop'
    ],
    productAddedON: '15th, Jan, 2024',
    productLastUpdated: '20th, Feb, 2024',
    productReleaseDate: '2024, January 15',
    productSoftwareInfo: 'Android 14, ROG UI',
    productDisplay: '6.78 2448x1080 pixels',
    productCamera: '50MP 4320p',
    productRam: '16GB RAM Snapdragon 8 Gen 3',
    productBattery: '6000mAh 65W',
    productRating: [
      { user: 'overall', rate: '9' },
      { user: 'Design', rate: 8 },
      { user: 'Display', rate: 10 },
      { user: 'Performance', rate: 10 },
      { user: 'Camera', rate: 7 },
      { user: 'Connectivity', rate: 9 },
      { user: 'Features', rate: 10 },
      { user: 'Battery', rate: 10 },
      { user: 'Usability', rate: 9 }
    ],
    productPros: [
      'Incredible gaming performance',
      '165Hz AMOLED display',
      'Massive 6000mAh battery',
      'Advanced cooling system',
      'Gaming-focused features'
    ],
    productCons: ['Gaming-centric design not for everyone', 'Camera could be better', 'Heavy weight'],
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
      os: 'Android 14',
      official: '16GB 512GB $799',
      unofficial: '12GB 256GB $699 / 16GB 512GB $799',
      globalPrice: '$799'
    },
    launchInfo: {
      announced: '2024, January 9',
      status: 'Available. Released 2024, January 15'
    },
    network: {
      Technology: 'GSM / CDMA / HSPA / EVDO / LTE / 5G',
      band: 'GSM 850 / 900 / 1800 / 1900',
      bands: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
      bandss: '1, 2, 3, 4, 5, 7, 8, 12, 17, 18, 19, 20, 26, 28, 32, 38, 39, 40, 41, 42, 66',
      bandsss: '1, 2, 3, 5, 7, 8, 20, 28, 38, 40, 41, 77, 78 SA/NSA/Sub6',
      Speed: 'HSPA, LTE-A, 5G'
    },
    bodySpecs: {
      dimensions: '173.0 x 77.0 x 8.9 mm (6.81 x 3.03 x 0.35 in)',
      weight: '225 g (7.94 oz)',
      build: 'Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass 3), aluminum frame',
      sim: 'Dual Nano-SIM',
      others: 'AirTrigger 6 ultrasonic sensors'
    },
    displaySpecs: {
      Type: 'AMOLED, 1B colors, 165Hz, HDR10+, 2500 nits (peak)',
      Size: '6.78 inches, 109.5 cm² (~88.1% screen-to-body ratio)',
      Resolution: '2448 x 1080 pixels, 20.4:9 ratio (~395 ppi density)',
      Protection: 'Corning Gorilla Glass Victus 2',
      Features: 'Always-on display, DC Dimming'
    },
    platformSpecs: {
      OS: 'Android 14, ROG UI',
      Chipset: 'Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)',
      CPU: 'Octa-core (1x3.3 GHz Cortex-X4 + 3x3.2 GHz Cortex-A720 + 2x3.0 GHz Cortex-A720 + 2x2.3 GHz Cortex-A520)',
      GPU: 'Adreno 750'
    },
    memorySpecs: {
      cardSlot: 'No',
      internal: '256GB / 512GB / 1TB UFS 4.0',
      ram: '12GB / 16GB / 24GB',
      variants: '12GB 256GB / 16GB 512GB / 24GB 1TB'
    },
    mainCamera: {
      type: 'Triple',
      cameras: [
        '50 MP, f/1.9, 24mm (wide), 1/1.56", 1.0µm, PDAF, OIS',
        '13 MP, f/2.2, 13mm, 120˚ (ultrawide), 1.12µm',
        '5 MP, f/2.4, (macro)'
      ],
      features: ['LED flash', 'HDR', 'panorama'],
      video: '8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, gyro-EIS; OIS'
    },
    selfieCamera: {
      type: 'Single',
      specs: ['32 MP, f/2.45, 29mm (wide), 1/2.8", 0.8µm'],
      features: ['HDR'],
      video: '4K@30fps, 1080p@30fps'
    },
    soundInfo: {
      loudspeaker: 'Yes, with dual speakers',
      headphoneJack: 'Yes, 3.5mm',
      audioFeatures: ['Hi-Res Audio', 'Snapdragon Sound']
    },
    connectivityInfo: {
      WLAN: 'Wi-Fi 802.11 a/b/g/n/ac/6e/7, dual band, Wi-Fi Direct',
      Bluetooth: '5.3, A2DP, LE, aptX HD',
      GPS: 'GPS (L1+L5), GLONASS (G1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC',
      NFC: 'Yes',
      FMRadio: 'No',
      USB: 'USB Type-C 3.2, OTG',
      Infrared: 'No'
    },
    featuresInfo: {
      Sensors: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, AirTrigger 6'
    },
    batteryInfo: {
      Type: 'Non-removable Li-Po',
      Capacity: '6000 mAh',
      Charging: '65W wired, PD 3.0',
      WirelessCharging: 'No',
      ReverseWireless: 'No'
    },
    moreInfo: {
      MadeBy: 'Taiwan',
      Colors: ['Phantom Black', 'Storm White'],
      Models: ['AI2401-A']
    }
  },
  {
    id: '5',
    name: 'Pixel 8a',
    brand: 'Google',
    price: 499,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Budget',
    featured: true,
    productImages: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    productGallery: [
      'https://images.unsplash.com/photo-1623950015175-ec6f6e28d183?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565967249821-083c4775e5bc?q=80&w=1631&auto=format&fit=crop'
    ],
    productAddedON: '7th, May, 2024',
    productLastUpdated: '15th, Jun, 2024',
    productReleaseDate: '2024, May 14',
    productSoftwareInfo: 'Android 14, 7 years of updates',
    productDisplay: '6.1 2400x1080 pixels',
    productCamera: '64MP 4320p',
    productRam: '8GB RAM Tensor G3',
    productBattery: '4492mAh 18W 7.5W',
    productRating: [
      { user: 'overall', rate: '8' },
      { user: 'Design', rate: 8 },
      { user: 'Display', rate: 8 },
      { user: 'Performance', rate: 8 },
      { user: 'Camera', rate: 9 },
      { user: 'Connectivity', rate: 8 },
      { user: 'Features', rate: 9 },
      { user: 'Battery', rate: 8 },
      { user: 'Usability', rate: 9 }
    ],
    productPros: [
      'Excellent value for money',
      'Great camera with AI features',
      'Clean Android experience',
      '7 years of software updates',
      'Magic Eraser and other AI features'
    ],
    productCons: ['Slower charging speed', 'Tensor G3 heating issues', 'Limited storage options'],
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
      os: 'Android 14',
      official: '8GB 128GB $499',
      unofficial: '8GB 128GB $449 / 8GB 256GB $559',
      globalPrice: '$499'
    },
    launchInfo: {
      announced: '2024, May 7',
      status: 'Available. Released 2024, May 14'
    },
    network: {
      Technology: 'GSM / CDMA / HSPA / EVDO / LTE / 5G',
      band: 'GSM 850 / 900 / 1800 / 1900',
      bands: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
      bandss: '1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 32, 38, 39, 40, 41, 42, 66',
      bandsss: '1, 2, 3, 5, 7, 8, 12, 20, 25, 26, 28, 38, 40, 41, 66, 71, 77, 78 SA/NSA/Sub6',
      Speed: 'HSPA, LTE-A, 5G'
    },
    bodySpecs: {
      dimensions: '152.1 x 72.7 x 8.9 mm (5.99 x 2.86 x 0.35 in)',
      weight: '193.5 g (6.83 oz)',
      build: 'Glass front (Gorilla Glass 3), plastic back, aluminum frame',
      sim: 'Nano-SIM and eSIM',
      others: 'IP67 dust/water resistant (up to 1m for 30 min)'
    },
    displaySpecs: {
      Type: 'OLED, HDR, 1400 nits (HBM), 2000 nits (peak)',
      Size: '6.1 inches, 90.7 cm² (~81.9% screen-to-body ratio)',
      Resolution: '2400 x 1080 pixels, 20:9 ratio (~429 ppi density)',
      Protection: 'Corning Gorilla Glass 3',
      Features: 'Always-on display'
    },
    platformSpecs: {
      OS: 'Android 14, 7 years of OS updates',
      Chipset: 'Google Tensor G3 (4 nm)',
      CPU: 'Octa-core (1x3.0 GHz Cortex-X3 + 4x2.45 GHz Cortex-A715 + 4x2.15 GHz Cortex-A510)',
      GPU: 'Mali-G715 MP7'
    },
    memorySpecs: {
      cardSlot: 'No',
      internal: '128GB / 256GB UFS 3.1',
      ram: '8GB',
      variants: '128GB / 256GB'
    },
    mainCamera: {
      type: 'Dual',
      cameras: [
        '64 MP, f/1.89, 26mm (wide), 1/1.73", 0.8µm, PDAF, OIS',
        '13 MP, f/2.2, 120˚ (ultrawide), 1.12µm'
      ],
      features: ['LED flash', 'Pixel Shift', 'Ultra-HDR', 'panorama'],
      video: '4K@30/60fps, 1080p@30/60fps; gyro-EIS, OIS'
    },
    selfieCamera: {
      type: 'Single',
      specs: ['13 MP, f/2.2, 20mm (ultrawide), 1.12µm'],
      features: ['HDR', 'panorama'],
      video: '4K@30fps, 1080p@30fps'
    },
    soundInfo: {
      loudspeaker: 'Yes, with stereo speakers',
      headphoneJack: 'No',
      audioFeatures: ['Spatial Audio']
    },
    connectivityInfo: {
      WLAN: 'Wi-Fi 802.11 a/b/g/n/ac/6e, dual band, Wi-Fi Direct',
      Bluetooth: '5.3, A2DP, LE, aptX HD',
      GPS: 'GPS, GLONASS, GALILEO, BDS, QZSS',
      NFC: 'Yes',
      FMRadio: 'No',
      USB: 'USB Type-C 3.2',
      Infrared: 'No'
    },
    featuresInfo: {
      Sensors: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer'
    },
    batteryInfo: {
      Type: 'Non-removable Li-Po',
      Capacity: '4492 mAh',
      Charging: '18W wired',
      WirelessCharging: '7.5W wireless (Qi)',
      ReverseWireless: 'No'
    },
    moreInfo: {
      MadeBy: 'Vietnam',
      Colors: ['Obsidian', 'Porcelain', 'Bay', 'Mint'],
      Models: ['GA04933-US', 'GA04934-US', 'GA04935-US', 'GA04936-US']
    }
  }
];

export const brands = ['Samsung', 'Apple', 'Xiaomi', 'ASUS', 'Google', 'OnePlus', 'Oppo', 'Vivo'];
export const categories = ['Flagship', 'Gaming', 'Budget', 'Camera', 'Business'];
