import { prisma } from "../config/db.js";

// GET /api/categories/:id
export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.categories.findUnique({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/categories
export const createCategory = async (req, res) => {
  try {
    const { name, type } = req.body;

    const newCategory = await prisma.categories.create({
      data: { userId: req.user.id, name: req.user.fullName, type },
    });

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/categories/:id
export const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    const updatedCategory = await prisma.categories.update({
      where: { id },
      data: { type },
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/categories/:id
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.categories.delete({
      where: { id },
    });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(500).json({ message: error.message });
  }
};
