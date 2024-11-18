window.dataLoaded = false;
    let title_of_eom = themeOfDEC;
    let methodRecomendation = ' ';
    let dropType = 2;
    let typeOfButtons = 'video'; // Можер быть "hexagon", "lightning", "tiles" или "video" или "custom";
    let timings = [ // если typeOfButtons = 'video'
        { time: 0, name: "Организация ремонтной службы предприятия" }, // если typeOfButtons = 'video'
        { time: 19.58, name: "Структура ремонтной службы предприятия" }, // если typeOfButtons = 'video'
        { time: 35.61, name: "Методы планирования ремонтов оборудования" }, // если typeOfButtons = 'video'
        { time: 55.49, name: "Стратегии технического обслуживания и ремонта: достоинства и недостатки" }, // если typeOfButtons = 'video'
        { time: 81.21, name: "Система технического обслуживания и ремонта" }, // если typeOfButtons = 'video'
    ]; // если typeOfButtons = 'video'
    let timings2 = [ // если typeOfButtons = 'video'
        { time2: 0, name2: "Система планово-предупредительного ремонта" }, // если typeOfButtons = 'video'
        { time2: 20.47, name2: "Ремонтные документы" }, // если typeOfButtons = 'video'
        { time2: 29.24, name2: "Сдача оборудования в ремонт" }, // если typeOfButtons = 'video'
        { time2: 35.87, name2: "Внеплановый ремонт оборудования" }, // если typeOfButtons = 'video'
        { time2: 58.19, name2: "Рационализация логистических процессов ремонтных работ" }, // если typeOfButtons = 'video'
        { time2: 71.05, name2: "Передовой опыт по методам поддержания работоспособности промышленного (технологического) оборудования" }, // если typeOfButtons = 'video'
    ]; // если typeOfButtons = 'video'
    let pathToVideo = './content/page_content/video_content.mp4'; // если typeOfButtons = 'video'
    let pathToVideo2 = './content/page_content/video_content2.mp4'; // если typeOfButtons = 'video'
    let videoTitle2 = 'Видеолекция "Организация ремонтной службы предприятия" Часть 1'; // если typeOfButtons = 'video'
    let videoTitle5 = 'Видеолекция "Организация ремонтной службы предприятия" Часть 2';
    // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let customPage = ``; // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let background_type = dropType;
    let literaListEOM1 = 
    `Егоров, Б. Я., Монтаж, техническое обслуживание и ремонт промышленного оборудования (по отраслям). Курсовое и дипломное проектирование : учебник / Б. Я. Егоров, Е. Н. Карпышева, Г. В. Каракина. – Москва : Русайнс, 2024. – 206 с. – ISBN 978-5-466-06157-4. – URL: https://book.ru/book/953599 (дата обращения: 20.09.2024). – Текст : электронный.
    Михальченков, А. М., Технологические процессы ремонтного производства : учебное пособие / А. М. Михальченков, А. А. Тюрева, И. В. Козарез. – Москва : КноРус, 2024. – 303 с. – ISBN 978-5-406-12071-2. – URL: https://book.ru/book/950433  (дата обращения: 20.09.2024). – Текст : электронный.
    Столярова, М. В., Организация ремонтных работ промышленного оборудования и контроль за ними. Практикум : учебное пособие / М. В. Столярова. – Москва : Русайнс, 2024. – 110 с. – ISBN 978-5-466-03395-3. – URL: https://book.ru/book/950357  (дата обращения: 18.10.2024). – Текст : электронный.
    Иванов, И. Н.  Организация труда на промышленных предприятиях : учебник для среднего профессионального образования / И. Н. Иванов, А. М. Беляев. – Москва : Издательство Юрайт, 2024. – 305 с. – (Профессиональное образование). – ISBN 978-5-534-12300-5. – Текст : электронный // Образовательная платформа Юрайт [сайт]. – URL: https://urait.ru/bcode/542560  (дата обращения: 20.09.2024).
    ГОСТ Р 2.601-2019 Единая система конструкторской документации. Эксплуатационные документы : национальный стандарт Российской Федерации : издание официальное : утвержден и введен в действие Приказом Федерального агентства по техническому регулированию и метрологии от 29 апреля 2019 г. № 177-ст : введен впервые : дата введения 2020-02-01 / разработан Федеральным государственным унитарным предприятием «Российский научно-технический центр информации по стандартизации, метрологии и оценке соответствия» (ФГУП «СТАНДАРТИНФОРМ») // Интернет и право: Некоммерческий информационно-правовой авторский проект, посвященный юридическим аспектам компьютерной индустрии, интеллектуальной собственности в Интернете. URL: https://internet-law.ru/gosts/gost/70828/?ysclid=m2f6z8dtr8804964789  (дата обращения: 20.09.2024).
    ГОСТ 2.602-2013 Единая система конструкторской документации. Ремонтные документы : межгосударственный стандарт : издание официальное : утвержден и введен в действие Приказом Федерального агентства по техническому регулированию и метрологии от 22 ноября 2013 г. № 1628-ст : взамен ГОСТ 2.602-1995 : дата введения 2014-06-01 / разработан Федеральным государственным унитарным предприятием «Всероссийский нацчно-исследовательский институт стандартизации и сертификации в машиностроении » (ВНИИНМАШ), Автономной некоммерческой организацией Научно-исследовательский центр CALS-технологий «Прикладная логистика» (АНО НИЦ CALS-технологий «Прикладная логистика» // Интернет и право: Некоммерческий информационно-правовой авторский проект, посвященный юридическим аспектам компьютерной индустрии, интеллектуальной собственности в Интернете. URL: https://internet-law.ru/gosts/gost/55723/?ysclid=m2f7gsi49x7319097  (дата обращения: 20.09.2024).
    Схиртладзе, А. Г. Ремонт технологического оборудования: учебник / А. Г. Схиртладзе, В.А. Скрябин. – Москва : КУРС : ИНФРА-М, 2018. – 352 с. – ISBN 978-5-906923-80-6. - Текст : электронный. – URL: https://znanium.ru/catalog/product/944189  (дата обращения: 20.09.2024). – Режим доступа: по подписке.
    Синельников, А. Ф. Монтаж промышленного оборудования и пусконаладочные работы: учебник для студентов СПО/ А.Ф Синельников. – Москва: Академия, 2018. –320 с. – ISBN978-5-44687872-7. – Текст: непосредственный.` 
    // Список литературы
    const data = {
        "index_0":{
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "paragraph_1":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": "<subtl>Lorem ipsum dolor sit amet consectetur adipisicing elit.</subtl> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b> Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis? Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis."},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ],
            "paragraph_2":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": false},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "}
            ],
            "paragraph_3":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "},
                {"text":"<b><i>Lorem ipsum dolor sit amet consectetur</i></b> adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis? Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis. Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis. Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis. Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis. Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis. Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis."}
            ],
            "paragraph_4":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis? Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis? Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis? Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis? Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis."},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ]
        }
    };
    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');
window.dataLoaded = true;