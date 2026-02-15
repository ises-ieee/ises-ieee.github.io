const site = require("./src/_data/site.json");

module.exports = function (eleventyConfig) {
  // ✅ Copy static folders into the OUTPUT folder
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/templates": "templates" });
  eleventyConfig.addPassthroughCopy({ "src/get_images.php": "get_images.php" });

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes",
      data: "../_data",

      // ✅ If generator is inside repo root and you want output folder beside it:
      // repo-root/
      //   IEEE-iSES_Website_Generator/
      //   IEEE_iSES_2026_Website/   <-- generated here
      output: site.outputDir || "../IEEE_iSES_2026_Website"
    },

    // ✅ GitHub Pages subfolder prefix
    pathPrefix: site.pathPrefix || "/IEEE_iSES_2026_Website/"
  };
};
