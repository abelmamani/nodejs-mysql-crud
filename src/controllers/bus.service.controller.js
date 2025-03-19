import pool from '../config/db.js';

export const getBusServices = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM bus_services');
        return res.status(200).json(rows);
    }catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getBusServiceById = async (req, res) => {
    const {id} = req.params

    try {
        const [rows] = await pool.query('SELECT * FROM bus_services WHERE id = ?', [id]);
        
        if(rows.length === 0) { return res.status(404).json({message: 'Bus service not found'}); }

        return res.status(200).json(rows[0]);
    }catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createBusService = async (req, res) => {
    const {name, description, start_date, end_date} = req.body;
    try {
        const [result] = await pool.query('INSERT INTO bus_services (name, description, start_date, end_date) VALUES (?, ?, ?, ?);' ,[name, description, start_date, end_date]);
        
        if(result.affectedRows === 0) { return res.status(400).json({message: 'Failed to create bus service'}); }

        return res.status(201).json({id: result.insertId, name, description, start_date, end_date}); 
    }catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateBusService = async (req, res) => {
    const {id} = req.params;
    const {name, description, start_date, end_date} = req.body;

    try {
        const [result] = await pool.query('UPDATE bus_services SET name = IFNULL(?, name), description = IFNULL(?, description), start_date = IFNULL(?, start_date), end_date = IFNULL(?, end_date) WHERE id = ?;', [name, description, start_date, end_date, id]);
        if(result.affectedRows === 0) { return res.status(404).json({message: 'Bus service not found'}); }
        
        const [busService] = await pool.query('SELECT * FROM bus_services WHERE id = ?', [id]);

        return res.status(200).json(busService[0]);
    }catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteBusService = async (req, res) => {
    const {id} = req.params;

    try {
        const [result] = await pool.query('DELETE FROM bus_services WHERE id = ?', [id]);
        
        if(result.affectedRows === 0) { return res.status(404).json({message: 'Bus service not found'}); }

        return res.status(200).json({message: 'Bus service deleted successfully'});
    }catch (error) {
        return res.status(500).json({message: error.message});
    }
}