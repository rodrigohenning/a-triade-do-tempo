# GitHub Pages Configuration

# This file contains configuration for hosting this project on GitHub Pages

## Setup Instructions

1. Go to your repository on GitHub
2. Click on "Settings" (engrenagem no topo direito)
3. Scroll down to "Pages" section (no menu lateral esquerdo)
4. Under "Source", select:
   - Branch: `main` (ou `master`, dependendo do seu repositório)
   - Folder: `/ (root)`
5. Click "Save"
6. Your site will be published at: `https://seu-usuario.github.io/a-triade-do-tempo/`

## Features

- ✅ Sem backend necessário - Funciona 100% no cliente
- ✅ Responsivo - Funciona em desktop e mobile
- ✅ Sem dependências externas (apenas CDNs)
- ✅ Rápido - Carregamento instantâneo
- ✅ Seguro - Nenhum dado é enviado para servidor

## Files Required

```
/
├── index.html       (Obrigatório)
├── style.css        (Obrigatório)
├── script.js        (Obrigatório)
└── README.md        (Recomendado)
```

## Testing Locally

1. Instale um servidor web local (Python):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. Ou use Node.js (http-server):
   ```bash
   npm install -g http-server
   http-server
   ```

3. Abra no navegador: `http://localhost:8000`

## Troubleshooting

### Página não carrega
- Verifique se todos os 3 arquivos (HTML, CSS, JS) estão no repositório
- Aguarde alguns minutos após fazer o push (GitHub Pages pode levar tempo)
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Estilos não carregam
- Verifique o console do navegador (F12)
- Confirme que style.css está no mesmo diretório que index.html
- Verifique se há erros de permissão

### JavaScript não funciona
- Abra o console (F12) e procure por erros
- Confirme que script.js está no mesmo diretório que index.html
- Verifique se as CDNs (Bootstrap, Chart.js) estão acessíveis

## Performance

A aplicação foi otimizada para:
- ⚡ Carregamento rápido (< 2s)
- 📊 Sem dependências de backend
- 📱 Responsiva em todos os dispositivos
- 🎨 CSS otimizado

## Security

A aplicação:
- ❌ Não coleta dados pessoais
- ❌ Não envia informações para servidor
- ✅ Roda 100% no navegador do cliente
- ✅ Segura para usar em qualquer dispositivo

## Updates

Para fazer updates:
1. Edite os arquivos localmente
2. Faça commit: `git commit -m "Descrição das alterações"`
3. Faça push: `git push origin main`
4. GitHub Pages atualiza automaticamente

---

**Pronto!** Sua aplicação está no ar! 🚀
