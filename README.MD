# 📄 Relato de Desenvolvimento – Tarefa Bootstrap - Módulo 13 FrontEnd

## 🎯 Objetivo da Tarefa

Criar uma página responsiva utilizando **Bootstrap**, com elementos modernos como **navbar fixa**, **carrossel**, **cards promocionais** e uma seção de **contato com formulário interativo**, aplicando os conceitos aprendidos de grid, layout responsivo e interatividade com JavaScript.

---

## ✅ Resultado Final

A página do site fictício **Mabi Viagens** foi estruturada com os seguintes elementos:

---

### 🛍️ Navegação e Cabeçalho

- **Header fixo** com `position: sticky`, `z-index: 1020` e fundo para manter visibilidade durante a rolagem.
- Estrutura responsiva com a classe `.menu-btn`:
  - **Mobile**: logo centralizada no topo; abaixo, menu e botão **Login** lado a lado e centralizados.
  - **Desktop**: layout adaptado em relação ao original. A logo continua à esquerda, enquanto o menu e o botão de login estão agrupados à direita. A mudança foi adotada por praticidade e para manter a responsividade.
- Estilização do botão de login:
  - Fonte maior
  - Padding aumentado
  - Responsivo com ajuste de tamanho em telas pequenas

---

### 🖼️ Carrossel de Imagens

- `carousel-fade` com transições suaves.
- Três slides dentro de um `carousel-inner`, com `height: 600px` e `object-fit: cover`.
- Legendas com `text-shadow` para contraste:
  - "Paisagens Brasileiras"
  - "Melhores Ofertas"
  - "Momentos Únicos"

---

### 🧱 Seção de Promoções (Cards)

- Estrutura em grid com responsividade:
  - `col-12` (mobile), `col-sm-6` (tablet), `col-lg-4` (desktop)
- Cada card inclui imagem, título, subtítulo, texto e botão de ação.
- Layout interno com `d-flex justify-content-between align-items-center` para o preço e o botão.
- Imagens padronizadas:
  ```css
  .card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  ```

---

### 📩 Seção de Contato

- Título com `text-center` no mobile e `text-lg-start` no desktop.
- Parágrafos orientativos sobre envio de informações.
- Contato com ícones:
  - E-mail com `bi bi-envelope`
  - Telefone com `bi bi-telephone`
- Itens alinhados com `d-flex`, `gap-2` e `align-items-center`.
- Estilização responsiva com alinhamento central no mobile.

---

### 📝 Formulário

- Campos obrigatórios (`required`):
  - Nome Completo (`type="text"`)
  - E-mail (`type="email"`)
  - Telefone (`type="text"`)
- Aplicadas classes `form-control`, com espaçamento entre elementos (`mb-3`).
- Botão "Enviar" com:
  - `btn-success`
  - `rounded-pill`
  - `mx-auto d-block`

---

### 💻 Funcionalidade JavaScript

- Uso do **jQuery** e **jQuery Mask Plugin**.
- Máscara aplicada ao campo telefone: `(00) 00000-0000`.
- Envio do formulário:
  - Impede o recarregamento com `event.preventDefault()`
  - Limpa os campos com `this.reset()`

---

### 🎨 Estética e Responsividade

- Uso de classes utilitárias: `d-flex`, `gap`, `flex-column`, `text-lg-start`, entre outras.
- `#form-contato` com largura máxima de `350px` e centralizado.
- Seções com `scroll-margin-top: 200px` para evitar que o header sobreponha o conteúdo ao clicar nos links de ancoragem.
- Cards e carrossel ajustados em telas pequenas com `max-width: 80%`.

---

## 📚 Aprendizados e Considerações

- Prática com sistema de grid e responsividade do Bootstrap.
- Alinhamento prático com `d-flex` e classes utilitárias.
- Adaptação visual para dispositivos diferentes.
- Mudança no layout desktop feita conscientemente, priorizando a finalização da entrega.
