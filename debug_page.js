const http = require('http');
const WebSocket = require('ws');

// 1. Get targets
http.get('http://127.0.0.1:9222/json/list', (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      const targets = JSON.parse(body);
      // Find our target page
      let target = targets.find(t => t.url.includes('localhost:8080') || t.url.includes('127.0.0.1:8080'));
      
      if (!target) {
        // Find any new/blank page target
        target = targets.find(t => t.type === 'page');
      }
      
      if (!target) {
        console.error('No page target found. Targets list:', targets.map(t => t.url));
        process.exit(1);
      }
      
      console.log('Connecting to target:', target.url);
      const ws = new WebSocket(target.webSocketDebuggerUrl);
      
      let messageId = 1;
      const send = (method, params = {}) => {
        const msg = JSON.stringify({ id: messageId++, method, params });
        ws.send(msg);
      };
      
      ws.on('open', () => {
        // Enable Console & Runtime
        send('Runtime.enable');
        send('Console.enable');
        send('Log.enable');
        send('Page.enable');
        
        // Navigate
        console.log('Navigating to http://localhost:8080/admin');
        send('Page.navigate', { url: 'http://localhost:8080/admin' });
      });
      
      ws.on('message', (data) => {
        const msg = JSON.parse(data);
        
        // Console API calls
        if (msg.method === 'Runtime.consoleAPICalled') {
          const args = msg.params.args.map(a => a.value || a.description || JSON.stringify(a));
          console.log(`[BROWSER CONSOLE - ${msg.params.type.toUpperCase()}]:`, ...args);
        }
        
        // Exception thrown
        if (msg.method === 'Runtime.exceptionThrown') {
          console.error('[BROWSER EXCEPTION]:', JSON.stringify(msg.params.exceptionDetails, null, 2));
        }
        
        // General logs
        if (msg.method === 'Log.entryAdded') {
          console.log('[BROWSER LOG ENTRY]:', msg.params.entry.text);
        }
      });
      
      // Keep running for 10 seconds to collect console messages
      setTimeout(() => {
        console.log('Finished listening. Closing debug session.');
        ws.close();
        process.exit(0);
      }, 10000);
      
    } catch (e) {
      console.error('Failed to parse targets:', e);
      process.exit(1);
    }
  });
}).on('error', err => {
  console.error('HTTP Error fetching targets:', err.message);
  process.exit(1);
});
