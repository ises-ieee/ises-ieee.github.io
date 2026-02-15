const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/templates": "templates" });
  eleventyConfig.addPassthroughCopy({ "src/get_images.php": "get_images.php" });

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes",
      data: "../_data",
      output: path.resolve(__dirname, "../IEEE-iSES_2026_Website")
    }
  };
};
