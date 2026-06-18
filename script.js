/* ============================================
   A Tríade do Tempo - JavaScript
   ============================================ */

// ---- Perguntas do Questionário ----
const questions = [
    "Costumo ir a eventos, festas ou cursos, mesmo sem ter muita vontade, para agradar ao chefe, aos amigos ou à família.",
    "Não consigo realizar tudo o que me propus a fazer no dia e preciso cumprir hora extra ou levar trabalho para casa.",
    "Quando recebo um e-mail, costumo dar uma olhada para checar o conteúdo.",
    "Costumo visitar com regularidade pessoas relevantes em minha vida – amigos, parentes, filhos.",
    "É comum aparecerem problemas inesperados no meu dia a dia.",
    "Assumo compromissos com outras pessoas ou aceito novas posições na empresa, mesmo que não goste muito da nova atividade.",
    "Tenho um tempo definido para dedicar a mim mesmo e nele posso fazer o que quiser.",
    "Costumo deixar para fazer tarefas perto do prazo de entrega.",
    "Nos dias de descanso, costumo passar boa parte do tempo assistindo televisão, jogando ou acessando a internet.",
    "Faço um planejamento por escrito de tudo o que preciso fazer durante a semana.",
    "Posso afirmar que estou conseguindo realizar tudo o que gostaria em minha vida.",
    "Costumo participar de reuniões sem saber direito o conteúdo ou objetivo.",
    "Consigo melhores resultados quando estou sob pressão ou com prazo curto.",
    "Quando quero alguma coisa, defino esse objetivo por escrito e acompanho os resultados.",
    "Leio muitos e-mails desnecessários.",
    "Estive atrasado com minhas tarefas ou reuniões nas últimas semanas.",
    "Faço exercícios com regularidade, alimento-me adequadamente e desfruto horas suficientes de lazer.",
    "É comum reduzir meu horário de almoço ou comer enquanto trabalho."
];

// ---- Categorias das Perguntas ----
// Conjunto A (Circunstancial): 1, 3, 6, 9, 12, 15 (índices 0, 2, 5, 8, 11, 14)
// Conjunto B (Importante): 4, 7, 10, 11, 14, 17 (índices 3, 6, 9, 10, 13, 16)
// Conjunto C (Urgente): 2, 5, 8, 13, 16, 18 (índices 1, 4, 7, 12, 15, 17)

const categoryA = [0, 2, 5, 8, 11, 14]; // Circunstancial
const categoryB = [3, 6, 9, 10, 13, 16]; // Importante
const categoryC = [1, 4, 7, 12, 15, 17]; // Urgente

// ---- Variáveis Globais ----
let currentQuestion = 0;
let answers = new Array(18).fill(0);
let triadeChart = null;

// Descrições dos Perfis
const profiles = {
    importante: {
        title: "Perfil Importante",
        icon: "bi-star-fill",
        color: "#fbc02d",
        description: "Você dedica a maior parte do seu tempo a atividades que geram resultados, qualidade de vida e realização. Este é o perfil mais equilibrado e produtivo. Continue mantendo o foco em atividades que agregam valor real à sua vida."
    },
    urgente: {
        title: "Perfil Urgente",
        icon: "bi-exclamation-circle-fill",
        color: "#d32f2f",
        description: "Você vive apagando incêndios e trabalhando sob pressão. Isso afeta sua saúde e bem-estar. O planejamento e delegação podem ajudar significativamente a reduzir o estresse e aumentar a produtividade."
    },
    circunstancial: {
        title: "Perfil Circunstancial",
        icon: "bi-shuffle",
        color: "#0288d1",
        description: "Boa parte do seu tempo está sendo consumida por atividades que agregam pouco valor aos seus objetivos. É hora de reavaliare repensar suas prioridades para alcançar maior satisfação pessoal e profissional."
    }
};

// ---- Inicialização ----
document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplicação carregada");
});

// ---- Funções Principais ----

/**
 * Inicia o questionário
 */
