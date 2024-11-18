window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Ознакомьтесь с правилами безопасности труда при выполнении ремонтных работ.",
        "step_of_popup": "Ознакомьтесь с правилами безопасности труда при выполнении ремонтных работ.",
        "paragraph_1":[
            {"image": true, "image_path": "./content/shema_11_1.png", "img_sign": " ", "left_img": true},
            {"text":  `
                    <b>Техническое обслуживание и ремонт технологического оборудования должны строго соответствовать установленным регламентам и инструкциям.</b> Следование регламентам позволяет минимизировать риски для работников и оборудования, обеспечивая соблюдение всех мер безопасности. Указание должностных лиц, ответственных за выполнение работ, помогает обеспечить контроль за качеством и соблюдением сроков. <br>
                    При выполнении работ по техническому обслуживанию и ремонту оборудования с применением инструмента и приспособлений должны соблюдаться требования правил по охране труда при работе с инструментом и приспособлениями, утверждаемых Минтрудом России в соответствии с подпунктом 5.2.28 Положения о Министерстве труда и социальной защиты Российской Федерации. Применение только исправного инструмента и проверенных приспособлений помогает избежать несчастных случаев и повреждений оборудования. При выполнении ремонтных работ, в ходе которых возможно образование загазованности рабочей площадки, инструмент применяется обмедненный во избежание образования искры. <br>
                    Работы по ремонту технологического оборудования должны проводиться с применением средств индивидуальной защиты работников в соответствии со спецификой выполняемых работ.
                    Выполнять ремонт и замену узлов и деталей оборудования можно только после полной его остановки. Оборудование отключить от источников энергии. Перед ремонтом гидравлического и пневматического оборудования и коммуникаций необходимо снять давление в системе. Гидравлическое и пневматическое оборудование необходимо отключить от всех трубопроводов. На трубопроводы установить заглушки. Для предотвращения непреднамеренного запуска оборудования во время ремонта выполнить блокировку пусковых аппаратов.
                    Если в оборудовании находились токсичные или взрывоопасные газы или пыль, то его необходимо продуть и после этого  произвести анализ воздушной среды для определения остаточного содержания вредных и опасных веществ. При необходимости контроль загазованности воздушной среды периодически производится во время выполнения работ.
            `},
            {"text2": `
                <div class="main_wrapper">
                    <style>
                        :root{
                            --main-blue-color-custom: #0070c0;
                            --main-sea-color-custom: #3cba94;
                            --main-box-shadow-custom: 1px 3px 15px 5px rgba(0,0,0,0.35);
                            --main-height: 180px;
                            --clip-path-border-radius: 15px;
                            --pl-pr-htc-custom: clamp(15px, 3vw, 60px);
                            --main-custom-list-height: 200px;
                            --marker-size: 150px;
                        }
                        *{
                            font-family: 'Montserrat', sans-serif;
                            font-size: clamp(16px, 1.5vw, 25px);
                        }
                        .margin{
                            margin-bottom: 15px;
                            margin-top: 15px;
                        }
                        .first_color{
                            color: #b80404 !important;
                            --color: #b80404 !important;
                        }
                        .second_color{
                            color: #0070c0 !important;
                            --color: #0070c0 !important;
                        }
                        .third_color{
                            color: #24a4bf;
                            --color: #24a4bf;
                        }
                        .fourth_color{
                            color: #3cba94;
                            --color: #3cba94;
                        }
                        .fifth_color{
                            color: #3cba94;
                            --color: #3cba94;
                        }
                        .sixth_color{
                            color: #0070c0;
                            --color: #0070c0;
                        }
                        .seventh_color{
                            color: #18a67e;
                            --color: #18a67e;
                        }
                        .circle_custom{
                            color: #fff;
                        }
                        .main_wrapper{
                            display: flex;
                            flex-direction: column;
                            flex-wrap: wrap;
                            align-items: start;
                            justify-content: space-between;
                            margin: 25px;
                            height: 100% !important;
                            width: 100% !important;
                        }
                        .blue_paragraph{
                            margin-top: 50px;
                            margin-bottom: 25px;
                            font-weight: 700;
                            color: var(--main-blue-color-custom);
                        }
                        .list_object_custom{
                            max-width: 70%;
                            height: 100%;
                            margin-top: 25px;
                            display: flex;
                            align-items: center;
                            color: white;
                        }
                        .table_custom{
                            margin-left: -30px;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            margin-top: 0px;
                            gap: 50px;
                        }
                        .main_list_wrapper{
                            display: flex;
                            flex-direction: column;
                            min-width: 300px;
                            justify-content: space-between;
                            background-color: #f2f2f2;
                            color: #000;
                            min-height: var(--main-custom-list-height);
                            padding: 25px;
                            padding-bottom: 0;
                            border-radius: 5px 5px 5px 50px;
                            margin-left: 40px;
                            min-height: 100%;
                            box-shadow: var(--main-box-shadow-custom);
                        }
                        .color_part_right_custom{
                            background-color: var(--color);
                            width: calc(var(--marker-size)/5);
                            min-width: calc(var(--marker-size)/5);
                            max-width: calc(var(--marker-size)/5);
                            min-height: calc(var(--main-custom-list-height) - 1vw);
                            border-radius: 0 50vw 50vw 0;
                        }
                        .text_with_marker_custom{
                            display: flex;
                            align-items: flex-end;
                        }
                        .text_content_custom{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding-bottom: 25px;
                            min-height: 100px;
                        }
                        .marker_custom{
                            box-shadow: inset var(--main-box-shadow-custom);
                        }
                        .circle_custom div{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: calc(var(--marker-size)/1.5);
                            height: calc(var(--marker-size)/1.5);
                            background-color: white;
                            border-radius: 50vw;
                            box-shadow: var(--main-box-shadow-custom);
                        }
                        .circle_custom div span{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 15px 2px;
                            border-radius: 50vw;
                            background: linear-gradient(205deg, rgba(195,195,195,1) 0%, rgba(235,235,235,1) 39%, rgba(255,255,255,1) 78%);
                            width: 100%;
                            height: 97%;
                            font-weight: 900;
                            font-size: clamp(35px, 5vw, 55px) !important;
                            color: var(--color);
                        }
                        .upper_line{
                            width: 100px;
                            border-top: 2px solid var(--color);
                            margin-bottom: 25px;
                            margin-top: 15px;
                        }
                        .list_text_custom b{
                            display: flex;
                            width: 100%;
                            font-size: clamp(20px, 3vw, 25px) !important;
                        }
                        .marker_custom{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-right: 25px;
                            height: var(--marker-size);
                            width: var(--marker-size);
                            min-height: var(--marker-size);
                            min-width: var(--marker-size);
                            max-height: var(--marker-size);
                            max-width: var(--marker-size);
                            margin-left: -60px;
                            border-radius: 50vw 50vw 0 50vw;
                            background-color: var(--color);
                        }
                        .fifth_custom{
                            margin-top: 25px;
                            margin-bottom: 25px;
                        }
                        @media (max-width: 1180px) {
                        }
                        @media (max-width: 920px) {
                            .table_custom{
                                flex-direction: column;
                            }
                            .list_object_custom{
                                max-width: 100%;
                            }
                        }
                        @media (max-width: 580px) {
                            :root {
                                --marker-size: 120px;
                            }
                            ol{
                                margin-left: 7vw;
                            }
                            .main_list_wrapper{
                                min-width: initial;
                                min-height: 280px;
                            }
                            .color_part_right_custom{
                                background-color: var(--color);
                                width: calc(var(--marker-size)/6);
                                min-width: calc(var(--marker-size)/6);
                                max-width: calc(var(--marker-size)/6);
                                min-height: calc(var(--main-custom-list-height) + 10vw);
                                border-radius: 0 50vw 50vw 0;
                            }
                        }
                    </style>
                    <div class="table_custom">
                        <div class="list_object_custom">
                            <div class="main_list_wrapper">
                                <div class="list_text_custom first_color">
                                    <b>Работы по наряду-допуску</b>
                                    <div class="upper_line first_color"> </div>
                                </div>
                                <div class="text_with_marker_custom">
                                    <div class="marker_custom first_color">
                                        <div class="circle_custom first_color">
                                            <div>
                                                <span class="first_color">01</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text_content_custom">
                                        <div>
                                            выполняются в условиях повышенной опасности, требуют специального разрешения и соблюдения строгих мер безопасности. Перечень работ повышенной опасности утверждается руководителем предприятия. <br><br>
                                            <i>Примерный перечень работ повышенной опасности приведен в Приложении № 2 Приказа Минтруда России от 29.10.2021 № 776н «Об утверждении Примерного положения о системе управления охраной труда».</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="color_part_right_custom first_color"> </div>
                        </div>
                        <div class="list_object_custom">
                            <div class="main_list_wrapper">
                                <div class="list_text_custom second_color">
                                    <b>Работы по распоряжению</b>
                                    <div class="upper_line second_color"> </div>
                                </div>
                                <div class="text_with_marker_custom">
                                    <div class="marker_custom second_color">
                                        <div class="circle_custom second_color">
                                            <div>
                                                <span class="second_color">02</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text_content_custom">
                                        <div>
                                            выполняются по указанию ответственного лица, но не требуют наряда-допуска
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="color_part_right_custom second_color"> </div>
                        </div>
                        <div class="list_object_custom">
                            <div class="main_list_wrapper">
                                <div class="list_text_custom fifth_color">
                                    <b>Работы в порядке текущей эксплуатации</b>
                                    <div class="upper_line fifth_color"> </div>
                                </div>
                                <div class="text_with_marker_custom">
                                    <div class="marker_custom fifth_color">
                                        <div class="circle_custom fifth_color">
                                            <div>
                                                <span class="fifth_color">03</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text_content_custom">
                                        <div>
                                            обычные работы, которые проводятся без предварительного разрешения, но при их выполнении должны соблюдаться общие меры безопасности.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="color_part_right_custom fifth_color"> </div>
                        </div>
                    </div>
                    <div class="table_custom">
                    </div>    
                </div>
            `},
            {"text":  `
                <br>
                Ремонтная площадка должна быть достаточно просторной для размещения всех необходимых материалов и инструментов, а также для обеспечения свободного передвижения работников. Загромождать рабочую площадку, проходы и проезды запрещается. Площадка должна ограждаться. Знаки безопасности и сигнальные устройства должны быть размещены на видных местах. Для подъема и перемещения тяжелых узлов и деталей необходимо использовать специализированное оборудование, такое как краны, подъемники или другие механизмы.
            `},
        ],
    },
    "index_2":{
        "subtitle": "Кто на предприятии утверждает список работ повышенной опасности?",
        "step_of_popup": "Кто на предприятии утверждает список работ повышенной опасности?",
        "test": [{
            "type": 1
        }, {
            "answers": [
                "Руководитель предприятия", 
                "Главный инженер", 
                "Главный механик", 
                "Главный технолог", 
                "Механик подразделения", 
                "Любое лицо из вышеперечисленных"
            ]
        }, {
            "correct_answer": [0]
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }],
    },
    "index_3":{
        "subtitle": "Рассмотрите подготовку проведения ремонтов оборудования.",
        "step_of_popup": "Рассмотрите подготовку проведения ремонтов оборудования.",
        "paragraph_1":[
            {"text":  `
                <b>Для эффективного и качественного проведения ремонта оборудования необходимо осуществление ряда организационно-технических мероприятий.</b>
            `},
            {"text":  `
                Эти мероприятия охватывают организационную, технологическую, конструктивную и материальную подготовку ремонтно-восстановительных работ.
            `},
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/shema_11_3.png", "img_sign": " ", "left_img": true},
        ],
        "paragraph_3":[
            {"text2":  `
                <main>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
                        *{
                            font-family: 'Montserrat', sans-serif;
                        }
                        .three_eleven_upper_side_custom {
                            display: flex;
                            align-items: center;
                        }
                        .three_eleven_image_side_custom img{
                            max-width: 300px;
                            margin: 15px;
                        }
                        .three_eleven_header_custom {
                            margin: 15px;
                            color: #025ea1;
                        }
                        .three_eleven_text_side_custom {
                            display: flex;
                        }
                        .three_eleven_blue_number_custom {
                            font-size: 50px;
                            margin: 10px;
                            color: #025ea1;
                            font-weight: 900;
                            margin-left: 50px;
                        }
                        .three_eleven_topline_custom {
                            height: 60px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-top: 15px;
                            margin-right: 25px;
                        }
                        .three_eleven_line_custom{
                            height: 1px;
                            width: 100%;
                            background-color: #025ea1;
                        }
                        .three_eleven_text_custom {
                            margin-right: 25px;
                            font-size: clamp(16px, 1.5vw, 25px);
                        }
                        main > div:nth-child(5) {
                            margin-bottom: 100px;
                        }
                        .three_eleven_list_custom {
                            margin-top: 25px;
                            font-size: clamp(16px, 1.5vw, 25px);
                        }
                        .three_eleven_list_custom ol{
                            margin-top: 15px;
                            margin-left: 50px;
                        }
                        @media(max-width: 800px){
                            .three_eleven_upper_side_custom {
                                flex-direction: column;
                            }
                            .three_eleven_image_side_custom {
                                margin: 0 auto;
                                text-align: center;
                            }
                            .three_eleven_image_side_custom img{
                                margin: 0;
                                margin-top: 5px;
                                min-width: 250px;
                                width: 100%;
                                max-width: 500px;
                            }
                            .three_eleven_blue_number_custom {
                                margin-left: 5px;
                            }
                        }
                    </style>
                    <div class="three_eleven_wrapper_custom">
                        <div class="three_eleven_upper_side_custom">
                            <div class="three_eleven_image_side_custom">
                                <h2 class="three_eleven_header_custom">ОРГАНИЗАЦИОННАЯ ПОДГОТОВКА</h2>
                                <img src="./content/11_3_1.jpg" alt="1">
                            </div>
                            <div class="three_eleven_text_side_custom">
                                <div class="three_eleven_blue_number_custom">
                                    01
                                </div>
                                <div class="three_eleven_text_with_topline_custom">
                                    <div class="three_eleven_topline_custom">
                                        <div class="three_eleven_line_custom"></div>
                                    </div>
                                    <div class="three_eleven_text_custom">
                                        создает условия для выполнения технического обслуживания и различных видов ремонтов. Она включает определение объема необходимых ремонтных работ, подготовку соответствующей документации, составление графиков и смет, а также распределение ресурсов и специалистов, ответственных за выполнение ремонтных задач. Задачи организационной подготовки возлагаются на бюро планово-предупредительного ремонта (ППР) и бюро планирования запасных частей.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="three_eleven_list_custom">
                            <b>К процессу организационной подготовки относятся:</b>
                            <ol>
                                <li>учет и паспортизация эксплуатируемого оборудования;</li>
                                <li>учет и анализ его работы и простоя;</li>
                                <li>составление и контроль соблюдения графиков ППР оборудования;</li>
                                <li>систематическое изучение и анализ характера и причин выхода из строя отдельных деталей;</li>
                                <li>внедрение правил технической эксплуатации оборудования и контроль за их выполнением;</li>
                                <li>определение целесообразности капитального ремонта оборудования;</li>
                                <li>организация и участие в разработке нормативов затрат на ремонт по отдельным группам или видам оборудования;</li>
                                <li>выбор его наиболее эффективных организационных методов.</li>
                            </ol>
                        </div>
                    </div>
                    <div class="three_eleven_wrapper_custom">
                        <div class="three_eleven_upper_side_custom">
                            <div class="three_eleven_image_side_custom">
                                <h2 class="three_eleven_header_custom">ТЕХНОЛОГИЧЕСКАЯ ПОДГОТОВКА</h2>
                                <img src="./content/11_3_2.jpg" alt="1">
                            </div>
                            <div class="three_eleven_text_side_custom">
                                <div class="three_eleven_blue_number_custom">
                                    02
                                </div>
                                <div class="three_eleven_text_with_topline_custom">
                                    <div class="three_eleven_topline_custom">
                                        <div class="three_eleven_line_custom"></div>
                                    </div>
                                    <div class="three_eleven_text_custom">
                                        Технологическая подготовка включает разработку типовых процессов ремонта, выбор оптимальных режимов и необходимых инструментов и подъемно-транспортных средств.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="three_eleven_wrapper_custom">
                        <div class="three_eleven_upper_side_custom">
                            <div class="three_eleven_image_side_custom">
                                <h2 class="three_eleven_header_custom">КОНСТРУКТОРСКАЯ ПОДГОТОВКА</h2>
                                <img src="./content/11_3_3.jpg" alt="1">
                            </div>
                            <div class="three_eleven_text_side_custom">
                                <div class="three_eleven_blue_number_custom">
                                    03
                                </div>
                                <div class="three_eleven_text_with_topline_custom">
                                    <div class="three_eleven_topline_custom">
                                        <div class="three_eleven_line_custom"></div>
                                    </div>
                                    <div class="three_eleven_text_custom">
                                        Конструкторская подготовка включает создание детализированных чертежей для быстроизнашивающихся сменных деталей, что позволяет самостоятельно изготавливать детали на предприятии; подготовку ремонтных чертежей деталей с указанием способов восстановления; разработку документации на модернизацию оборудования, включая приспособления и оснастку; проектирование средств механизации для различных операций, что повышает эффективность и безопасность работы. <br> 
                                        Все эти аспекты обеспечиваются конструкторско-технологическим бюро.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="three_eleven_wrapper_custom">
                        <div class="three_eleven_upper_side_custom">
                            <div class="three_eleven_image_side_custom">
                                <h2 class="three_eleven_header_custom">МАТЕРИАЛЬНАЯ ПОДГОТОВКА</h2>
                                <img src="./content/11_3_4.jpg" alt="1">
                            </div>
                            <div class="three_eleven_text_side_custom">
                                <div class="three_eleven_blue_number_custom">
                                    04
                                </div>
                                <div class="three_eleven_text_with_topline_custom">
                                    <div class="three_eleven_topline_custom">
                                        <div class="three_eleven_line_custom"></div>
                                    </div>
                                    <div class="three_eleven_text_custom">
                                        Материальная подготовка включает меры по своевременному обеспечению наличия запасных частей, материалов и снабжению инструментом и приспособлениями. Вопросы материальной подготовки ремонтов контролирует  бюро материальной подготовки ремонтных работ.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            `},
        ],
    },
    "index_4":{
        "subtitle": "Установите соответствие между подразделениями отдела главного механика и разрабатываемой ремонтной документацией.",
        "step_of_popup": "Установите соответствие между подразделениями отдела главного механика и разрабатываемой ремонтной документацией.",
        "test":[
            {"type": 9},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": "blablabla"},
            {"description": " "},
            {"definitions": [
                "<p class='popup_zoom_plc zoom_paragraph'>Конструкторско-технологическое бюро по эксплуатации и ремонту оборудования</p>",
                "<p class='popup_zoom_plc zoom_paragraph'>Бюро планово-предупредительного ремонта (ППР)</p>",
                "Бюро планирования запасных частей и деталей",
                "Бюро материальной подготовки ремонтных работ",
            ]},
            {"answers": [
                "<p class='popup_zoom_plc zoom_paragraph'>Нормы расхода материалов и запасных частей на ремонт</p>",
                "<p class='popup_zoom_plc zoom_paragraph'>Годовой график планово-предупредительного ремонта оборудования</p>",
                "<p class='popup_zoom_plc zoom_paragraph'>Сводные заявки на запасные части, материалы и инструмент</p>",
                "<p class='popup_zoom_plc zoom_paragraph'>Ремонтные  чертежи</p>",
            ]},
            {"correct_answer_type_10": [4, 2, 1, 3]}
        ],
    },
    "index_5":{
        "subtitle": "Изучите виды технического обслуживания оборудования по периодичности выполнения.",
        "step_of_popup": "Изучите виды технического обслуживания оборудования по периодичности выполнения.",
        "paragraph_1":[
            {"text2":  `
                <div class="five_eleven_custom">
                    <img src="./content/shema_11_5.png" alt="11_5">
                    <p><b>Регламентированное (периодическое) техническое обслуживание (ТО).</b></p>
                </div><br>
            `},
            {"text":  `
                Регламентированное (периодическое) техническое обслуживание (ТО) – это комплекс мероприятий, которые должны проводиться в соответствии с технической документацией по достижении определённого пробега, времени эксплуатации или по установленному времяному интервалу, указанному в заранее составленном регламенте. В рамках данного процесса выполняются такие операции как замена смазки в агрегатах, замена некоторых критически важных быстроизнашивающихся и легко заменяемых деталей, корректировка и настройка ключевых рабочих машин (например, подъемных механизмов), плановое техническое обслуживание по специальному расписанию и регламенту, и другие сопутствующие работы. Также при этом выполняется проверка технического состояния оборудования с использованием диагностических средств и визуального осмотра. Процедуры, связанные с регламентированным ТО, требуют временной остановки работы машин и осуществляется согласно установленному графику. График ТО должен учитывать производственные циклы и загруженность оборудования.
            `},
        ],
        "paragraph_2":[
            {"text":  `
                <b class='blue_header'>График проведения технического обслуживания компрессора АСО-ВК37/8-6.5</b>
            `},
            {"text2":  `
                <table class='five_eleven_table_custom' border="1">
                    <tr>
                        <th rowspan="2"></th>
                        <th rowspan="2">Модель</th>
                        <th rowspan="2">Инв. <br> номер</th>
                        <th rowspan="2">Дата <br> последнего <br> КР</th>
                        <th colspan="12">Месяцы</th>
                    </tr>
                    <tr>
                        <th>январь</th>
                        <th>февраль</th>
                        <th>март</th>
                        <th>апрель</th>
                        <th>май</th>
                        <th>июнь</th>
                        <th>июль</th>
                        <th>август</th>
                        <th>сентябрь</th>
                        <th>октябрь</th>
                        <th>ноябрь</th>
                        <th>декабрь</th>
                    </tr>
                    <tr>
                        <td>Компрессор <br> воздушный</td>
                        <td>АСО-ВК37/8-6.5</td>
                        <td>1381</td>
                        <td>20.12.2023</td>
                        <td>ТО1<br>5-10</td>
                        <td>ТО2<br>20-25</td>
                        <td>ТО1<br>5-10</td>
                        <td>ТО3<br>20-25</td>
                        <td>ТО1<br>5-10</td>
                        <td>ТО2<br>20-25</td>
                        <td>ТО1<br>5-10</td>
                        <td>ТО4<br>20-25</td>
                        <td>ТО1<br>5-10</td>
                        <td>ТО2<br>20-25</td>
                        <td>ТО1<br>5-10</td>
                        <td>ТО3<br>20-25</td>
                    </tr>
                </table>
            `},
        ],
        "paragraph_3":[
            {"text2":  `
                <div class="five_eleven_custom">
                    <img src="./content/shema_11_5_3.png" alt="11_5_3">
                    <p><b>Нерегламентированное (текущее) техническое обслуживание.</b></p>
                </div><br>
            `},
            {"text":  `
                проводится без остановки машины заключается в осуществление ежесменного визуального контроля за состоянием оборудования, проверка на наличие утечек, износа деталей и других признаков неисправностей.  Выполняется контроль наличия смазки во всех точках и температурного режима. При необходимости производится настройка механизмов для обеспечения их правильной работы, что может включать в себя регулировку натяжения ремней, выравнивание осей и т.д. Основная задача текущего ТО выполнение всех предписаний по эксплуатации и обслуживанию машины, которые указаны в документации завода-изготовителя, контроль рабочих параметров, чтобы предотвратить перегрузки. Работы текущего ТО выполняются эксплуатационным и ремонтным персоналом предприятия.
            `},
        ],
        "paragraph_4":[
            {"text2":  `
                <div class="five_eleven_custom">
                    <img src="./content/shema_11_5_4.png" alt="11_5_3">
                    <p><b>Сезонное техническое обслуживание.</b></p>
                </div><br>
            `},
            {"text":  `
                Выполняют при подготовке оборудования к использованию в осенне-зимних и весенне-летних условиях.    
            `},
        ],
    },
    "index_6":{
        "subtitle": "Сопоставьте, к какому виду технического обслуживания относятся перечисленные виды работ.",
        "step_of_popup": "Сопоставьте, к какому виду технического обслуживания относятся перечисленные виды работ.",
        "test": [{
            "type": 7
        }, {
            "anwserArr2": ['Замена смазки', 'Регулировка зазоров', 'Замена фильтров', 'Проверка герметичности соединений', 'Контроль уровень масла']
        }, {
            "answersInCol": [['Замена смазки', 'Регулировка зазоров', 'Замена фильтров'], ['Проверка герметичности соединений', 'Контроль уровень масла']]
        }, {
            "columns": ['Регламентированное техническое обслуживание', 'Нерегламентированное техническое обслуживание']
        }],
    },
    "index_7":{
        "subtitle": "Изучите виды работ при текущем и капитальном ремонте.",
        "step_of_popup": "Изучите виды работ при текущем и капитальном ремонте.",
        "paragraph_1":[
            {"text":  `
                Перечень работ, которые необходимо выполнить во время текущего ремонта конкретного оборудования, разрабатывается руководителем отдела ремонта (заместителем начальника цеха по оборудованию, механиком или мастером участка, а также мастером РМЦ). Этот перечень проходит утверждение со стороны руководителей инженерных служб компании и становится обязательным приложением к ремонтному журналу.
            `},
        ],
        "paragraph_2":[
            {"text":  `
                <b class='blue_header'>Текущий ремонт</b>
            `},
            {"image": true, "image_path": "./content/11_7_1.jpg", "img_sign": " ", "left_img": true},
            {"text":  `
                Текущий ремонт обеспечивает стабильную работу оборудования до следующего планового ремонта. Работы по текущему ремонту осуществляются обслуживающим персоналом и специализированными ремонтными службами на месте установки оборудования. Ремонт выполняют регулярно по графику во время работы предприятия при плановых остановках отдельных видов оборудования, цехов, поточных линий или всего предприятия.
            `},
            {"text":  `
                <p><b>Список основных мероприятий, выполняемых при проведении текущего ремонта:</b></p><br>
                <ul style='margin-left: 25px;'>
                    <li>проведение операций периодического технического обслуживания;</li>
                    <li>замена деталей и узлов, подверженных быстрому износу;</li>
                    <li>восстановление футеровок и антикоррозионных покрытий, покраска;</li>
                    <li>смена масла в картерных системах смазки;</li>
                    <li>замена набивок сальников и прокладок, ревизия арматуры;</li>
                    <li>настройка зазоров и проверка на соответствие нормам;</li>
                    <li>выверка отдельных узлов;</li>
                    <li>ремонт крепежных элементов, систем смазки и ограждений;</li>
                    <li>настройка регулирующих механизмов и устройств, проверка электрооборудования.</li>
                </ul>
            `},
            {"image": true, "image_path": "./content/11_7_2.png", "img_sign": " ", "left_img": false},
            {"text":  `
                <br><b class='blue_header'>Капитальный ремонт</b><br><br>
                В ходе капитального ремонта машину, как правило полностью разбирают, после чего узлы и детали либо заменяются, либо восстанавливаются. Затем выполняется сборка, регулировка и испытание. Конкретный список операций, которые должны быть выполнены во время капитального ремонта определенного вида оборудования, определяется в дефектной ведомости.
            `},
            {"text":  `
                <b>В рамках капитального ремонта выполняют следующие основные работы:</b>
                <ul style='margin-left: 25px;'>
                    <li>мероприятия в объеме текущего ремонта;</li>
                    <li>замена или восстановление всех изношенных деталей и узлов;</li>
                    <li>полная или частичная замена изоляции, футеровки, противокоррозионной защиты;</li>
                    <li>выверка и центровка машины;</li>
                    <li>послеремонтные испытания и т. п.</li>
                </ul>
            `},
        ],
        "paragraph_3":[
            {"text":  `
                <b class='blue_header'>Модернизация оборудования</b>
            `},
            {"text":  `
                Капитальный ремонт может быть осуществлён в сочетании с полной или частичной модернизацией оборудования.
            `},
            {"text":  `
                <b>При модернизации оборудования решаются следующие задачи:</b>
                <ul style='margin-left: 25px;'>
                    <li>увеличение производительности оборудования;</li>
                    <li>автоматизация процессов производства и технологических систем;</li>
                    <li>снижение затрат и упрощение эксплуатации;</li>
                    <li>повышение надежности работы оборудования и уменьшение затрат на ремонт;</li>
                    <li>создание более комфортных условий труда и улучшение безопасности на рабочем месте.</li>
                </ul>
            `},
        ],
    },
    "index_8":{
        "subtitle": "Какие работы из представленного перечня выполняются при текущем ремонте.",
        "step_of_popup": "Какие работы из представленного перечня выполняются при текущем ремонте",
        "test": [{
            "type": 1
        }, {
            "answers": [
                "Замена смазки", 
                "Замена подшипников", 
                "Ремонт кожуха", 
                "Заварка трещин корпуса", 
                "Замена уплотнений подшипниковых узлов", 
                "Ремонт системы циркуляционной смазки"
            ]
        }, {
            "correct_answer": [0,2,4,5]
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }],
    },
    "index_9":{
        "subtitle": "Рассмотрите ремонтные нормативы.",
        "step_of_popup": "Рассмотрите ремонтные нормативы.",
        "paragraph_1":[
            {"text":  `
                <b>Структура ремонтного цикла</b> – перечень и последовательность выполнения работ по осмотру и ремонту в период ремонтного цикла (от ввода оборудования в эксплуатацию до первого капитального ремонта или между двумя капитальными ремонтами). Из структуры межремонтного цикла видно, сколько и в какой последовательности проводится тот или иной вид ремонта или осмотра.<br><br>
                <p>
                    <b class='blue_header'>Например:</b><br>
                    Структура ремонтного цикла К-Т-Т-Т-Т-К показывает, что между двумя капитальными ремонтами производится 4 текущих ремонта оборудования. Проще это записывается К4ТК.
                </p>
            `},
            {"text2":  `<div class='nine_eleven_underline_custom'></div>`},
            {"text2":  `
                <p style='margin-right: 25px;'><b>Продолжительность межремонтного цикла  (межремонтный цикл Т<sub>мрц</sub>)</b> – это продолжительность работы оборудования от ввода его в эксплуатацию до первого капитального ремонта или между двумя капитальными ремонтами. Продолжительность межремонтного цикла измеряется в машино-часах, т.е. это рабочее время оборудования, когда оно действительно функционирует и производит полезную работу. Время остановки оборудования не учитывается.</p>
                <p style='margin-left: 25px;'>
                    <b class='blue_header'>Например:</b><br>
                    Продолжительность межремонтного цикла Т<sub>мрц</sub> = 6000 маш-час. <br>
                    <img width='150px' src="./content/shema_11_9_1.png" alt="11_9_1">
                </p>
            `},
            {"text2":  `<div class='nine_eleven_underline_custom mtmin50'></div>`},
            {"text2":  `
                <p style='margin-right: 25px;'><b>Продолжительность межремонтного периода (межремонтный период Т<sub>мрп</sub>)</b> – период работы оборудования между двумя ближайшими плановыми ремонтами. Продолжительность межремонтного периода измеряется в машино-часах.</p>
                <p style='margin-left: 25px;'>
                    <b class='blue_header'>Например:</b><br>
                    Продолжительность межремонтного периода Т<sub>мрп</sub> = 1200 маш-час. <br>
                    <img width='150px' src="./content/shema_11_9_2.png" alt="11_9_2">
                </p>
            `},
            {"text2":  `<div class='nine_eleven_underline_custom mtmin50'></div>`},
            {"text2":  `
                <p style='margin-right: 25px;'><b>Срок службы</b> – период с начала введения машины в эксплуатацию до ее списания, измеряемый в годах календарного времени, называ­ется сроком службы.</p>
                <p style='margin-left: 25px;'>
                    <b class='blue_header'>Например:</b><br>
                    Срок службы оборудования 7,2 года.<br>
                    <img width='150px' src="./content/shema_11_9_2.png" alt="11_9_2">
                </p>
            `},
            {"text2":  `<div class='nine_eleven_underline_custom mtmin50'></div>`},
            {"text2":  `
                <p style='margin-right: 25px;'><b>Трудоемкость ремонтных работ</b> – это показатель, используемый для определения количества труда, необходимого для выполнения того или иного вида ремонта. Трудоемкость показывает, за какое время выполняется операция. <br>
                Трудоемкость ремонтных операций зависит от вида и слож­ности ремонта, от конструктивных и технологических особенно­стей, а также размеров агрегата. По этим признакам установ­лены категории сложности ремонта. Чем сложнее и крупнее агрегат и чем он точнее, тем выше категория сложности его ре­монта.</p>
            `},
            {"text2":  `<div class='nine_eleven_underline_custom mtmin50'></div>`},
            {"text2":  `
                <p style='margin-right: 25px;'><b>Категория ремонтной сложности R</b> – это степень сложности ремонта оборудования. Категория ремонтной сложности оборудования определяется по числу единиц сложности ремонта, присвоенных данной группе оборудования путем сопоставления его с принятым эталоном – условным оборудованием.</p>
            `},
            {"text2":  `<div class='nine_eleven_underline_custom mtmin50'></div>`},
            {"text2":  `
                <p style='margin-right: 25px;'><b>Продолжительность простоя оборудования</b> в ремонте зависит от вида ремонта, ремонтосложности оборудования, численности ремонтной бригады, технологии ремонта и организационно-технических условий выполнения ремонтных работ. Простои оборудования учитываются с момента остановки агрегата на ремонт до момента приемки его из ремонта контролером ОТК по акту.</p>
            `},
            {"text2":  `<div class='nine_eleven_underline_custom mtmin50'></div>`},
            {"text2":  `
                    <p style='margin-right: 25px;'><b class='blue_header'>Объемы работ при обслуживании и ремонтах оборудования, структура и длительность межремонтных циклов и межремонтных периодов бурового и нефтепромыслового оборудования приве­дены в нормативной литературе.</b></p><br>
                </p>
            `},
        ],
    },
    "index_10":{
        "subtitle": "Для оборудования  с продолжительность межремонтного цикла Тмрц = 4200 маш-час. и продолжительностью межремонтного периода Тмрп = 600 маш-час. определить количество текущих ремонтов в структуре ремонтного цикла.",
        "step_of_popup": "Для оборудования  с продолжительность межремонтного цикла Тмрц = 4200 маш-час. и продолжительностью межремонтного периода Тмрп = 600 маш-час. определить количество текущих ремонтов в структуре ремонтного цикла.",
        "test": [{
            "type": 2
        }, {
            "description": "Для оборудования  с продолжительность межремонтного цикла Т<sub>мрц</sub> = 4200 маш-час. и продолжительностью межремонтного периода Т<sub>мрп</sub> = 600 маш-час. определить количество текущих ремонтов в структуре ремонтного цикла."
        }, {
            "test_with_text": "{6}"
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }],
    },
    "index_11":{
        "subtitle": "Изучите правила освобождения пострадавшего от действия электрического тока при напряжении cвыше 1000 В и эвакуации пострадавшего из зоны действия электрического тока.",
        "step_of_popup": "Изучите правила освобождения пострадавшего от действия электрического тока при напряжении cвыше 1000 В и эвакуации пострадавшего из зоны действия электрического тока.",
        "paragraph_1":[
            {"text":  `
                <b>Построение графиков планово-предупредительного ремонта (ППР) является неотъемлемой частью управления техническим обслуживанием и ремонтом (ТОиР).</b>
            `},
            {"text":  `
                ППР оборудования составляется на ежегодной основе с ежемесячной корректировкой на основании регламентов и нормативов. Основными нормативами при построении графиков ППР являются продолжительность межремонтного цикла и  продолжительность межремонтного периода. Учет машино-часов работы оборудования ведется в журнале «Учет часов наработки». <br><br>
                В отдельных случаях,  когда учет отработанного оборудованием времени не налажен, продолжительность ремонтных циклов определяется по календарному времени эксплуатации оборудования с учетом плановых коэффициентов его использования по машинному и по календарному времени. <br><br>
                <b class='blue_header'>Коэффициент использования оборудования по машинному времени</b> определяется отношением машинного времени к времени, нахождении оборудования в работе: <br><br>
                <p class='math_equation'>$$k_{маш}=T_{маш}/T_{раб}$$</p>
                Время нахождения оборудования в работе скла­дывается из машинного времени и времени на плановое обслуживание.
                <b class='blue_header'>Коэффициент использования оборудования по календарному времени </b>определяется отношением суммарного времени нахождения оборудования в работе к общему календарному времени (с учетом времени простоя в текущем и капитальном ремонте):<br><br>
                <p class='math_equation'>$$k_{кал}=T_{раб}/T_{кал}$$</p>
                В этом случае для построения графика ППР используют продолжительность межремонтного календарного цикла <span class='math_equation'>$Т_{мрцк}$</span> и продолжительность межремонтного календарного периода <span class='math_equation'>$Т_{мрпк}$</span>, которые измеряются в месяцах.
                <div class='math_equation_container_custom'><p class='math_equation'>$$T_{мрпк}=\\frac{T_{мрп}}{T_{цм}\\cdot k_{маш}\\cdot k_{кал}};\\quad T_{мрцк}=\\frac{T_{мрц}}{T_{цм}\\cdot k_{маш}\\cdot k_{кал}}$$</p></div>
                где <span class='math_equation'>$Т_{цм}$</span> – количество часов, отработанных оборудованием за один месяц. 
                <br><br>
                При 3-х сменной работе оборудования <span class='math_equation'>$Т_{цм}$</span> = 720 часов;<br> при 2-х сменной работе – <span class='math_equation'>$Т_{цм}$</span> = 480 часов;<br> при односменной работе – <span class='math_equation'>$Т_{цм}$</span> = 240 часов.
                <br><br><b class='blue_header'>Например:</b><br><br>
                <span class='math_equation'>$Т_{мрц}$</span> = 3600 маш-час;<br> <span class='math_equation'>$Т_{мрп}$</span> = 900 маш-час. При двухсменной работе машины и заданных <span class='math_equation'>$k_{маш}$</span> = 0,98;<br> <span class='math_equation'>$k_{кал}$</span> = 0,86 календарные циклы определяются
                <div class='math_equation_container_custom_1'><p class='math_equation'>$$T_{мрпк}=\\frac{900}{240\\cdot 0,98\\cdot 0,86}=4,4\\quad месяца;\\quad T_{мрцк}=\\frac{3600}{240\\cdot 0,98\\cdot 0,86}=17,8\\quad месяцев;$$</p></div>
            `},
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/shema_11_11_1.png", "img_sign": " ", "left_img": true},
        ],
        "paragraph_3":[
            {"text": `В верхней части ячеек графика отмечены запланированные дни вывода оборудования в ремонт, в нижней – фактические.`},
        ],
    },
    "index_12":{
        "subtitle": "Определите, в каком месяце необходимо выполнить капитальный ремонт.",
        "step_of_popup": "Определите, в каком месяце необходимо выполнить капитальный ремонт.",
        "test": [{
            "type": 8
        }, {
            "description": `Для заданных ремонтных нормативов определить, в каком месяце необходимо выполнить капитальный ремонт.<br>
            <span class='math_equation'>$Т_{мрц}$</span> = 6480 маш-час;<br> <span class='math_equation'>$Т_{мрп}$</span> = 2160 маш-час;<br> <span class='math_equation'>$k_{маш}$</span> = 0,99;<br> <span class='math_equation'>$k_{кал}$</span> = 0,92. <br>
            <img width='100%' src="./content/shema_11_12_1.png" alt="1">
            `// 
        }, {
            "test_with_text_3": "<b class='blue_header'>Ответ:</b>&nbsp Капитальный ремонт необходимо выполнить {=1}"
        }, {
            "options_test_with_text_3": {
                "1": ["в январе", "в феврале", "в марте", "в апреле", "в мае", "в июне", "в июле", "в августе", "в сентябре", "в октябре", "в ноябре", "в декабре", "в текущем году не будет"]
            }
        }, {
            "correctAnswers_test_with_text_3": {
                "1": "в октябре",
            }
        }, {
            "image": false,
            "image_path": "./content/shema_11_12_1.png"
        }],
    },
    "index_13":{
        "subtitle": "Изучите подготовку оборудования к ремонту.",
        "step_of_popup": "Изучите подготовку оборудования к ремонту.",
        "paragraph_1":[
            {"text2": `<img style='max-width: 1000px;' src="./content/11_13_1.png" alt="1">`},
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/shema_11_13_2.png", "img_sign": " ", "left_img": true},
            {"text": `После предварительной очистки проводится внешний осмотр оборудования. Внешним осмотром устанавливают комплектность всех механизмов агрегата, определяют наличие неисправностей, а также задиров, забоин, вмятин, трещин, изломов, изгибов и других дефектов деталей, видимых без разборки механизмов, кроме того, оценивают состояние смазочных и защитных устройств, состояние окраски и т. п.`},
            {"text": `Сдача оборудования в текущий и капитальный ремонты, выполняемые силами предприятия, оформляется записью в ремонтном журнале, а сдача в капитальный ремонт, выполняемый подрядными организациями, оформляется актом.`},
            {"text": `Сдает машину в ремонт инспектор ОГМ совместно с механиком производственного цеха, принимает работник технического контроля ремонтного предприятия, проводя внешний осмотр, прослушивание отдельных агрегатов и механизмов, пробуя их в работе. Наружным осмотром определяют комплектность оборудования, механические и другие аварийные повреждения, состояние окраски и т. п. По результатам приемки оборудования в ремонт составляется приемо-сдаточный акт в двух экземплярах. В акт заносят результаты внешнего осмотра и испытаний на холостом ходу, а также замечания работающего на машине специалиста.`},
        ],
        "paragraph_3":[
            {"image": true, "image_path": "./content/shema_11_13_3.png", "img_sign": " ", "left_img": true},
            {"text": `После предварительной очистки проводится внешний осмотр оборудования. Внешним осмотром устанавливают комплектность всех механизмов агрегата, определяют наличие неисправностей, а также задиров, забоин, вмятин, трещин, изломов, изгибов и других дефектов деталей, видимых без разборки механизмов, кроме того, оценивают состояние смазочных и защитных устройств, состояние окраски и т. п.`},
            {"text": `– заводской паспорт, содержащий данные по эксплуатации и ремонту, с указанием вида ремонта, времени его выполнения и краткого содержания, а также накладные на узлы, замененные при эксплуатации машины, и данные об отработанном времени и объеме выполненных работ;`},
            {"text": `– акт приемки машины из предыдущего ремонта;`},
            {"text": `– акт о техническом состоянии оборудования, а в случае аварийного выхода из строя дополнительно акт об аварии.`},
            {"text": `<b>Паспорт оборудования</b> относится к категории эксплуатационных документов, регламентированных стандартом  ГОСТ Р 2.601-2019 «ЕСКД. Эксплуатационные документы». Паспорт – документ, содержащий сведения, удостоверяющие гарантии изготовителя, значения основных параметров и характеристик (свойств) изделия, а также сведения о сертификации и утилизации изделия. Остальные документы не регламентированы и их форма и содержание определяются предприятием.`},
        ],
    },
    "index_14":{
        "subtitle": "Какая документация предъявляется при  сдаче машины в ремонт? <br> <b class='grey_header'>(Отметьте все правильные варианты ответа)</b>",
        "step_of_popup": "Какая документация предъявляется при  сдаче машины в ремонт? <br> <b class='grey_header'>(Отметьте все правильные варианты ответа)</b>",
        "test": [{
            "type": 1
        }, {
            "answers": [
                "Заводской паспорт", 
                "Акт о техническом состоянии машины", 
                "Технические условия на ремонт", 
                "Дефектные ведомости", 
                "Акт приемки машины из предыдущего ремонта"
            ]
        }, {
            "correct_answer": [0,1,4]
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }],
    },
    "index_15":{
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result":[]
    },
}
window.dataLoaded = true;
