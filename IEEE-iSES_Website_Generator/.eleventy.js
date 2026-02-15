const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/templates": "templates" });
  eleventyConfig.addPassthroughCopy({ "src/get_images.php": "get_images.php" });

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src/pages",
      includes: "../_includes",
      data: "../_data",
      output: "IEEE-iSES_2026_Website"
    }
  };
};
