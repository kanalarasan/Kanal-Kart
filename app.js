const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Kanal-Kart</title>

      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6f8;
        }

        header {
          background: linear-gradient(90deg, #007bff, #00c6ff);
          color: white;
          padding: 20px;
          text-align: center;
        }

        h1 {
          margin: 0;
        }

        .container {
          padding: 30px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }

        .card h3 {
          margin: 10px 0;
        }

        .btn {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 15px;
          background: #007bff;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-size: 14px;
        }

        .btn:hover {
          background: #0056b3;
        }

        footer {
          text-align: center;
          padding: 15px;
          background: #222;
          color: white;
          margin-top: 20px;
        }
      </style>
    </head>

    <body>

      <header>
        <h1>🛒 Kanal-Kart</h1>
        <p>Your one-stop shopping destination</p>
      </header>

      <div class="container">

        <div class="card">
          <h3>📱 Phone</h3>
          <p>Latest smartphones at best price</p>
          <a href="#" class="btn">Buy Now</a>
        </div>

        <div class="card">
          <h3>💻 Laptop</h3>
          <p>High performance laptops</p>
          <a href="#" class="btn">Buy Now</a>
        </div>

        <div class="card">
          <h3>👟 Shoes (offer 50%)</h3>
          <p>Comfortable and stylish</p>
          <a href="#" class="btn">Buy Now</a>
        </div>

        <div class="card">
          <h3>⌚ Watches</h3>
          <p>Premium watches collection</p>
          <a href="#" class="btn">Buy Now</a>
        </div>

        <div class="card">
          <h3>📱 Tablets</h3>
          <p>Portable and powerful devices</p>
          <a href="#" class="btn">Buy Now</a>
        </div>

      </div>

      <footer>
        <p>© 2026 Kanal-Kart | Built with ❤️</p>
      </footer>

    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Kanal-Kart app running on port ${PORT}`);
});
