function getRating(watchList) {
    // Altere apenas o código abaixo desta linha
    let averageRating = watchList.filter(item => item.Director == 'Christopher Nolan').map(item =>   Number(item.imdbRating)).reduce((sumOfRatings, rating) =>   sumOfRatings + rating)/ watchList.filter(film => film.Director === 'Christopher Nolan').length
  
  
    // Altere apenas o código acima desta linha
    return averageRating;
  }