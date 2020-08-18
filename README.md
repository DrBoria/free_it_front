FreeIt Front
=============================

> App based on typescript, react and redux toolkit (https://redux-toolkit.js.org/tutorials/basic-tutorial)

INSTALLATION
------------

    git clone https://github.com/DrBoria/free_it_front.git
    cd ./free_it_front
    npm i

FOLDERS DESCRIPTION
-------------------

    public/              public files for build
    src/                 code of all application
       /api              predefined list of queries to BE
       /components       reusable components (like buttons, inputs etc.). Should have only ui logic, not business logic (dumb components).
       /features         business logic of application (like get available courses, update course etc.)
       /pages            pages of appliaction. Buld based on existing components. Pass data from store to dumb components
       /routes           routes of application
       /styles           scss based general styles (for whole application, not components)
       /utils            functions helpers (fetch, get headers and so on)
       index.tsx         app entry point
       rootReducer.tsx   reducer combiner
       store.tsx         store of application


HOW TO WRITE CODE
-----------------

Please use following style/princeples:

    1) Use only dumb components (without business logic) in components folder
    2) Components should know how do they look like, not page that contains it
       It means - instead of redefining styles on every page - just make new type of button/input inside button/input component and just pass this type on your page
    3) Make pages small and readable as it possible (no need to make more than 40 lines of html inside page)
    4) If you need to make query - add it to a feature folder based on domain