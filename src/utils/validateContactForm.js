const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/

export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  business: { min: 2, max: 100 },
  overview: { min: 10, max: 2000 },
}

export const WEBSITE_TYPE_OPTIONS = [
  'corporate',
  'ecommerce',
  'custom',
  'saas',
  'other',
]

function hasControlChars(value) {
  return CONTROL_CHARS.test(value)
}

export function validateContactForm(data) {
  const errors = {}
  const name = data.name?.trim() ?? ''
  const business = data.business?.trim() ?? ''
  const overview = data.overview?.trim() ?? ''
  const websiteType = data.websiteType ?? ''

  if (!name) {
    errors.name = 'required'
  } else if (name.length < CONTACT_LIMITS.name.min) {
    errors.name = 'tooShort'
  } else if (name.length > CONTACT_LIMITS.name.max) {
    errors.name = 'tooLong'
  } else if (hasControlChars(name)) {
    errors.name = 'invalid'
  }

  if (!business) {
    errors.business = 'required'
  } else if (business.length < CONTACT_LIMITS.business.min) {
    errors.business = 'tooShort'
  } else if (business.length > CONTACT_LIMITS.business.max) {
    errors.business = 'tooLong'
  } else if (hasControlChars(business)) {
    errors.business = 'invalid'
  }

  if (!websiteType) {
    errors.websiteType = 'required'
  } else if (!WEBSITE_TYPE_OPTIONS.includes(websiteType)) {
    errors.websiteType = 'invalid'
  }

  if (!overview) {
    errors.overview = 'required'
  } else if (overview.length < CONTACT_LIMITS.overview.min) {
    errors.overview = 'tooShort'
  } else if (overview.length > CONTACT_LIMITS.overview.max) {
    errors.overview = 'tooLong'
  } else if (hasControlChars(overview)) {
    errors.overview = 'invalid'
  }

  return errors
}

export function sanitizeContactForm(data) {
  return {
    name: data.name.trim(),
    business: data.business.trim(),
    websiteType: data.websiteType,
    overview: data.overview.trim(),
  }
}
