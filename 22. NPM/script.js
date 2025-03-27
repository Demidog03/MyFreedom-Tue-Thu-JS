"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var api_js_1 = require("./api.js");
// 2025-03-25
var formattedDate = (0, date_fns_1.format)(new Date(), 'yyyy/MM/dd');
console.log(formattedDate);
var dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];
console.log(dates.sort(date_fns_1.compareAsc)); // ascending order
console.log('Hello');
(0, api_js_1.fetchTodo)();
(0, api_js_1.fetchTodoAxios)();
