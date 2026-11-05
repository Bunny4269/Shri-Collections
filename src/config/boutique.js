/**
 * శ్రీ Collections - Centralized Boutique Configuration
 * 
 * Update boutique contact details and store preferences here.
 * If phone is empty (""), call enquiry buttons will be disabled 
 * with a friendly placeholder until a confirmed number is provided.
 */

export const BOUTIQUE_CONFIG = {
  name: "శ్రీ Collections",
  tagline: "1-Gram Gold & Sarees",
  teluguTagline: "మంగళగిరి చేనేత చీరల బోటిక్",
  
  // Boutique phone number (e.g. "+91 9492054480" or "" if unconfigured)
  phone: "+91 9492054480",
  
  // Format for display (optional)
  displayPhone: "+91 94920 54480",
  
  // Store Location Address
  address: "3496, RoadNo-6, New MIG, BHEL, Hyd 502032",
  
  // Customer guidance message for saree inquiries
  customerGuidanceMessage: "Need additional information or have a special requirement? Please call our boutique. We will be happy to assist you."
};

/**
 * Helper to check if a valid phone number is configured
 */
export function hasValidPhone() {
  return Boolean(BOUTIQUE_CONFIG.phone && BOUTIQUE_CONFIG.phone.trim().length > 5);
}

/**
 * Get sanitized tel: link
 */
export function getPhoneTelLink() {
  if (!hasValidPhone()) return null;
  return `tel:${BOUTIQUE_CONFIG.phone.replace(/\s+/g, '')}`;
}
