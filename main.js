$(document).ready(() => {
  const nomeUsuario = $('#name');
  const userNameUsuario = $('#username');
  const numRepos = $('#repos');
  const numSeguidores = $('#followers');
  const numSeguindo = $('#following');
  const avatar = $('#avatar');
  const link = $('#link');

  fetch('https://api.github.com/users/ItamarMedeirosDev')
    .then(response => response.json())
    .then(json => {
      nomeUsuario.text(json.name);
      userNameUsuario.text(json.login);
      numRepos.text(json.public_repos);
      numSeguidores.text(json.followers);
      numSeguindo.text(json.following);
      avatar.attr('src', json.avatar_url);
      link.attr('href', json.html_url);
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
});
