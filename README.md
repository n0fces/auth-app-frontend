# Фронтенд часть приложения по JWT-авторизации

## Обзор проекта

Проект является визуальным представлением для функционала **[серверной части JWT-авторизации](https://github.com/n0fces/auth-app)** и не решает какую-то определенную бизнес-задачу. Это приложение - только дополнение к северной части авторизации

---

## Скрипты проекта

- `npm run dev` - Запуск проекта в режиме разработки
- `npm run build` - Запуск production-сборки проекта
- `npm run lint:ts` - Запуск eslint для ts файлов
- `npm run lint:ts:fix` - Автоисправление ошибок eslint'ом
- `npm run lint:scss` - Запуск stylelint для scss файлов
- `npm run lint:scss:fix` - Автоисправление ошибок stylelint'ом
- `npm run prettier` - Запуск форматирования кода через prettier

---

## Конфигурация проекта

Сборка проекта осуществляется при помощи **[vite](https://vite.dev/)**. Основная конфигурация проекта выглядит следующим образом

```js
export default defineConfig({
	// react() - дефолтный Vite плагин для React проектов
	plugins: [react()],
	resolve: {
		// в проекте используются alias /src => @
		alias: [{ find: '@', replacement: '/src' }],
	},
	css: {
		// The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
		// https://vitejs.dev/config/shared-options#css-preprocessoroptions
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
});
```

---

## Используемый стек технологий

### Основные зависимости проекта

Для построения пользовательского интерфейса используется библиотека `react`. Для работы с формами в проекте используется библиотека `react-hook-form`. Роутинг на стороне клиента настроен при помощи `react-router-dom`. Все используемые в проекте зависимости:

- **[axios](https://axios-http.com/ru/): v1.7.7** — HTTP-клиент для браузера и node.js на основе Promise.
- **[clsx](https://github.com/lukeed/clsx): v2.1.1** — Утилита для условного построения строк имен классов.
- **[react](https://reactjs.org/): v18.3.1** — Библиотека для создания пользовательских интерфейсов.
- **[react-dom](https://reactjs.org/): v18.3.1** — Библиотека для взаимодействия React с DOM.
- **[react-hook-form](https://react-hook-form.com/): v7.53.0** — Библиотека для управления формами в приложениях React.
- **[react-router-dom](https://reactrouter.com/): v6.26.2** — Управление маршрутизацией на стороне клиента.

### Зависимости для разработки проекта

В проекте используются следующие зависимости для разработки:

- **[@eslint/js](https://www.npmjs.com/package/@eslint/js): v9.11.0** — Набор встроенных правил ESLint для JavaScript.
- **[@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports): v4.3.0** — Prettier плагин для автоматической сортировки импортов в файлах.
- **[@types/node](https://www.npmjs.com/package/@types/node): v22.5.5** — Типы TypeScript для Node.js.
- **[@types/react](https://react.dev/learn/typescript): v18.3.8** — Типы TypeScript для React.
- **[@types/react-dom](https://react.dev/learn/typescript): v18.3.0** Типы TypeScript для React DOM.
- **[@typescript-eslint/parser](https://typescript-eslint.io/packages/parser/): v8.8.0** — TypeScript парсер для EsLint, используемый для разбора кода TypeScript на узлы, совместимые с ESLint.
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react): v4.3.1** — Vite плагин для React проектов.
- **[eslint](https://eslint.org/): v9.11.0** — Статический анализатор кода для нахождения и исправления ошибок.
- **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): v9.1.0** — Конфиг для отключения EsLint правил, которые могут конфликтовать с Prettier.
- **[eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react): v7.37.1** — ESLint плагин для предоставление правил по статическому анализу кодовой базы на React.
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): v5.1.0-rc-fb9a90fa48-20240614** — Плагин ESLint для обеспечения соблюдения правил для React hooks.
- **[eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh): v0.4.12** — Плагин ESLint для быстрого обновления React, обеспечивающий быструю перезагрузку во время разработки.
- **[globals](https://github.com/sindresorhus/globals): v15.9.0** — Библиотека глобально доступных переменных в JavaScript.
- **[husky](https://typicode.github.io/husky/): v9.1.6** — Инструмент для создания Git-hook'ов, позволяющий выполнять действия перед или после git-действий.
- **[lint-staged](https://github.com/lint-staged/lint-staged): v15.2.10** — Инструмент для выполнения действий только для Git-staged файлов.
- **[prettier](https://prettier.io/): v3.3.3** — Форматтер кода для различных языков.
- **[sass-embedded](https://github.com/sass/embedded-host-node): v1.79.3** — Встроенный компилятор Sass, используемый для компиляции SCSS в CSS.
- **[stylelint](https://stylelint.io/): v16.9.0** — Утилита для анализа CSS/SCSS файлов.
- **[stylelint-config-prettier-scss](https://github.com/prettier/stylelint-config-prettier-scss): v1.0.0** — Конфиг для отключения Stylelint правил, которые могут конфликтовать с Prettier.
- **[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard): v36.0.1** — Стандартная Stylelint конфигурация для обеспечения соблюдения хороших практик CSS.
- **[stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss): v13.1.0** — Стандартная Stylelint конфигурация для обеспечения соблюдения хороших практик SCSS.
- **[stylelint-order](https://github.com/hudochenkov/stylelint-order): v6.0.4** — Stylelint плагин для сортировки CSS правил в логическом и читаемом порядке.
- **[typescript](https://www.typescriptlang.org/): v5.6.2** — Типизированный язык программирования, основанный на JavaScript.
- **[typescript-eslint](https://typescript-eslint.io/): v8.6.0** — Инструментарий, который позволяет ESLint и Prettier поддерживать TypeScript.
- **[vite](https://vite.dev/): v5.4.7** — Современный сборщик для веб-проектов.

---

## Архитектура проекта

Данный проект построен на основе архитектурного подхода Feature-Sliced Design (FSD), который помогает лучше структурировать фронтенд-приложение для масштабируемости и удобства поддержки. Подробнее про fsd-архитектуру фронтенд приложений можно почитать в **[документации](https://feature-sliced.design/ru/)**.

### Схема структуры проекта

```
AUTH-APP-FRONTEND/
├── .husky/                     # Git hooks, управляемые с помощью Husky
├── dist/                       # Собранные файлы для production-сборки (не включается в Git)
├── public/                     # Статические файлы проекта (сейчас хранятся только svg-файлы)
├── src/                        # Исходный код приложения
│   ├── app/                    # Слой app
│   │   ├── providers/          # Провайдеры и основная конфигурация приложения
│   │   │	├── context/        # Конфигурация общего контекста проекта (используется обычный React Context)
│   │   │	└── router/         # Конфигурация роутинга проекта
│   │   ├── styles/             # Определение основных стилей и цветов проекта
│   │   └── index.tsx           # Remix Router instance для отображения соответствующего интерфейса
│   ├── entities/               # Слой entities
│   ├── features/               # Слой features
│   ├── pages/                  # Слой pages
│   ├── shared/                 # Слой shared
│   ├── widgets/                # Слой widgets
│   ├── main.tsx                # Точка входа в приложение (с подключением провайдеров приложения)
│   └── vite-env.d.ts           # Файл декларации типов для env-переменных
├── .env.development            # Переменные окружения для процесса разработки (не включается в Git)
├── .env.production             # Переменные окружения для production-сборки (не включается в Git)
├── .gitignore                  # Файл для исключения файлов из Git
├── .prettierignore             # Исключения для Prettier
├── .stylelintignore            # Исключения для Stylelint
├── comments.txt                # Внутренние заметки (не включаются в Git)
├── eslint.config.mjs           # Конфигурация ESLint
├── index.html                  # Точка входа в приложение, где подключаются основные файлы проекта
├── package-lock.json           # Фиксация версий зависимостей
├── package.json                # Основной файл проекта
├── prettier.config.mjs         # Конфигурация Prettier
├── README.md                   # Описание проекта
├── stylelint.config.mjs        # Конфигурация Stylelint
├── tsconfig.app.json           # Конфигурация TypeScript для браузерного окружения
├── tsconfig.json               # Общая конфигурация TypeScript
├── tsconfig.node.json          # Конфигурация TypeScript для Node окружения
├── vercel.json                 # Конфигурация для Vercel
└── vite.config.ts              # Конфигурация сборщика Vite
```

Для хранения основных данных используется React Context, потому что для такого проекта не имеет смысла добавлять какой-нибудь state manager. Далее все приложение оборачивается в `<UserProvider><UserProvider/>` в файле `main.tsx`.

```js
interface UserContextProps {
	// описание интерфейса
}

export const UserContext = createContext<UserContextProps | null>(null);

interface UserProviderProps {
	children: React.ReactNode;
}

const fetchUser = async () => await getUser();

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<UserDTO | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const init = () => {
		void fetchUser().then((response) => {
			const res = response?.data;
			if (res) setUser(res);
			setIsLoading(false);
		});
	};

	const value = {
		user, // набор данных о пользователе в системе (если он вообще зашел)
		isLoading, // состояние загрузки, которое используется при инциализации приложения
		setUser, // для установления данных о пользователе на клиенте
		init, // данная функция используются в UseEffect в компоненте <MainLayour/ > при первоначальном монтировании приложения
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
```

Роутинг приложения настроен с использованием `react-router-dom@6.26.2`. Компонент `Root` представляет из себя общую оболочку для всего приложения. `ErrorPage` - компонент для отлавливания всех ошибок в приложении. Компонент `MainLayout` выделяется для того, чтобы для определенных страниц делать запрос за данными авторизованного пользователя (по большому счету это проверка, авторизован ли пользователь или нет). Для остальных страниц за пределами `MainLayout` этот запрос за данными не нужен.

```js
export const router = createBrowserRouter([
	{
		path: routeMap.root,
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <MainLayout />,
				children: [
					// ...основные страницы приложения
				],
			},
			{
				path: routeMap.forgot,
				element: <ForgotPasswordPage />,
			},
			{
				path: routeMap.reset,
				element: <ResetPasswordPage />,
			},
		],
	},
]);
```

Shared-слой состоит из следующий сегментов
```
shared/
├── api/                 # Объявление instance'ов axios с interceptors
├── config/              # Файлы конфигураций, используемые во всем приложении
│   └── route-map.ts     # Собранные файлы для production-сборки (не включается в Git)
├── hooks/               # Кастомные хуки приложения
├── services/            # Сервисы, реализующие взаимодействие со сторонними API
├── types/               # Основные типы проекта
└── ui/                  # UI-библиотека компонентов проекта
```

По остальным слоям далее будет представлено содержание основных слайсов проекта.

---

## Описание схемы взаимодействия с серверной частью и получения данных

### Взаимодействие с серверной частью приложения

Для взаимодействия с **[серверной частью приложения](https://github.com/n0fces/auth-app)** в `/src/shared/api/authApi.ts` создан axios instance с названием `authApi`, для которого по умолчанию задается `baseURL` серверного приложения через env-переменные и опция `withCredentials: true`, чтобы сообщить axios о необходимости включать учетные данные в запросы кросс-домена.

Для каждого ответа сервера используется `interceptor`, основная логика которого заключается в запросе на обновление access или refresh токена, что зависит от ответов сервера. Если описание ошибки связано с тем, что токен скомпроментирован, то выполняется запрос на `logout`. Ошибки, код которых отличается от 401, пробрасываются дальше и обрабатываются на уровне приложения.

В файле `src/services/authService.ts` объявлены функции, которые используют `authApi` инстанс и описывают конкретные запросы к серверной части. Далее эти функции используются во всей готовой базе.

### Получение данных со стороннего API

В проекте есть роут `Gallery`, который доступен только для авторизованных пользователей. Авторизованные пользователи могут запросить случайную подборку картинок с собаками с `https://www.thedogapi.com/`. Для работы с этой API создан axios instance `dataApi` в `/src/shared/api/dataApi.ts` с указанием `baseURL` и заголовком `x-api-key` с токеном доступа.

Перед каждый запросом за данными сначала происходит проверка, не истек ли access токен через функцию `checkAccess`, которая использует `authApi` инстанс. Если все нормально, то будет выполнен запрос, а если нет, то сначала будет обновлен токен доступа (так как `checkAccess` использует `authApi`, то там уже предусмотрена логика по обновлению токенов за счет `interceptor.response`), а только потом все вернется к выполнению запроса за данными.

```js
dataApi.interceptors.request.use(
	async (config) => {
		await checkAccess(); // использует authApi, который содержит interceptor для обновления токенов
		return config;
	},
	(error) => {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	},
);
```

В файле `src/services/dataService.ts` указана одна функция для запроса подборки собак.

---

## Стилизация

При создании компонентов применялись scss-модули. Никакие библиотеки компонентов не использовались, так как проект нужен для предоставления функционала серверной части. Таким образом, UI-библиотека получилась небольшой, но все стили свои.

---

## Поддержание качества кода

Для подддержания качества кода в проекте используются EsLint, Prettier и Stylelint.
Конфигурация EsLint соответствует 9 версии с использованием Flat Config и подключает ряд конфигураций и плагинов, чтобы проводить статический анализ кодовой базы React-проекта на TypeScript. Подробнее с конфигурацией можно ознакомиться в `eslint.config.mjs`.

Prettier необходим для форматирования кода. Помимо подключения правил, которые я предпочитаю использовать в проектах, есть подключение `@trivago/prettier-plugin-sort-imports` плагина для сортировки импортов в нужном порядке. Для форматирования svg-файлов также включены дополнительные настройки. Подробнее с конфигурацией можно ознакомиться в `prettier.config.mjs`.

Для форматирования файлов стилей используется StyleLint. В файле настройки подключаются стандартные конфигурации для работы с css и scss файлами, отключаются правила, которые могут конфликтовать с prettier, при помощи `stylelint-config-prettier-scss`, добавляется плагин `stylelint-order` для сортировки css-правил. Весь файл конфигурации `stylelint.config.mjs`.

---

## Содержание по основным слоям и слайсам проекта

Для каждого слайса в слоях entities, features, widgets и pages приведен свой небольшой файл README.md для краткого описания той функциональности, которую он несет.

### Entities

- [Form](/src/entities/Form)
- [FormCard](/src/entities/FormCard)
- [InputPassword](/src/entities/InputPassword)

### Features

- [ForgotPasswordForm](/src/features/ForgotPasswordForm)
- [Logout](/src/features/Logout)
- [Oauth2](/src/features/Oauth2)
- [ResetPasswordForm](/src/features/ResetPasswordForm)
- [SignInForm](/src/features/SignInForm)
- [SignUpForm](/src/features/SignUpForm)

### Widgets

- [Footer](/src/widgets/Footer)
- [Header](/src/widgets/Header)
- [Page](/src/widgets/Page)

### Pages

- [ErrorPage](/src/pages/ErrorPage)
- [ForgotPasswordPage](/src/pages/ForgotPasswordPage)
- [GalleryPage](/src/pages/GalleryPage)
- [MainPage](/src/pages/MainPage)
- [ResetPasswordPage](/src/pages/ResetPasswordPage)
- [SignInPage](/src/pages/SignInPage)
- [SignUpPage](/src/pages/SignUpPage)

---

## Будущие изменения в проекте

Хочется проработать компонент FormSign, который позволил бы значительно сократить логику в компонентах форм из слоя features
Подробнее здесь: https://react-hook-form.com/advanced-usage#SmartFormComponent

Также в проект необходимо добавить несколько страницы, которые бы обрабатывали краевые случаи, уже предусмотренные серверной частью приложения.
