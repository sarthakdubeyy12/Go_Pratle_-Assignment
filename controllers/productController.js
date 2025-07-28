let products = []; // In-memory array
let currentId = 1;

// GET /products
const getAllProducts = (req, res) => {
  try {
    const { page, limit, q } = req.query;
    let result = [...products];

    // Search
    if (q) {
      result = result.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
    }

    // Pagination
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || result.length;
    const start = (pageNum - 1) * limitNum;
    const end = start + limitNum;

    res.json(result.slice(start, end));
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /products/:id
const getProductById = (req, res) => {
  try {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// POST /products
const createProduct = (req, res) => {
  try {
    const { name, price, description } = req.body;

    // Input validation
    if (!name || typeof price !== 'number') {
      return res.status(400).json({ message: 'Invalid input: name required and price must be a number' });
    }

    const newProduct = {
      id: currentId++,
      name,
      price,
      description
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// PUT /products/:id
const updateProduct = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, price, description } = req.body;

    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Input validation
    if (price !== undefined && typeof price !== 'number') {
      return res.status(400).json({ message: 'Price must be a number' });
    }

    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;
    if (description !== undefined) product.description = description;

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// DELETE /products/:id
const deleteProduct = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: 'Product not found' });

    products.splice(index, 1);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};