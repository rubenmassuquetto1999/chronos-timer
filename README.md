# ⏱️ Cronômetro de Precisão

Uma aplicação web de cronômetro de alta precisão desenvolvida com foco em performance, design moderno em modo escuro (*dark mode*) e lógica robusta em JavaScript Vanilla.

---

## 🚀 Funcionalidades

- **⏱️ Contagem de Alta Precisão**: Medição precisa de horas, minutos, segundos e centésimos de segundo (milissegundos) baseada no cálculo de diferença temporal via `Date.now()`.
- **⏯️ Controle de Estados Dinâmico**:
  - **Iniciar**: Dispara o cronômetro com feedback visual de iluminação verde vibrante.
  - **Pausar**: Congela o tempo mantendo o registro exato e altera o estilo do botão para âmbar de atenção.
  - **Retomar**: Continua a contagem a partir do tempo pausado sem desvios temporais.
  - **Resetar**: Limpa o tempo, esvazia o histórico de voltas e redefine todos os botões e contadores para o estado inicial.
- **🏁 Marcação de Voltas (*Laps*)**: Registra o tempo exato com apenas um clique, adicionando a nova volta no topo da lista (ordem cronológica decrescente).
- **📋 Painel de Histórico Retrátil**: Exibição automática do histórico quando a primeira volta é registrada, com barra de rolagem estilizada.
- **🛡️ Tratamento de Estados e Prevenção de Erros**:
  - Impede o registro de voltas com o cronômetro parado ou zerado.
  - Reset sincronizado de contadores internos e elementos de interface.

---

## 🎨 Design & Experiência do Usuário (UI/UX)

- **Dark Theme Sofisticado**: Paleta de cores em tons escuros profundos (`#0e0e0e`) com elementos semitransparentes em estilo *glassmorphism*.
- **Números Tabulares (`tabular-nums`)**: Evita trepidação e deslocamento de layout na transição rápida dos algarismos no display.
- **Tipografia Fluida e Responsiva**: Ajuste dinâmico de tamanho com CSS `clamp()`, garantindo legibilidade ideal tanto em smartphones quanto em telas ultra-wide.
- **Microinterações & Animações**: Transições suaves ao passar o mouse (*hover*), feedback luminoso com `box-shadow` e estados de clique com feedback tátil visual.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estruturação semântica e acessível da aplicação |
| **CSS3** | Estilização moderna, variáveis CSS (*custom properties*), Flexbox e design responsivo |
| **JavaScript (ES6+)** | Lógica de cálculo de tempo, controle de estado e manipulação reativa do DOM |
| **Vite** | Servidor de desenvolvimento rápido e empacotamento de produção |

---

## 📁 Estrutura de Arquivos

```text
├── assets/
│   └── cronomentro.png    # Ícone do projeto / Favicon
├── index.html             # Estrutura principal da página
├── style.css              # Estilos globais e variáveis de tema
├── script.js              # Lógica de temporização e eventos
├── vite.config.js         # Configurações do servidor Vite
├── package.json           # Dependências e scripts de execução
├── metadata.json          # Metadados e permissões da aplicação
└── README.md              # Documentação do projeto
```

---

## 💻 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes `npm` (incluso com o Node.js)

### Passos de Instalação e Execução

1. **Clone ou acesse a pasta do projeto:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd cronometro
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:3000`.

4. **Gerar build para produção:**
   ```bash
   npm run build
   ```

5. **Visualizar build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🧠 Conceitos Técnicos Destacados

1. **Drift Prevention no `setInterval`**: Em vez de simplesmente incrementar um contador fixo (o que acumula atrasos por latência do event loop), o tempo é calculado pela fórmula `Date.now() - tempoInicio`, garantindo precisão milissegundo a milissegundo.
2. **Formatação Padronizada**: Uso de `padStart(2, "0")` para garantir a representação uniforme de dois dígitos em horas, minutos, segundos e centésimos.
3. **Manipulação Eficiente do DOM**: Uso de `prepend` na inserção de voltas para renderização direta no topo da lista sem recriar todos os elementos existentes.
