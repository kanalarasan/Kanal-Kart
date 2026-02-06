const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kanal-Kart</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      <style>
        body {
          margin: 0;
          padding: 40px 20px;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }
        h1 {
          font-weight: 600;
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
        }
        .card {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          width: 320px;
          max-width: 90vw;
          padding: 20px 30px;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          margin-bottom: 15px;
          transition: transform 0.3s ease, color 0.3s ease;
          cursor: default;
        }
        li:last-child {
          margin-bottom: 0;
        }
        li:hover {
          color: #ffdd57;
          transform: translateX(10px);
        }
        .icon {
          background: #ffdd57;
          color: #3b2f0b;
          font-weight: 700;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        @media (max-width: 400px) {
          h1 {
            font-size: 2rem;
          }
          .card {
            width: 90vw;
            padding: 15px 20px;
          }
          li {
            font-size: 1rem;
          }
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Kanal-Kart</h1>
      <div class="card">
        <ul>
          <li><span class="icon">1</span>Product 1: Phone</li>
          <li><span class="icon">2</span>Product 2: Laptop</li>
          <li><span class="icon">3</span>Product 3: Shoes</li>
          <li><span class="icon">4</span>Product 4: Watches</li>
          <li><span class="icon">5</span>Product 5: Bags</li>
        </ul>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
