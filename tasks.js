const input = document.getElementsByClassName('input')[0];
const btn = document.getElementById('btn');
let isChange = false;
let user;
let user1;

function handleClick() {
  if (!isChange) {
    input.value = user;
    btn.style.backgroundColor = 'orange';
    isChange = true;
  } else {
    input.value = user1;
    btn.style.backgroundColor = 'bisque';
    isChange = false;
  }
}

// Добавим обработчик события вне then блока
btn.addEventListener('click', handleClick);

fetch('https://jsonplaceholder.typicode.com/posts/3')
  .then((response) => response.json())
  .then((json) => {
    user = json.title;
    user1 = json.body;
    console.log(json);
  });
