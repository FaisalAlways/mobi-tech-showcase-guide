
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
