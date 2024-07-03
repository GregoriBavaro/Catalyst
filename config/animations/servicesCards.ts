"use client";

import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/use-WindowSize";

interface ServiceCardConfig {
  animationDelayHome: number;
  animationDelayContact: number;
}

interface ServiceCards {
  webDevDesign: ServiceCardConfig;
  performanceOptimization: ServiceCardConfig;
  seo: ServiceCardConfig;
  marketing: ServiceCardConfig;
  socialMedia: ServiceCardConfig;
  brandIdentity: ServiceCardConfig;
  socialMediaAutomation: ServiceCardConfig;
}

export const serviceCards = (): ServiceCards => {
  const size = useWindowSize();

  const [serviceCardsConfig, setServiceCardsConfig] = useState<ServiceCards>({
    webDevDesign: {
      animationDelayHome: 0.1,
      animationDelayContact: 0.05,
    },
    performanceOptimization: {
      animationDelayHome: 0.2,
      animationDelayContact: 0.1,
    },
    seo: {
      animationDelayHome: 0.3,
      animationDelayContact: 0.15,
    },
    marketing: {
      animationDelayHome: 0.4,
      animationDelayContact: 0.20,
    },
    socialMedia: {
      animationDelayHome: 0.5,
      animationDelayContact: 0.25,
    },
    brandIdentity: {
      animationDelayHome: 0.6,
      animationDelayContact: 0.30,
    },
    socialMediaAutomation: {
      animationDelayHome: 0.1,
      animationDelayContact: 0.35,
    },
  });

  useEffect(() => {
    if ((size.width ?? 920) < 920 && (size.width ?? 768) > 768) {
      setServiceCardsConfig((prevConfig) => ({
        ...prevConfig,
        webDevDesign: {
          ...prevConfig.webDevDesign,
          animationDelayHome: 0.1,
        },
        performanceOptimization: {
          ...prevConfig.performanceOptimization,
          animationDelayHome: 0.2,
        },
        seo: {
          ...prevConfig.seo,
          animationDelayHome: 0.3,
        },
        marketing: {
          ...prevConfig.marketing,
          animationDelayHome: 0.4,
        },
        socialMedia: {
          ...prevConfig.socialMedia,
          animationDelayHome: 0.1,
        },
        brandIdentity: {
          ...prevConfig.brandIdentity,
          animationDelayHome: 0.2,
        },
        socialMediaAutomation: {
          ...prevConfig.socialMediaAutomation,
          animationDelayHome: 0.3,
        },
      }));
    } else if ((size.width ?? 768) < 768) {
      setServiceCardsConfig((prevConfig) => ({
        ...prevConfig,
        webDevDesign: {
          ...prevConfig.webDevDesign,
          animationDelayHome: 0.1,
        },
        performanceOptimization: {
          ...prevConfig.performanceOptimization,
          animationDelayHome: 0.2,
        },
        seo: {
          ...prevConfig.seo,
          animationDelayHome: 0.1,
        },
        marketing: {
          ...prevConfig.marketing,
          animationDelayHome: 0.2,
        },
        socialMedia: {
          ...prevConfig.socialMedia,
          animationDelayHome: 0.3,
        },
        brandIdentity: {
          ...prevConfig.brandIdentity,
          animationDelayHome: 0.4,
        },
        socialMediaAutomation: {
          ...prevConfig.socialMediaAutomation,
          animationDelayHome: 0.5,
        },
      }));
    }
  }, [size]);

  return {
    webDevDesign: {
      animationDelayHome: serviceCardsConfig.webDevDesign.animationDelayHome,
      animationDelayContact: serviceCardsConfig.webDevDesign.animationDelayContact,
    },
    performanceOptimization: {
      animationDelayHome: serviceCardsConfig.performanceOptimization.animationDelayHome,
      animationDelayContact: serviceCardsConfig.performanceOptimization.animationDelayContact,
    },
    seo: {
      animationDelayHome: serviceCardsConfig.seo.animationDelayHome,
      animationDelayContact: serviceCardsConfig.seo.animationDelayContact,
    },
    marketing: {
      animationDelayHome: serviceCardsConfig.marketing.animationDelayHome,
      animationDelayContact: serviceCardsConfig.marketing.animationDelayContact,
    },
    socialMedia: {
      animationDelayHome: serviceCardsConfig.socialMedia.animationDelayHome,
      animationDelayContact: serviceCardsConfig.socialMedia.animationDelayContact,
    },
    brandIdentity: {
      animationDelayHome: serviceCardsConfig.brandIdentity.animationDelayHome,
      animationDelayContact: serviceCardsConfig.brandIdentity.animationDelayContact,
    },
    socialMediaAutomation: {
      animationDelayHome: serviceCardsConfig.socialMediaAutomation.animationDelayHome,
      animationDelayContact: serviceCardsConfig.socialMediaAutomation.animationDelayContact,
    },
  };
};
