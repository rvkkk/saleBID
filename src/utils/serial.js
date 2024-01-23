export const turnLettersToNumbers = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (isNaN(char)) {
        const charCode = char.toLowerCase().charCodeAt(0);
        const position = charCode - 96;
        result += position;
      } else {
        result += char;
      }
    }
    return result;
}
