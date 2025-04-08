document.getElementById('submitButton').addEventListener('click', function() {
  let link = document.getElementById('linkInput').value;

  // Agar foydalanuvchi linkni kiritgan bo'lsa
  if (link) {
      const selectedService = {
          service: 1, // Masalan, Followers servisi
          name: "Followers",
          type: "Default",
          category: "First Category",
          rate: "0.90",
          min: "50",
          max: "10000",
          refill: true,
          cancel: true
      };

      const requestData = {
          service: selectedService.service, // Tanlangan xizmatni yuborish
          link: link, // Linkni yuborish
          amount: 100 // Xizmatni miqdori (masalan, 100)
      };

      // APIga so'rov yuborish
      fetch('https://snmspeedpanel.com/api/v2', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer e6055cfae4f628d2772aad0035c9f9f0', // API keyni qo‘shish
          },
          body: JSON.stringify(requestData) // Data ni JSON shaklida yuboramiz
      })
      .then(response => response.json()) // APIdan kelgan javobni JSON formatida olish
      .then(data => {
          // APIdan kelgan javobni ko‘rsatish
          document.getElementById('response').innerText = 'Natija: ' + JSON.stringify(data);
      })
      .catch(error => {
          // Xatolik yuz berganda xabar ko‘rsatish
          document.getElementById('response').innerText = 'Xatolik yuz berdi: ' + error;
      });x``
  } else {
      alert('Iltimos, linkni kiriting');
  }
});
