window.addEventListener('DOMContentLoaded', () => {
  async function getData() {
    const data = await fetch('http://localhost:3001/test').then(res => res.json());
    console.log(data);
  }

  const button = document.getElementById('fetchButton');
  button.addEventListener('click', () => {
    getData()
;  });
});
