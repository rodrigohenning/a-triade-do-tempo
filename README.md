# A Tríade do Tempo - Christian Barbosa

Uma aplicação web interativa para descobrir seu perfil na Tríade do Tempo, baseado no método de Christian Barbosa.

## 🎯 Objetivo

Permitir que qualquer usuário responda um questionário com 18 perguntas e receba automaticamente o resultado da sua Tríade do Tempo, identificando como utiliza seu tempo e qual é seu perfil predominante.

## 🚀 Características

✨ **Design Moderno**
- Interface limpa e profissional
- Design responsivo (desktop e celular)
- Cores corporativas: azul escuro, branco e laranja
- Animações suaves e transições modernas

📊 **Funcionalidades Principais**
- Questionário de 18 perguntas com escala de 1-5
- Barra de progresso em tempo real
- Cálculo automático de resultados
- Gráfico interativo (Doughnut Chart)
- Interpretação automática do perfil
- Compartilhamento de resultados
- Download do resultado em PDF

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com CSS Grid e Flexbox
- **JavaScript Puro** - Lógica sem dependências de framework
- **Bootstrap 5** - Framework responsivo via CDN
- **Chart.js** - Visualização de dados
- **html2pdf.js** - Geração de PDF
- **Bootstrap Icons** - Ícones da interface

## 📁 Estrutura do Projeto

```
a-triade-do-tempo/
├── index.html       # Página principal com estrutura HTML
├── style.css        # Estilos CSS3 customizados
├── script.js        # Lógica JavaScript
└── README.md        # Este arquivo
```

## 🎓 A Tríade do Tempo

O método de Christian Barbosa classifica as atividades em três categorias:

### 1️⃣ **Importante** (Conjunto B)
Atividades que geram resultados reais, qualidade de vida e realização pessoal.
- Perguntas: 4, 7, 10, 11, 14, 17

### 2️⃣ **Urgente** (Conjunto C)
Atividades que demandam ação imediata e trabalho sob pressão.
- Perguntas: 2, 5, 8, 13, 16, 18

### 3️⃣ **Circunstancial** (Conjunto A)
Atividades que consomem tempo mas agregam pouco valor aos objetivos.
- Perguntas: 1, 3, 6, 9, 12, 15

## 📊 Como Funciona o Cálculo

1. **Coleta de Respostas**: Usuário responde 18 perguntas em escala de 1 a 5
2. **Agrupamento**: Respostas são organizadas por categoria
3. **Cálculo de Totais**: Soma das respostas por categoria
4. **Percentuais**: 
   - Importante = (Total Conjunto B / Total Geral) × 100
   - Urgente = (Total Conjunto C / Total Geral) × 100
   - Circunstancial = (Total Conjunto A / Total Geral) × 100
5. **Identificação**: Determina o perfil predominante

## 🎮 Como Usar

### Localmente
1. Clone ou baixe o repositório
2. Abra `index.html` em um navegador web
3. Responda as perguntas
4. Veja seus resultados

### GitHub Pages
1. Habilite GitHub Pages no repositório
2. Acesse: `https://seu-usuario.github.io/a-triade-do-tempo`

## ✨ Recursos Adicionais

- ✅ Botão "Reiniciar Avaliação" - Recomeça o questionário
- ✅ Botão "Compartilhar" - Compartilha resultado (Clipboard/API Share)
- ✅ Botão "Baixar PDF" - Exporta resultado em PDF
- ✅ Análise Detalhada - Interpretação personalizada do perfil
- ✅ Código Comentado - Fácil de manter e customizar
- ✅ Sem Backend - Roda 100% no cliente

## 🎨 Paleta de Cores

```css
--color-primary: #0d47a1;        /* Azul Escuro */
--color-primary-light: #1565c0;  /* Azul Claro */
--color-secondary: #f57c00;      /* Laranja */
--color-white: #ffffff;          /* Branco */
--color-dark: #1a1a1a;           /* Escuro */
--color-light: #f5f5f5;          /* Cinza Claro */
```

## 📱 Compatibilidade

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Tablets (iPad, Android)
- ✅ Mobile (iPhone, Samsung)

## 🔧 Customização

### Alterar Perguntas
Edite o array `questions` em `script.js`:
```javascript
const questions = [
    "Pergunta 1...",
    "Pergunta 2...",
    // ...
];
```

### Alterar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --color-primary: #seu-valor;
    --color-secondary: #seu-valor;
}
```

### Adicionar Categorias
Modifique os arrays de categoria em `script.js`:
```javascript
const categoryA = [0, 2, 5, 8, 11, 14];
const categoryB = [3, 6, 9, 10, 13, 16];
const categoryC = [1, 4, 7, 12, 15, 17];
```

## 📝 Perguntas do Questionário

1. Costumo ir a eventos, festas ou cursos, mesmo sem ter muita vontade, para agradar ao chefe, aos amigos ou à família.
2. Não consigo realizar tudo o que me propus a fazer no dia e preciso cumprir hora extra ou levar trabalho para casa.
3. Quando recebo um e-mail, costumo dar uma olhada para checar o conteúdo.
4. Costumo visitar com regularidade pessoas relevantes em minha vida – amigos, parentes, filhos.
5. É comum aparecerem problemas inesperados no meu dia a dia.
6. Assumo compromissos com outras pessoas ou aceito novas posições na empresa, mesmo que não goste muito da nova atividade.
7. Tenho um tempo definido para dedicar a mim mesmo e nele posso fazer o que quiser.
8. Costumo deixar para fazer tarefas perto do prazo de entrega.
9. Nos dias de descanso, costumo passar boa parte do tempo assistindo televisão, jogando ou acessando a internet.
10. Faço um planejamento por escrito de tudo o que preciso fazer durante a semana.
11. Posso afirmar que estou conseguindo realizar tudo o que gostaria em minha vida.
12. Costumo participar de reuniões sem saber direito o conteúdo ou objetivo.
13. Consigo melhores resultados quando estou sob pressão ou com prazo curto.
14. Quando quero alguma coisa, defino esse objetivo por escrito e acompanho os resultados.
15. Leio muitos e-mails desnecessários.
16. Estive atrasado com minhas tarefas ou reuniões nas últimas semanas.
17. Faço exercícios com regularidade, alimento-me adequadamente e desfruto horas suficientes de lazer.
18. É comum reduzir meu horário de almoço ou comer enquanto trabalho.

## 🤝 Contribuindo

Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Fazer fork e customizar
- Compartilhar o projeto

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👨‍💻 Autor

Desenvolvido como aplicação web interativa baseada no método de Christian Barbosa.

## 📚 Referências

- [Christian Barbosa - Tríade do Tempo](https://www.christianbarbosa.com.br/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Chart.js Documentation](https://www.chartjs.org/)

---

**Última atualização**: 2024

Aproveite para descobrir sua Tríade do Tempo! 🚀
