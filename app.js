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
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 40px 20px;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
      text-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    .subtitle {
      opacity: 0.9;
      margin-bottom: 40px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      width: 100%;
      max-width: 1000px;
    }

    .product {
      background: rgba(255,255,255,0.15);
      border-radius: 20px;
      padding: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.25);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .product:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 20px 40px rgba(0,0,0,0.35);
    }

    .emoji {
      font-size: 3rem;
      margin-bottom: 10px;
    }

    .product h3 {
      margin: 10px 0 5px;
    }

    .price {
      font-weight: 600;
      color: #ffdd57;
      margin-bottom: 15px;
    }

    button {
      background: #ffdd57;
      border: none;
      border-radius: 30px;
      padding: 10px 18px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background: #ffe680;
      transform: scale(1.05);
    }

    .toast {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: rgba(0,0,0,0.8);
      padding: 15px 20px;
      border-radius: 12px;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.4s ease;
    }

    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 2.2rem;
      }
    }
  </style>
</head>
<body>

  <h1>Kanal-Kart</h1>
  <p class="subtitle">Smart shopping, beautiful experience ✨</p>

  <div class="grid">
    <div class="product">
      <div class="emoji">📱</div>
      <h3>Phone</h3>
      <div class="price">$699</div>
      <button onclick="addToCart('Phone')">Add to Cart</button>
    </div>

    <div class="product">
      <div class="emoji">💻</div>
      <h3>Laptop</h3>
      <div class="price">$1199</div>
      <button onclick="addToCart('Laptop')">Add to Cart</button>
    </div>

    <div class="product">
      <div class="emoji">👟</div>
      <h3>Shoes</h3>
      <div class="price">$150</div>
      <button onclick="addToCart('Shoes')">Add to Cart</button>
    </div>

    <div class="product">
      <div class="emoji">⌚</div>
      <h3>Watch</h3>
      <div class="price">$299</div>
      <button onclick="addToCart('Watch')">Add to Cart</button>
    </div>

    <div class="product">
      <div class="emoji">👜</div>
      <h3>Bag</h3>
      <div class="price">$199</div>
      <button onclick="addToCart('Bag')">Add to Cart</button>
    </div>
  </div>

  <div class="toast" id="toast"></div>

  <script>
    function addToCart(product) {
      const toast = document.getElementById('toast');
      toast.textContent = product + ' added to cart 🛒';
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }
  </script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(\`🚀 Kanal-Kart running on http://localhost:\${PORT}\`);
});
