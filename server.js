const express = require('express');
const mysql = require('mysql');

const app = express();

// Create MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "000000",
    database: "advocacy" // Your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL connected");
});

// Define routes

// Route to fetch data from all tables
app.get("/data", (req, res) => {
    // Fetch data from User table
    db.query("SELECT * FROM User", (err, users) => {
        if (err) {
            res.status(500).json({ error: "Error fetching data from User table" });
            return;
        }
        
        // Fetch data from Feeds table
        db.query("SELECT * FROM Feeds", (err, feeds) => {
            if (err) {
                res.status(500).json({ error: "Error fetching data from Feeds table" });
                return;
            }
            
            // Fetch data from Resources table
            db.query("SELECT * FROM Resources", (err, resources) => {
                if (err) {
                    res.status(500).json({ error: "Error fetching data from Resources table" });
                    return;
                }
                
                // Fetch data from Campaign table
                db.query("SELECT * FROM Campaign", (err, campaign) => {
                    if (err) {
                        res.status(500).json({ error: "Error fetching data from Campaign table" });
                        return;
                    }
                    
                    // Fetch data from Event table
                    db.query("SELECT * FROM Event", (err, event) => {
                        if (err) {
                            res.status(500).json({ error: "Error fetching data from Event table" });
                            return;
                        }
                        
                        // Fetch data from Forum table
                        db.query("SELECT * FROM Forum", (err, forum) => {
                            if (err) {
                                res.status(500).json({ error: "Error fetching data from Forum table" });
                                return;
                            }
                            
                            res.json({ users, feeds, resources, campaign, event, forum });
                        });
                    });
                });
            });
        });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
