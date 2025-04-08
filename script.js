document.getElementById('submitButton').addEventListener('click', function() {
  let link = document.getElementById('linkInput').value;

  // Linkni tekshirib, serverga yuborish
  if (link) {
      fetch('https://yourapi.com/api/v2', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ link: link })
      })
      .then(response => response.json())
      .then(data => {
          document.getElementById('response').innerText = 'Natija: ' + data.message;
      })
      .catch(error => {
          document.getElementById('response').innerText = 'Xatolik yuz berdi: ' + error;
      });
  } else {
      alert('Iltimos, linkni kiriting');
  }
});