function startQuiz() {
    console.log("Iniciando questionário");
    currentQuestion = 0;
    answers = new Array(18).fill(0);
    
    // Esconde tela inicial
    document.getElementById('screenHome').classList.remove('active');
    
    // Mostra tela do questionário
    document.getElementById('screenQuiz').classList.add('active');
    
    // Carrega primeira pergunta
    loadQuestion();
}

/**
 * Carrega a pergunta atual
 */
function loadQuestion() {
    const questionIndex = currentQuestion;
    const questionNumber = currentQuestion + 1;
    
    // Atualiza texto da pergunta
    document.getElementById('questionText').textContent = questions[questionIndex];
    document.getElementById('questionNumber').textContent = questionNumber;
    
    // Atualiza barra de progresso
    const progressPercent = (questionNumber / 18) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';
    document.getElementById('progressText').textContent = `${questionNumber} de 18`;
    
    // Reseta seleção de resposta
    updateScaleButtons();
    
    // Atualiza visibilidade dos botões
    updateNavigationButtons();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Atualiza estado dos botões de escala
 */
function updateScaleButtons() {
    const buttons = document.querySelectorAll('.btn-scale');
    buttons.forEach((button, index) => {
        button.classList.remove('active');
        
        if (answers[currentQuestion] === 0) {
            button.classList.remove('active');
        } else if (parseInt(button.getAttribute('data-value')) === answers[currentQuestion]) {
            button.classList.add('active');
        }
    });
}

/**
 * Responde a pergunta e avança automaticamente
 */
function answerQuestion(value) {
    console.log(`Resposta ${value} para pergunta ${currentQuestion + 1}`);
    
    // Armazena resposta
    answers[currentQuestion] = value;
    
    // Atualiza estado do botão
    updateScaleButtons();
    
    // Atualiza botões de navegação
    updateNavigationButtons();
    
    // Se não for a última pergunta, avança automaticamente após um pequeno delay
    if (currentQuestion < 17) {
        setTimeout(() => {
            nextQuestion();
        }, 300);
    }
}

/**
 * Vai para próxima pergunta
 */
function nextQuestion() {
    if (currentQuestion < 17) {
        currentQuestion++;
        loadQuestion();
    }
}

/**
 * Vai para pergunta anterior
 */
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

/**
 * Atualiza visibilidade e estado dos botões de navegação
 */
function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const btnFinish = document.getElementById('btnFinish');
    
    // Botão anterior
    if (currentQuestion > 0) {
        btnPrev.style.display = 'block';
    } else {
        btnPrev.style.display = 'none';
    }
    
    // Botão próxima ou finalizar
    if (answers[currentQuestion] === 0) {
        btnNext.style.display = 'none';
        btnFinish.style.display = 'none';
    } else {
        if (currentQuestion < 17) {
            btnNext.style.display = 'block';
            btnFinish.style.display = 'none';
        } else {
            btnNext.style.display = 'none';
            btnFinish.style.display = 'block';
        }
    }
}

/**
 * Finaliza o questionário e calcula resultados
 */
function finishQuiz() {
    console.log("Finalizando questionário");
    console.log("Respostas:", answers);
    
    // Calcula totais por categoria
    const totalA = calculateCategoryTotal(categoryA); // Circunstancial
    const totalB = calculateCategoryTotal(categoryB); // Importante
    const totalC = calculateCategoryTotal(categoryC); // Urgente
    
    const totalGeral = totalA + totalB + totalC;
    
    console.log(`Total A (Circunstancial): ${totalA}`);
    console.log(`Total B (Importante): ${totalB}`);
    console.log(`Total C (Urgente): ${totalC}`);
    console.log(`Total Geral: ${totalGeral}`);
    
    // Calcula percentuais
    const percentImportante = Math.round((totalB / totalGeral) * 100);
    const percentUrgente = Math.round((totalC / totalGeral) * 100);
    const percentCircunstancial = Math.round((totalA / totalGeral) * 100);
    
    // Armazena resultados
    window.results = {
        importante: percentImportante,
        urgente: percentUrgente,
        circunstancial: percentCircunstancial,
        totalB: totalB,
        totalC: totalC,
        totalA: totalA,
        totalGeral: totalGeral
    };
    
    console.log("Resultado:", window.results);
    
    // Mostra resultado
    showResult(percentImportante, percentUrgente, percentCircunstancial);
}

