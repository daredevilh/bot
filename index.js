process.env['NTBA_FIX_319'] = 1;
const TelegramApi = require('node-telegram-bot-api');

const token = '5909310913:AAHb4AOOF0c45lJkMCajxRTzOU9gHFbq5Aw';

const bot = new TelegramApi(token, { polling: true });

const chats = {};

const questions = [
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Начнем с простенького. Зимой – серый, летом – белый. Кто это?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'Конь', callback_data: 'Конь' },
                            { text: 'Заяц', callback_data: 'Заяц' },
                        ],
                        [
                            { text: 'Волк', callback_data: 'Волк' },
                            { text: 'Кот', callback_data: 'Кот' },
                        ],
                    ],
                }),
            });
        },
        answer: 'Заяц',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'А как насчет страны в которой первой украсили елку?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'США', callback_data: 'США' },
                            { text: 'Украина', callback_data: 'Украина' },
                        ],
                        [
                            { text: 'Франция', callback_data: 'Франция' },
                            { text: 'Германия', callback_data: 'Германия' },
                        ],
                    ],
                }),
            });
        },
        answer: 'Германия',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Вероятно, на одних только вопросах мы так далеко не уедем, мне кажется нужно осмотреть место приступления, вероятно на елке или около елки должны были остаться какие нибудь улики. Если найдешь что нибудь подозрительное, то напиши что нашла ниже (есть информация, что вор любит оставлять записки)'
            );
        },
        answer: 'happy',
    },
    {
        question: async (chatId) => {
            await bot.sendAudio(chatId, 'assets/resqw.mp3');
            return bot.sendMessage(
                chatId,
                'Я тут тоже не сидел без дела, и обнаружил странную аудиозапись с прослушки комнаты, вероятно в момент кражи, это явно песня, только не пойму какая!'
            );
        },
        answer: 'lose yourself',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Чем, согласно пословице, не дорожат зимой?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'Льдом', callback_data: 'Льдом' },
                            { text: 'Снегом', callback_data: 'Снегом' },
                        ],
                        [
                            { text: 'Теплом', callback_data: 'Теплом' },
                            { text: 'Бухлом', callback_data: 'Бухлом' },
                        ],
                    ],
                }),
            });
        },
        answer: 'Льдом',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Как же я сразу не подумал, есть же свидетели! Нужно их опросить, узнай у гномов может они что нибудь видели, напиши если что нибудь найдешь!'
            );
        },
        answer: 'satisfaction',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'В какой стране на Новый Год принято освещать путь?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'Япония', callback_data: 'Япония' },
                            { text: 'Китай', callback_data: 'Китай' },
                        ],
                        [
                            {
                                text: 'Южная Корея',
                                callback_data: 'Южная Корея',
                            },
                            { text: 'Австралия', callback_data: 'Австралия' },
                        ],
                    ],
                }),
            });
        },
        answer: 'Китай',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Что за подозрительный субъект серого цвета пробежал рысцой мимо елки?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'Волк', callback_data: 'Волк' },
                            { text: 'Заяц', callback_data: 'Заяц' },
                        ],
                        [
                            {
                                text: 'Денис',
                                callback_data: 'Денис',
                            },
                            { text: 'Показалось', callback_data: 'Волк' },
                        ],
                    ],
                }),
            });
        },
        answer: 'Волк',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                '"Мне десять лет. Телевизор - это моя жизнь". Из какого новогоднего фильма эта фраза?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'Один дома', callback_data: 'Один дома' },
                            {
                                text: 'Один дома 2',
                                callback_data: 'Один дома 2',
                            },
                        ],
                        [
                            {
                                text: 'Гринч',
                                callback_data: 'Гринч',
                            },
                            {
                                text: 'Рождественские каникулы',
                                callback_data: 'Рождественские каникулы',
                            },
                        ],
                    ],
                }),
            });
        },
        answer: 'Один дома',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Какой напиток является неотъемлемым атрибутом новогоднего вечера для гостей, которые любят риск?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'Водка', callback_data: 'Водка' },
                            { text: 'Пиво', callback_data: 'Пиво' },
                        ],
                        [
                            {
                                text: 'Ягер',
                                callback_data: 'Ягер',
                            },
                            { text: 'Шампанское', callback_data: 'Шампанское' },
                        ],
                    ],
                }),
            });
        },
        answer: 'Шампанское',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'У меня есть ощущение, что нужно поискать там, где за закрытой дверью находится еще две двери! Напиши что найдешь.'
            );
        },
        answer: 'gift',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Я уже чувствую что мы подобрались максимально близко к подарку, остался один вопрос, как называется лучшее аниме всех времен и народов которому нет и никогда не будет равных?'
            );
            return bot.sendMessage(chatId, 'Отгадывай!', {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [
                            { text: 'Naruto', callback_data: 'Naruto' },
                            {
                                text: 'Какая то хрень',
                                callback_data: 'Какая то хрень',
                            },
                        ],
                        [
                            {
                                text: "JoJo's Bizzare Adventure",
                                callback_data: 'JoJo',
                            },
                            {
                                text: 'Что-то там про титанов',
                                callback_data: 'Титаны',
                            },
                        ],
                    ],
                }),
            });
        },
        answer: 'JoJo',
    },
    {
        question: async (chatId) => {
            await bot.sendMessage(
                chatId,
                'Хей, а мы все таки справились, вот наглая рожа спрятавшая подарок! Найди его и узнай где тебе взять свой подарок!'
            );
            await bot.sendPhoto(chatId, 'assets/photo1.jpeg');
        },
        answer: '2',
    },
];

const nextQuestionButton = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Следующий вопрос!', callback_data: '/game' }],
        ],
    }),
};

const start = () => {
    let currentQuestion = 0;
    bot.setMyCommands([
        { command: '/start', description: 'Приветствие' },
        { command: '/game', description: 'Начать игру' },
    ]);

    bot.on('message', async (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendSticker(
                chatId,
                'https://tlgrm.ru/_/stickers/527/fbe/527fbecd-b9ea-33f6-8d5c-49859f8d4815/15.jpg'
            );
            return bot.sendMessage(
                chatId,
                `Эй, привет, похоже, что твой подарок куда то исчез, но не переживай я помогу тебе его найти! Для этого выбери команду /game в меню и чтобы получить подарок нужно будет ответить на несколько вопросов.`
            );
        }

        if (text === '/game') {
            await questions[currentQuestion].question(chatId);
        }

        if (text === questions[currentQuestion].answer) {
            bot.sendMessage(
                chatId,
                `Поздравляю, правильно!`,
                nextQuestionButton
            );
            currentQuestion++;
            return;
        }
    });

    bot.on('callback_query', async (msg) => {
        console.log(msg);
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === '/game') {
            return await questions[currentQuestion].question(chatId);
        }
        if (data === questions[currentQuestion].answer) {
            bot.sendMessage(
                chatId,
                `Поздравляю, правильно!`,
                nextQuestionButton
            );
            currentQuestion++;
            return;
        } else {
            return bot.sendMessage(chatId, `Эхххх, давай другой вариант)`);
        }
    });
};

start();
