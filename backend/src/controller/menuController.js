const menuService = require('../service/menuService.js');

const getAllMenus = async (req, res) => {
    try {
        const menus = await menuService.getMenus();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        const menu = await menuService.getMenuById(id);
        res.json(menu);
    } catch (err) {
        res.status(err.message === 'Menu not found' ? 404 : 500).json({ error: err.message });
    }   
};

const createMenu = async (req, res) => {
    try {
        const menu = await menuService.createMenu(req.body);
        res.status(201).json(menu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateMenu = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedMenu = await menuService.updateMenu(id, req.body);
        res.json(updatedMenu);
    } catch (err) {
        res.status(err.message === 'Menu not found' ? 404 : 500).json({ error: err.message });
    }
};

const deleteMenu = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await menuService.deleteMenu(id);
        res.json(result);
    } catch (err) {
        res.status(err.message === 'Menu not found' ? 404 : 500).json({ error: err.message });
    }
};

module.exports = {
    getAllMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
};