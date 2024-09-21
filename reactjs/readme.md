npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react


Creating a config file named babel.config.json-->

{
  "presets": [
    [
      "@babel/preset-react",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}

Add "build": "babel ./script.js -d lib" to script in package.json

Above command will compile your './script.js' jsx  file in vanilla javascript and creates a script.js file in lib folder
npm run build--->To compile using babel

