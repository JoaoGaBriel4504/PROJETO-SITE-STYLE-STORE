// Gerar 30 produtos dinamicamente
const produtosContainer = document.getElementById("produtos-container");

for (let i = 1; i <= 30; i++) {
  const card = document.createElement("div");
  card.classList.add("col-md-4");
  card.innerHTML = `
    <div class="card h-100">
      <img src="./img/p${i}.jpg" class="card-img-top" alt="Produto ${i}" />
      <div class="card-body">
        <h5 class="card-title">Produto ${i}</h5>
        <p class="card-text">Descrição do Produto ${i}.</p>
        <p class="text-success fw-bold">R$ ${(i * 10).toFixed(2)}</p>
        <button class="btn btn-primary w-100">Adicionar ao Carrinho</button>
      </div>
    </div>
  `;
  produtosContainer.appendChild(card);
}
