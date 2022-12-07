const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=MfjL7knDifKQQM2kDzdQFbTnLHCl32nM&s=films',{mode:"cors"})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src = response.data.images.original.url;
    });
