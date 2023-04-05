## 3.0.2-beta (April 05, 2023)
-   Add new state fields for FutureButton and typography function argument

## 3.0.1-beta (February 01, 2023)
-   Fix colorful icons being corrupted during `yarn tokens` command

## 3.0.0-beta (December 28, 2022)
-   🔥 New experimental theming conventions ([read more](?path=/docs/dev-theming2-0--page));
-   🔥 New type-safe `createMediaQueries()` function;
-   ✨ FutureButton component as an examplel of new theming conventions.

## 2.5.0 (December 21, 2022)

- 🔥 Update babel, rollup, webpack, typescript, eslint, prettier, storybook to latest versions;
- ⚙️ Fix issues with `align` and `direction` properties of `Layout` component;
- Migrate stories to work with sb 6.5: remove addon-knobs in favor of `args` and `argTypes`;
- Improve types of `Layout` component;

## 2.4.0 (January 10, 2021)

-   Fix Typescript version to solve react-docgen-typescript-loader issues;
-   Remove Palletes;
-   Stories updates;

## 2.3.0 (December 17, 2021)

-   Fix `Critical dependency` error;

## 2.2.0 (June 8, 2021)

-   Export button type
-   Fix dependencies: move axios and chalk to dependencies from dev dependencies

## 2.1.4 (February 10, 2021)

-   Export additional types

## 2.1.3 (January 26, 2021)

-   Change icons path from @icons/... to @svg/...

## 2.1.2 (December 21, 2020)

-   Fix @storybook/addon-backgrounds.
-   Storybook обновлён до версии 6.1.1

## 2.1.1 (December 14, 2020)

-   React обновлён до 17-ой версии.

## 2.1.0 (April 26, 2020)

-   Убрано неработающее подключение шрифтов через `global.fonts.fontFace`. Теперь css с `@font-face` передаётся напрямую (в это же поле).
-   Настройки vf и stacks шрифтов перешли в `global.fonts.families`.
-   Из базовой темы убран вариативный шрифт.

## 2.0.1 (April 1, 2020)

Хотфикс, правящий проблемы с tree shaking и стилями основного релиза.

-   Возвращены директории билда `esm` / `cjs` / `types` вместо `dist` с разбиением бандлов на файлы, т.к. это требуется для корректной работы tree shaking
-   Удалён `rollup-plugin-typescript2` и добавлен транспайлинг через `rollup-plugin-babel`. В основном релизе была ошибка со стилями, т.к. плагин `@emotion/babel-preset-css-prop` не отрабатывал. Генерация деклараций производится напрямую через `tsc`
-   Убран экспорт интерфейса `Theme`, т.к. `babel` плагин для `rollup` не подобный экспорт. Экспорт интерфейсов пока опущен за ненужностью
-   В `createTheme` добавлен параметр по умолчанию, позволяющий использовать эту утилиту без параметров
-   Убраны ненужные экспорты компонентов, одноимённые дефолтным экспортам. Ранее этого требовал `docgen`
-   Автокиты переименованы в соответствии со всеми остальными компонентами: имя компонента совпадает с именем директории
-   Изменены команды сборки. Изменения зафиксированы в Development гайде
-   Исправлен пример кода в Theming гайде

## 2.0.0 (April 1, 2020)

Этот релиз не добавляет нового функционала, и прежде всего нацелен на перевод на Typescript для повышения удобства пользования системой и повышения строгости при разработке. Остальные изменения по большей части нацелены на изменения в процессе разработки дизайн-системы. Есть ряд изменений в публичном API.

### Typescript

-   Компоненты и автокиты переписаны на Typescript
-   Утилиты и хелперы переведены на Typescript
-   Полностью переработан интерфейс темы
-   Все интерфейсы доработаны, чтобы проходить валидацию `tsc`
-   `TSDoc` переведён на английский

### Other changes