/**
 * Calcula o total de uma categoria
 */
function calculateCategoryTotal(categoryIndices) {
    return categoryIndices.reduce((sum, index) => sum + answers[index], 0);
}

/**
 * Mostra tela de resultado
 */
function showResult(percentImportante, percentUrgente, percentCircunstancial) {
    // Esconde tela do questionário
    document.getElementById('screenQuiz').classList.remove('active');
    
    // Mostra tela de resultado
    document.getElementById('screenResult').classList.add('active');
    
    // Atualiza percentuais
    document.getElementById('percentImportante').textContent = percentImportante + '%';
    document.getElementById('percentUrgente').textContent = percentUrgente + '%';
    document.getElementById('percentCircunstancial').textContent = percentCircunstancial + '%';
    
    // Determina perfil predominante
    let mainProfile = 'importante';
    let mainPercent = percentImportante;
    
    if (percentUrgente > mainPercent) {
        mainProfile = 'urgente';
        mainPercent = percentUrgente;
    }
    
    if (percentCircunstancial > mainPercent) {
        mainProfile = 'circunstancial';
        mainPercent = percentCircunstancial;
    }
    
    // Atualiza resultado
    updateResultDisplay(mainProfile, percentImportante, percentUrgente, percentCircunstancial);
    
    // Cria gráfico
    createChart(percentImportante, percentUrgente, percentCircunstancial);
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Atualiza exibição do resultado
 */
function updateResultDisplay(profile, percentImportante, percentUrgente, percentCircunstancial) {
    const profileData = profiles[profile];
    
    // Atualiza ícone, título e descrição
    document.getElementById('resultIcon').className = `bi ${profileData.icon}`;
    document.getElementById('resultTitle').textContent = profileData.title;
    document.getElementById('resultDescription').textContent = profileData.description;
    
    // Muda cor do ícone
    document.getElementById('resultIcon').style.color = profileData.color;
    
    // Atualiza análise detalhada
    updateAnalysis(percentImportante, percentUrgente, percentCircunstancial);
}

/**
 * Atualiza análise detalhada
 */
function updateAnalysis(percentImportante, percentUrgente, percentCircunstancial) {
    let analysisHTML = '<p><strong>Sua distribuição de tempo:</strong></p><ul>';
    
    analysisHTML += `<li><strong>Importante (${percentImportante}%):</strong> Atividades que geram resultado real e satisfação pessoal.</li>`;
    analysisHTML += `<li><strong>Urgente (${percentUrgente}%):</strong> Atividades que demandam atenção imediata e reação rápida.</li>`;
    analysisHTML += `<li><strong>Circunstancial (${percentCircunstancial}%):</strong> Atividades que consomem tempo mas agregam pouco valor.</li>`;
    
    analysisHTML += '</ul>';
    
    // Recomendações personalizadas
    analysisHTML += '<p><strong>Recomendação:</strong> ';
    
    if (percentImportante >= 50) {
        analysisHTML += 'Parabéns! Você está no caminho certo. Mantenha o foco em atividades significativas e continue desenvolvendo sua inteligência emocional.';
    } else if (percentUrgente >= 40) {
        analysisHTML += 'Comece a planejar melhor sua semana. Reserve tempo para atividades importantes antes que se tornem urgentes. Implemente um sistema de organização pessoal.';
    } else if (percentCircunstancial >= 40) {
        analysisHTML += 'É urgente revisar seu método de trabalho. Identifique as atividades circunstanciais e considere eliminar ou delegar as que agregam pouco valor.';
    }
    
    analysisHTML += '</p>';
    
    document.getElementById('analysisContent').innerHTML = analysisHTML;
}

/**
 * Cria gráfico Doughnut com Chart.js
 */
function createChart(percentImportante, percentUrgente, percentCircunstancial) {
    // Destrói gráfico anterior se existir
    if (triadeChart) {
        triadeChart.destroy();
    }
    
    const ctx = document.getElementById('triadeChart').getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    triadeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Importante', 'Urgente', 'Circunstancial'],
            datasets: [{
                data: [percentImportante, percentUrgente, percentCircunstancial],
                backgroundColor: [
                    '#fbc02d',  // Amarelo para Importante
                    '#d32f2f',  // Vermelho para Urgente
                    '#0288d1'   // Azul para Circunstancial
                ],
                borderColor: [
                    '#f57f17',
                    '#c62828',
                    '#01579b'
                ],
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 14
                    },
                    padding: 12,
                    borderRadius: 6
                }
            }
        }
    });
}

