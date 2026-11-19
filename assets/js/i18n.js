/* TverDEX — переключатель языка RU / EN / 中文
   Русский текст лежит прямо в HTML. Скрипт подменяет его на лету по словарю ниже.
   Если строки нет в словаре — она остаётся на русском (так сразу видно, что не переведено).
   Чтобы поправить перевод: найдите русскую фразу в словаре T и измените вторую/третью часть:
   "русский текст": ["English", "中文"]
   ВАЖНО: русский ключ должен совпадать с текстом в HTML буква в букву (пробелы по краям и двойные пробелы не важны).
   Ссылка сразу на нужном языке: ?lang=en  или  ?lang=zh  (например, index.html?lang=zh) */
(function () {
  var T = {
 /* ===== Общее: шапка, меню, подвал ===== */
 "Главная": ["Home", "首页"],
 "О компании": ["About Us", "关于我们"],
 "Наши преимущества": ["Our Advantages", "我们的优势"],
 "Продукция": ["Products", "产品"],
 "Ключевые технологии": ["Key Technologies", "核心技术"],
 "Новости": ["News", "新闻"],
 "Контакты": ["Contacts", "联系我们"],
  "Почта:": ["Email:", "邮箱："],
 "Телефон:": ["Phone:", "电话："],
 "Связаться с нами": ["Contact Us", "立即咨询"],
 "Меню": ["Menu", "菜单"],
 "ЗАПЧАСТИ ДЛЯ ДРОБИЛЬНОГО ОБОРУДОВАНИЯ": ["SPARE PARTS FOR CRUSHING EQUIPMENT", "破碎设备配件"],
 "ДРОБИЛЬНОЕ ОБОРУДОВАНИЕ И КОМПОНЕНТЫ": ["CRUSHING EQUIPMENT AND COMPONENTS", "破碎设备及零部件"],
 "Собственное производство запчастей для дробильного оборудования.": ["Our own production of spare parts for crushing equipment. ", "自主生产破碎设备配件。"],
 "Компания": ["Company", "公司"],
 "Запчасти": ["Spare Parts", "配件"],
 "Каталог запчастей": ["Spare Parts Catalog", "配件目录"],
 "Популярные категории": ["Popular Categories", "热门类别"],
 "ключевая технология": ["Key technology", "核心技术"],
 "Запросить подбор": ["Request a Selection", "咨询选型"],
 "Склад: уточняется": ["Warehouse: to be confirmed", "仓库：待定"],
 "© 2026 TverDEX. Все права защищены.": ["© 2026 TverDEX. All rights reserved.", "© 2026 TverDEX 版权所有。"],
 "Шаблон сайта — контент будет заполнен под ваши данные": ["Site template — content will be filled in with your data", "网站模板——内容将根据您的资料填充"],
 "More info(later)": ["More info (coming later)", "更多信息（稍后补充）"],

 /* ===== Общее: блок CTA и кнопки ===== */
 "Нужна запчасть для дробилки?": ["Need a spare part for a crusher?", "需要破碎机配件？"],
 "Оставьте заявку — ответим в течение рабочего дня и подскажем сроки поставки.": ["Leave a request — we will reply within one business day and tell you the delivery time.", "提交需求——我们将在一个工作日内回复并告知交货周期。"],
 "Не нашли нужную деталь?": ["Can't find the part you need?", "没找到所需配件？"],
 "Пришлите фото, чертёж или артикул — подберём и изготовим.": ["Send a photo, drawing or part number — we will select and make it.", "请发送照片、图纸或编号——我们将为您选配并生产。"],
 "Запросить стоимость": ["Request a price", "咨询价格"],
 "Фото": ["Photo", "照片"],
 "Фото шапки": ["Header photo", "头图照片"],

 /* ===== Главная ===== */
 "TverDEX — запчасти для дробильного оборудования собственного производства": ["TverDEX — Spare Parts for Crushing Equipment, Our Own Production", "TverDEX — 自主生产的破碎设备配件"],
 "TverDEX — собственный завод по производству запчастей для дробилок и мельниц под заказ. Подбор размера по фото, поставки в Россию.": ["TverDEX is an in-house factory making spare parts to order for crushers and mills. Size selection by photo, supplies to Russia.", "TverDEX 是自有工厂，为破碎机和磨机定制生产配件。凭照片确定尺寸，供货俄罗斯。"],
 "СОБСТВЕННЫЙ ЗАВОД В КИТАЕ": ["OWN FACTORY IN CHINA", "中国自有工厂"],
 "ТЕХПОДДЕРЖКА": ["TECHNICAL SUPPORT", "技术支持"],
 "ПРОИЗВОДСТВО": ["PRODUCTION", "生产"],
 "Запчасти для дробилок и мельниц": ["Spare parts for crushers and mills", "破碎机和磨机配件"],
 "любых марок под заказ": ["of any brand, made to order", "适配任意品牌，定制生产"],
 "Профессиональная техническая": ["Professional technical", "专业技术"],
 "поддержка": ["support", "支持"],
 "Собственный завод —": ["Our own factory —", "自有工厂——"],
 "полный цикл производства": ["full production cycle", "全流程生产"],
 "Получить расчёт стоимости": ["Get a Price Quote", "获取报价"],
 "Прислать фото": ["Send a photo", "发送照片"],
 "Как мы работаем": ["How We Work", "合作流程"],
 "Подробнее о компании": ["More about the company", "了解公司详情"],
 "Предыдущее фото": ["Previous photo", "上一张"],
 "Следующее фото": ["Next photo", "下一张"],
 "Прокрутить вниз": ["Scroll down", "向下滚动"],
 "TverDEX — производитель износостойких запчастей для дробилок и мельниц": ["TverDEX — manufacturer of wear-resistant spare parts for crushers and mills", "TverDEX —— 破碎机和磨机耐磨配件制造商"],
 "Мы производим износостойкие литые детали на собственном заводе в Китае — от литья и термообработки до контроля качества. Изготавливаем детали по чертежам, артикулам и фотографиям заказчика.": ["We make wear-resistant cast parts at our own factory in China — from casting and heat treatment to quality control. We make parts from the customer's drawings, part numbers and photos.", "我们在中国自有工厂生产耐磨铸件——从铸造、热处理到质量控制。可按客户的图纸、编号和照片制作配件。"],
 "Предлагаем индивидуальный подбор запчастей, прозрачные условия сотрудничества и профессиональную поддержку на русском языке.": ["We offer individual parts selection, transparent terms of cooperation and Professional technical support.", "我们提供个性化配件选型、透明的合作条件和专业的技术支持。"],
 "Собственное производство": ["Own production", "自有生产"],
 "полный цикл изготовления и контроль качества": ["full manufacturing cycle and quality control", "全流程制造与质量控制"],
 "Изготовление на заказ": ["Made to order", "定制生产"],
 "подбор деталей по чертежам, артикулам.": ["parts selection by drawings, part numbers .", "按图纸、编号选配配件。"],
 "Соответствие различным требованиям": ["Meeting Different Requirements", "满足不同要求"],
 "Подробнее о компании →": ["More about the company →", "了解公司详情 →"],
 "Более 40 категорий запчастей на собственном производстве": ["40+ categories of spare parts from our own production", "自有工厂生产 40 多个类别的配件"],
 "Плита": ["Plate", "鄂板"],
 "Футеровка": ["Liner", "衬板"],
 "Броня": ["Mantle / wear armor", "轧臼壁和破碎壁"],
 "Била": ["Blow bars", "板锤"],
 "било": ["impact blow bar", "板锤"],
 "Мельницы": ["Mills", "磨机"],
 "Грохота": ["Screens", "筛分设备"],
 "Другие запчасти": ["Other components", "其他配件"],
 "Плита отражательная": ["Impact plate", "反击板"],
 "Плита дробящая": ["Crushing plate", "破碎板"],
 "Втулка": ["Bushing", "衬套"],
 "Коронка": ["Tooth tip", "齿尖"],
 "Клин": ["Wedge", "楔块"],
  "Молотки": ["Hammers", "锤头"],
 "Смотреть весь каталог запчастей →": ["View the full spare parts catalog →", "查看完整配件目录 →"],
 "Просмотр фото": ["Photo viewer", "图片查看"],
 "Закрыть": ["Close", "关闭"],
 "Назад": ["Previous", "上一张"],
 "Вперёд": ["Next", "下一张"],
 "Почему карьеры и ГОКи выбирают TverDEX": ["Why quarries and mining plants choose TverDEX", "采石场和矿山企业为何选择 TverDEX"],
 "Изготавливаем запчасти на своём заводе — контролируем качество и сроки без посредников.": ["We make spare parts at our own factory — controlling quality and lead times with no intermediaries.", "配件由自有工厂生产——无中间商，质量和交期可控。"],
 "Изготовление под заказ": ["Made to Order", "定制生产"],
 "В соответствии с различными требованиями мы предлагаем индивидуальную продукцию.": ["We offer customized products to meet different requirements.", "我们根据不同需求提供定制化产品。"],
 "Подбор по вашей технике": ["Selection for your equipment", "按您的设备选型"],
 "Пришлите марку и модель дробилки — подберём совместимые запчасти нашего производства.": ["Send the brand and model of your crusher — we will select compatible spare parts from our production.", "请发送破碎机的品牌和型号——我们将选配适配的自产配件。"],
 "Русскоязычная поддержка": ["Russian-language support", "俄语支持"],
 "Мы располагаем первоклассной командой профессиональных технических специалистов и приглашаем известных экспертов и учёных для проведения лекций и обучения наших руководителей и технических специалистов, благодаря чему производимые нами отливки могут удовлетворять различные потребности клиентов.": [" We have a top-tier professional technical team, and invite renowned experts and scholars to give lectures and training to our management and technical personnel, so that the castings we produce can meet the different needs of our customers.", "拥有拔尖的专业技术团队，邀请著名专家学者为公司管理人员和技术人员授课讲学，生产的铸件能够满足客户的不同需求"],
 "Мы выходим на рынок с более передовыми технологиями.": ["We are entering the market with more advanced technologies.", "我们带着更加先进的技术进入市场"],
 "Наша команда разработала более прочные и износостойкие стержни из сплава — после многолетней практики и доработок продукт готов, в 2025 году получил хорошие отзывы. База TverDEX делает комплектующие для дробилок и мельниц почти всех брендов под заказ (OEM) и поставляет часть со склада (OBM); поддерживаем разные способы оплаты и валюты. Сочетаем заказ и склад, делаем ставку на продукцию, снижающую затраты и повышающую эффективность, опираясь на систематизированный контроль качества и профессиональную техкоманду — и продолжаем улучшать срок службы и прочность изделий.": ["Our team has developed stronger, more wear-resistant alloy rods. After years of field testing and refinement, the product is mature and received positive user feedback in 2025. The TverDEX production base produces OEM parts to order for crushers and mills of almost all brands, and also offers some products from stock (OBM) for fast delivery; we support multiple payment methods and currencies. We combine custom production with stock supply and focus on cost-reducing, efficiency-boosting products, backed by systematic quality control and a professional technical team — while continuing to improve service life and durability.", "我们的技术团队研发了更坚固、更耐磨的合金棒复合产品，真正的做到了降本增效，改善了产品的使用寿命和坚固性——依托系统化的质检结合多年实践改进，产品已经投入中国市场，在2025年获得了良好反馈。TverDEX生产基地为几乎所有品牌的破碎机和磨机按订单（OEM）生产配件，并提供部分现货（OBM）；支持多种付款方式和货币。"],
 "Производство — Китай": ["Production — China", "生产——中国"],
 "Контроль качества на каждом этапе": ["Quality inspection at every stage", "每一环节质量检验"],
 "Подробнее о преимуществах →": ["More about our advantages →", "了解更多优势 →"],
 "Наши технологии": ["Our Technologies", "我们的技术"],
 "Высокопрочные сплавные стержни": ["High-strength alloy rods", "高强度合金棒"],
 "Отливки для дробящих плит, брони чаши, подвижного конуса, бандажа валка...": ["Castings for jaw plates, bowl liners, mantle (moving cone) liners, roll shells/tyres, etc.", "用于颚板、轧臼壁,破碎壁、动锥衬板、辊皮等的铸件……"],
 "Процесс горячей запрессовки": ["Hot shrink-fitting process", "我公司的热镶嵌入工艺"],
 "Технология внедрения нашей компании обеспечивает металлургическое соединение.": ["Our company's embedding technology provides a metallurgical bond.", "我公司的嵌入工艺可实现冶金结合。"],
 "Готовая деталь": ["Finished part", "成品配件"],
 "Наша технология комплексна, зрела и обеспечивает масштабное производство с контролируемой себестоимостью.": ["Our technology is comprehensive and mature, and enables large-scale production with controlled cost.", "我们的技术系统成熟，可实现规模化生产，成本可控。"],
 "Надежная защита от износа": ["Reliable wear protection", "可靠的耐磨防护"],
 "Готовое изделие с армирующими легированными стержнями.Износостойкость значительно повышена, а износ равномерный.": ["Finished product with reinforcing alloy rods.Wear resistance is greatly improved, and wear is uniform.", "带增强合金棒的成品。耐磨性大大提升，且磨损均匀。"],
 "Подробнее о технологиях →": ["More about our technologies →", "了解更多技术 →"],
 "Последние новости компании": ["Latest company news", "公司最新动态"],
 "Расширение каталога запчастей, новости производства, участие в отраслевых выставках.": ["Catalog expansion, production news, participation in industry exhibitions.", "目录扩充、生产动态、参加行业展会。"],
 "TverDEX выходит на зарубежные рынки": ["TverDEX enters foreign markets", "TverDEX 进入海外市场"],
 "Начинаем приём заявок на изготовление запчастей под заказ для зарубежных клиентов (Центральная Азия и Россия).": ["We are starting to accept orders for made-to-order spare parts for foreign customers (Central Asia and Russia).", "开始接受海外客户（中亚和俄罗斯）的配件定制订单。"],
 "ноябрь 2026": ["November 2026", "2026年11月"],
 "TverDEX примет участие в отраслевой выставке": ["TverDEX to take part in an industry exhibition", "TverDEX 将参加行业展会"],
 "В ноябре наша компания примет участие в выставке Bauma в Шанхае. Будем рады вашему визиту": ["In November our company will take part in the Bauma exhibition in Shanghai. We will be glad to see you.", "11 月，我公司将参加上海宝马展（Bauma）。欢迎莅临参观。"],
 "Следите за новостями": ["Stay tuned for news", "敬请关注最新动态"],
 "TverDEX готовится к участию в международной выставке за рубежом. Подробности и даты проведения уточняйте у нас!": ["TverDEX is preparing to take part in an international exhibition abroad. Ask us for details and dates!", "TverDEX 正在筹备参加海外国际展会。详情和日期请向我们咨询！"],
 "Все новости →": ["All news →", "全部新闻 →"],
 "Обновление": ["upgrade", "更新升级"], 
  "Более прочный продукт": ["A more durable product", "更耐磨的产品"],
"Полный контроль качества на всех этапах,":[" Full-process quality inspection,","全程质检"],
"контролируемое качество.":["controllable quality.","品质可控"],
"Контроль качества":["Quality control","质量把控"],

 /* ===== О компании ===== */
 "О компании — TverDEX": ["About Us — TverDEX", "关于我们 — TverDEX"],
 "TverDEX — собственный завод по производству запчастей для дробильного оборудования, выходящий на российский рынок.": ["TverDEX is an in-house factory producing spare parts for crushing equipment, entering the Russian market.", "TverDEX 是一家自有工厂，生产破碎设备配件，正在进入俄罗斯市场。"],
 "Собственный завод запчастей для дробильного оборудования": ["Our own factory of spare parts for crushing equipment", "破碎设备配件自有工厂"],
 "Кто мы": ["Who We Are", "公司简介"],
 "Компания TverDEX специализируется на производстве износостойких литых деталей для горнодобывающей и дорожно-строительной техники. Основная продукция включает отливки из высокомарганцовистой и высокохромистой стали, детали для дробильного оборудования, а также изделия из углеродистой и легированной стали.": ["TverDEX specializes in wear-resistant cast parts for mining and road-construction machinery. Main products include castings made of high-manganese and high-chromium steel, parts for crushing equipment, and products made of carbon and alloy steel.", "TverDEX 专注于生产矿山和筑路机械用耐磨铸件。主要产品包括高锰钢和高铬钢铸件、破碎设备配件，以及碳钢和合金钢制品。"],
 "Производственная база TverDEX включает две производственные площадки общей площадью около 8,7 га. Общая площадь производственных помещений составляет 60 000 м². В компании работает более 350 сотрудников, в том числе свыше 80 технических специалистов и сотрудников управленческого персонала.": ["TverDEX's production base includes two sites with a total area of about 8.7 ha. The total area of production buildings is 60,000 m². The company employs more than 350 people, including over 80 technical specialists and management staff.", "TverDEX 的生产基地包括两个厂区，总占地面积约 8.7 公顷，生产厂房总面积 60,000 平方米。公司员工 350 多人，其中技术和管理人员 80 多人。"],
 "Компания оснащена современным оборудованием и использует три основные технологии литья: литьё в песчано-смоляные формы на жидком стекле, литьё по газифицируемым моделям и точное литьё по выплавляемым моделям. Продукция — износостойкие детали для горнодобывающего дробильного оборудования, переработки металлолома и дорожно-строительной техники. Основные материалы — высокомарганцовистая сталь, высокохромистый чугун и легированная сталь. Продукция поставляется в Европу, Центральную Азию и другие зарубежные рынки.": ["The company is equipped with modern machinery and uses three main casting technologies: water-glass sand-resin mold casting, lost-foam casting and investment (lost-wax) casting. Products are wear-resistant parts for mining crushing equipment, scrap metal processing and road-construction machinery. The main materials are high-manganese steel, high-chromium cast iron and alloy steel. Products are supplied to Europe, Central Asia and other foreign markets.", "公司配备先进设备，采用三种主要铸造工艺：水玻璃砂树脂型铸造、消失模铸造和熔模精密铸造。产品为矿山破碎设备、废钢处理和筑路机械用耐磨配件。主要材料为高锰钢、高铬铸铁和合金钢。产品销往欧洲、中亚及其他海外市场。"],
 "Наш завод": ["Our factory", "我们的工厂"],
 "Производственный цех": ["Production workshop", "生产车间"],
 "Рабочие и инженеры": ["Workers and engineers", "工人和工程师"],
 "Готовая продукция": ["Finished products", "成品"],
 "Компания в цифрах": ["The Company in Numbers", "数字看公司"],
 "Сотрудников": ["Employees", "员工"],
 "20 тонн": ["20 tons", "20 吨"],
 "Максимальный вес отливки": ["Maximum casting weight", "铸件最大重量"],
 "60 000 м²": ["60,000 m²", "60,000 平方米"],
 "Общая площадь производственных цехов": ["Total area of production workshops", "生产车间总面积"],
 "Технических специалистов и руководителей": ["Technical specialists and managers", "技术人员和管理人员"],
 "Ценности": ["Values", "价值观"],
 "Что важно для нас в работе": ["What matters to us in working with market", "我们在开拓市场时所重视的"],
 "Прозрачность": ["Transparency", "透明"],
 "Реальные цены завода, понятные сроки, доставка товаров": ["Real factory prices, clear lead times,goods delivery.", "工厂真实价格、明确交期、货物交付。"],
 "Соблюдение сроков поставки": ["Meeting Delivery Deadlines", "按时交货"],
 "Мы понимаем насколько невыгоден простой оборудования, поэтому мы предлагаем четкие сроки.": ["We understand how costly equipment downtime is, so we offer clear lead times.", "我们深知设备停机的损失，因此承诺明确的交付周期。"],
 "Точность под заказ": ["Made-to-Order Precision", "定制精度"],
 "Изготавливаем запчасти по индивидуальному заказу под требования клиента и конкретный тип дробления.": ["We make spare parts to individual order, to the customer's requirements and the specific type of crushing.", "我们按客户的具体要求和破碎类型，定制生产配件。"],
 "Инженерная поддержка": ["Engineering Support", "工程技术支持"],
 "Помогаем подобрать нужные запчасти под конкретную модель и задачу. Специальные детали также можем изготовить по чертежам или результатам обмеров.": ["We help select the right spare parts for your specific model and task. Special parts can also be made from drawings or measurement results.", "我们协助为您的具体型号和工况选择合适的配件。特殊配件也可依据图纸或测绘结果制作。"],
 "Все наши преимущества →": ["All our advantages →", "查看全部优势 →"],
 "Хотите обсудить сотрудничество или дилерство?": ["Want to discuss cooperation or dealership?", "想洽谈合作或代理？"],
 "Расскажем об условиях поставок и подберём решение под ваш карьер.": ["We will explain the supply terms and find a solution for your quarry.", "我们将介绍供货条件，并为您的矿山量身制定方案。"],

 /* ===== Наши преимущества ===== */
 "Наши преимущества — TverDEX": ["Our Advantages — TverDEX", "我们的优势 — TverDEX"],
 "Почему карьеры и ГОКи выбирают запчасти TverDEX: собственное производство под заказ, подбор размера по фото, гарантия, поддержка на русском языке.": ["Why quarries and mining plants choose TverDEX spare parts: in-house made-to-order production, size selection by photo, warranty, support in Russian.", "采石场和矿山企业为何选择 TverDEX 配件：自有工厂定制生产、凭照片确定尺寸、质保、俄语支持。"],
 "Почему карьеры и ГОКи выбирают запчасти TverDEX": ["Why quarries and mining plants choose TverDEX spare parts", "采石场和矿山企业为何选择 TverDEX 配件"],
 "Все запчасти изготавливаем на своём заводе в Китае — от литья и термообработки до финальной сборки. Это даёт контроль над качеством, сроками и ценой без наценки посредников.": ["We make all spare parts at our own factory in China — from casting and heat treatment to final assembly. This gives us control over quality, lead times and price, with no intermediary markup.", "所有配件均在中国自有工厂生产——从铸造、热处理到最终装配。我们由此掌控质量、交期和价格，没有中间商加价。"],
 "Производственные возможности": ["Production Capabilities", "生产能力"],
 "Наша производственная база располагает полной линией обработки песка и формовки, двумя среднечастотными электропечами по 380 кг и двумя — по 2 т. Годовая мощность — 4000 т отливок. Имеются отдельная линия термообработки высокомарганцевой стали (водяная закалка) и линия закалки высокохромистого чугуна. 21 термическая печь, 10 токарных станков с ЧПУ вертикального типа, 4 продольно-фрезерных станка, 8 дробеструйных машин.": ["Our production base has a complete sand-processing and molding line, two 380 kg medium-frequency electric furnaces and two 2-ton furnaces. Annual capacity is 4,000 tons of castings. There is a separate heat-treatment line for high-manganese steel (water quenching) and a quenching line for high-chromium cast iron, 21 heat treatment furnaces, 10 CNC vertical lathes, 4 gantry milling machines, 8 shot blasting machines", "我们的生产基地拥有完整的砂处理和造型生产线，两台 380 公斤中频电炉和两台 2 吨中频电炉，年产能 4000 吨铸件，21台热处理炉，10台数控立车，4台龙门铣床，8台抛丸机，另设高锰钢热处理线（水韧处理）和高铬铸铁淬火线。"],
 "Широкий каталог": ["Wide Catalog", "丰富目录"],
 "Широкий ассортимент — от дробящих плит и футеровки до валов, подшипников и мельниц — для различных марок дробильного оборудования.": ["A wide range — from crushing plates and liners to shafts, bearings and mills — for different brands of crushing equipment.", "品类丰富——从破碎板、衬板到轴、轴承和磨机——适用于各品牌破碎设备。"],
 "Профессиональная техническая поддержка": ["Professional Technical Support", "专业技术支持"],
 "Профессиональная техническая поддержка: индивидуальные решения с учётом специфики продукции для продления срока службы запчастей; консультации инженеров по размерам специальных деталей. Часть продукции в наличии, возможен заказ по чертежам, артикулу и фотографии — без пересорта и несовпадения размеров.": ["Professional technical support: individual solutions that take product specifics into account to extend the service life of spare parts; engineer consultations on the dimensions of special parts. Part of the range is in stock; orders are possible by drawings, part number and photo — with no mix-ups or dimension mismatches.", "专业技术支持：结合产品特点提供个性化方案，延长配件使用寿命；工程师提供特殊配件尺寸咨询。部分产品有现货，也可按图纸、编号和照片下单——避免发错货和尺寸不符。"],
 "Поддерживаем различные способы оплаты": ["We support various payment methods.", "支持多种付款方式。"],
 "Компания TverDEX работает на международном рынке и поддерживает оплату в долларах США, рублях и юанях. Свяжитесь с нами, чтобы обсудить удобные условия оплаты и сотрудничества!": ["TverDEX works in the international market and accepts payment in US dollars, rubles and yuan. Contact us to discuss convenient payment and cooperation terms!", "TverDEX 面向国际市场，支持美元、卢布和人民币付款。欢迎联系我们，洽谈方便的付款和合作条件！"],
 "Техническая поддержка": ["technical support", "专业的技术支持"],
 "У нас выстроен систематизированный контроль качества и работает профессиональная техническая команда. Гарантируя качество продукции, мы также добились дальнейших технологических улучшений в части срока службы и прочности изделий.": ["We have a systematic quality control system and a professional technical team. While ensuring product quality, we have also made further technological improvements to extend service life and enhance product durability.", "我们有系统化的质量检验流程和专业的技术团队，在保证产品质量的同时，我们也对产品上有了进一步的技术革新"],
 "Зрелый контроль качества": ["Mature Quality Control", "成熟的质量控制"],
 "Мы осуществляем проверку от химического состава до размеров, располагая совершенной системой контроля качества. И помогаем определить причину повышенного износа и подобрать более стойкие материалы для конкретных условий эксплуатации.": ["We inspect everything from chemical composition to dimensions, with a well-developed quality control system. We also help identify the cause of excessive wear and choose more durable materials for specific operating conditions.", "我们拥有完善的质量控制体系，从化学成分到尺寸全面检验。同时协助查明过度磨损的原因，并根据具体工况选用更耐用的材料。"],
 "Хотите убедиться в качестве наших запчастей?": ["Want to see the quality of our spare parts for yourself?", "想亲自验证我们配件的质量？"],
 "Оставьте заявку — вышлем образцы, сертификаты или расчёт под вашу технику.": ["Leave a request — we will send samples, certificates or a quotation for your equipment.", "提交需求——我们将寄送样品、证书或针对您设备的报价。"],

 /* ===== Контакты ===== */
 "Контакты — TverDEX": ["Contacts — TverDEX", "联系我们 — TverDEX"],
 "Свяжитесь с TverDEX по вопросам поставки запчастей для дробильного оборудования в Россию.": ["Contact TverDEX about supplying spare parts for crushing equipment to Russia.", "就向俄罗斯供应破碎设备配件事宜，请联系 TverDEX。"],
 "Свяжитесь с нами": ["Get in Touch", "联系我们"],
 "Написать нам в мессенджер": ["Message Us in a Messenger", "通过即时通讯工具联系我们"],
 "уточняется": ["to be confirmed", "待定"],
 "(уточняется)": ["(to be confirmed)", "（待定）"],
 "Контактные данные": ["Contact Details", "联系方式"],
 "Телефон :": ["Phone:", "电话："],
 "E-mail:": ["E-mail:", "邮箱："],
 "Представитель в РФ:": ["Representative in Russia:", "俄罗斯代表："],
 "WeChat / завод в Китае:": ["WeChat / factory in China:", "微信 / 中国工厂："],
 "Рабочий адрес:": ["Work address:", "工作地址："],
 "Корпус C3, №1288, ул. Цзиньган, район Пудун Новый, г. Шанхай, Китай": ["Building C3, No. 1288, Jingang Road, Pudong New Area, Shanghai, China", "中国上海市浦东新区金港路1288号C3栋"],
 "Форма заявки": ["Request Form", "需求表单"],
 "Ваше имя": ["Your name", "您的姓名"],
 "Телефон или e-mail": ["Phone or e-mail", "电话或邮箱"],
 "Компания / карьер": ["Company / quarry", "公司 / 矿场"],
 "Что вас интересует?": ["What are you interested in?", "您需要什么？"],
 "Подбор запчастей": ["Spare parts selection", "配件选型"],
 "Дилерство / сотрудничество": ["Dealership / cooperation", "代理 / 合作"],
 "Другое": ["Other", "其他"],
 "Марка техники или суть запроса": ["Equipment brand or details of your request", "设备品牌或需求说明"],
 "Отправить заявку": ["Submit request", "提交需求"],
 "Наша почта": ["Our email", "邮箱"],
 "Телефон": ["Phone", "电话"],


 /* ===== Новости ===== */
 "Новости — TverDEX": ["News — TverDEX", "新闻 — TverDEX"],
 "Новости компании TverDEX: выход на российский рынок, расширение каталога запчастей, участие в выставках.": ["TverDEX company news: entering the Russian market, catalog expansion, exhibition participation.", "TverDEX 公司新闻：进入俄罗斯市场、目录扩充、参加展会。"],
 "Новости компании TverDEX": ["TverDEX company news", "TverDEX 公司新闻"],
 "РЫНОК": ["MARKET", "市场"],
 "КАТАЛОГ": ["CATALOG", "目录"],
 "ОБУЧЕНИЕ": ["TRAINING", "培训"],
 "СОБЫТИЯ КОМПАНИИ": ["COMPANY EVENTS", "公司活动"],
 "ВЫСТАВКА": ["EXHIBITION", "展会"],
 "СООБЩЕНИЕ": ["ANNOUNCEMENT", "通知"],
 "Сентябрь 2026": ["September 2026", "2026年9月"],
 "Октябрь 2026": ["October 2026", "2026年10月"],
 "Расширен каталог: новые категории запчастей": ["Catalog expanded: new spare part categories", "目录扩充：新增配件类别"],
 "Наша новая высокотвёрдая и высокопрочная железоосновная износостойкая продукция начала выходить на зарубежные рынки. На этапе продвижения и применения в Китае в 2025 году пользователи оставили хорошие отзывы.": ["Our new high-hardness, high-strength iron-based wear-resistant product has begun to enter foreign markets. During its promotion and use in China in 2025, users left good feedback.", "我们新研发的高硬度、高强度铁基耐磨产品已开始进入海外市场。2025 年在中国推广和应用阶段，用户反馈良好。"],
 "Сотрудники TverDEX прошли обучение на заводе": ["TverDEX employees completed training at the factory", "TverDEX 员工完成工厂培训"],
 "Сотрудники изучили производственные процессы и стандарты качества, чтобы улучшить контроль качества продукции и обслуживание клиентов.": ["Employees studied production processes and quality standards in order to improve product quality control and customer service.", "员工学习了生产工艺和质量标准，以提升产品质量控制和客户服务水平。"],
 "TverDEX готовится к выставке": ["TverDEX is preparing for an exhibition", "TverDEX 筹备参展"],
 "В октябре TverDEX активно готовится к предстоящей отраслевой выставке, чтобы представить свою продукцию и встретиться с партнёрами.": ["In October TverDEX is actively preparing for the upcoming industry exhibition to present its products and meet partners.", "10 月，TverDEX 正积极筹备即将举行的行业展会，以展示产品并会见合作伙伴。"],
 "Представим каталог запчастей и обсудим условия сотрудничества с российскими партнёрами.": ["We will present our spare parts catalog and discuss terms of cooperation with Russian partners.", "我们将展示配件目录，并与俄罗斯合作伙伴洽谈合作条件。"],
 "Следите за новостями!": ["Stay tuned for news!", "敬请关注最新动态！"],
 "Хотите быть в курсе новостей TverDEX?": ["Want to stay up to date with TverDEX news?", "想及时了解 TverDEX 动态？"],
 "Оставьте контакт — будем присылать важные обновления по каталогу и производству.": ["Leave your contact — we will send you important updates about the catalog and production.", "留下您的联系方式——我们将发送目录和生产方面的重要更新。"],

 /* ===== Ключевые технологии ===== */
 "Ключевые технологии — TverDEX": ["Key Technologies — TverDEX", "核心技术 — TverDEX"],
 "Технология композитного сплава TverDEX: закладка высокотвердых сплавных стержней в зонах износа увеличивает срок службы запчастей для дробилок.": ["TverDEX composite alloy technology: embedding high-hardness alloy rods in wear zones extends the service life of crusher spare parts.", "TverDEX 复合合金技术：在磨损部位嵌入高硬度合金棒，延长破碎机配件的使用寿命。"],
 "Инновационная технология композитного сплава": ["Innovative composite alloy technology", "创新复合合金技术"],
 "Инновационная": ["Innovative", "创新"],
 "композитная отливка": ["composite casting", "复合铸件"],
 "В зависимости от различных материалов, дробилок, конструктивных особенностей и зон износа выбираются различные материалы и структуры для их композиционного соединения.": ["Depending on the materials, crushers, design features and wear zones, different materials and structures are chosen for their composite bonding.", "根据不同材料、破碎机类型、结构特点和磨损部位，选用不同的材料和结构进行复合结合。"],
 "Увеличенный": ["Extended", "更长的"],
 "срок службы": ["service life", "使用寿命"],
 "Для широко применяемых дробилок различных типов (конусных, щековых, роторных, молотковых, валковых и др.) в качестве базового материала по-прежнему используется легированная сверхвысокомарганцевая сталь и высокохромистый чугун.": ["For widely used crushers of various types (cone, jaw, impact, hammer, roller, etc.), alloyed ultra-high-manganese steel is still used as the base material and high-Cr cast iron.", "对于各类常用破碎机（圆锥式、颚式、反击式、锤式、辊式等），基体材料仍采用合金化超高锰钢和高铬铸铁。"],
 "Снижение затрат": ["Lower costs", "降低成本"],
 "и повышение эффективности": ["and higher efficiency", "提高效率"],
 "Наша технология является комплексной и зрелой, обеспечивает масштабное производство, а себестоимость производства контролируема. В основе — более высокая прочность, износостойкость и вязкость, а также лучшее соотношение цены и качества.": ["Our technology is comprehensive and mature, supports large-scale production, and keeps production costs under control. The product also combines higher strength and wear resistance with greater toughness and better cost-effectiveness.", "我们的技术全面且成熟，能够实现规模化生产。同时，产品在具备更高坚固性和耐磨性的基础上，韧性也更强，并具有更高的性价比"],
 "Сравнение: разница, которую вы видите": ["Comparison: the difference you can see", "对比：差异一目了然"],
 "Детали, упрочнённые сплавными стержнями, способны продлить срок службы.": ["Parts reinforced with alloy rods can last longer.", "采用合金棒强化的配件可延长使用寿命。"],
 "Фото: Изношенная деталь из традиционного материала": ["Photo: Worn part made of traditional material", "照片：传统材料制成的磨损配件"],
 "Традиционный материал": ["Traditional material", "传统材料"],
 "Традиционные материалы для изготовления деталей на заказ": ["Traditional materials for made-to-order parts", "用于定制配件的传统材料"],
 "Твёрдые и износостойкие": ["Hard and wear-resistant", "硬度高、耐磨"],
 "Возможна индивидуализированная подборка материала по требованиям заказчика": ["Material can be individually selected to the customer's requirements", "可根据客户要求个性化选材"],
 "Фото: Деталь с легированными стержнями после эксплуатации": ["Photo: Part with alloy rods after use", "照片：带合金棒的配件使用后状态"],
 "Новый продукт с легированными стержнями": ["New product with alloy rods", "带合金棒的新产品"],
 "Редкая замена и меньше простоев": ["Less frequent replacement and less downtime", "更换更少，停机更少"],
 "Более твёрдые и износостойкие": ["Harder and more wear-resistant", "更硬、更耐磨"],
 "Возможность индивидуального изготовления различных типов деталей, что способствует снижению общих затрат.": ["Various types of parts can be made individually, which helps reduce overall costs.", "可按需单独制造各类配件，有助于降低总体成本。"],
 "Ключевые этапы": ["Key stages", "关键工序"],
 "и материалы": ["and materials", "与材料"],
 "Фото: Высокопрочные сплавные стержни": ["Photo: High-strength alloy rods", "照片：高强度合金棒"],
 "Фото: Технология внедрения": ["Photo: Embedding technology", "照片：嵌入工艺"],
 "Фото: Готовая деталь": ["Photo: Finished part", "照片：成品配件"],
 "Фото: Надежная защита от износа": ["Photo: Reliable wear protection", "照片：可靠的耐磨防护"],
 "Отливка из керамического композиционного материала": ["Ceramic composite casting", "陶瓷复合材料铸件"],
 "Хорошая обратная связь от клиентов": ["Good customer feedback", "延长配件的使用寿命，有良好的客户反馈"],
  "Применение: била, отбойные плиты, молотки, футеровочные плиты / бронеплиты, импеллер / метатель, кольцевые защитные плиты / окружная защитная футеровка, мелющие / размольные ролики.": ["Applications: blow bars, impact plates, hammers, liner plates / wear liners, impellers / throwers, circumferential guard plates / circumferential wear liners, grinding rollers / mill rollers.", "应用：板锤、反击板、锤头、耐磨衬板、抛料头、周向耐磨衬板、磨辊等"],
  "Эффективно продлевает срок службы.": ["Effectively extends the service life.", "有效延长了使用时间"],
   "Фотографии с мест применения": ["Photos of on-site applications", "施工现场使用后照片"],
   "Керамика добавляется к традиционным материалам.": ["Ceramic is added to the traditional material", "在传统材质基础上添加陶瓷"],
   "Мы обладаем технологией керамических композитов.": ["We possess ceramic composite technology.", "我们具备生产陶瓷复合铸件技术"],
   "Продукция из сплавных стержней": ["Alloy rod products", "添加合金棒的产品"],
   "Продукция с добавлением керамики": ["Ceramic-enhanced products", "添加陶瓷的产品"],
   "Широкий диапазон применения и длительный срок службы": ["Wide range of applications, long service life", "应用范围广，使用寿命长"],


 /* ===== Каталог продукции (parts/index.html) ===== */
 "Запчасти для дробильного оборудования": ["Parts of the crushing equipment", "破碎设备配件"],
 "Запчасти для мельничного оборудования": ["Parts of the grinding equipment", "磨粉设备配件"],
 "Прочие отливки": ["Other castings", "其他铸件"],
  "Запчасти для прочего оборудования": ["Parts of the other equipment", "其他矿山设备配件"],
 "Каталог продукции — TverDEX": ["Product Catalog — TverDEX", "产品目录 — TverDEX"],
 "Полный каталог продукции TverDEX для дробильного оборудования: 1194 позиций в 45 категориях.": ["Full TverDEX product catalog for crushing equipment: 1194 items in 45 categories.", "TverDEX 破碎设备产品完整目录：45 个类别共 1194 个品种。"],
 "Каталог продукции TverDEX": ["TverDEX Product Catalog", "TverDEX 产品目录"],
 "Каталог": ["Catalog", "目录"],
 "Продукция по типам оборудования": ["Products by equipment type", "按设备类型分类的产品"],
 "Изготавливаем под заказ детали для дробилок и мельниц. Выберите тип оборудования или пришлите фото детали.": ["We make parts to order for crushers and mills. Choose the equipment type or send a photo of the part.", "我们为破碎机和磨机定制生产配件。请选择设备类型，或发送配件照片。"],
 "Подробнее": ["Details", "详情"],
 "Запросить подбор →": ["Request selection →", "咨询选型 →"],
 "Фото: Детали щёковой дробилки": ["Photo: Jaw crusher parts", "照片：颚式破碎机配件"],
 "Фото: Детали конусной дробилки": ["Photo: Cone crusher parts", "照片：圆锥破碎机配件"],
 "Фото: Детали роторной дробилки": ["Photo: Rotary (impact) crusher parts", "照片：反击式破碎机配件"],
 "Фото: Детали дробилки для производства песка": ["Photo: Sand-making crusher parts", "照片：制砂机配件"],
 "Фото: Детали молотковой дробилки": ["Photo: Hammer crusher parts", "照片：锤式破碎机配件"],
 "Фото: Детали для двухвалковых дробилок": ["Photo: Double-roller crusher parts", "照片：双辊破碎机配件"],
 "Фото: Детали шаровой мельницы": ["Photo: Ball mill parts", "照片：球磨机配件"],
 "Фото: Детали для других типов мельниц": ["Photo: Parts for other types of mills", "照片：其他类型磨机配件"],
 "Фото: Другие быстроизнашиваемые детали для горного оборудования": ["Photo: Other wear parts for mining equipment", "照片：其他矿山设备易损件"],
 "Детали щёковой дробилки": ["Jaw crusher parts", "颚式破碎机配件"],
 "Детали конусной дробилки": ["Cone crusher parts", "圆锥破碎机配件"],
 "Детали роторной дробилки": ["Rotary (impact) crusher parts", "反击式破碎机配件"],
 "Детали дробилки для производства песка": ["Sand-making crusher parts", "制砂机配件"],
 "Детали молотковой дробилки": ["Hammer crusher parts", "锤式破碎机配件"],
 "Детали для двухвалковых дробилок": ["Double-roller crusher parts", "双辊破碎机配件"],
 "Детали шаровой мельницы": ["Ball mill parts", "球磨机配件"],
 "Детали для других типов мельниц": ["Parts for other types of mills", "其他类型磨机配件"],
 "Другие типы Мельниц": ["Other types of mills", "其他类型磨机"],
 "Другие быстроизнашиваемые детали для горного оборудования": ["Other wear parts for mining equipment", "其他矿山设备易损件"],
 "Не нашли нужный тип оборудования или деталь — пришлите артикул, фото изношенной детали или марку дробилки, подберём аналог из нашего производства.": ["Didn't find the equipment type or part you need? Send a part number, a photo of the worn part or the crusher brand — we will select an analogue from our production.", "没找到所需的设备类型或配件？请发送编号、磨损配件照片或破碎机品牌——我们将从自产产品中选配替代件。"],
 "Запросить подбор по вашей технике": ["Request selection for your equipment", "按您的设备咨询选型"],
 "Нужна запчасть собственного производства TverDEX?": ["Need a spare part from TverDEX's own production?", "需要 TverDEX 自产配件？"],
 "Пришлите модель техники и артикул — рассчитаем стоимость и срок поставки.": ["Send the equipment model and part number — we will calculate the cost and delivery time.", "请发送设备型号和配件编号——我们将核算价格和交货周期。"],

 /* ===== Страницы категорий: общие фразы ===== */
 "Особенности и преимущества": ["Features and Advantages", "特点与优势"],
 "Подбор:": ["Selection:", "选型："],
 "Любые марки:": ["Any brand:", "适配任意品牌："],
 "Изготовление под заказ:": ["Made to order:", "定制生产："],
 "Одну деталь или серию — на собственном заводе, срок согласуем заранее.": ["A single part or a series — at our own factory, with lead time agreed in advance.", "单件或批量——在自有工厂生产，交期提前约定。"],
 "Точная посадка:": ["Precise fit:", "安装精准："],
 "Надёжное крепление:": ["Reliable fastening:", "紧固可靠："],
 "Другие детали": ["Other parts", "其他配件"],
 "Другие детали.": ["Other parts.", "其他配件。"],
 "Другие": ["Other", "其他"],

 /* ===== Двухвалковые дробилки ===== */
 "Детали для двухвалковых дробилок — TverDEX": ["Double-Roller Crusher Parts — TverDEX", "双辊破碎机配件 — TverDEX"],
 "Детали для двухвалковых дробилок: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Double-roller crusher parts: made to order at our own factory, from a drawing, part number or photo.", "双辊破碎机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем детали двухвалковых дробилок под заказ: по чертежу, артикулу или фотографии.": ["We make double-roller crusher parts to order: from a drawing, part number or photo.", "我们按订单生产双辊破碎机配件：依据图纸、编号或照片。"],
 "Износостойкость при раздавливании:": ["Wear resistance under crushing:", "抗挤压磨损："],
 "Секторы и ролики подбираем под материал и нагрузки — они работают на сжатие и истирание.": ["We select segments and rollers for the material and loads — they work in compression and abrasion.", "根据物料和载荷选配辊皮和辊子——它们承受挤压和磨蚀。"],
 "Секторы, валы и втулки делаем по чертежу или фото, чтобы они садились без подгонки.": ["Segments, shafts and bushings are made from a drawing or photo so that they fit without adjustment.", "辊皮、轴和衬套依据图纸或照片制作，安装无需修配。"],
 "Равномерный износ:": ["Even wear:", "磨损均匀："],
 "Правильные размеры и материал помогают добиться более равномерного износа рабочих поверхностей.": ["The right dimensions and material help achieve more even wear of working surfaces.", "合适的尺寸和材料有助于使工作表面磨损更均匀。"],
 "Делаем быстроизнашиваемые детали для горного оборудования разных производителей — достаточно модели, чертежа.": ["We make wear parts for mining equipment of different manufacturers — a model or drawing is enough.", "可为不同厂家的矿山设备制作易损件——提供型号或图纸即可。"],
 "Бандажи валков": ["Roll tires", "辊皮"],
 "Сменный износостойкий сегмент поверхности рабочего валка. Изготавливаем под диаметр вашего ролика.": ["Replaceable wear-resistant segment of the working roll surface. Made to the diameter of your roller.", "工作辊表面的可更换耐磨辊皮。按您的辊子直径制作。"],
 "Подбираем размеры и материал под вашу технику.": ["We select dimensions and material for your equipment.", "根据您的设备选配尺寸和材料。"],

 /* ===== Молотковые дробилки ===== */
 "Детали молотковой дробилки — TverDEX": ["Hammer Crusher Parts — TverDEX", "锤式破碎机配件 — TverDEX"],
 "Детали молотковой дробилки: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Hammer crusher parts: made to order at our own factory, from a drawing, part number or photo.", "锤式破碎机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем детали молотковых дробилок под заказ: по чертежу, артикулу или фотографии.": ["We make hammer crusher parts to order: from a drawing, part number or photo.", "我们按订单生产锤式破碎机配件：依据图纸、编号或照片。"],
 "Прочность под ваш материал:": ["Strength for your material:", "适配您物料的强度："],
 "Молотки и решётки подбираем по материалу и нагрузкам — для известняка, угля и других материалов.": ["We select hammers and grates by material and loads — for limestone, coal and other materials.", "根据物料和载荷选配锤头和筛板——适用于石灰石、煤及其他物料。"],
 "Пальцы, диски и бронеболты изготавливаем по чертежу или фото, чтобы молотки держались надёжно.": ["Pins, discs and armor bolts are made from a drawing or photo so that the hammers stay firmly in place.", "销轴、圆盘和护板螺栓依据图纸或照片制作，确保锤头固定牢靠。"],
 "Меньше простоев:": ["Less downtime:", "减少停机："],
 "Правильные размеры и материал помогают реже останавливать дробилку для замены молотков и решёток.": ["The right dimensions and material mean fewer stops of the crusher to replace hammers and grates.", "合适的尺寸和材料可减少因更换锤头和筛板而停机的次数。"],
 "Делаем детали молотковых дробилок разных производителей — достаточно модели, чертежа или фото.": ["We make parts for hammer crushers of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的锤式破碎机制作配件——提供型号、图纸或照片即可。"],
 "Молоток": ["Hammer", "锤头"],
 "Рабочий орган молотковой дробилки, наносит удары по материалу и измельчает его. Подбираем вес, форму и материал под ваш материал.": ["The working element of a hammer crusher, striking and breaking the material. We select weight, shape and material for your material.", "锤式破碎机的工作部件，通过冲击破碎物料。根据您的物料选配重量、形状和材质。"],
 "Накладки": ["Liners / cover plates", "护板"],
 "Защищать оборудование от износа.": ["Protect equipment from wear.", "保护设备，防止设备磨损"],
 "Ситовая плита": ["Screen plate", "筛板"],
 "Определяет крупность готового продукта. Делаем с нужным размером отверстий.": ["Determines the fineness of the finished product. We make it with the required hole size.", "决定成品粒度，按所需筛孔尺寸加工制作。"],
 "Колосники": ["Grate bars", "篦条"],
 "За счёт размеров и расположения колосниковых щелей влияет на эффективность выхода материала из камеры дробления и является ключевым быстроизнашивающимся элементом.": ["Through the size and arrangement of the grate slots, it affects the efficiency of material discharge from the crushing chamber and is a key wear part.", "通过篦缝的尺寸和布置，影响物料排出破碎腔的效率，是关键耐磨件"],
 "Рабочий орган молотковой дробилки. Подбираем вес, форму и материал под ваш материал.": ["A working element of a hammer crusher. We select weight, shape and material for your material.", "锤式破碎机的工作部件。根据您的物料选配重量、形状和材质。"],

 /* ===== Шаровые мельницы ===== */
 "Детали шаровой мельницы — TverDEX": ["Ball Mill Parts — TverDEX", "球磨机配件 — TverDEX"],
 "Детали шаровой мельницы: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Ball mill parts: made to order at our own factory, from a drawing, part number or photo.", "球磨机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем детали шаровых мельниц под заказ: по чертежу, артикулу или фотографии.": ["We make ball mill parts to order: from a drawing, part number or photo.", "我们按订单生产球磨机配件：依据图纸、编号或照片。"],
 "Износостойкость при истирании:": ["Wear resistance under abrasion:", "抗磨蚀性能："],
 "Футеровку и плиты барабана подбираем под руду, крупность загрузки и режим работы мельницы.": ["We select the liners and drum plates for the ore, feed size and mill operating mode.", "根据矿石、给料粒度和磨机工况选配筒体衬板。"],
 "Точная геометрия:": ["Precise geometry:", "几何精度高："],
 "Зубчатый венец, шестерню и цапфу изготавливаем по чертежу или обмерам — для плавной работы привода.": ["The ring gear, pinion and trunnion are made from a drawing or measurements — for smooth drive operation.", "大齿圈、小齿轮和空心轴依据图纸或测绘制作——确保传动平稳。"],
 "Ровная работа мельницы:": ["Smooth mill operation:", "磨机运转平稳："],
 "Правильно подобранные детали помогают дольше сохранять стабильную работу барабана и привода.": ["Properly selected parts help keep the drum and drive running stably for longer.", "选配得当的配件有助于筒体和传动系统更长时间稳定运行。"],
 "Делаем детали шаровых мельниц разных производителей — достаточно модели, чертежа или фото.": ["We make parts for ball mills of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的球磨机制作配件——提供型号、图纸或照片即可。"],
 "Футеровочные плиты": ["Liner plates", "衬板"],
 "Защищает корпус и рабочие поверхности от абразивного износа. Делаем комплектами под вашу модель.": ["Protects the shell and working surfaces from abrasive wear. Made in sets for your model.", "保护筒体和工作表面免受磨料磨损。按您的型号成套制作。"],
 "Шар": ["Ball", "钢球"],
 "Стальные шары — это ключевая мелющая среда шаровой мельницы, измельчающая материал за счёт ударного и истирающего воздействия.": ["Steel balls are the key grinding media in a ball mill that crush materials through impact and attrition.", "钢球是球磨机中通过冲击与磨剥作用将物料粉碎的关键研磨介质。"],
 "Ситовые плиты": ["Grate / screen plates", "篦板"],
 "Решётка шаровой мельницы определяет крупность готового продукта.": ["The ball mill grate determines the size of the finished product.", "球磨机篦板决定成品粒度。"],
 "Рабочий орган шаровой мельницы.Подбираем размер, твёрдость и материал под ваш материал и тонкость помола.": ["A working element of a ball mill. We select size, hardness and material for your material and grinding fineness.", "球磨机的工作部件。根据您的物料和研磨细度选配尺寸、硬度和材质。"],

 /* ===== Другие мельницы ===== */
 "Детали для других типов мельниц — TverDEX": ["Parts for Other Types of Mills — TverDEX", "其他类型磨机配件 — TverDEX"],
 "Детали для других типов мельниц: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Parts for other types of mills: made to order at our own factory, from a drawing, part number or photo.", "其他类型磨机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Детали для других типов мельниц": ["Parts for other types of mills", "其他类型磨机配件"],
 "Изготавливаем детали других типов мельниц под заказ: по чертежу, артикулу или фотографии.": ["We make parts for other types of mills to order: from a drawing, part number or photo.", "我们按订单生产其他类型磨机配件：依据图纸、编号或照片。"],
 "Детали для разных типов мельниц:": ["Parts for different types of mills:", "适配多种磨机的配件："],
 "Ролики, кольца, плиты и футеровку делаем для вертикальных, трапециевидных мельниц и мельниц высокого давления.": ["We make rollers, rings, plates and liners for vertical mills, trapezium mills and high-pressure mills.", "可生产立磨、梯形磨和高压磨用的磨辊、磨环、板件和衬板。"],
 "Износостойкость под сырьё:": ["Wear resistance for your raw material:", "适配物料的耐磨性："],
 "Материал подбираем с учётом твёрдости и абразивности измельчаемого сырья.": ["We select the material taking into account the hardness and abrasiveness of the raw material being ground.", "根据被磨物料的硬度和磨蚀性选择材料。"],
 "Детали делаем по чертежу или фото, чтобы они подходили вашей мельнице без доработки.": ["Parts are made from a drawing or photo so that they fit your mill without rework.", "配件依据图纸或照片制作，装到您的磨机上无需再加工。"],
 "Делаем детали других типов мельниц разных производителей — достаточно модели, чертежа или фото.": ["We make parts for other types of mills of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的其他类型磨机制作配件——提供型号、图纸或照片即可。"],
 "Размольный валок": ["Grinding roller", "磨辊"],
 "Рабочий орган мельницы, измельчающий материал истиранием и давлением. Подбираем размеры и материал под вашу технику.": ["The working element of a mill that grinds material by abrasion and pressure. We select dimensions and material for your equipment.", "磨机的工作部件，通过碾磨和挤压粉碎物料。根据您的设备选配尺寸和材料。"],
 "Шнек": ["Screw / auger", "螺旋"],
 "Перемещает материал за счёт вращения и подвергается абразивному износу. Изготавливаем под вашу модель с нужным шагом и диаметром.": ["Moves material by rotation and is subject to abrasive wear. Made for your model with the required pitch and diameter.", "通过旋转输送物料，易受磨料磨损。按您的型号制作所需螺距和直径。"],

 /* ===== Роторные дробилки ===== */
 "Детали роторной дробилки — TverDEX": ["Rotary (Impact) Crusher Parts — TverDEX", "反击式破碎机配件 — TverDEX"],
 "Детали роторной дробилки: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Rotary (impact) crusher parts: made to order at our own factory, from a drawing, part number or photo.", "反击式破碎机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем детали роторных дробилок под заказ: по чертежу, артикулу или фотографии.": ["We make rotary (impact) crusher parts to order: from a drawing, part number or photo.", "我们按订单生产反击式破碎机配件：依据图纸、编号或照片。"],
 "Прочность под удар:": ["Impact strength:", "抗冲击强度："],
 "Била и отражательные плиты подбираем по материалу и нагрузкам — для известняка, бетона, щебня.": ["We select blow bars and impact plates by material and loads — for limestone, concrete, crushed stone.", "根据物料和载荷选配板锤和反击板——适用于石灰石、混凝土、碎石。"],
 "Бронеболты, клинья и торцевые плиты делаем по чертежу или фото, чтобы они держались при ударных нагрузках.": ["Armor bolts, wedges and end plates are made from a drawing or photo so that they hold under impact loads.", "护板螺栓、楔块和端板依据图纸或照片制作，确保在冲击载荷下牢固不松。"],
 "Меньше остановок:": ["Fewer stops:", "减少停机："],
 "Правильные размеры и материал помогают реже менять быстроизнашиваемые детали ротора.": ["The right dimensions and material mean less frequent replacement of rotor wear parts.", "合适的尺寸和材料可减少转子易损件的更换频率。"],
 "Делаем детали роторных дробилок разных производителей — достаточно модели, чертежа или фото.": ["We make parts for rotary crushers of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的反击式破碎机制作配件——提供型号、图纸或照片即可。"],
 "Ударный элемент ротора, который дробит материал. Подбираем форму и материал под вашу породу.": ["The impact element of the rotor that crushes the material. We select shape and material for your rock.", "转子的冲击部件，用于破碎物料。根据您的岩石选配形状和材质。"],
 "Отражает куски материала обратно в зону дробления. Изготавливаем под вашу модель.": ["Deflects pieces of material back into the crushing zone. Made for your model.", "将物料块反弹回破碎区。按您的型号制作。"],
 "Боковая футеровка": ["Side liner", "侧衬板"],
 "Защищает боковые стенки камеры дробления от износа. Изготавливаем по чертежу или фото изношенной детали.": ["Protects the side walls of the crushing chamber from wear. Made from a drawing or a photo of the worn part.", "保护破碎腔侧壁免受磨损。依据图纸或磨损配件照片制作。"],

 /* ===== Дробилки для песка ===== */
 "Детали дробилки для производства песка — TverDEX": ["Sand-Making Crusher Parts — TverDEX", "制砂机配件 — TverDEX"],
 "Детали дробилки для производства песка: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Sand-making crusher parts: made to order at our own factory, from a drawing, part number or photo.", "制砂机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем детали дробилок для производства песка под заказ: по чертежу, артикулу или фотографии.": ["We make sand-making crusher parts to order: from a drawing, part number or photo.", "我们按订单生产制砂机配件：依据图纸、编号或照片。"],
 "Износостойкость на высоких скоростях:": ["Wear resistance at high speeds:", "高速下的耐磨性："],
 "Футеровку и детали ротора подбираем под абразивность сырья — они постоянно работают в потоке материала.": ["We select liners and rotor parts for the abrasiveness of the raw material — they work constantly in the material flow.", "根据物料的磨蚀性选配衬板和转子部件——它们始终处于物料流中。"],
 "Точность и баланс:": ["Accuracy and balance:", "精度与平衡："],
 "Диски и другие детали ротора делаем по чертежу или фото с точными размерами — это важно для равномерной работы.": ["Discs and other rotor parts are made from a drawing or photo with exact dimensions — this is important for smooth operation.", "圆盘及其他转子部件依据图纸或照片按精确尺寸制作——这对平稳运转至关重要。"],
 "Стабильный выход песка:": ["Stable sand output:", "出砂稳定："],
 "Правильно подобранные детали помогают дольше сохранять нужную фракцию продукта.": ["Properly selected parts help maintain the required product fraction for longer.", "选配得当的配件有助于更长时间保持所需的产品粒级。"],
 "Делаем детали дробилок для производства песка разных производителей — достаточно модели, чертежа или фото.": ["We make parts for sand-making crushers of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的制砂机制作配件——提供型号、图纸或照片即可。"],
 "Распределительный конус": ["Distribution cone", "分料锥"],
  "Било": ["blow bar", "板锤"],
 "Ключевой быстроизнашивающийся элемент ротора VSI-дробилки, устанавливается сверху или в центре ротора.": ["A key wear element of the VSI crusher rotor, installed on top or in the centre of the rotor.", "VSI 破碎机转子的关键易损件，安装在转子顶部或中心。"],
 "Обечайка валка": ["Roll shell", "辊皮"],
 "Служит для приёма материала, выбрасываемого рабочим колесом с высокой скоростью, и обеспечивает дальнейшее дробление материала при ударе.": ["Receives the material thrown out by the impeller at high speed and provides further crushing on impact.", "承接叶轮高速抛出的物料，并在撞击中使物料进一步破碎。"],
 "Верхние/нижние пластины": ["Upper/lower plates", "上/下护板"],
 "Обеспечивает направление материала в разгрузочные каналы.": ["Directs the material into the discharge channels.", "引导物料进入排料通道。"],
 "Футеровочные плиты защищают корпус и рабочие поверхности от абразивного износа. Изготавливаем под вашу модель.": ["Liner plates protect the shell and working surfaces from abrasive wear. Made for your model.", "衬板保护机体和工作表面免受磨料磨损。按您的型号制作。"],
 "Разгонное ребро": ["Rotor tip", "抛料头"],
 "Разгонное ребро — ключевой быстроизнашивающийся элемент для дробления «камень о камень» или «камень о металл»": ["The rotor tip is a key wear part for rock-on-rock or rock-on-anvil crushing.", "抛料头是石打石或石打铁破碎的关键耐磨件"],

 /* ===== Горное оборудование: быстроизнашиваемые ===== */
 "Другие быстроизнашиваемые детали для горного оборудования — TverDEX": ["Other Wear Parts for Mining Equipment — TverDEX", "其他矿山设备易损件 — TverDEX"],
 "Другие быстроизнашиваемые детали для горного оборудования: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Other wear parts for mining equipment: made to order at our own factory, from a drawing, part number or photo.", "其他矿山设备易损件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем быстроизнашиваемые детали для горного оборудования под заказ: по чертежу, артикулу или фотографии.": ["We make wear parts for mining equipment to order: from a drawing, part number or photo.", "我们按订单生产矿山设备易损件：依据图纸、编号或照片。"],
 "Износостойкость в карьере:": ["Wear resistance in the quarry:", "矿场中的耐磨性："],
 "Подбор горно-шахтного оборудования и комплектующих с учётом условий работы и характеристик породы.": ["Mining machinery parts selected according to your working conditions and ore characteristics.", "根据您的作业条件和矿石特性选配矿山机械配件"],
 "Совместимость с вашей техникой:": ["Compatibility with your equipment:", "与您的设备兼容："],
 "Комплектующие изготавливаются по чертежам,что обеспечивает взаимную совместимость деталей и надёжную установку.": ["parts are manufactured from drawings, ensuring all components match each other and fit reliably.", " 配件依据图纸制作，确保各配件之间以及与原设备相互匹配"],
 "Меньше простоев техники:": ["Less equipment downtime:", "减少设备停机："],
 "Правильно подобранные комплектующие увеличивают межсервисный интервал и сокращают простои горно-шахтного оборудования.": ["Properly selected parts help you work longer between replacements and stop the equipment less often.", "选配得当的配件可延长更换间隔，减少设备停机。"],
 "Нет чертежа — Свяжитесь с нашим техническим отделом, мы постараемся помочь определить модель": ["No drawing? Send drawing and our engineers will determine the dimensions.", "没有图纸？请联系我们的技术部门，我们会尽力帮您确定型号"],
 "Делаем быстроизнашиваемые детали для горного оборудования разных производителей — достаточно модели, чертежа или фото.": ["We make wear parts for mining equipment of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的矿山设备制作易损件——提供型号、图纸或照片即可。"],
 "Ролик": ["Roller", "托辊"],
 "рабочий орган, передающий нагрузку и обеспечивающий вращение.Подбираем размеры и материал под вашу технику.": ["A working element that transmits load and provides rotation. We select dimensions and material for your equipment.", "传递载荷并实现旋转的工作部件。根据您的设备选配尺寸和材料。"],
 "Сито": ["Screen mesh", "筛网"],
 "Сито виброгрохота разделяет материал по крупности. Подбираем размер ячеек и материал под ваш материал": ["The vibrating screen mesh separates material by size. We select the mesh size and material for your material.", "振动筛筛网按粒度分离物料。根据您的物料选配筛孔尺寸和材质。"],
 "Подшипники": ["Bearings", "轴承"],
 "Подшипники для дробильного и горного оборудования выдерживают высокие нагрузки и обеспечивают плавное вращение узлов.": ["Bearings for crushing and mining equipment withstand high loads and ensure smooth rotation of assemblies.", "破碎和矿山设备用轴承可承受高载荷，保证各部件平稳转动。"],
 "Болт": ["bolt", "螺栓"],
 "Это крепёжная деталь в виде стержня с резьбой и головкой, обычно применяемая в паре с гайкой.": ["A bolt is a threaded fastener with a head, typically used together with a nut.", "螺栓是一种带螺纹和头部的杆状紧固件，通常与螺母配合使用"],
 "другие": ["Other", "其他"],
 "Другие быстроизнашивающиеся детали горного оборудования — изготавливаем по вашему требованию.": ["Other wear parts for mining equipment — made to your requirements.", "其他矿山设备易损件——按您的要求制作。"],

 /* ===== Щёковые дробилки ===== */
 "Детали щёковой дробилки — TverDEX": ["Jaw Crusher Parts — TverDEX", "颚式破碎机配件 — TverDEX"],
 "Детали щёковой дробилки: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Jaw crusher parts: made to order at our own factory, from a drawing, part number or photo.", "颚式破碎机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем детали щёковых дробилок под заказ: по чертежу, артикулу или фотографии.": ["We make jaw crusher parts to order: from a drawing, part number or photo.", "我们按订单生产颚式破碎机配件：依据图纸、编号或照片。"],
 "Износостойкость под вашу породу:": ["Wear resistance for your rock:", "适配您岩石的耐磨性："],
 "Подбираем материал дробящих плит с учётом абразивности и ударных нагрузок — для гранита, известняка или руды.": ["We select the material of the crushing plates taking abrasiveness and impact loads into account — for granite, limestone or ore.", "根据磨蚀性和冲击载荷选择破碎板材料——适用于花岗岩、石灰石或矿石。"],
 "Плиты, клинья и распорные детали делаем по чертежу или фото, чтобы они вставали без подгонки.": ["Plates, wedges and toggle parts are made from a drawing or photo so that they fit without adjustment.", "板件、楔块和肘板依据图纸或照片制作，安装无需修配。"],
 "Правильно подобранные материал и размер помогают дольше работать между заменами и реже останавливать дробилку.": ["Properly selected material and size help you work longer between replacements and stop the crusher less often.", "选配得当的材料和尺寸可延长更换间隔，减少破碎机停机。"],
 "Делаем детали щёковых дробилок разных производителей — достаточно модели, чертежа или фото.": ["We make parts for jaw crushers of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的颚式破碎机制作配件——提供型号、图纸或照片即可。"],
 "Плита распорная": ["Toggle plate", "肘板"],
 "Основная износостойкая деталь камеры дробления. Изготавливаем под вашу модель дробилки и породу — по чертежу или фото.": ["The main wear-resistant part of the crushing chamber. Made for your crusher model and rock — from a drawing or photo.", "破碎腔的主要耐磨部件。按您的破碎机型号和岩石制作——依据图纸或照片。"],
 "Передаёт усилие на подвижную щёку и защищает механизм дробилки от перегрузки. Делаем по размерам вашей дробилки.": ["Transmits force to the movable jaw and protects the crusher mechanism from overload. Made to the dimensions of your crusher.", "将力传递给动颚，并保护破碎机机构免受过载。按您的破碎机尺寸制作。"],
 "Боковые футеровочные плиты (боковые брони) являются быстроизнашивающимися деталями щековой дробилки и служат для защиты боковых стенок камеры дробления.": ["Side liner plates (side armors) are wear parts of a jaw crusher and protect the side walls of the crushing chamber.", "侧衬板（侧护板）是颚式破碎机的易损件，用于保护破碎腔侧壁。"],

 /* ===== Конусные дробилки ===== */
 "Детали конусной дробилки — TverDEX": ["Cone Crusher Parts — TverDEX", "圆锥破碎机配件 — TverDEX"],
 "Детали конусной дробилки: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Cone crusher parts: made to order at our own factory, from a drawing, part number or photo.", "圆锥破碎机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Изготавливаем детали конусных дробилок под заказ: по чертежу, артикулу или фотографии.": ["We make cone crusher parts to order: from a drawing, part number or photo.", "我们按订单生产圆锥破碎机配件：依据图纸、编号或照片。"],
 "Износостойкость в камере дробления:": ["Wear resistance in the crushing chamber:", "破碎腔内的耐磨性："],
 "Конусы и броню изготавливаем с учётом породы, размера фракции и нагрузок в камере.": ["Cones and liners are made taking into account the rock, fraction size and loads in the chamber.", "锥体和衬板的制作综合考虑岩石、粒级和破碎腔载荷。"],
 "Плотная посадка:": ["Tight fit:", "贴合紧密："],
 "Детали делаем по чертежу или фото, чтобы броня плотно садилась на конус и чашу.": ["Parts are made from a drawing or photo so that the liner sits tightly on the cone and bowl.", "配件依据图纸或照片制作，使衬板与锥体和碗体紧密贴合。"],
 "Стабильная фракция:": ["Stable fraction:", "粒级稳定："],
 "Правильный профиль и размер деталей помогают дольше держать нужную крупность продукта.": ["The right profile and size of parts help maintain the required product size for longer.", "合适的型面和尺寸有助于更长时间保持所需的产品粒度。"],
 "Делаем детали конусных дробилок разных производителей — достаточно модели, чертежа или фото.": ["We make parts for cone crushers of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的圆锥破碎机制作配件——提供型号、图纸或照片即可。"],
 "Броня неподвижного конуса": ["Fixed cone liner (concave)", "定锥衬板"],
 "Подвижный и неподвижный конусы дробильной камеры. Изготавливаем под вашу модель дробилки.": ["Movable and fixed cones of the crushing chamber. Made for your crusher model.", "破碎腔的动锥和定锥。按您的破碎机型号制作。"],
 "Броня подвижного конуса": ["Movable cone liner (mantle)", "动锥衬板"],
 "Сменная износостойкая поверхность рабочих органов. Подбираем материал и профиль под вашу породу.": ["Replaceable wear-resistant surface of the working elements. We select material and profile for your rock.", "破碎机的部件可更换耐磨表面。根据您的岩石选配材料和型面。"],
 "Другие детали": ["Other parts", "其他配件"],
 /* ===== Добавлено: общие ===== */
 "Нет чертежа —наши инженеры определят размеры.": ["No drawing? Our engineers will determine the dimensions.", "没有图纸？我们的工程师将确定尺寸。"],
 "помощь в подборе деталей и сопровождение заказа.": ["help with parts selection and order support.", "协助配件选型并跟进订单。"],
 "Контакты": ["Contacts", "联系我们"],
 "Найдите нас в WeChat по этому номеру:": ["Find us on WeChat by this number:", "请通过此号码在微信上搜索我们："],
 "Найти по номеру": ["Find by number", "按号码搜索"],
 "Делаем детали двухвалковых дробилок разных производителей — достаточно модели, чертежа или фото.": ["We make parts for double-roller crushers of different manufacturers — a model, drawing or photo is enough.", "可为不同厂家的双辊破碎机制作配件——提供型号、图纸或照片即可。"],
 "Полный каталог продукции TverDEX для дробильного и мельничного оборудования: запчасти под заказ по чертежу, артикулу или фото.": ["Full TverDEX product catalog for crushing and grinding equipment: spare parts made to order from a drawing, part number or photo.", "TverDEX 破碎与磨粉设备产品完整目录：依据图纸、编号或照片定制配件。"],
 /* ===== Добавлено: мельницы высокого давления ===== */
 "Детали для мельницы высокого давления — TverDEX": ["High-Pressure Mill Parts — TverDEX", "高压磨机配件 — TverDEX"],
 "Детали для мельницы высокого давления: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["High-pressure mill parts: made to order at our own factory, from a drawing, part number or photo.", "高压磨机配件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Детали мельниц высокого давления": ["High-pressure mill parts", "高压磨机配件"],
 "Фото: Детали мельниц высокого давления": ["Photo: High-pressure mill parts", "照片：高压磨机配件"],
 "Детали для мельницы высокого давления": ["High-pressure mill parts", "高压磨机配件"],
 "Изготавливаем детали мельниц высокого давления под заказ: по чертежу, артикулу или фотографии.": ["We make high-pressure mill parts to order: from a drawing, part number or photo.", "我们按订单生产高压磨机配件：依据图纸、编号或照片。"],
 "Износостойкость рабочих валков:": ["Wear resistance of working rolls:", "工作辊耐磨性："],
 "Рабочие поверхности валков подбираются с учётом твёрдости материала, абразивности сырья и рабочих нагрузок, обеспечивая высокую износостойкость при эксплуатации.": ["Roll surfaces are selected for material hardness, raw-material abrasiveness and operating loads, ensuring high wear resistance in service.", "根据物料硬度、原料磨蚀性和工作载荷选配辊面，确保使用中具有较高的耐磨性。"],
 "Точная геометрия и посадка:": ["Precise geometry and fit:", "几何尺寸与配合精准："],
 "Изготавливаем комплектующие по чертежам или образцам, обеспечивая точное соответствие размеров и надёжную установку деталей.": ["Parts are made from drawings or samples, ensuring exact dimensions and reliable installation.", "配件依据图纸或样品制作，确保尺寸准确、安装可靠。"],
 "Стабильная работа оборудования:": ["Stable equipment operation:", "设备运行稳定："],
 "Точная геометрия и качество изготовления деталей способствуют равномерному распределению нагрузки и стабильной работе валкового пресса.": ["Precise geometry and manufacturing quality ensure even load distribution and stable roller-press operation.", "精准的几何尺寸和制造质量有助于载荷均匀分布，保证辊压机稳定运行。"],
 "Делаем детали производителей — достаточно модели, чертежа.": ["We make parts for any manufacturer — a model or drawing is enough.", "可制作各厂家配件——提供型号、图纸即可。"],
 "Мелющее кольцо": ["Grinding ring", "磨环"],
 "Рабочая поверхность, по которой катится мелющий ролик": ["The working surface on which the grinding roller rolls.", "磨辊滚动所依托的工作表面。"],
 "Мелющий ролик": ["Grinding roller", "磨辊"],
 "Под действием центробежной силы прижимается к мелющему кольцу и раздавливает материал, является основным быстроизнашивающимся элементом мельницы.": ["Pressed against the grinding ring by centrifugal force, it crushes the material and is the main wear part of the mill.", "在离心力作用下压向磨环并碾碎物料，是磨机的主要易损件。"],
 "Крестовина": ["Spider (cross frame)", "梅花架"],
 "Несущая конструкция, на которой закреплены мелющие ролики": ["The supporting structure on which the grinding rollers are mounted.", "用于固定磨辊的承载结构。"],
 /* ===== Добавлено: прочие литые детали ===== */
 "Прочие литые детали — TverDEX": ["Other Cast Parts — TverDEX", "其他铸件 — TverDEX"],
 "Прочие литые детали: изготовление под заказ на собственном заводе, по чертежу, артикулу или фото.": ["Other cast parts: made to order at our own factory, from a drawing, part number or photo.", "其他铸件：自有工厂定制生产，依据图纸、编号或照片。"],
 "Прочие литые детали": ["Other cast parts", "其他铸件"],
 "Фото: Прочие литые детали": ["Photo: Other cast parts", "照片：其他铸件"],
 "Изготавливаем прочие литые детали под заказ: по чертежу, артикулу и фотографии.": ["We make other cast parts to order: from a drawing, part number or photo.", "我们按订单生产其他铸件：依据图纸、编号或照片。"],
 "Износостойкость:": ["Wear resistance:", "耐磨性："],
 "Например быстроизнашивающиеся детали для цементной, горнодобывающей, перерабатывающей и других отраслей.": ["For example, wear parts for the cement, mining, processing and other industries.", "例如水泥、矿山、加工等行业的易损件。"],
 "Плотное прилегание:": ["Tight fit:", "贴合紧密："],
 "Изготовление по чертежам с учётом конкретной машины и конкретной детали.": ["Made from drawings for the specific machine and part.", "依据图纸，针对具体设备和具体配件制作。"],
 "Стабильное качество:": ["Consistent quality:", "质量稳定："],
 "Мы контролируем качество каждой производимой детали.": ["We inspect the quality of every part we produce.", "我们对生产的每一件配件进行质量把控。"],
 "Делаем детали разных производителей — достаточно модели, чертежа.": ["We make parts for different manufacturers — a model or drawing is enough.", "可制作不同厂家的配件——提供型号、图纸即可。"],
 "Зубчатая футеровочная плита": ["Toothed liner plate", "齿形衬板"],
 "Зубчатая износостойкая футеровочная плита, воспринимающая удар и абразивный износ материала и защищающая корпус оборудования.": ["A toothed wear-resistant liner plate that absorbs impact and abrasive wear and protects the equipment body.", "齿形耐磨衬板，承受物料冲击和磨蚀，保护设备本体。"],
 "Гребёнчатая плита": ["Comb plate", "梳齿板"],
 "Кубический пресс имеет шесть групп шарнирных балок, которые служат для восприятия огромных гидравлических нагрузок. Обычно это крупные высокопрочные поковки из стали.": ["A cubic press has six sets of hinged beam structures, which are used to withstand huge hydraulic loads. They are usually large, high-strength forged steel parts.", "螺旋形泵壳的作用是收集叶轮甩出的液体，引导液体平稳流向泵出口。"],
 "Зубчатое кольцо": ["Toothed ring", "齿环"],
 "Зубчатое кольцо — это кольцевая износостойкая деталь с зубьями, обычно применяемая внутри дробилок или мельниц для восприятия ударных и абразивных нагрузок от материала, защиты корпуса оборудования и улучшения захвата и выгрузки материала.": ["A ring-shaped wear-resistant part with teeth, used inside crushers or mills to withstand impact and abrasion, protect the body and improve material grip and discharge.", "带齿的环形耐磨件，用于破碎机或磨机内部，承受冲击和磨蚀，保护设备本体，并改善物料抓取和排出。"],
 "Детали шламового насоса": ["Slurry pump parts", "渣浆泵配件"],
 "Служат для защиты корпуса насоса, формирования канала потока и обеспечения стабильной перекачки пульпы в условиях абразивного износа.": ["Used to protect the pump casing, form the flow passage, and ensure stable slurry transportation under abrasive conditions.", "六面顶压机有六组铰链梁结构，用来承受巨大的液压载荷。通常是大型高强度锻钢件。"],
"Корпус насоса": ["Volute", "泵壳"],
"Назначение спирального корпуса — собирать жидкость, выбрасываемую рабочим колесом, и плавно направлять её к выходу насоса.": ["The function of the spiral casing is to collect the liquid discharged by the impeller and smoothly guide it to the pump outlet.", "螺旋形壳体的作用是将叶轮甩出的液体收集起来，并平稳地将其引导至泵的出口。"],
"Шарнирная балка": ["Hinge Beam", "铰链梁"],
"футеровка шаровой мельницы": ["ball mill liner", "球磨机衬板"],

};

  var LANGS = ['ru', 'en', 'zh'];
  var ATTRS = ['alt', 'placeholder', 'aria-label', 'title'];
  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  var items = [];
  function collect() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) {
      var p = n.parentNode && n.parentNode.nodeName;
      if (p === 'SCRIPT' || p === 'STYLE' || p === 'NOSCRIPT') continue;
      var k = norm(n.nodeValue);
      if (k && T[k]) items.push({ node: n, orig: n.nodeValue, key: k });
    }
    var els = document.body.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      for (var j = 0; j < ATTRS.length; j++) {
        var v = els[i].getAttribute(ATTRS[j]);
        if (v && T[norm(v)]) items.push({ el: els[i], attr: ATTRS[j], orig: v, key: norm(v) });
      }
    }
    var meta = document.querySelector('meta[name="description"]');
    if (meta && T[norm(meta.content)]) items.push({ el: meta, attr: 'content', orig: meta.content, key: norm(meta.content) });
    if (T[norm(document.title)]) items.push({ title: true, orig: document.title, key: norm(document.title) });
  }

  function apply(lang) {
    var idx = LANGS.indexOf(lang) - 1; // ru = -1
    items.forEach(function (it) {
      var out = it.orig;
      if (idx >= 0) {
        var lead = it.orig.match(/^\s*/)[0], trail = it.orig.match(/\s*$/)[0];
        out = lead + T[it.key][idx] + trail;
      }
      if (it.node) it.node.nodeValue = out;
      else if (it.title) document.title = out;
      else it.el.setAttribute(it.attr, out);
    });
    document.documentElement.lang = lang;
    [].forEach.call(document.querySelectorAll('.lang-switch button'), function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    // смена картинок по языку: data-src-zh / data-src-en
    [].forEach.call(document.querySelectorAll('img[data-src-zh], img[data-src-en]'), function (img) {
      if (!img.hasAttribute('data-src-ru')) img.setAttribute('data-src-ru', img.getAttribute('src'));
      var next = img.getAttribute('data-src-' + lang) || img.getAttribute('data-src-ru');
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
    });
    try { localStorage.setItem('tverdex_lang', lang); } catch (e) {}
  }

  function start() {
    collect();
    var lang = 'ru';
    var m = /[?&]lang=(ru|en|zh)/.exec(location.search);
    if (m) lang = m[1];
    else { try { lang = localStorage.getItem('tverdex_lang') || 'ru'; } catch (e) {} }
    if (LANGS.indexOf(lang) < 0) lang = 'ru';
    [].forEach.call(document.querySelectorAll('.lang-switch button'), function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
    });
    apply(lang);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
