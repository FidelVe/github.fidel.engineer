(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{217:function(e,t,a){"use strict";a.r(t);a(106),a(48),a(38),a(13);var l=a(0),n=a.n(l),r=a(105),o=a.n(r),i=a(212),s=a.n(i);var c=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).onHeaderClick=function(e){a.setState({isOpen:!a.state.isOpen})},a.componentRef=n.a.createRef(),a.state={isOpen:!1},a.staticState={isInitialRender:!0,headerHeight:!1,contentHeight:!1,uncollapseHeight:!1},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=l.prototype;return r.componentDidMount=function(){var e=this.componentRef.current.children,t=e[0],a=e[1];this.staticState.contentHeight!==a.scrollHeight&&(this.staticState.contentHeight=a.scrollHeight,this.staticState.headerHeight=t.scrollHeight,this.staticState.uncollapseHeight=this.staticState.contentHeight+this.staticState.headerHeight+1e3,this.staticState.isInitialRender&&(this.staticState.isInitialRender=!1))},r.render=function(){var e=this.staticState.isInitialRender?{}:this.state.isOpen?{maxHeight:this.staticState.uncollapseHeight+"px"}:{maxHeight:this.staticState.headerHeight+"px"};return n.a.createElement("section",{ref:this.componentRef,className:s.a.collapseContainer,style:e},n.a.createElement("header",{onClick:this.onHeaderClick,className:s.a.collapseHeader},n.a.createElement("h3",null,this.props.headerText),this.state.isOpen?n.a.createElement("div",{className:s.a.headerImgContainer+" "+s.a.open}):n.a.createElement("div",{className:s.a.headerImgContainer})),n.a.createElement("article",{className:s.a.collapseContent},this.props.children))},l}(n.a.Component);c.defaultProps={headerText:"default value for the header text"};var u=c,h=a(208),m=a(213),d=a.n(m);a.d(t,"query",(function(){return E}));function p(e,t){var a=t,l=Array.isArray(a),n=0;for(a=l?a:a[Symbol.iterator]();;){var r;if(l){if(n>=a.length)break;r=a[n++]}else{if((n=a.next()).done)break;r=n.value}var o=r;if(o.fileName===e)return o.html}throw Error("no file named "+e+" found")}t.default=function(e){var t=function(e){var t=[],a=/\/[^\/]+.md/,l=e,n=Array.isArray(l),r=0;for(l=n?l:l[Symbol.iterator]();;){var o;if(n){if(r>=l.length)break;o=l[r++]}else{if((r=l.next()).done)break;o=r.value}var i=o,s=i.node.fileAbsolutePath.match(a)[0].substring(1),c=i.node.html;t.push({fileName:s,html:c})}return t}(e.data.codeBlock.edges);return n.a.createElement(h.a,{pageTitle:"FidelVe | FreeCodeCamp",headerText:"FreeCodeCamp. JavaScript Algorithms and Data Structure."},n.a.createElement("div",{style:{maxWidth:"400px",width:"100%",margin:"0 auto"}},n.a.createElement(o.a,{fluid:e.data.fccLogo.childImageSharp.fluid,alt:" FCC logo"})),n.a.createElement("p",null,n.a.createElement("b",null,"JavaScript Algorithms and Data Structures")," is the second of six courses offered at FreeCodeCamp of which upon completion of its final projects you may earn a ",n.a.createElement("i",null,"FreeCodeCamp Certificate"),"."),n.a.createElement("p",null,"Starting with the basic sintax of javascript, this course is a great introduction to JavaScript. I do recommend to find tutorials or books online, and read them while you're going through this course, it helped me have a better grasp on the several aspects of JavaScript."),n.a.createElement("p",null,"By the end of the course you will find several exercises to put into practice everything you have learn so far, and 5 final projects to obtain the ",n.a.createElement("i",null,"FreeCodeCamp Certificate"),"."),n.a.createElement("p",null,"I decided to create this page as a way to showcase my code answers to this project, if you are currently going through this part of the FCC curriculum I recommend that you don't see my answers and do the projects on your own, the most important part of doing the FCC is to learn of your mistakes and find the answers by yourself, the process of making mistakes and learning from them is the most important part of learning, not only how to code but learning anything in life, so if you truly want to learn, don't cheat, you will only be doing a disservice to yourself."),n.a.createElement("h2",null,"FreeCodeCamp JavaScript's final project"),n.a.createElement(u,{headerText:"Palindrome Checker"},n.a.createElement("p",null,"A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing."),n.a.createElement("p",null,"In this project, you are tasked with creating and algorithm that can detect if a word (or phrase) is a palindrome or not."),n.a.createElement("p",null,"Because we need to compare character by character, not including punctuation, case and spacing, we need to use regular expressions to match all the correct characters, and add all of this into an array for easy comparison later."),n.a.createElement("p",null,"After having your array with all the correct characters, the rest is just an iteration where you compare each character in their respective position at the beginning and end of the array, stoping at the middle."),n.a.createElement("div",{className:d.a.contentCode,dangerouslySetInnerHTML:{__html:p("palindrome-checker-code.md",t)}}),n.a.createElement("h4",null,"Testing the code."),n.a.createElement("p",null,"Heres a list of words and phrases you can use to test the algorithm."),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("b",null,'"eye"')," should return positive."),n.a.createElement("li",null,n.a.createElement("b",null,'"_eye"')," should return positive."),n.a.createElement("li",null,n.a.createElement("b",null,'"race car"')," should return positive."),n.a.createElement("li",null,n.a.createElement("b",null,'"not a palindrome"')," should return negative."),n.a.createElement("li",null,n.a.createElement("b",null,'"A man, a plan, a canal. Panama"')," should return positive."),n.a.createElement("li",null,n.a.createElement("b",null,'"never odd or even"')," should return positive."),n.a.createElement("li",null,n.a.createElement("b",null,'"nope"')," should return negative."),n.a.createElement("li",null,n.a.createElement("b",null,'"almostomla"')," should return negative."),n.a.createElement("li",null,n.a.createElement("b",null,'"My age is 0, 0 si ega ym."')," should return positive."),n.a.createElement("li",null,n.a.createElement("b",null,'"1 eye for of 1 eye."')," should return negative."),n.a.createElement("li",null,n.a.createElement("b",null,'"0_0 (: /-\\ :) 0-0"')," should return positive."),n.a.createElement("li",null,n.a.createElement("b",null,'"five|\\_/|four"')," should return negative."))),n.a.createElement(u,{headerText:"Roman Numeral Converter"},n.a.createElement("p",null,"For this project you are asked to create an algorithm that converts decimal numbers into the roman numeral system."),n.a.createElement("p",null,"The first thing that we need to do, is understand how roman numerals are written. The numbers in this system are represented by a combination of letters from the Latin alphabet."),n.a.createElement("div",{id:d.a.romanTable,className:d.a.flexcnw},n.a.createElement("div",{className:d.a.flexrnw},n.a.createElement("span",{className:d.a.romanThead},"Symbol"),n.a.createElement("span",null,"I"),n.a.createElement("span",null,"V"),n.a.createElement("span",null,"X"),n.a.createElement("span",null,"L"),n.a.createElement("span",null,"C"),n.a.createElement("span",null,"D"),n.a.createElement("span",null,"M")),n.a.createElement("div",{className:d.a.flexrnw},n.a.createElement("span",{className:d.a.romanThead},"Value"),n.a.createElement("span",null,"1"),n.a.createElement("span",null,"5"),n.a.createElement("span",null,"10"),n.a.createElement("span",null,"50"),n.a.createElement("span",null,"100"),n.a.createElement("span",null,"500"),n.a.createElement("span",null,"1000"))),n.a.createElement("p",null,"Now that we now the symbols and their value in the decimal system, how do we used them?. The correct way to express quantities in the roman numeral system is to replace from the top down, find the highest valued symbol, use it and substract the value to the total and repeat until zero is reached."),n.a.createElement("p",null,"For example, the correct way to express ",n.a.createElement("b",null,"1500")," in the roman system would be ",n.a.createElement("b",null,"MD"),", instead of ",n.a.createElement("b",null,"DDD"),"."),n.a.createElement("div",{className:d.a.contentCode,dangerouslySetInnerHTML:{__html:p("roman-numeral-converter-code.md",t)}}),n.a.createElement("h4",null,"Testing the code."),n.a.createElement("p",null,"Use the following values to test the algorithm."),n.a.createElement("ul",null,n.a.createElement("li",null,'Decimal 2, should return "II".'),n.a.createElement("li",null,'Decimal 4, should return "IV".'),n.a.createElement("li",null,'Decimal 29, should return "XXIX".'),n.a.createElement("li",null,'Decimal 83, should return "LXXXIII".'),n.a.createElement("li",null,'Decimal 97, should return "XCVII".'),n.a.createElement("li",null,'Decimal 649, should return "DCXLIX".'),n.a.createElement("li",null,'Decimal 798, should return "DCCXCVIII".'),n.a.createElement("li",null,'Decimal 891, should return "DCCCXCI".'),n.a.createElement("li",null,'Decimal 2014, should return "MMXIV".'),n.a.createElement("li",null,'Decimal 3999, should return "MMMCMXCIX".'))),n.a.createElement(u,{headerText:"Caesars Cipher"},n.a.createElement("p",null,"In cryptography, a cipher is an algorithm for performing encryption or decryption, this algorithm substitutes the characters in a string to transform them into something else for the purpose of protecting the original string from being understood by unwanted people."),n.a.createElement("p",null,"Caesars cipher is one of the simplest and most widely know encryption techniques. It is a simple substitution cipher in which each letter in a string is replaced by a letter some fixed number of positions down the alphabet."),n.a.createElement("p",null,"For this project you are asked to write an algorithm capable of implementing ROT13, a type of caesar cipher that replaces every character in a string with the letter 13 positions up in the alphabet from the position of that character."),n.a.createElement("div",{className:d.a.contentCode,dangerouslySetInnerHTML:{__html:p("caesars-cipher-code.md",t)}}),n.a.createElement("h4",null,"Testing the code."),n.a.createElement("p",null,"Use the following to test the algorithm"),n.a.createElement("ul",null,n.a.createElement("li",null,'"SERR PBQR PNZC" should decode to FREE CODE CAMP.'),n.a.createElement("li",null,'"SERR CVMMN!" should decode to FREE PIZZA!.'),n.a.createElement("li",null,'"SERR YBIR?" should decode to FREE LOVE?.'),n.a.createElement("li",null,'"GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'))),n.a.createElement(u,{headerText:"Telephone Number Validator"},n.a.createElement("p",null,"For this next project you are given a string representing a phone number and you should validate it."),n.a.createElement("p",null,"The input string should be a valid US phone number, the following examples are valid formats for US numbers."),n.a.createElement("ul",null,n.a.createElement("li",null,"555-555-5555"),n.a.createElement("li",null,"(555)555-5555"),n.a.createElement("li",null,"(555) 555-5555"),n.a.createElement("li",null,"555 555 5555"),n.a.createElement("li",null,"5555555555"),n.a.createElement("li",null,"1 555 555 5555")),n.a.createElement("div",{className:d.a.contentCode,dangerouslySetInnerHTML:{__html:p("telephone-number-validator-code.md",t)}}),n.a.createElement("h4",null,"Testing the code."),n.a.createElement("p",null,"Use the following to test the algorithm"),n.a.createElement("ul",null,n.a.createElement("li",null,'"1 555-555-5555" should return true.'),n.a.createElement("li",null,'"1 (555) 555-5555" should return true.'),n.a.createElement("li",null,'"5555555555" should return true.'),n.a.createElement("li",null,'"555-555-5555" should return true.'),n.a.createElement("li",null,'"(555)555-5555" should return true.'),n.a.createElement("li",null,'"1(555)555-5555" should return true.'),n.a.createElement("li",null,'"555-5555" should return false.'),n.a.createElement("li",null,'"5555555" should return false.'),n.a.createElement("li",null,'"1 555)555-5555" should return false.'),n.a.createElement("li",null,'"1 555 555 5555" should return true.'),n.a.createElement("li",null,'"1 456 789 4444" should return true.'),n.a.createElement("li",null,'"123**&!!asdf#" should return false.'),n.a.createElement("li",null,'"55555555" should return false.'),n.a.createElement("li",null,'"(6054756961)" should return false'),n.a.createElement("li",null,'"2 (757) 622-7382" should return false.'),n.a.createElement("li",null,'"0 (757) 622-7382" should return false.'),n.a.createElement("li",null,'"-1 (757) 622-7382" should return false'),n.a.createElement("li",null,'"2 757 622-7382" should return false.'),n.a.createElement("li",null,'"10 (757) 622-7382" should return false.'),n.a.createElement("li",null,'"27576227382" should return false.'),n.a.createElement("li",null,'"(275)76227382" should return false.'),n.a.createElement("li",null,'"2(757)6227382" should return false.'),n.a.createElement("li",null,'"2(757)622-7382" should return false.'),n.a.createElement("li",null,'"555)-555-5555" should return false.'),n.a.createElement("li",null,'"(555-555-5555" should return false.'),n.a.createElement("li",null,'"(555)5(55?)-5555" should return false.'))),n.a.createElement(u,{headerText:"Cash Register"},n.a.createElement("p",null,"For this last project you're tasked with creating a piece of program that will simulate a cash register."),n.a.createElement("p",null,"You have to write a function that takes purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument."),n.a.createElement("p",null,"After taking those inputs, you need to calculate how much change to return taking into account the price of the product, the amount of cash the client is giving you and the amount of cash the register has."),n.a.createElement("p",null,'You should always return an object with a "status" and a "change" key. The posible outcomes are as follow:'),n.a.createElement("ul",null,n.a.createElement("li",null,"If cash in the drawer is less than the change due, or if you cannot return the exact change, the output should be"," ",n.a.createElement("code",null,"{",'status: "INSUFFICIENT_FUNDS", change: []',"}")),n.a.createElement("li",null,'If the amount of "change" to return is equal to the amount of cash in the register, the "status" key should return "CLOSED" and the change array sorted from highest to lowest with the amounts of bills and coins to return.'),n.a.createElement("li",null,'If the change to return is lower than the amount of cash in the register, and the exact amount can be returned, the "status" key should return with a value of "OPEN", and as in the last case, the change array sorted from highest to lowest.')),n.a.createElement("div",{className:d.a.contentCode,dangerouslySetInnerHTML:{__html:p("cash-register-code.md",t)}}),n.a.createElement("h4",null,"Testing the code.")))};var E="3043468988"}}]);
//# sourceMappingURL=component---src-pages-freecodecamp-javascript-algorithms-and-data-structures-index-js-98b1911d4df0937bd55e.js.map