function fetch(method = 'GET', url, body = null) {
  return new Promise(function(resolve, reject){
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

    xhr.onload = () => resolve(xhr.response);

    xhr.onerror = () => reject(xhr.statusText);
  });
}
