const encode = (str) => btoa(encodeURIComponent(str));

const decode = (str) => {
  try {
    return decodeURIComponent(atob(str));
  } catch {
    return "";
  }
};

export const getCodeFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("code");
  return encoded ? decode(encoded) : "";
};

export const setCodeInURL = (code) => {
  const encoded = encode(code);
  const params = new URLSearchParams(window.location.search);
  params.set("code", encoded);
  const newURL = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", newURL);
};
