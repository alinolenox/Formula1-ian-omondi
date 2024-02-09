# Formula1 Greatest of All Time

This project aims to display a list of Formula 1 drivers, showcasing their given name, family name, date of birth, nationality, and providing a link to more information. The data is fetched from the Ergast Developer API, specifically the endpoint for F1 drivers.

## Project Structure

```
index.html
style.css
script.js
README.md
```

1. index.html : The main HTML file containing the structure of the web page.

2. style.css : CSS for styling the web page

3. script.js : Javascript file responsible for fetching data from the Ergast API and dynamically populates the drivers' information into the table.

4. README.md : Documentation file

## Web Page Structure

The page includes a title "F1 Greatest of All Time" and a table (driversTable) with columns for Given Name, Family Name, Date of Birth, Nationality, and More Info.
The data is loaded asynchronously from the Ergast API and displayed in the table.

## How to Use

1. Open the index.html file in a web browser.
2. The table will be dynamically populated with information about Formula 1 drivers.
3. Click on the "More Info" link to open additional details about each driver in a new tab.

NOTE : Good internet connectivity is required to fetch data from Ergast API

## Dependencies

- None

## Licence

MIT License

Copyright (c) 2024 Ian Lenox Omondi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