/**
 * Reinicia o questionário
 */
function restartQuiz() {
    console.log("Reiniciando questionário");
    
    // Reseta estado
    currentQuestion = 0;
    answers = new Array(18).fill(0);
    
    // Volta para tela inicial
    document.getElementById('screenResult').classList.remove('active');
    document.getElementById('screenHome').classList.add('active');
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Compartilha resultado
 */
function shareResult() {
    console.log("Compartilhando resultado");
    
    const results = window.results;
    const mainProfile = getMajorProfile();
    const profileData = profiles[mainProfile];
    
    const text = `Descobri minha Tríade do Tempo!\n\n${profileData.title}\n\nImportante: ${results.importante}%\nUrgente: ${results.urgente}%\nCircunstancial: ${results.circunstancial}%\n\nDescubra sua tríade: ${window.location.href}`;
    
    // Tenta usar a API Share do navegador se disponível
    if (navigator.share) {
        navigator.share({
            title: 'A Tríade do Tempo',
            text: text
        }).catch(err => {
            console.log('Erro ao compartilhar:', err);
            fallbackShare(text);
        });
    } else {
        fallbackShare(text);
    }
}

/**
 * Compartilhamento alternativo (copia para clipboard)
 */
function fallbackShare(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Resultado copiado para a área de transferência! Compartilhe com seus amigos.');
    }).catch(err => {
        console.log('Erro ao copiar:', err);
        alert('Não foi possível copiar o resultado. Tente novamente.');
    });
}

/**
 * Baixa resultado como PDF
 */
function downloadPDF() {
    console.log("Baixando PDF");
    
    const results = window.results;
    const mainProfile = getMajorProfile();
    const profileData = profiles[mainProfile];
    
    const element = document.getElementById('screenResult');
    
    // Configurações do html2pdf
    const options = {
        margin: 10,
        filename: 'triade-do-tempo-resultado.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    // Cria cópia do elemento para não alterar o original
    const clone = element.cloneNode(true);
    
    // Remove botões do PDF
    const buttons = clone.querySelectorAll('.d-flex.flex-wrap.gap-2');
    buttons.forEach(btn => btn.remove());
    
    // Gera PDF
    html2pdf().set(options).from(clone).save().catch(err => {
        console.log('Erro ao gerar PDF:', err);
        alert('Erro ao gerar PDF. Tente novamente.');
    });
}

/**
 * Retorna o perfil principal
 */
function getMajorProfile() {
    const results = window.results;
    
    if (results.importante >= results.urgente && results.importante >= results.circunstancial) {
        return 'importante';
    } else if (results.urgente >= results.importante && results.urgente >= results.circunstancial) {
        return 'urgente';
    } else {
        return 'circunstancial';
    }
}

/**
 * Função auxiliar para logging
 */
function log(message) {
    console.log(`[Tríade do Tempo] ${message}`);
}

// ---- Event Listeners Adicionais ----

// Permite responder com Enter
document.addEventListener('keypress', (e) => {
    if (document.getElementById('screenQuiz').classList.contains('active')) {
        if (e.key === 'Enter') {
            if (currentQuestion < 17) {
                nextQuestion();
            } else if (answers[currentQuestion] > 0) {
                finishQuiz();
            }
        }
    }
});

console.log("Script carregado com sucesso");
