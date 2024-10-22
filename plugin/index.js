var minify = require('html-minifier').minify
/**
 * @param {string} htmlText HTML Code in String
 * @param {import('abell').ProgramInfo} programInfo
 * @return {string} New HTML Text
 */
function beforeHTMLWrite(htmlText, programInfo) {
  /**
   * HTML Minifier
   */
  const newHTMLText = minify(htmlText, {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    minifyCSS: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true
  });
  return newHTMLText;
}


module.exports = { beforeHTMLWrite }