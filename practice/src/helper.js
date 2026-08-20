export function checkHeding(str) {
  if (!str) return false;

  str = str.trim();

  return /^\*\*.*\*\*$/.test(str);
}

export function replaceHedingStar(str) {
  if (!str) return "";

  return str.trim().replace(/^\*\*|\*\*$/g, "");
}