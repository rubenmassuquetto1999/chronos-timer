# ⏱️ Cronômetro de Precisão (Chronos)

Este é um projeto de cronômetro desenvolvido para consolidar e demonstrar habilidades fundamentais em **HTML5**, **CSS3** e **JavaScript Vanilla**. O objetivo principal foi criar uma ferramenta funcional e visualmente atraente sem o uso de bibliotecas ou frameworks externos, focando na lógica pura de programação.



## 🚀 Funcionalidades

- **Iniciar/Pausar:** Alterna entre os estados do cronômetro com mudança dinâmica de cores e textos.
- **Marcar Voltas:** Regista o tempo exato no momento do clique, exibindo uma lista ordenada (da mais recente para a mais antiga).
- **Reset:** Limpa todo o progresso, zera as variáveis de memória e retorna a interface ao estado inicial.
- **Interface Responsiva:** Design moderno com suporte a modo escuro e efeitos de "glassmorphism".
- **Prevenção de Bugs:** - O sistema impede o registo de voltas se o cronômetro estiver pausado.
  - O contador de voltas é reiniciado corretamente ao fazer o reset.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica dos elementos.
- **CSS3:** - Variáveis CSS (Custom Properties) para fácil manutenção de cores.
  - **Flexbox** para alinhamento e centralização.
  - `font-variant-numeric: tabular-nums` para evitar que os números "pulem" no display.
- **JavaScript (ES6+):**
  - Manipulação de DOM (`getElementById`, `querySelector`, `createElement`).
  - Lógica de tempo baseada no objeto `Date.now()` para garantir precisão real.
  - Escuta de eventos (`addEventListener`).

## 🧠 Aprendizados Relevantes

Durante o desenvolvimento, foram aplicados conceitos importantes como:
1. **Precisão de Tempo:** A diferença entre usar apenas um contador simples e calcular a diferença entre datas (`Date.now()`) para evitar atrasos no loop.
2. **Gestão de Estado:** Controle de variáveis booleanas (ex: `rodando`) para ditar o comportamento da interface.
3. **Manipulação Dinâmica:** Criação e inserção de elementos no HTML via JavaScript para o histórico de voltas.