-   Переход на `yarn v2`
-   Добавлена зависимость от `deepmerge`
-   `rollup` более не генерирует `cjs` и `esm` директории. Вместо этого создаётся `dist`, содержащий `esm` и `cjs` билды одиночными файлами и директорию `types` с d.ts декларациями, повторяющими структуру проекта
-   Изменена структура экспортов автокитов: убрана обёртка в `autokits`, автокиты получаются напрямую по имени, например `ColorsAutokit`
-   В экспорты добавлен интерфейс `Theme`
-   Обновлена документация в соответствии с релизом
-   Изменён формат документации интерфейсов тем: вместо сниппетов выводятся таблицы по аналогии с документацией пропсов
-   Документация составных компонентов/интерфейсов заменена табами вместо последовательного вывода таблиц
-   Компоненты `Layout`, `Section`, `Container` и `VisuallyHidden` сгруппированы в категорию `helpers`
-   Заголовки Storybook переписаны на английском, т.к. на кириллических заголовках не работают гиперссылки
-   Удалена кастомная тема Storybook, включая текстовый логотип
-   Обновлены зависимости

### Components

-   Проп `external` компонента `Button` теперь добавляет `nofollow` в атрибут `rel`
-   Убрана возможность передать jsx в качестве `Icon` компонента `Button`
-   Переработан проп `as`, использование `href` теперь требует прямого указания `as="a"`

### Theme

Изменения Theming API нацелены на уход от необходимости доопределять в настройках категории, которые определяются токенам – все подобные настройки перенесены в `global`. Также увеличена прозрачность структуры темы за счёт добавления групп настроек.

-   `placeholder` перенесён в `global`
-   `stacks` перенесены в `global.fonts`
-   Определения шрифтов в `global.fonts` обёрнуты в `fontFace`
-   Настройки `fluid` убраны из `typography` и теперь производятся в `global.fonts`
-   Глобальный css определяется вынесен из `global` в `global.base`
-   Стили типографики оборачиваются в `styles`
-   Темизация компонента `Button` в дефолтном состоянии оборачивается в `default`
-   Для кнопки убрана возможность переопределять любые настройки в любом месте: настройки `sizes` чётко отделены от настроек `themes`

### Development

Эти изменения не несут изменений в использовании пакета, и предназначены для разработчиков системы.

-   Установлен плагин Typescript для `yarn`
-   Добавлены отсутствующие `@types`
-   Переработан `eslint` конфиг: отказ от конфига `AirBnB` и полная поддержка Typescript
-   Добавлен линтинг для mdx файлов через `eslint-plugin-mdx`
-   Удалены d.ts файлы в компонентах, интерфейсы внесены в tsx
-   Конфигурация Storybook переведена на Typescript
-   Хелпер `customTypography` переименован в `typography`
-   Хелпер `Item` переименован в `Placeholder`
-   Хелпер `Dropdown` переименован в `Tooltip`
-   Переработан кастомный хук `useCSSProperty`
-   Добавлен кастомный хук `useComponentTheme` для определения используемой в компоненте темы
-   Добавлен кастомный хук `useLayout` для работы с контекстом компонента `Layout`
-   Составные компоненты разбиты на отдельные файлы
-   Константа `MAJOR_STEP_DEFAULT` переименована в `MAJOR_STEP`
-   Переработана логика работы со стилями в компоненте `Button`
-   Изменены нейминги в автокитах: компоненты автокитов имеют суффикс Autokit, используемые в них компоненты не изменяют наименование
-   Удалён хелпер `cloneElement`
-   Интерфейсы тем вынесены в директорию `types`
-   Изменён нейминг интерфейсов: "I"-нотация более не используется
-   Добавлен скрипт `tsc` для ручной проверки на валидность Typescript, его запускт также добавлен на `precommit hook`
-   Убрана обработка через `babel`. Транспайлинг производится через `rollup-plugin-typescript2`
-   Общие stories вынесены из `.storybook/docs` в отдельную директорию `stories`, чтобы обойти проблему с неработающим линтингом mdx внутри dot-директории
-   В `.storybook` создана директория `docgen` для создания компонентов, позволяющих выводить интерфейсы тем в виде таблиц Storybook + выводить упрощённые интерфейсы компонентов

## 1.0.0 (February 11, 2020)

### Features

-   🔥 Core: `ThemeProvider`, `createTheme`, `useTheme`, `baseTheme`
-   🧱 Components: `Button`, `Layout`, `Section`, `Container`, `VisuallyHidden`
-   ⚙️ Helpers: `typography`, `scale`
-   🤖 Autokits: `Palettes`, `Colors`, `Typography`, `Icons`, `Layout`, `Shadows`, `Button`
-   ✨ Tokens: `palettes`, `colors`, `typography`, `icons`, `layout`, `shadows`
