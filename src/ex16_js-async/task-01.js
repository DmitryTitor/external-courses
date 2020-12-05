function fetch(method = 'GET', url, body = null) {
  const xhr = new XMLHttpRequest();

  if (method === 'GET') {
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.send();
  }

  if (method === 'POST') {
    xhr.open('POST', url, body);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(body));
  }

  xhr.onload = function() {
    console.log(`Загружено: ${xhr.status} ${xhr.response}`);
  };

  xhr.onerror = function() { 
    console.log(`Ошибка соединения`);
  };

  xhr.onprogress = function(event) {
    console.log(`Загружено ${event.loaded} из ${event.total}`);
  };
}
