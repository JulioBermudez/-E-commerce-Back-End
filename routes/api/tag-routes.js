const router = require("express").Router();
const { Tag, Product, ProductTag, Category } = require("../../models");

// The `/api/tags` endpoint
//http://localhost:3001/api/tag
//GET is a READ
router.get("/", async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag}]
    });
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

//http://localhost:3001/api/tag/1
router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(id,{
      include:[{ model: Product }]
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagdata = await Tag.create
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
