export function  getData(url) {
    return fetch(url)
        .then(response => Promise.all([response, response.json()]))

      }
