export function detectIE(): boolean {
  const ua = window.navigator.userAgent;

  if (ua.includes('MSIE')) {
    return true;
  }
  if (ua.includes('Trident')) {
    return true;
  }

  return false;
}

export function detectSafari(): boolean {
  const ua = window.navigator.userAgent;

  if (ua.includes('Safari') && !ua.includes('Chrome')) {
    return true;
  }

  return false;
}

export function detectLegacyEdge(): boolean {
  const ua = window.navigator.userAgent;

  if (ua.includes('Edge')) {
    return true;
  }

  return false;
}