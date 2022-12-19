import fetch from 'node-fetch'

fetch(
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg')
    .then(response => {
     console.log(`HTTP status: ${response.status}`);
    })
    .catch(error => {
     console.error(`Error: ${error}`);
    })
    .finally(() => {
     console.log('All done');
    });


    const request = new XMLHttpRequest();
