const commands = `
/start - Перезапустить бота
/help - Помощь
/instructions - Инструкции
/links - Ссылки
/interest - Инерестно
/connection - Удалённое подключение
/user - Учетная заись
/mail - Почта
/cloud - Облако МТС`

const update_pass_1 = `1 вариант. Восользуйтесь сервисом по смене пароля https://password.mts.ru`
const update_pass_2 = `2 вариант. Отправьте СМС на номер 58888 с текстом "pass пробел ваш логин"(pass vanagay2)\nВ случае успешной регистрации запроса в ответном SMS поступит сначала номер заявки, а через несколько минут временный пароль`
const update_pass_3 = `<b>ВАЖНО!:</b>\nЧтобы на вашем устройтве(Ноутбук/Макбук) пароль поменялся корректно, устройство в момент смены пароля должно находиться в корпоротивной сети(WIFI Corporate, подключенный VPN, проводм по Ethernet)\nПосле смены пароля, перезагрузите устройтсво и выолните вход с новым паролем.`
const update_pass_4 = `На Макбуках после входа, может потребоваться обновить "Связку ключей" нажмите <b>Обновить</b> и введите предыдущий пароль`


const unlock_1 = `Учетная запись блокируется на 15 мин. Чтобы ускорить процесс, отправьте СМС на номер 58888 с текстом "unlock пробел ваш логин(unlock vanagay2)",`

const aut_1 = `Чтобы получить новый QR код для Аутентификатора, вам нужно\n1. Зайти на портал <a href="https://newportal.mts.ru">Пульс</a>\n2. Перейти в личный кабинет, внизу справа выбрать - <b>Управление учётной записью</b>`
const aut_2 = `3. Нажмите- <b>Удалить настрйку аутентификатора</b>`


const vpn = `1. Подключитесь к WIFI интернету(дома или кафе)\n2. Установите любой Аутентификатор на мобильный телефон\n3. Запустите CiscoAnyConnect\n4. Выберите профиль для подключения - <b>MSK VPN-RA</b>`
const vpn_2 = `5. Поменяйте группу с <b>BOYD</b> на <b>DAP</b>\n6. Введите логин и пароль от УЗ`
const vpn_3 = `6. Откройте ваш Аутентификатор и отсканируйте QR код, или нажмите "Выбрать другой способ входа - получить код по СМС"\n7. Введите полученный код в окне подключения`
const vpn_4 = `8. Теперь все корпоротивные сервисы доступны вне офиса)`


const vdi = `1. Откройте браузер и введите в адресной строке vdi.mts.ru\n2. Выберите регион "Москва или Центр"\n3. Нажмите на ваш рабочий стол, далее откройте скаченный файл`


const vdi_home_1 = `1. Скачайте на свое устройство <a href="https://remote.mts.ru/download.html">CitrixWorkSpace и HDX Media</a>\n2. После установки, откройте браузер и введите в адресной строке vdi.mts.ru\n3. Выберите регион "Москва или Центр"`
const vdi_home_2 = `4. Введите логин и пароль от УЗ\n5. Откройте ваш Аутентификатор и отсканируйте QR код, или нажмите "Выбрать другой способ входа - получить код по СМС"\n6. Введите полученный код в окне подключения`
const vdi_home_3 = `7. Нажмите на ваш рабочий стол, далее откройте скаченный файл`


const vpn_home_1 = `1. Скачайте на свое устройство <a href="https://remote.mts.ru/download.html">CiscoAnyConnect</a>\n2. После установки запустите CiscoAnyConnect, далее в открывшемся окне пропишите <b>vpn-ra.mts.ru</b> и нажмите <b>Connect</b>`
const vpn_home_2 = `3. Введите свой логин и пароль, откройте ваш Аутентификатор и отсканируйте QR код, или нажмите "Выбрать другой способ входа - получить код по СМС"\n4. Введите полученный код в окне подключения`
const vpn_home_3 = `5. Теперь все корпоротивные сервисы доступны вне офиса)`


const new_pass = `<b>Ваш новый пароль</b>`
const qp_1 = `1. Добавьте к ноутбуку/ПК принтер - prn0000-QR-print, затем отправьте на этот принтер печать\n2. Скачайте приложение <a href="https://our.mts.ru/">Наш МТС</a>. \n3. Подойдите к любому удобному для вас принтеру в офисе МТС\n4. Откройте на вашем телефоне наш МТС - раздел "Сервисы" => "Печать"`
const qp_2 = `5. Нажмите кнопку Распечатать`
const qp_3 = `5. Следуйте подсказкам на экране телефона`
const qp_4 = `<b>ПРИМЕЧАНИЕ:</b>\n<b>a</>. Для корректной работы сервиса необходимо, чтобы для входа в устройство (откуда отправляется документ на печать) и в мобильное приложение, использовалась одна и та же УЗ\n<b>b.</b> Печать производится только с корпоротивных доменных устройств.`


const mail_and_1 = `1. Откройте приложение Gmail\n2. Если у вас настроено несколько аккаунтов в приложении, в левой боковой панели Gmail опуститесь в самый низ ленты, выберите Настройки – Добавить аккаунт\n
3. Укажите свою почту в коротком формате ваш_логин@mts.ru и нажмите Далее`
const mail_and_2 = `4. Если по каким-то причинам настройка не произошла, вернитесь на шаг назад, после ввода почты нажмите Настроить вручную`
const mail_and_3 = `5. Обратите внимание, что в некоторых версиях приложений поле Домен и Имя пользователя совмещены в одно, поэтому смотрите на подсказки к полям`


