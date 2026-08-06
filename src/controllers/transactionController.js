import { prisma } from "../config/db.js";

// GET /api/transactions
export const getAllTransaction = async (req, res) => {
  try {
    const transactions = await prisma.transactions.findMany();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/transactions/:id
export const getTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await prisma.transactions.findUnique({
      where: { id },
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/transactions
export const createTransaction = async (req, res) => {
  try {
    const { userId, categoryId, amount, type, description, date } = req.body;

    const newTransaction = await prisma.transactions.create({
      data: { userId, categoryId, amount, type, description, date },
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/transactions/:id
export const editTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryId, amount, type, description, date } = req.body;

    const updatedTransaction = await prisma.transactions.update({
      where: { id },
      data: { categoryId, amount, type, description, date },
    });

    res.status(200).json(updatedTransaction);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/transactions/:id
export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.transactions.delete({
      where: { id },
    });

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(500).json({ message: error.message });
  }
};