export interface CustomerOrganization {
  id: string;
  name: string;
  emailDomains: string[];
  location: {
    zipCode: string;
    region: string;
    country: string;
  };
  products: string[];
  websiteUrl: string;
  trackingConfidence: number;
}

export interface SessionAttribution {
  sessionId: string;
  userId: string;
  emailAddress: string;
  ipAddress: string;
  customerOrganizationId?: string;
  attributionMethod: 'direct' | 'geolocation' | 'web-scraping';
  confidenceScore: number;
  engagementMetrics: {
    quizCompleted: boolean;
    videoViews: number;
    resourcesDownloaded: number;
  };
}

export interface AIAttributionService {
  processCustomerUpload(file: File): Promise<CustomerOrganization[]>;
  attributeSession(session: SessionData): Promise<SessionAttribution>;
  enhanceAttribution(partialAttribution: Partial<SessionAttribution>): Promise<SessionAttribution>;
}