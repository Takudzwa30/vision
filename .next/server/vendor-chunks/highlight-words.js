"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/highlight-words";
exports.ids = ["vendor-chunks/highlight-words"];
exports.modules = {

/***/ "(ssr)/./node_modules/highlight-words/dist/highlight-words.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/highlight-words/dist/highlight-words.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ highlightWords)\n/* harmony export */ });\nlet IDX = 36;\nlet HEX = \"\";\nwhile(IDX--){\n    HEX += IDX.toString(36);\n}\nfunction uid(len = 11) {\n    let str = \"\";\n    let num = len;\n    while(num--){\n        str += HEX[Math.random() * 36 | 0];\n    }\n    return str;\n}\nconst escapeRegexp = (term)=>term.replace(/[|\\\\{}()[\\]^$+*?.-]/g, (char)=>`\\\\${char}`);\nconst termsToRegExpString = (terms)=>terms.replace(/\\s{2,}/g, \" \").split(\" \").join(\"|\");\nconst regexpQuery = ({ terms, matchExactly = false })=>{\n    if (typeof terms !== \"string\") {\n        throw new TypeError(\"Expected a string\");\n    }\n    const escapedTerms = escapeRegexp(terms.trim());\n    return `(${matchExactly ? escapedTerms : termsToRegExpString(escapedTerms)})`;\n};\nconst buildRegexp = ({ terms, matchExactly = false })=>{\n    try {\n        const fromString = /^([/~@;%#'])(.*?)\\1([gimsuy]*)$/.exec(terms);\n        if (fromString) {\n            return new RegExp(fromString[2], fromString[3]);\n        }\n        return new RegExp(regexpQuery({\n            terms,\n            matchExactly\n        }), \"ig\");\n    } catch (e) {\n        throw new TypeError(\"Expected terms to be either a string or a RegExp!\");\n    }\n};\nconst hasProp = (prop)=>(obj)=>obj !== null && typeof obj === \"object\" && prop in obj;\nconst hasMatch = hasProp(\"match\");\nconst chunkExists = (chunk)=>typeof chunk !== \"undefined\";\nfunction clip({ curr, next, prev, clipBy = 3 }) {\n    const words = curr.text.split(\" \");\n    const len = words.length;\n    if (curr.match || clipBy >= len) {\n        return curr.text;\n    }\n    const ellipsis = \"...\";\n    if (chunkExists(next) && chunkExists(prev) && hasMatch(prev) && hasMatch(next)) {\n        if (len > clipBy * 2) {\n            return [\n                ...words.slice(0, clipBy),\n                ellipsis,\n                ...words.slice(-clipBy)\n            ].join(\" \");\n        }\n        return curr.text;\n    }\n    if (chunkExists(next) && hasMatch(next)) {\n        return [\n            ellipsis,\n            ...words.slice(-clipBy)\n        ].join(\" \");\n    }\n    if (chunkExists(prev) && hasMatch(prev)) {\n        return [\n            ...words.slice(0, clipBy),\n            ellipsis\n        ].join(\" \");\n    }\n    return curr.text;\n}\nvar __defProp = Object.defineProperty;\nvar __defProps = Object.defineProperties;\nvar __getOwnPropDescs = Object.getOwnPropertyDescriptors;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {\n        enumerable: true,\n        configurable: true,\n        writable: true,\n        value\n    }) : obj[key] = value;\nvar __spreadValues = (a, b)=>{\n    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);\n    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){\n        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);\n    }\n    return a;\n};\nvar __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));\nconst hasLength = (str)=>str.length > 0;\nconst highlightWords = ({ text, query, clipBy, matchExactly = false })=>{\n    const safeQuery = typeof query === \"string\" ? query.trim() : query;\n    if (safeQuery === \"\") {\n        return [\n            {\n                key: uid(),\n                text,\n                match: false\n            }\n        ];\n    }\n    const searchRegexp = buildRegexp({\n        terms: query,\n        matchExactly\n    });\n    return text.split(searchRegexp).filter(hasLength).map((str)=>({\n            // Compose the object for a match\n            key: uid(),\n            text: str,\n            match: matchExactly ? str.toLowerCase() === safeQuery.toLowerCase() : searchRegexp.test(str)\n        })).map((chunk, index, chunks)=>__spreadValues(__spreadValues({}, chunk), typeof clipBy === \"number\" && {\n            // We only overwrite the text if there is a clip\n            text: clip(__spreadProps(__spreadValues(__spreadValues({\n                curr: chunk\n            }, index < chunks.length - 1 && {\n                next: chunks[index + 1]\n            }), index > 0 && {\n                prev: chunks[index - 1]\n            }), {\n                // If this wasn't the first chunk, set the previous chunk\n                clipBy\n            }))\n        }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LXdvcmRzL2Rpc3QvaGlnaGxpZ2h0LXdvcmRzLm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsTUFBTTtBQUNWLElBQUlDLE1BQU07QUFDVixNQUFPRCxNQUFPO0lBQ1pDLE9BQU9ELElBQUlFLFFBQVEsQ0FBQztBQUN0QjtBQUNBLFNBQVNDLElBQUlDLE1BQU0sRUFBRTtJQUNuQixJQUFJQyxNQUFNO0lBQ1YsSUFBSUMsTUFBTUY7SUFDVixNQUFPRSxNQUFPO1FBQ1pELE9BQU9KLEdBQUcsQ0FBQ00sS0FBS0MsTUFBTSxLQUFLLEtBQUssRUFBRTtJQUNwQztJQUNBLE9BQU9IO0FBQ1Q7QUFFQSxNQUFNSSxlQUFlLENBQUNDLE9BQVNBLEtBQUtDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQ0MsT0FBUyxDQUFDLEVBQUUsRUFBRUEsS0FBSyxDQUFDO0FBQ3pGLE1BQU1DLHNCQUFzQixDQUFDQyxRQUFVQSxNQUFNSCxPQUFPLENBQUMsV0FBVyxLQUFLSSxLQUFLLENBQUMsS0FBS0MsSUFBSSxDQUFDO0FBQ3JGLE1BQU1DLGNBQWMsQ0FBQyxFQUNuQkgsS0FBSyxFQUNMSSxlQUFlLEtBQUssRUFDckI7SUFDQyxJQUFJLE9BQU9KLFVBQVUsVUFBVTtRQUM3QixNQUFNLElBQUlLLFVBQVU7SUFDdEI7SUFDQSxNQUFNQyxlQUFlWCxhQUFhSyxNQUFNTyxJQUFJO0lBQzVDLE9BQU8sQ0FBQyxDQUFDLEVBQUVILGVBQWVFLGVBQWVQLG9CQUFvQk8sY0FBYyxDQUFDLENBQUM7QUFDL0U7QUFDQSxNQUFNRSxjQUFjLENBQUMsRUFDbkJSLEtBQUssRUFDTEksZUFBZSxLQUFLLEVBQ3JCO0lBQ0MsSUFBSTtRQUNGLE1BQU1LLGFBQWEsa0NBQWtDQyxJQUFJLENBQUNWO1FBQzFELElBQUlTLFlBQVk7WUFDZCxPQUFPLElBQUlFLE9BQU9GLFVBQVUsQ0FBQyxFQUFFLEVBQUVBLFVBQVUsQ0FBQyxFQUFFO1FBQ2hEO1FBQ0Es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Q0MsTUFBTXNELFlBQVksT0FBT0QsVUFBVSxXQUFXQSxNQUFNbEQsSUFBSSxLQUFLa0Q7SUFDN0QsSUFBSUMsY0FBYyxJQUFJO1FBQ3BCLE9BQU87WUFDTDtnQkFDRWIsS0FBS3hEO2dCQUNMb0M7Z0JBQ0FFLE9BQU87WUFDVDtTQUNEO0lBQ0g7SUFDQSxNQUFNZ0MsZUFBZW5ELFlBQVk7UUFBRVIsT0FBT3lEO1FBQU9yRDtJQUFhO0lBQzlELE9BQU9xQixLQUFLeEIsS0FBSyxDQUFDMEQsY0FBY0MsTUFBTSxDQUFDTCxXQUFXTSxHQUFHLENBQUMsQ0FBQ3RFLE1BQVM7WUFDOUQsaUNBQWlDO1lBQ2pDc0QsS0FBS3hEO1lBQ0xvQyxNQUFNbEM7WUFDTm9DLE9BQU92QixlQUFlYixJQUFJdUUsV0FBVyxPQUFPSixVQUFVSSxXQUFXLEtBQUtILGFBQWFJLElBQUksQ0FBQ3hFO1FBQzFGLElBQUlzRSxHQUFHLENBQUMsQ0FBQzNDLE9BQU84QyxPQUFPQyxTQUFXZixlQUFlQSxlQUFlLENBQUMsR0FBR2hDLFFBQVEsT0FBT0ssV0FBVyxZQUFZO1lBQ3hHLGdEQUFnRDtZQUNoREUsTUFBTU4sS0FBS21DLGNBQWNKLGVBQWVBLGVBQWU7Z0JBQ3JEOUIsTUFBTUY7WUFDUixHQUFHOEMsUUFBUUMsT0FBT3ZDLE1BQU0sR0FBRyxLQUFLO2dCQUFFTCxNQUFNNEMsTUFBTSxDQUFDRCxRQUFRLEVBQUU7WUFBQyxJQUFJQSxRQUFRLEtBQUs7Z0JBQUUxQyxNQUFNMkMsTUFBTSxDQUFDRCxRQUFRLEVBQUU7WUFBQyxJQUFJO2dCQUN2Ryx5REFBeUQ7Z0JBQ3pEekM7WUFDRjtRQUNGO0FBQ0Y7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNpb24vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LXdvcmRzL2Rpc3QvaGlnaGxpZ2h0LXdvcmRzLm1qcz9hZjhkIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBJRFggPSAzNjtcbmxldCBIRVggPSBcIlwiO1xud2hpbGUgKElEWC0tKSB7XG4gIEhFWCArPSBJRFgudG9TdHJpbmcoMzYpO1xufVxuZnVuY3Rpb24gdWlkKGxlbiA9IDExKSB7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBsZXQgbnVtID0gbGVuO1xuICB3aGlsZSAobnVtLS0pIHtcbiAgICBzdHIgKz0gSEVYW01hdGgucmFuZG9tKCkgKiAzNiB8IDBdO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmNvbnN0IGVzY2FwZVJlZ2V4cCA9ICh0ZXJtKSA9PiB0ZXJtLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgKGNoYXIpID0+IGBcXFxcJHtjaGFyfWApO1xuY29uc3QgdGVybXNUb1JlZ0V4cFN0cmluZyA9ICh0ZXJtcykgPT4gdGVybXMucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIikuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpO1xuY29uc3QgcmVnZXhwUXVlcnkgPSAoe1xuICB0ZXJtcyxcbiAgbWF0Y2hFeGFjdGx5ID0gZmFsc2Vcbn0pID0+IHtcbiAgaWYgKHR5cGVvZiB0ZXJtcyAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIHN0cmluZ1wiKTtcbiAgfVxuICBjb25zdCBlc2NhcGVkVGVybXMgPSBlc2NhcGVSZWdleHAodGVybXMudHJpbSgpKTtcbiAgcmV0dXJuIGAoJHttYXRjaEV4YWN0bHkgPyBlc2NhcGVkVGVybXMgOiB0ZXJtc1RvUmVnRXhwU3RyaW5nKGVzY2FwZWRUZXJtcyl9KWA7XG59O1xuY29uc3QgYnVpbGRSZWdleHAgPSAoe1xuICB0ZXJtcyxcbiAgbWF0Y2hFeGFjdGx5ID0gZmFsc2Vcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmcm9tU3RyaW5nID0gL14oWy9+QDslIyddKSguKj8pXFwxKFtnaW1zdXldKikkLy5leGVjKHRlcm1zKTtcbiAgICBpZiAoZnJvbVN0cmluZykge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoZnJvbVN0cmluZ1syXSwgZnJvbVN0cmluZ1szXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4cFF1ZXJ5KHsgdGVybXMsIG1hdGNoRXhhY3RseSB9KSwgXCJpZ1wiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCB0ZXJtcyB0byBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBSZWdFeHAhXCIpO1xuICB9XG59O1xuXG5jb25zdCBoYXNQcm9wID0gKHByb3ApID0+IChvYmopID0+IG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIHByb3AgaW4gb2JqO1xuY29uc3QgaGFzTWF0Y2ggPSBoYXNQcm9wKFwibWF0Y2hcIik7XG5jb25zdCBjaHVua0V4aXN0cyA9IChjaHVuaykgPT4gdHlwZW9mIGNodW5rICE9PSBcInVuZGVmaW5lZFwiO1xuZnVuY3Rpb24gY2xpcCh7XG4gIGN1cnIsXG4gIG5leHQsXG4gIHByZXYsXG4gIGNsaXBCeSA9IDNcbn0pIHtcbiAgY29uc3Qgd29yZHMgPSBjdXJyLnRleHQuc3BsaXQoXCIgXCIpO1xuICBjb25zdCBsZW4gPSB3b3Jkcy5sZW5ndGg7XG4gIGlmIChjdXJyLm1hdGNoIHx8IGNsaXBCeSA+PSBsZW4pIHtcbiAgICByZXR1cm4gY3Vyci50ZXh0O1xuICB9XG4gIGNvbnN0IGVsbGlwc2lzID0gXCIuLi5cIjtcbiAgaWYgKGNodW5rRXhpc3RzKG5leHQpICYmIGNodW5rRXhpc3RzKHByZXYpICYmIGhhc01hdGNoKHByZXYpICYmIGhhc01hdGNoKG5leHQpKSB7XG4gICAgaWYgKGxlbiA+IGNsaXBCeSAqIDIpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLndvcmRzLnNsaWNlKDAsIGNsaXBCeSksXG4gICAgICAgIGVsbGlwc2lzLFxuICAgICAgICAuLi53b3Jkcy5zbGljZSgtY2xpcEJ5KVxuICAgICAgXS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnIudGV4dDtcbiAgfVxuICBpZiAoY2h1bmtFeGlzdHMobmV4dCkgJiYgaGFzTWF0Y2gobmV4dCkpIHtcbiAgICByZXR1cm4gW2VsbGlwc2lzLCAuLi53b3Jkcy5zbGljZSgtY2xpcEJ5KV0uam9pbihcIiBcIik7XG4gIH1cbiAgaWYgKGNodW5rRXhpc3RzKHByZXYpICYmIGhhc01hdGNoKHByZXYpKSB7XG4gICAgcmV0dXJuIFsuLi53b3Jkcy5zbGljZSgwLCBjbGlwQnkpLCBlbGxpcHNpc10uam9pbihcIiBcIik7XG4gIH1cbiAgcmV0dXJuIGN1cnIudGV4dDtcbn1cblxudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xudmFyIF9fc3ByZWFkUHJvcHMgPSAoYSwgYikgPT4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7XG5jb25zdCBoYXNMZW5ndGggPSAoc3RyKSA9PiBzdHIubGVuZ3RoID4gMDtcbmNvbnN0IGhpZ2hsaWdodFdvcmRzID0gKHtcbiAgdGV4dCxcbiAgcXVlcnksXG4gIGNsaXBCeSxcbiAgbWF0Y2hFeGFjdGx5ID0gZmFsc2Vcbn0pID0+IHtcbiAgY29uc3Qgc2FmZVF1ZXJ5ID0gdHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiID8gcXVlcnkudHJpbSgpIDogcXVlcnk7XG4gIGlmIChzYWZlUXVlcnkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBrZXk6IHVpZCgpLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBtYXRjaDogZmFsc2VcbiAgICAgIH1cbiAgICBdO1xuICB9XG4gIGNvbnN0IHNlYXJjaFJlZ2V4cCA9IGJ1aWxkUmVnZXhwKHsgdGVybXM6IHF1ZXJ5LCBtYXRjaEV4YWN0bHkgfSk7XG4gIHJldHVybiB0ZXh0LnNwbGl0KHNlYXJjaFJlZ2V4cCkuZmlsdGVyKGhhc0xlbmd0aCkubWFwKChzdHIpID0+ICh7XG4gICAgLy8gQ29tcG9zZSB0aGUgb2JqZWN0IGZvciBhIG1hdGNoXG4gICAga2V5OiB1aWQoKSxcbiAgICB0ZXh0OiBzdHIsXG4gICAgbWF0Y2g6IG1hdGNoRXhhY3RseSA/IHN0ci50b0xvd2VyQ2FzZSgpID09PSBzYWZlUXVlcnkudG9Mb3dlckNhc2UoKSA6IHNlYXJjaFJlZ2V4cC50ZXN0KHN0cilcbiAgfSkpLm1hcCgoY2h1bmssIGluZGV4LCBjaHVua3MpID0+IF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCBjaHVuayksIHR5cGVvZiBjbGlwQnkgPT09IFwibnVtYmVyXCIgJiYge1xuICAgIC8vIFdlIG9ubHkgb3ZlcndyaXRlIHRoZSB0ZXh0IGlmIHRoZXJlIGlzIGEgY2xpcFxuICAgIHRleHQ6IGNsaXAoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7XG4gICAgICBjdXJyOiBjaHVua1xuICAgIH0sIGluZGV4IDwgY2h1bmtzLmxlbmd0aCAtIDEgJiYgeyBuZXh0OiBjaHVua3NbaW5kZXggKyAxXSB9KSwgaW5kZXggPiAwICYmIHsgcHJldjogY2h1bmtzW2luZGV4IC0gMV0gfSksIHtcbiAgICAgIC8vIElmIHRoaXMgd2Fzbid0IHRoZSBmaXJzdCBjaHVuaywgc2V0IHRoZSBwcmV2aW91cyBjaHVua1xuICAgICAgY2xpcEJ5XG4gICAgfSkpXG4gIH0pKTtcbn07XG5cbmV4cG9ydCB7IGhpZ2hsaWdodFdvcmRzIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJJRFgiLCJIRVgiLCJ0b1N0cmluZyIsInVpZCIsImxlbiIsInN0ciIsIm51bSIsIk1hdGgiLCJyYW5kb20iLCJlc2NhcGVSZWdleHAiLCJ0ZXJtIiwicmVwbGFjZSIsImNoYXIiLCJ0ZXJtc1RvUmVnRXhwU3RyaW5nIiwidGVybXMiLCJzcGxpdCIsImpvaW4iLCJyZWdleHBRdWVyeSIsIm1hdGNoRXhhY3RseSIsIlR5cGVFcnJvciIsImVzY2FwZWRUZXJtcyIsInRyaW0iLCJidWlsZFJlZ2V4cCIsImZyb21TdHJpbmciLCJleGVjIiwiUmVnRXhwIiwiZSIsImhhc1Byb3AiLCJwcm9wIiwib2JqIiwiaGFzTWF0Y2giLCJjaHVua0V4aXN0cyIsImNodW5rIiwiY2xpcCIsImN1cnIiLCJuZXh0IiwicHJldiIsImNsaXBCeSIsIndvcmRzIiwidGV4dCIsImxlbmd0aCIsIm1hdGNoIiwiZWxsaXBzaXMiLCJzbGljZSIsIl9fZGVmUHJvcCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX19kZWZQcm9wcyIsImRlZmluZVByb3BlcnRpZXMiLCJfX2dldE93blByb3BEZXNjcyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJfX2dldE93blByb3BTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiX19oYXNPd25Qcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJfX3Byb3BJc0VudW0iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9fZGVmTm9ybWFsUHJvcCIsImtleSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19zcHJlYWRWYWx1ZXMiLCJhIiwiYiIsImNhbGwiLCJfX3NwcmVhZFByb3BzIiwiaGFzTGVuZ3RoIiwiaGlnaGxpZ2h0V29yZHMiLCJxdWVyeSIsInNhZmVRdWVyeSIsInNlYXJjaFJlZ2V4cCIsImZpbHRlciIsIm1hcCIsInRvTG93ZXJDYXNlIiwidGVzdCIsImluZGV4IiwiY2h1bmtzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/highlight-words/dist/highlight-words.mjs\n");

/***/ })

};
;