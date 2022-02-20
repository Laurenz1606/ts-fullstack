# ts-fullstack

## Installation

Run `yarn install` in the `client` and the `src` folder.

## Structure

```
project_root
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── Components/
│   │   │   └── _NameComponent.tsx (Component Template)
│   │   ├── Layouts/
│   │   │   └── _NameLayout.tsx (Layout Template)
│   │   ├── Pages/
│   │   │   └── _NamePage.tsx (Page Template)
│   │   ├── index.css
│   │   ├── index.tsx
│   │   └── Router.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
├── server/
│   ├── src/
│   │   ├── MiddleWares/
│   │   │   └── _NameMiddleWare.ts (MiddleWare Template)
│   │   ├── Models/
│   │   │   └── _NameModel.ts (Model Template)
│   │   ├── Routers/
│   │   │   └── _NameRouter (Router Template)
│   │   ├── express.ts
│   │   ├── index.ts
│   │   ├── logger.ts
│   │   └── mongoose.ts
│   ├── tests
│   ├── babel.config.js
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## Client

### Templates

* `src/Components/_NameComponent.tsx`

  This is a template for all shared Components. Copy the File and change the `_Name` in the filename and the template with the name of your Component.

* `src/Layouts/_NameLayout.tsx`

  This is a template for all shared Layouts. Copy the File and change the `_Name` in the filename and the template with the name of your Layout.

* `src/Pages/_NamePages.tsx`

  This is a template for all Pages. Copy the File and change the `_Name` in the filename and the template with the name of your Page.

### Scripts

* `start`: start the dev server

* `build`: compile the complete source into the `build` folder

## Server

### Templates

- `src/MiddleWares/_NameMiddleWare.ts`

  This is a template for all shared express MiddleWares. Copy the File and change the `_Name` in the filename and the template with the name of your MiddleWare.

- `src/Models/_NameModel.ts`

  This is a template for all shared mongoose Models. Copy the File and change the `_Name` in the filename and the template with the name of your Model.

- `src/Routers/_NameRouter.ts`

  This is a template for all shared express Routers. Copy the File and change the `_Name` in the filename and the template with the name of your Router.

### Scripts

* `build`: compile the ts files in the `src` folder to es5 files into the `dist` folder
* `dev:start`: start the dev server 
* `dev:watch`: start the dev server with a watchdog for ts files
* `test`: run all test with `jest`
* `test:watch`: run all test with `jest` and a watchdog to test automatically 

### Environment Variables

```
# Environment for dev or prod
NODE_ENV=

# Application Port
PORT=

# MongoDB Connection
MONGODB_HOST=
MONGODB_DATABASE=
MONGODB_USERNAME=
MONGODB_PASSWORD=
MONGODB_AUTHSOURCE=
```