(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{221:function(e,t,a){"use strict";a.r(t);a(48),a(38),a(14),a(229),a(108);var n=a(0),r=a.n(n),l=a(105),o=a.n(l),i=a(223),u=a(216),s=a.n(u),c=function(e){var t=Object(n.useState)(!0),a=t[0],l=t[1],o=Object(n.useState)(""),i=o[0],u=o[1];return r.a.createElement("div",{className:s.a.container},r.a.createElement("h5",{className:s.a.label},e.label,":"),r.a.createElement("input",{value:i,onChange:function(t){return function(t){if(""!==t.target.value){var a=e.validator(t.target.value);if("boolean"!=typeof a)throw"Error. result is not a boolean value";l(a)}u(t.target.value)}(t)},className:s.a.input,placeholder:e.placeholder,type:"text"}),a?r.a.createElement("div",{className:s.a.image}):r.a.createElement("div",{className:s.a.image+" "+s.a.error}))},m=a(217),h=a.n(m),d=function(e){var t,a=Object(n.useState)(""),l=a[0],o=a[1];return r.a.createElement("div",{className:h.a.container},r.a.createElement("div",{className:h.a.innerContainer},r.a.createElement("div",{className:h.a.labelContainer},r.a.createElement("h5",{className:h.a.label},e.inputLabel,":")),r.a.createElement("input",{value:l,onChange:function(e){return o(e.target.value)},className:h.a.input,placeholder:e.inputPlaceholder,type:e.inputType})),r.a.createElement("div",{className:h.a.innerContainer},r.a.createElement("div",{className:h.a.labelContainer},r.a.createElement("h5",{className:h.a.label},e.outputLabel,":")),r.a.createElement("input",{disabled:!0,value:(t=l,e.transformFunction(t)),className:h.a.input,placeholder:e.outputPlaceholder,type:"text"})))};d.defaultProps={inputLabel:"input Label",inputPlaceholder:"input placeholder",inputType:"text",transformFunction:function(e){return e},outputLabel:"output label",outputPlaceholder:"output placeholder"};var p=d,f={maxWidth:"100%",display:"flex",justifyContent:"center"},E=function(e){return r.a.createElement("div",{style:f,dangerouslySetInnerHTML:{__html:e.innerHTML}})},g=a(227),y=a(208),b=a(218),v=a.n(b),C=a(224);a.d(t,"query",(function(){return k}));var x=C.a.sand;function w(e){var t=/[^\W_]/g;if(null!==e.match(t)){for(var a=e.match(t).map((function(e){return e.toLowerCase()})),n=0;n<Math.floor(a.length/2);n++)if(a[n]!==a[a.length-1-n])return!1;return!0}return!1}function I(e){return/^1{0,1}\s{0,1}(?:[0-9]{3}[\s-]{0,1}){2}[0-9]{4}$|^1{0,1}\s{0,1}\([0-9]{3}\)[\s-]{0,1}[[0-9]{3}[\s-]{0,1}[0-9]{4}$/.test(e)}function N(e){var t=e,a=[];if(e>1e3){var n=Math.floor(e/1e3);t-=1e3*n,a.push("M".repeat(n))}for(var r=0,l=[[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];r<l.length;r++)for(var o=l[r];t>=o[0];)t-=o[0],a.push(o[1]);return a.length>0?a.reduce((function(e,t){return e+t})):""}function S(e){var t="abcdefghijklmnopqrstuvwxyz".toUpperCase(),a="abcdefghijklmnopqrstuvwxyz",n=[],r=/[a-zA-Z]/,l=e,o=Array.isArray(l),i=0;for(l=o?l:l[Symbol.iterator]();;){var u;if(o){if(i>=l.length)break;u=l[i++]}else{if((i=l.next()).done)break;u=i.value}var s=u,c=s;if(r.test(s)){var m=-1!==a.indexOf(s)?a.indexOf(s):t.indexOf(s);c=a.charAt(m+13>=26?m-13:m+13)}n.push(c)}return n.length>0?n.reduce((function(e,t){return e+t})):""}function T(e,t){var a=t,n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var l;if(n){if(r>=a.length)break;l=a[r++]}else{if((r=a.next()).done)break;l=r.value}var o=l;if(o.fileName===e)return o.html}throw Error("no file named "+e+" found")}t.default=function(e){var t=function(e){var t=[],a=/\/[^\/]+.md/,n=e,r=Array.isArray(n),l=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(l>=n.length)break;o=n[l++]}else{if((l=n.next()).done)break;o=l.value}var i=o,u=i.node.fileAbsolutePath.match(a)[0].substring(1),s=i.node.html;t.push({fileName:u,html:s})}return t}(e.data.codeBlock.edges);return r.a.createElement(y.a,{pageTitle:"FidelVe | FreeCodeCamp",headerText:"FreeCodeCamp. JavaScript Algorithms and Data Structure."},r.a.createElement("div",{className:"image-container"},r.a.createElement(o.a,{fluid:e.data.fccLogo.childImageSharp.fluid,alt:" FCC logo"})),r.a.createElement("p",null,r.a.createElement("b",null,"JavaScript Algorithms and Data Structures")," is the second of six courses offered at FreeCodeCamp of which upon completion of its final projects you may earn a ",r.a.createElement("i",null,"FreeCodeCamp Certificate"),"."),r.a.createElement("p",null,"Starting with the basic sintax of javascript, this course is a great introduction to JavaScript. I do recommend to find tutorials or books online, and read them while you're going through this course, it helped me have a better grasp on the several aspects of JavaScript."),r.a.createElement("p",null,"By the end of the course you will find several exercises to put into practice everything you have learn so far, and 5 final projects to obtain the ",r.a.createElement("i",null,"FreeCodeCamp Certificate"),"."),r.a.createElement("p",null,"I decided to create this page as a way to showcase my code answers to this project, if you are currently going through this part of the FCC curriculum I recommend that you don't see my answers and do the projects on your own, the most important part of doing the FCC is to learn of your mistakes and find the answers by yourself, the process of making mistakes and learning from them is the most important part of learning, not only how to code but learning anything in life, so if you truly want to learn, don't cheat, you will only be doing a disservice to yourself."),r.a.createElement("h2",null,"FreeCodeCamp JavaScript's final project"),r.a.createElement(i.a,{borderColor:x.main,headerText:"Palindrome Checker"},r.a.createElement("p",null,"A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing."),r.a.createElement("p",null,"In this project, you are tasked with creating and algorithm that can detect if a word (or phrase) is a palindrome or not."),r.a.createElement("p",null,"Because we need to compare character by character, not including punctuation, case and spacing, we need to use regular expressions to match all the correct characters, and add all of this into an array for easy comparison later."),r.a.createElement("p",null,"After having your array with all the correct characters, the rest is just an iteration where you compare each character in their respective position at the beginning and end of the array, stoping at the middle."),r.a.createElement(E,{innerHTML:T("palindrome-checker-code.md",t)}),r.a.createElement("h4",null,"Testing the code."),r.a.createElement("p",null,"Heres a list of words and phrases you can use to test the algorithm."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,'"eye"')," should return positive."),r.a.createElement("li",null,r.a.createElement("b",null,'"_eye"')," should return positive."),r.a.createElement("li",null,r.a.createElement("b",null,'"race car"')," should return positive."),r.a.createElement("li",null,r.a.createElement("b",null,'"not a palindrome"')," should return negative."),r.a.createElement("li",null,r.a.createElement("b",null,'"A man, a plan, a canal. Panama"')," should return positive."),r.a.createElement("li",null,r.a.createElement("b",null,'"never odd or even"')," should return positive."),r.a.createElement("li",null,r.a.createElement("b",null,'"nope"')," should return negative."),r.a.createElement("li",null,r.a.createElement("b",null,'"almostomla"')," should return negative."),r.a.createElement("li",null,r.a.createElement("b",null,'"My age is 0, 0 si ega ym."')," should return positive."),r.a.createElement("li",null,r.a.createElement("b",null,'"1 eye for of 1 eye."')," should return negative."),r.a.createElement("li",null,r.a.createElement("b",null,'"0_0 (: /-\\ :) 0-0"')," should return positive."),r.a.createElement("li",null,r.a.createElement("b",null,'"five|\\_/|four"')," should return negative.")),r.a.createElement(c,{placeholder:"roma amor",validator:w,label:"Palindrome Test"})),r.a.createElement(i.a,{borderColor:x.main,headerText:"Roman Numeral Converter"},r.a.createElement("p",null,"For this project you are asked to create an algorithm that converts decimal numbers into the roman numeral system."),r.a.createElement("p",null,"The first thing that we need to do, is understand how roman numerals are written. The numbers in this system are represented by a combination of letters from the Latin alphabet."),r.a.createElement("div",{id:v.a.romanTable,className:v.a.flexcnw},r.a.createElement("div",{className:v.a.flexrnw},r.a.createElement("span",{className:v.a.romanThead},"Symbol"),["I","V","X","L","C","D","M"].map((function(e,t){return r.a.createElement("span",{key:t},e)}))),r.a.createElement("div",{className:v.a.flexrnw},r.a.createElement("span",{className:v.a.romanThead},"Value"),["1","5","10","50","100","500","1000"].map((function(e,t){return r.a.createElement("span",{key:t},e)})))),r.a.createElement("p",null,"Now that we now the symbols and their value in the decimal system, how do we used them?. The correct way to express quantities in the roman numeral system is to replace from the top down, find the highest valued symbol, use it and substract the value to the total and repeat until zero is reached."),r.a.createElement("p",null,"For example, the correct way to express ",r.a.createElement("b",null,"1500")," in the roman system would be ",r.a.createElement("b",null,"MD"),", instead of ",r.a.createElement("b",null,"DDD"),"."),r.a.createElement(E,{innerHTML:T("roman-numeral-converter-code.md",t)}),r.a.createElement("h4",null,"Testing the code."),r.a.createElement("p",null,"Use the following values to test the algorithm."),r.a.createElement("ul",null,r.a.createElement("li",null,'Decimal 2, should return "II".'),r.a.createElement("li",null,'Decimal 4, should return "IV".'),r.a.createElement("li",null,'Decimal 29, should return "XXIX".'),r.a.createElement("li",null,'Decimal 83, should return "LXXXIII".'),r.a.createElement("li",null,'Decimal 97, should return "XCVII".'),r.a.createElement("li",null,'Decimal 649, should return "DCXLIX".'),r.a.createElement("li",null,'Decimal 798, should return "DCCXCVIII".'),r.a.createElement("li",null,'Decimal 891, should return "DCCCXCI".'),r.a.createElement("li",null,'Decimal 2014, should return "MMXIV".'),r.a.createElement("li",null,'Decimal 3999, should return "MMMCMXCIX".')),r.a.createElement(p,{inputLabel:"Decimal",inputPlaceholder:"Enter decimal number",inputType:"number",outputPlaceholder:"Result in roman numbers",outputLabel:"Roman",transformFunction:N})),r.a.createElement(i.a,{borderColor:x.main,headerText:"Caesars Cipher"},r.a.createElement("p",null,"In cryptography, a cipher is an algorithm for performing encryption or decryption, this algorithm substitutes the characters in a string to transform them into something else for the purpose of protecting the original string from being understood by unwanted people."),r.a.createElement("p",null,"Caesars cipher is one of the simplest and most widely know encryption techniques. It is a simple substitution cipher in which each letter in a string is replaced by a letter some fixed number of positions down the alphabet."),r.a.createElement("p",null,"For this project you are asked to write an algorithm capable of implementing ROT13, a type of caesar cipher that replaces every character in a string with the letter 13 positions up in the alphabet from the position of that character."),r.a.createElement(E,{innerHTML:T("caesars-cipher-code.md",t)}),r.a.createElement("h4",null,"Testing the code."),r.a.createElement("p",null,"Use the following to test the algorithm"),r.a.createElement("ul",null,r.a.createElement("li",null,'"SERR PBQR PNZC" should decode to FREE CODE CAMP.'),r.a.createElement("li",null,'"SERR CVMMN!" should decode to FREE PIZZA!.'),r.a.createElement("li",null,'"SERR YBIR?" should decode to FREE LOVE?.'),r.a.createElement("li",null,'"GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')),r.a.createElement(p,{inputLabel:"Encrypted",inputPlaceholder:"Enter encrypted message",inputType:"text",outputPlaceholder:"Decrypted message",outputLabel:"Decrypted",transformFunction:S})),r.a.createElement(i.a,{borderColor:x.main,headerText:"Telephone Number Validator"},r.a.createElement("p",null,"For this next project you are given a string representing a phone number and you should validate it."),r.a.createElement("p",null,"The input string should be a valid US phone number, the following examples are valid formats for US numbers."),r.a.createElement("ul",null,r.a.createElement("li",null,"555-555-5555"),r.a.createElement("li",null,"(555)555-5555"),r.a.createElement("li",null,"(555) 555-5555"),r.a.createElement("li",null,"555 555 5555"),r.a.createElement("li",null,"5555555555"),r.a.createElement("li",null,"1 555 555 5555")),r.a.createElement(E,{innerHTML:T("telephone-number-validator-code.md",t)}),r.a.createElement("h4",null,"Testing the code."),r.a.createElement("p",null,"Use the following to test the algorithm"),r.a.createElement("ul",null,r.a.createElement("li",null,'"1 555-555-5555" should return true.'),r.a.createElement("li",null,'"1 (555) 555-5555" should return true.'),r.a.createElement("li",null,'"5555555555" should return true.'),r.a.createElement("li",null,'"555-555-5555" should return true.'),r.a.createElement("li",null,'"(555)555-5555" should return true.'),r.a.createElement("li",null,'"1(555)555-5555" should return true.'),r.a.createElement("li",null,'"555-5555" should return false.'),r.a.createElement("li",null,'"5555555" should return false.'),r.a.createElement("li",null,'"1 555)555-5555" should return false.'),r.a.createElement("li",null,'"1 555 555 5555" should return true.'),r.a.createElement("li",null,'"1 456 789 4444" should return true.'),r.a.createElement("li",null,'"123**&!!asdf#" should return false.'),r.a.createElement("li",null,'"55555555" should return false.'),r.a.createElement("li",null,'"(6054756961)" should return false'),r.a.createElement("li",null,'"2 (757) 622-7382" should return false.'),r.a.createElement("li",null,'"0 (757) 622-7382" should return false.'),r.a.createElement("li",null,'"-1 (757) 622-7382" should return false'),r.a.createElement("li",null,'"2 757 622-7382" should return false.'),r.a.createElement("li",null,'"10 (757) 622-7382" should return false.'),r.a.createElement("li",null,'"27576227382" should return false.'),r.a.createElement("li",null,'"(275)76227382" should return false.'),r.a.createElement("li",null,'"2(757)6227382" should return false.'),r.a.createElement("li",null,'"2(757)622-7382" should return false.'),r.a.createElement("li",null,'"555)-555-5555" should return false.'),r.a.createElement("li",null,'"(555-555-5555" should return false.'),r.a.createElement("li",null,'"(555)5(55?)-5555" should return false.')),r.a.createElement(c,{placeholder:"555-555-5555",validator:I,label:"US Phone Validator"})),r.a.createElement(i.a,{borderColor:x.main,headerText:"Cash Register"},r.a.createElement("p",null,"For this last project you're tasked with creating a piece of program that will simulate a cash register."),r.a.createElement("p",null,"You have to write a function that takes purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument."),r.a.createElement("p",null,"After taking those inputs, you need to calculate how much change to return taking into account the price of the product, the amount of cash the client is giving you and the amount of cash the register has."),r.a.createElement("p",null,'You should always return an object with a "status" and a "change" key. The posible outcomes are as follow:'),r.a.createElement("ul",null,r.a.createElement("li",null,"If cash in the drawer is less than the change due, or if you cannot return the exact change, the output should be"," ",r.a.createElement("code",null,"{",'status: "INSUFFICIENT_FUNDS", change: []',"}")),r.a.createElement("li",null,'If the amount of "change" to return is equal to the amount of cash in the register, the "status" key should return "CLOSED" and the change array sorted from highest to lowest with the amounts of bills and coins to return.'),r.a.createElement("li",null,'If the change to return is lower than the amount of cash in the register, and the exact amount can be returned, the "status" key should return with a value of "OPEN", and as in the last case, the change array sorted from highest to lowest.')),r.a.createElement(E,{innerHTML:T("cash-register-code.md",t)}),r.a.createElement("h4",null,"Testing the code."),r.a.createElement("p",null,"Here's a small app for testing the code, you just need to enter a price and payment and press the 'Calculate' button, there's already a predefined register state which you can modify if you want to."),r.a.createElement(g.a,null)))};var k="3043468988"},223:function(e,t,a){"use strict";a(18);var n=a(0),r=a.n(n),l=a(210),o=a.n(l);var i="58px",u="20px",s="34px",c="15px",m=function(e){var t=e.headerStyle,a=e.headerTextStyle,n=e.headerIconStyle,l=e.onHeaderClick,o=e.styleClass,i=e.headerText,u=e.iconClassName,s=e.headerAltChildren;return r.a.createElement("header",{style:t,onClick:l,className:o.collapseHeader},r.a.createElement("div",null,r.a.createElement("p",{style:a,className:o.headerLabel},i),s||null),r.a.createElement("div",{style:n,className:u}))},h=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).createBaseParams=function(e){var t={initialRender:!0,maxHeightWhenCollapsed:"",maxHeightWhenUncollapsed:""};return t.maxHeightWhenCollapsed=!0===e.large?i:s,t},a.onHeaderClick=function(e){a.setState({isOpen:!a.state.isOpen})},a.calculateInitialInlineStyles=function(){},a.getInlineStyle=function(){var e={mainStyle:{},headerStyle:{maxHeight:a.baseParams.maxHeightWhenCollapsed},headerText:{},headerIcon:{},contentStyle:{}};a.props.styledBorder?e.mainStyle.borderTop="solid 5px "+a.props.borderColor:e.mainStyle.border="none";var t=parseInt(a.baseParams.maxHeightWhenCollapsed)-4;return e.headerIcon={width:t-8+"px",height:t-8+"px",backgroundSize:t+"px "+t+"px"},e.headerText.fontSize=!0===a.props.large?u:c,e.mainStyle.maxHeight=a.state.isOpen?a.baseParams.maxHeightWhenUncollapsed:a.baseParams.maxHeightWhenCollapsed,e},a.componentRef=r.a.createRef(),a.state={isOpen:!1},a.baseParams=a.createBaseParams(t),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidUpdate=function(){},l.componentDidMount=function(){var e=this.componentRef.current.children[1],t=getComputedStyle(e);this.baseParams.maxHeightWhenUncollapsed=2*parseInt(t.getPropertyValue("height"))},l.render=function(){var e=this.getInlineStyle(),t=e.headerStyle,a=e.contentStyle,n=e.headerIcon,l=e.headerText,i=e.mainStyle,u=Object.assign({},a,{},this.props.contentInlineStyle),s=Object.assign({},t,{},this.props.headerInlineStyle),c=Object.assign({},i,{},this.props.mainInlineStyle),h=this.state.isOpen?o.a.headerImgContainer+" "+o.a.open:o.a.headerImgContainer;return r.a.createElement("section",{ref:this.componentRef,className:o.a.collapseContainer,style:c},r.a.createElement(m,{headerStyle:s,headerTextStyle:l,headerIconStyle:n,styleClass:o.a,onHeaderClick:this.onHeaderClick,headerText:this.props.headerText,iconClassName:h}),r.a.createElement("article",{style:u,className:o.a.collapseContent},this.props.children))},n}(r.a.Component);h.defaultProps={headerText:"default value for the header text",styledBorder:!0,borderColor:"#000",large:!0,headerInlineStyle:{},contentInlineStyle:{},mainInlineStyle:{}},t.a=h},224:function(e,t,a){"use strict";t.a={sand:{main:"#c2b280",shade:"#483f22",tint:"#e2dac2",complementary:{main:"#8090c2",shade:"#222c48",tint:"#c2cae2"},triadic:{first:{main:"#80c2b2",shade:"#22483f",tint:"#c2e2da"},second:{main:"#b280c2",shade:"#4a2955",tint:"#dac2e2"}},splitComplementary:{first:{main:"#9180c2",shade:"#2c2248",tint:"#cac2e2"},second:{main:"#80b1c2",shade:"#223e48",tint:"#c2dae2"}},analogous:{first:{main:"#c29180",shade:"#482c22",tint:"#e2cac2"},second:{main:"#b1c280",shade:"#3e4822",tint:"#dae2c2"}},tetradic:{first:{main:"#c28090",shade:"#48222c",tint:"#e2c2ca"},second:{main:"#80c2b2",shade:"#22483f",tint:"#c2e2da"},third:{main:"#8090c2",shade:"#222c48",tint:"#c2cae2"}}}}},225:function(e,t,a){"use strict";var n=a(4),r=a(25),l=a(39),o=a(107),i=a(80),u=a(9),s=a(81).f,c=a(106).f,m=a(11).f,h=a(145).trim,d=n.Number,p=d,f=d.prototype,E="Number"==l(a(59)(f)),g="trim"in String.prototype,y=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,l=(t=g?t.trim():h(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var o,u=t.slice(2),s=0,c=u.length;s<c;s++)if((o=u.charCodeAt(s))<48||o>r)return NaN;return parseInt(u,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(E?u((function(){f.valueOf.call(a)})):"Number"!=l(a))?o(new p(y(t)),a,d):y(t)};for(var b,v=a(10)?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;v.length>C;C++)r(p,b=v[C])&&!r(d,b)&&m(d,b,c(p,b));d.prototype=f,f.constructor=d,a(15)(n,"Number",d)}},226:function(e,t,a){var n=a(1);n(n.S,"Number",{isNaN:function(e){return e!=e}})},227:function(e,t,a){"use strict";a(48),a(38),a(14),a(58),a(5),a(225),a(226),a(18);var n=a(0),r=a.n(n),l=a(209),o=a.n(l),i=a(223),u=a(211),s=a.n(u),c=function(e){var t=e.value,a=e.isCents,n=e.input,l=e.action,o=e.label,i=e.disable,u=a?parseInt(t)/100:parseInt(t),c=a?"coins":"bills",m=a?"¢":"$",h=function(e){var t=parseFloat(e.target.value);!function(e,t){var a=Math.round(100*e),n=Math.round(100*t);return a%n==0}(t,parseFloat(u))?console.log("not valid number"):l({label:e.target.getAttribute("label"),value:t})};return r.a.createElement("div",{className:s.a.container},r.a.createElement("p",{style:{margin:"2px 4px"}},"Amount in "+m+t+" "+c),r.a.createElement("div",{className:s.a.innerContainer},"$:",i?r.a.createElement("input",{label:o,type:"number",min:"0",step:""+u,value:n,onChange:h,disabled:!0}):r.a.createElement("input",{label:o,type:"number",min:"0",step:""+u,value:n,onChange:h})))};c.defaultProps={input:0,disable:!1};var m=c,h=a(224).a.sand,d=["hundred","fifty","twenty","ten","five","one","quarter","dime","nickel","cent"],p=[{label:d[0],value:"100",amount:"200",isCoin:!1},{label:d[1],value:"50",amount:"150",isCoin:!1},{label:d[2],value:"20",amount:"120",isCoin:!1},{label:d[3],value:"10",amount:"70",isCoin:!1},{label:d[4],value:"5",amount:"85",isCoin:!1},{label:d[5],value:"1",amount:"42",isCoin:!1},{label:d[6],value:"25",amount:"4.25",isCoin:!0},{label:d[7],value:"10",amount:"3.1",isCoin:!0},{label:d[8],value:"5",amount:"5.05",isCoin:!0},{label:d[9],value:"1",amount:"3.11",isCoin:!0}],f={backgroundColor:"#fff",fontSize:"12px",lineHeight:"14px",borderRadius:"2px",padding:"0px 2px"},E={},g={padding:"6px 0px"},y=function(e){var t=Object(n.useState)(v()),a=t[0],l=t[1],u=Object(n.useState)(v(!0)),s=u[0],c=u[1],p=Object(n.useState)(v(!0)),y=p[0],x=p[1],w=Object(n.useState)(""),I=w[0],N=w[1],S=Object(n.useState)(""),T=S[0],k=S[1],A=function(e){return t=a,n=e,r=Object.assign({},t),l=parseFloat(r[n.label].amount),o=parseFloat(n.value),r.amount=""+(parseFloat(r.amount)-l+o),r[n.label].amount=""+o,r;var t,n,r,l,o};return r.a.createElement("div",{style:{backgroundColor:h.tint,borderColor:h.shade},className:o.a.container},r.a.createElement("fieldset",{style:{marginBottom:"4px"}},r.a.createElement("legend",{style:f},"Input:"),r.a.createElement("div",{className:o.a.container3},r.a.createElement("div",{style:{backgroundColor:h.splitComplementary.second.main,margin:"4px 0px"},className:o.a.container1},r.a.createElement("div",{className:o.a.container2},r.a.createElement("h5",null,"Price:"),r.a.createElement("input",{type:"text",value:I,onChange:function(e){return N(b(e.target.value))}})),r.a.createElement("div",{className:o.a.container2},r.a.createElement("h5",null,"Payment:"),r.a.createElement("input",{type:"text",value:T,onChange:function(e){return k(b(e.target.value))}})),r.a.createElement("div",{className:o.a.container2},r.a.createElement("button",{style:E,className:o.a.button,onClick:function(){var e=v(!0),t=Object.assign({},a),n=C(T-I);if(n>0&&n<t.amount){var r=function(e,t){var a=v(!0),n=v(!0),r={totalAmount:t.amount};d.forEach((function(e){return r[e]=C(t[e].amount)}));var l=function(e,t){var a=Object.assign({},t),n=e,r=[["hundred",100],["fifty",50],["twenty",20],["ten",10],["five",5],["one",1],["quarter",.25],["dime",.1],["nickel",.05],["cent",.01]],l={totalAmount:0};if(r.forEach((function(e){return l[e[0]]=0})),n<=a.totalAmount){if(n===a.totalAmount)return a;var o=0,i=r,u=Array.isArray(i),s=0;for(i=u?i:i[Symbol.iterator]();;){var c;if(u){if(s>=i.length)break;c=i[s++]}else{if((s=i.next()).done)break;c=s.value}var m=c;m[1]<=n&&function(){var e=Math.floor(n/m[1]),t=m[1]*e<a[m[0]]?m[1]*e:a[m[0]],r=[a[m[0]],n].map((function(e){return C(e-t)}));a[m[0]]=r[0],n=r[1];var o=[l[m[0]],l.totalAmount].map((function(e){return C(e+t)}));l[m[0]]=o[0],l.totalAmount=o[1]}(),o+=a[m[0]]}if(a.totalAmount=o,l.totalAmount===e)return[l,a]}return[null,null]}(e,r),o=l[0],i=l[1];o&&null!==i?(a.amount=o.totalAmount,n.amount=i.totalAmount,d.forEach((function(e){a[e].amount=o[e],n[e].amount=i[e]}))):(n=null,a=null);return[a,n]}(n,t);e=r[0],t=r[1],c(e),x(t)}else alert("Payment cannot be processed: Payment should be bigger than the price and less than the amount in the register")}},"Calculate"))),r.a.createElement(i.a,{large:!1,styledBorder:!1,headerText:"Cash in register: $"+C(a.amount),mainInlineStyle:{backgroundColor:h.splitComplementary.second.main,marginBottom:"4px"},contentInlineStyle:g},r.a.createElement("div",{className:o.a.collapseContent},d.map((function(e,t){return r.a.createElement(m,{label:e,action:function(e){return l(A(e))},key:e,value:a[e].value,isCents:a[e].isCoin,input:C(a[e].amount)})})))))),r.a.createElement("fieldset",{style:{marginBottom:"4px"}},r.a.createElement("legend",{style:f},"Result:"),r.a.createElement("div",{className:o.a.container1},[["Client change:",s],["New cash in Register:",y]].map((function(e,t){return r.a.createElement(i.a,{key:t,large:!1,styledBorder:!1,headerText:e[0]+" $"+C(e[1].amount),mainInlineStyle:{backgroundColor:h.splitComplementary.second.main,marginBottom:"4px"},contentStyle:g},r.a.createElement("div",{className:o.a.collapseContent},d.map((function(t,a){return r.a.createElement(m,{label:t,action:function(e){return null},key:t,value:e[1][t].value,isCents:e[1][t].isCoin,input:e[1][t].amount,disable:!0})}))))})))),r.a.createElement("div",{className:o.a.container1}))};function b(e){var t="."===e[e.length-1]?".":"."===e[e.length-2]&&"0"===e[e.length-1]?".0":"",a=parseFloat(e);return Number.isNaN(a)?"":a.toString()+t}function v(e){void 0===e&&(e=!1);var t={amount:0,state:""},a=p,n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var l;if(n){if(r>=a.length)break;l=a[r++]}else{if((r=a.next()).done)break;l=r.value}var o=l,i={};i.value=o.value,i.isCoin=o.isCoin,e?i.amount=0:(i.amount=o.amount,t.amount+=parseFloat(o.amount)),t[o.label]=i}return t}function C(e){return Math.round(100*parseFloat(e))/100}y.defaultProps={};t.a=y},229:function(e,t,a){var n=a(1);n(n.P,"String",{repeat:a(230)})},230:function(e,t,a){"use strict";var n=a(60),r=a(29);e.exports=function(e){var t=String(r(this)),a="",l=n(e);if(l<0||l==1/0)throw RangeError("Count can't be negative");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(a+=t);return a}}}]);
//# sourceMappingURL=component---src-pages-freecodecamp-javascript-algorithms-and-data-structures-index-js-4c043270483b83aa76f8.js.map