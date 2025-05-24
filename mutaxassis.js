let elherotitle = document.querySelector(".page__hero-title");

let id = Number(new URLSearchParams(window.location.search).get("id"));

let find = mutaxasis.find((el) => el.id === id);

elherotitle.innerHTML = `${find.name}   ${find.description}`;

let elmutaxasissectionleft = document.querySelector(".mutaxasis-section-left");

elmutaxasissectionleft.innerHTML = `
    <h1 class="mutaxasis-section__title">
                ${find.name}
              </h1>
              <h1 class="mutaxasis-section__title">${find.description}</h1>

              <p class="mutaxasis-section__p">
               ${find.name}  sahifasiga xush kelibsiz
              </p>

              <p class="mutaxasis-section__p">
              ${find.name}  – yuqori malakali va katta
                tajribaga ega plastik jarroh. 2007 yilda Toshkent davlat
                tibbiyot institutini tamomlab, plastik jarrohlik yo‘nalishi
                bo‘yicha magistrlik darajasini olgan.
              </p>
              <p class="mutaxasis-section__p">
                Mutaxassisimiz doimiy ravishda o'z malakasini oshirib boradi
                masalan, 2022 yilda Istanbulda malaka oshirish kurslarini
                tamomlagan va u yerda plastik jarrohlik sohasidagi eng yangi
                uslub va texnologiyalarni o'rgangan.
              </p>
              <p class="mutaxasis-section__p">
                Shifokoromiz nafaqat yuqori malakali, balki o‘z bemorlariga
                e’tibor va g‘amxo‘rlik ko‘rsatadi. U har doim ularning
                istaklarini tinglashga va ularni amalga oshirishga harat qiladi.
                Shuningdek u protseduralar bilan bog'liq barcha savollarga javob
                berishga tayyor.
              </p>

              <h4 class="mutaxasis-section__subtitle">
                Shifokorning majburiyatlariga quyidagilar kiradi:
              </h4>
              <br />
              <h4 class="mutaxasis-section__subtitle">Plastik jarrohlik</h4>
              <p class="mutaxasis-section__p">
                Bemorlar bilan maslahatlashish, tashxis qo'yish, davolash
                rejasini tuzish, xavf yuzaga kelishi mumkin bo'lgan oqibatlarni
                baholash, jarrohlik operatsiyalarini bajarish, favqulodda
                vaziyatlarda harakatlar algoritmini samarali va tez qo'llash,
                yumshoq to'qimalarga kosmetik tikuvlarni ehtiyotkorlik bilan
                qo'llash, jarrohlik yaralarini birlamchi va ikkilamchi davolash.
              </p>
              <br />
              <h4 class="mutaxasis-section__subtitle">
                Mutaxassisning dastlabki tashxisi va maslahati
              </h4>
              <p class="mutaxasis-section__p">
                Dastlabki maslahat - bu bizning mutaxassisimizdan to'liq
                maslahat olish, har qanday operatsiyaning barcha ijobiy va
                salbiy tomonlarini bilish, shuningdek, muayyan muammoning eng
                yaxshi echimini tanlash imkoniyatidir.
              </p>

              <h1 class="mutaxasis-section__title">Ta'lim</h1>
              <p class="mutaxasis-section__p">
                2-Toshkent Davlat Tibbiyot Instituti (TMA) 2000-2007
                Mutaxassislik Magistratura: 2-Toshkent Davlat Tibbiyot Instituti
                (TMA) 2008-2011 y. Maksillofasiyal jarrohlik, Plastik jarrohlik
                Mutaxassisligi bo'yicha toifalar Oliy toifali shifokor
              </p>
              <h1 class="mutaxasis-section__title">Tajriba</h1>
              <p class="mutaxasis-section__p">23 yil</p>
`;
