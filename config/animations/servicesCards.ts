"use client";

import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/use-WindowSize";

interface ServiceCardConfig {
  animationDelay: number;
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
      animationDelay: 0.1,
      animationDelayContact: 0.1,
    },
    performanceOptimization: {
      animationDelay: 0.2,
      animationDelayContact: 0.2,
    },
    seo: {
      animationDelay: 0.3,
      animationDelayContact: 0.3,
    },
    marketing: {
      animationDelay: 0.4,
      animationDelayContact: 0.4,
    },
    socialMedia: {
      animationDelay: 0.5,
      animationDelayContact: 0.5,
    },
    brandIdentity: {
      animationDelay: 0.6,
      animationDelayContact: 0.6,
    },
    socialMediaAutomation: {
      animationDelay: 0.1,
      animationDelayContact: 0.7,
    },
  });

  useEffect(() => {
    if ((size.width ?? 920) < 920 && (size.width ?? 768) > 768) {
      setServiceCardsConfig((prevConfig) => ({
        ...prevConfig,
        webDevDesign: {
          ...prevConfig.webDevDesign,
          animationDelay: 0.1,
        },
        performanceOptimization: {
          ...prevConfig.performanceOptimization,
          animationDelay: 0.2,
        },
        seo: {
          ...prevConfig.seo,
          animationDelay: 0.3,
        },
        marketing: {
          ...prevConfig.marketing,
          animationDelay: 0.4,
        },
        socialMedia: {
          ...prevConfig.socialMedia,
          animationDelay: 0.1,
        },
        brandIdentity: {
          ...prevConfig.brandIdentity,
          animationDelay: 0.2,
        },
        socialMediaAutomation: {
          ...prevConfig.socialMediaAutomation,
          animationDelay: 0.3,
        },
      }));
    } else if ((size.width ?? 768) < 768) {
      setServiceCardsConfig((prevConfig) => ({
        ...prevConfig,
        webDevDesign: {
          ...prevConfig.webDevDesign,
          animationDelay: 0.1,
        },
        performanceOptimization: {
          ...prevConfig.performanceOptimization,
          animationDelay: 0.2,
        },
        seo: {
          ...prevConfig.seo,
          animationDelay: 0.1,
        },
        marketing: {
          ...prevConfig.marketing,
          animationDelay: 0.2,
        },
        socialMedia: {
          ...prevConfig.socialMedia,
          animationDelay: 0.3,
        },
        brandIdentity: {
          ...prevConfig.brandIdentity,
          animationDelay: 0.4,
        },
        socialMediaAutomation: {
          ...prevConfig.socialMediaAutomation,
          animationDelay: 0.5,
        },
      }));
    }
  }, [size]);

  return {
    webDevDesign: {
      animationDelay: serviceCardsConfig.webDevDesign.animationDelay,
      animationDelayContact: serviceCardsConfig.webDevDesign.animationDelayContact,
    },
    performanceOptimization: {
      animationDelay: serviceCardsConfig.performanceOptimization.animationDelay,
      animationDelayContact: serviceCardsConfig.performanceOptimization.animationDelayContact,
    },
    seo: {
      animationDelay: serviceCardsConfig.seo.animationDelay,
      animationDelayContact: serviceCardsConfig.seo.animationDelayContact,
    },
    marketing: {
      animationDelay: serviceCardsConfig.marketing.animationDelay,
      animationDelayContact: serviceCardsConfig.marketing.animationDelayContact,
    },
    socialMedia: {
      animationDelay: serviceCardsConfig.socialMedia.animationDelay,
      animationDelayContact: serviceCardsConfig.socialMedia.animationDelayContact,
    },
    brandIdentity: {
      animationDelay: serviceCardsConfig.brandIdentity.animationDelay,
      animationDelayContact: serviceCardsConfig.brandIdentity.animationDelayContact,
    },
    socialMediaAutomation: {
      animationDelay: serviceCardsConfig.socialMediaAutomation.animationDelay,
      animationDelayContact: serviceCardsConfig.socialMediaAutomation.animationDelayContact,
    },
  };
};
