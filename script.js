document.getElementById('submitButton').addEventListener('click', function() {
  let link = document.getElementById('linkInput').value;

  // Agar foydalanuvchi linkni kiritgan bo'lsa
  if (link) {
      const requestData = {
          service: 1, // Xizmat IDsi (bu yerda 1 ni kiritdim, siz uni kerakli ID bilan o'zgartirishingiz mumkin)
          link: link, // Foydalanuvchining kiritgan linki
          amount: 100 // Xizmatni miqdori (masalan, 100)
      };

      // APIga so'rov yuborish
      fetch('https://snmspeedpanel.com/api/v2', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer e6055cfae4f628d2772aad0035c9f9f0', // API keyni qo‘shish
          },
          body: JSON.stringify(requestData) // Yuboriladigan ma'lumot
      })
      .then(response => response.json()) // APIdan kelgan javobni JSON formatida olish
      .then(data => {
          // APIdan kelgan javobni ekranda ko‘rsatish
          document.getElementById('response').innerText = 'Natija: ' + JSON.stringify(data);
      })
      .catch(error => {
          // Xatolik yuz berganda xabar ko‘rsatish
          document.getElementById('response').innerText = 'Xatolik yuz berdi: ' + error;
      });
  } else {
      alert('Iltimos, linkni kiriting');
  }
});
