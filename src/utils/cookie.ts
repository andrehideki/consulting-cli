const setCookie = (key: string, value: string, expiration: Date) => {
  document.cookie = `${key}=${value}; expiration=${expiration.toUTCString()}`;
}

const getCookie = (key: string): String => {
  return document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)')?.pop() || '';
}

const removeCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 1 Jan 2000 00:00:00 UTC`;
}

export { getCookie, setCookie, removeCookie }