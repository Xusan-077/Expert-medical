let elinner = document.querySelector(".xizmat-section__inner");

let id = new URLSearchParams(window.location.search).get("id");

let find = servis.find((el) => el.id == id) || blog.find((el) => el.id == id);

elinner.innerHTML = `
       <img src="./img/servis-img1.svg" alt="" class="xizmat-section__img" />

          <h1 class="xizmat-section__title">${find.title}</h1>

          <div class="xizmat-section__text-blog">
            <h4 class="xizmat-section__subtitle">Nega aynan biz?</h4>
            <p class="xizmat-section__text">
              Bizning xususiy klinikamizda faqat eng zamonaviy jihozlardan
              foydalaniladi: SMARTXIDE² ENT va SMARTXIDE² GYN qurilmalari va
              ishonchli materiallar, bu muolajalarning xavfsizligi va
              samaradorligini kafolatlaydi. Barcha operatsiyalar zarur gigiena
              va xavfsizlik standartlariga rioya qilingan maxsus jihozlangan
              operatsiya xonalarida amalga oshiriladi.
            </p>
          </div>
          <div class="xizmat-section__text-blog">
            <h4 class="xizmat-section__subtitle">
              - Zamonaviy uskunalar, yuqori sifat va ishonchlilik
            </h4>
            <p class="xizmat-section__text">
              Tibbiyot markazimizning asosiy afzalliklaridan biri
              shifokorlarimizning yuqori malakasi va tajribasidir. Har bir
              mutaxassis plastik jarrohlik sohasida ko‘p yillik tajribaga ega
              bo‘lib, eng yangi texnologiya va texnikaga amal qilgan holda o‘z
              malakasini muntazam oshirib boradi.
            </p>
          </div>
          <div class="xizmat-section__text-blog">
            <h4 class="xizmat-section__subtitle">
              - Har bir bemorga o'ziga xos va individual yondashuv
            </h4>
            <p class="xizmat-section__text">
              Shuningdek, biz har bir bemorga o'ziga xos davolash va individual
              yondashuvni taklif etamiz. Bizning shifokorlarimiz har qanday
              holatning o'ziga xos xususiyatlarini diqqat bilan o'rganadilar va
              sizga eng mos davolash usuli tanlashga yordam beradi. Bundan
              tashqari, klinika davolanishning barcha bosqichlarida, dastlabki
              konsultatsiyadan to reabilitatsiya davrigacha to'liq yordam va
              maslahat beradi.
            </p>
          </div>
          <div class="xizmat-section__text-blog">
            <h4 class="xizmat-section__subtitle">- Maxfiylik</h4>
            <p class="xizmat-section__text">
              Biz bemorlar tibbiy ma'lumotlari va protseduralari haqidagi
              ma'lumotlarning maxfiyligi haqida tashvishlanishlari mumkinligini
              tushunamiz.
            </p>
          </div>

          <p class="xizmat-section__p">
            Expert Medical klinikasida biz maxfiylikka katta ahamiyat beramiz va
            bemorlarimiz ma'lumotlarining xavfsizligi ta'minlash uchun
            qo'limizdan kelganini qilamiz. Maxfiylik bizning ishimizning asosiy
            tamoyillaridan biridir. Biz sizning tibbiy muolajalaringiz bilan
            bog'liq barcha ma'lumotlar qat'iy maxfiy saqlanishiga va sizning
            xabaringizsiz uchinchi shaxslarga ye'tkazilmasligiga yoki oshkor
            etilmasligiga kafolat beramiz!
          </p>
`