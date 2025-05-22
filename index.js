
  const cartButtons = document.querySelectorAll('.btn-cart');

  cartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const name = this.getAttribute('data-name');
      const price = parseFloat(this.getAttribute('data-price'));

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
  });