const mail_ios_1 = `1. С домашней страницы необходимо перейти в «Настройки» и выбрать раздел «Почта»\n2. Для создания нового профиля необходимо перейти в «Учетные записи»`
const mail_ios_2 = `3. Далее нажимаем «Новая учетная запись» и выбираем тип профиля Microsoft Exchange`
const mail_ios_3 = `4. Вводим адрес электронной почты в поле E-Mail, указываем Описание, нажимаем Далее. Появится запрос, на который следует ответить «Настроить вручную»`
const mail_ios_4 = `5. Возможно потребуется ввести дополнительные параметры`


const linkSd_1 = `<a href="https://servicedesk.mts.ru/blueprints/c086c0e4-4f81-11ed-b588-045056007107">Выдача доп ИТ оборудования</a>`
const linkSd_2 = `<a href="https://servicedesk.mts.ru/blueprints/8608eaa4-36bd-4603-8609-49b5b23e37a8">Возврат ИТ оборудования</a>`
const linkSd_3 = `<a href="https://servicedesk.mts.ru/blueprints/c81526fa-5375-11ec-8753-f2c7f09e4192">Предоставление прав локального админа</a>`
const linkSd_4 = `<a href="https://sam.mts.ru">Витрина приложений</a>`
const linkSd_5 = `<a href="https://helpdesk.mts.ru/CatalogViewer.aspx?Id=186809">Предоставление доступа к мессенджерам</a>`


const print_win_1 = `1. Зайдите в Параметры Windows`
const print_win_2 = `2. С левой строны в навигации выберите пареметр <b>Принтеры и сканеры</b>, далее нажмие на +(Добавить принтер)`
const print_win_3 = `3. Появившиеся список нужно прокрутить почти в самый низ, там вы увидите пункт <b>Необходимый принтер отсутствует в списке</b>, нажмите на него`
const print_win_4 = `4. Выбирете пункт <b>добавьте принтер, используя IP-адрес или имя узла</b>, затем нажмите далее`
const print_win_5 = `5. В поле <b>Имя или IP-адрес</b> введите имя принтера, затем нажмите далее`
const print_win_6 = `6. Вы усешно добали принтер. Для проверки можно распечатать пробную страницу)n7. Важный момент! все действия должны выполняться внутри копоротивной сети.`


const print_mac_1 = `1. Откройте настрйки на вашем MAC. С левой строны, в навигации выберите пареметр <b>Принтеры и сканеры</b>, затем нажмите кнопку <b>Добавить принтер</b>`
const print_mac_2 = `2. В поле поиска введите имя принтера. В параметре <b>Использовать:</b> выберите <b>Универсальный принтер PostScript</b>`
const print_mac_3 = `3. Подключённый принтер можно увидеть в списке (Принтеры)\n4. Важный момент! все действия должны выполняться внутри копоротивной сети.`


const cloud = `<a href="https://nextcloud.mts.ru">Облако МТС</a>`


module.exports.commands = commands

module.exports.update_pass_1 = update_pass_1
module.exports.update_pass_2 = update_pass_2
module.exports.update_pass_3 = update_pass_3
module.exports.update_pass_4 = update_pass_4

module.exports.unlock_1 = unlock_1

module.exports.aut_1 = aut_1
module.exports.aut_2 = aut_2


module.exports.vpn = vpn
module.exports.vpn_2 = vpn_2
module.exports.vpn_3 = vpn_3
module.exports.vpn_4 = vpn_4

module.exports.vpn_home_1 = vpn_home_1
module.exports.vpn_home_2 = vpn_home_2
module.exports.vpn_home_3 = vpn_home_3 

module.exports.vdi_home_1 = vdi_home_1
module.exports.vdi_home_2 = vdi_home_2
module.exports.vdi_home_3 = vdi_home_3

module.exports.vdi = vdi
module.exports.new_pass = new_pass
module.exports.qp_1 = qp_1
module.exports.qp_2 = qp_2
module.exports.qp_3 = qp_3
module.exports.qp_4 = qp_4

module.exports.mail_ios_1 = mail_ios_1
module.exports.mail_ios_2 = mail_ios_2
module.exports.mail_ios_3 = mail_ios_3
module.exports.mail_ios_4 = mail_ios_4


module.exports.mail_and_1 = mail_and_1
module.exports.mail_and_2 = mail_and_2
module.exports.mail_and_3 = mail_and_3


module.exports.print_win_1 = print_win_1
module.exports.print_win_2 = print_win_2
module.exports.print_win_3 = print_win_3
module.exports.print_win_4 = print_win_4
module.exports.print_win_5 = print_win_5
module.exports.print_win_6 = print_win_6


module.exports.print_mac_1 = print_mac_1
module.exports.print_mac_2 = print_mac_2
module.exports.print_mac_3 = print_mac_3


module.exports.linkSd_1 = linkSd_1
module.exports.linkSd_2 = linkSd_2
module.exports.linkSd_3 = linkSd_3
module.exports.linkSd_4 = linkSd_4
module.exports.linkSd_5 = linkSd_5

module.exports.cloud = cloud