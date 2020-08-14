(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{352:function(t,s,a){"use strict";a.r(s);var n=a(39),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-命名规范","aria-hidden":"true"}},[t._v("#")]),t._v(" JS 命名规范")]),t._v(" "),a("p",[t._v("ECMAScript 规范中标识符采用驼峰大小写格式，驼峰命名法由小(大)写字母开始，后续每个单词首字母都大写。根据首字母是否大写，分为两种方式：")]),t._v(" "),a("ol",[a("li",[t._v("Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo")]),t._v(" "),a("li",[t._v("Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo")])]),t._v(" "),a("p",[t._v("标识符，则包括变量、函数名、类名、属性名和函数或类的参数，每个命名方法又略有不同，下面详细解释一下：")]),t._v(" "),a("h2",{attrs:{id:"_1-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 变量")]),t._v(" "),a("p",[a("strong",[t._v("命名方法")]),t._v("：小驼峰式命名法。")]),t._v(" "),a("p",[a("strong",[t._v("命名规范")]),t._v("：前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)")]),t._v(" "),a("p",[a("strong",[t._v("命名建议")]),t._v("：尽量在变量名字中体现所属类型，如:length、count 等表示数字类型；而包含 name、title 表示为字符串类型。")]),t._v(" "),a("p",[a("strong",[t._v("eg")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 好的命名方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" maxCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tableTitle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LoginTable'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不好的命名方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" setCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" getTitle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LoginTable'")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-2-常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-常量","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 常量")]),t._v(" "),a("p",[a("strong",[t._v("命名方法")]),t._v("：名称全部大写。")]),t._v(" "),a("p",[a("strong",[t._v("命名规范")]),t._v("：使用大写字母和下划线来组合命名，下划线用以分割单词。")]),t._v(" "),a("p",[a("strong",[t._v("eg")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_COUNT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.foreverz.com'")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-3-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 函数")]),t._v(" "),a("p",[a("strong",[t._v("命名方法")]),t._v("：小驼峰式命名法。")]),t._v(" "),a("p",[a("strong",[t._v("命名规范")]),t._v("：前缀应当为动词。")]),t._v(" "),a("p",[a("strong",[t._v("命名建议")]),t._v("：可使用常见动词约定")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("动词")]),t._v(" "),a("th",[t._v("含义")]),t._v(" "),a("th",[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("can")]),t._v(" "),a("td",[t._v("判断是否可执行某个动作(权限)")]),t._v(" "),a("td",[t._v("函数返回一个布尔值。true：可执行；false：不可执行")])]),t._v(" "),a("tr",[a("td",[t._v("has")]),t._v(" "),a("td",[t._v("判断是否含有某个值")]),t._v(" "),a("td",[t._v("函数返回一个布尔值。true：含有此值；false：不含有此值")])]),t._v(" "),a("tr",[a("td",[t._v("is")]),t._v(" "),a("td",[t._v("判断是否为某个值")]),t._v(" "),a("td",[t._v("函数返回一个布尔值。true：为某个值；false：不为某个值")])]),t._v(" "),a("tr",[a("td",[t._v("get")]),t._v(" "),a("td",[t._v("获取某个值")]),t._v(" "),a("td",[t._v("函数返回一个非布尔值")])]),t._v(" "),a("tr",[a("td",[t._v("set")]),t._v(" "),a("td",[t._v("设置某个值")]),t._v(" "),a("td",[t._v("无返回值、返回是否设置成功或者返回链式对象")])]),t._v(" "),a("tr",[a("td",[t._v("load")]),t._v(" "),a("td",[t._v("加载某些数据")]),t._v(" "),a("td",[t._v("无返回值或者返回是否加载完成的结果")])])])]),t._v(" "),a("p",[a("strong",[t._v("eg")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否可阅读")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canRead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-4-类-构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-类-构造函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4 类 & 构造函数")]),t._v(" "),a("p",[a("strong",[t._v("命名方法")]),t._v("：大驼峰式命名法，首字母大写。")]),t._v(" "),a("p",[a("strong",[t._v("命名规范")]),t._v("：前缀为名称。")]),t._v(" "),a("p",[a("strong",[t._v("eg")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mevyn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-5-类的成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-类的成员","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.5 类的成员")]),t._v(" "),a("p",[t._v("类的成员包含：")]),t._v(" "),a("ol",[a("li",[t._v("公共属性和方法：跟变量和函数的命名一样。")]),t._v(" "),a("li",[t._v("私有属性和方法：前缀为_(下划线)，后面跟公共属性和方法一样的命名方式。")])]),t._v(" "),a("p",[a("strong",[t._v("eg")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" _name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 公共方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 公共方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mervyn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ->mervyn")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-注释规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注释规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 注释规范")]),t._v(" "),a("p",[t._v("js 支持三种不同类型的注释：行内注释、单行注释和多行注释：")]),t._v(" "),a("h3",{attrs:{id:"_2-1-行内注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-行内注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 行内注释")]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v("：行内注释以两个斜线开始，以行尾结束。")]),t._v(" "),a("p",[a("strong",[t._v("语法")]),t._v("：code // 这是行内注释")]),t._v(" "),a("p",[a("strong",[t._v("使用方式")]),t._v("：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。")]),t._v(" "),a("p",[a("strong",[t._v("命名建议")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来显示一个解释的评论")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 用来显示表达式的结果，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// >用来显示 console 的输出结果，")]),t._v("\n")])])]),a("p",[a("strong",[t._v("eg")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试函数")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// >Hello World!")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ->5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-单行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-单行注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 单行注释")]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v("：单行注释以两个斜线开始，以行尾结束。")]),t._v(" "),a("p",[a("strong",[t._v("语法")]),t._v("：// 这是单行注释")]),t._v(" "),a("p",[a("strong",[t._v("使用方式")]),t._v("：单独一行：//(双斜线)与注释文字之间保留一个空格。")]),t._v(" "),a("p",[a("strong",[t._v("eg")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用了一个函数；1)单独在一行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-3-多行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-多行注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 多行注释")]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v("：以 "),a("code",[t._v("/*")]),t._v(" 开头， "),a("code",[t._v("*/")]),t._v(" 结尾")]),t._v(" "),a("p",[a("strong",[t._v("语法")]),t._v("："),a("code",[t._v("/* 注释说明 */")])]),t._v(" "),a("p",[a("strong",[t._v("使用方法")]),t._v("：若开始"),a("code",[t._v("/*")]),t._v("和结束"),a("code",[t._v("*/")]),t._v("都在一行，推荐采用单行注释。若至少三行注释时，第一行为"),a("code",[t._v("/*")]),t._v("，最后行为"),a("code",[t._v("*/")]),t._v("，其他行以"),a("code",[t._v("*")]),t._v("开始，并且注释文字与"),a("code",[t._v("*")]),t._v("保留一个空格。")]),t._v(" "),a("p",[a("strong",[t._v("eg")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * 代码执行到这里后会调用setTitle()函数\n * setTitle()：设置title的值\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-4-函数-方法-注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-函数-方法-注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 函数(方法)注释")]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v("：函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照"),a("a",{attrs:{href:"http://www.css88.com/doc/jsdoc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDoc"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("语法")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 函数说明\n * @关键字\n */")]),t._v("\n")])])]),a("p",[a("strong",[t._v("常用注释关键字")]),t._v("：(只列出一部分，并不是全部)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("注释名")]),t._v(" "),a("th",[t._v("语法")]),t._v(" "),a("th",[t._v("含义")]),t._v(" "),a("th",[t._v("示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("@param")]),t._v(" "),a("td",[t._v("@param 参数名 {参数类型} 描述信息")]),t._v(" "),a("td",[t._v("描述参数的信息")]),t._v(" "),a("td",[t._v("@param name {String} 传入名称")])]),t._v(" "),a("tr",[a("td",[t._v("@return")]),t._v(" "),a("td",[t._v("@return {返回类型} 描述信息")]),t._v(" "),a("td",[t._v("描述返回值的信息")]),t._v(" "),a("td",[t._v("@return {Boolean} true:可执行;false:不可执行")])]),t._v(" "),a("tr",[a("td",[t._v("@author")]),t._v(" "),a("td",[t._v("@author 作者信息 [附属信息：如邮箱、日期]")]),t._v(" "),a("td",[t._v("描述此函数作者的信息")]),t._v(" "),a("td",[t._v("@author 张三 2015/07/21")])]),t._v(" "),a("tr",[a("td",[t._v("@version")]),t._v(" "),a("td",[t._v("@version XX.XX.XX")]),t._v(" "),a("td",[t._v("描述此函数的版本号")]),t._v(" "),a("td",[t._v("@version 1.0.3")])]),t._v(" "),a("tr",[a("td",[t._v("@example")]),t._v(" "),a("td",[t._v("@example 示例代码")]),t._v(" "),a("td",[t._v("演示函数的使用")]),t._v(" "),a("td",[t._v("@example setTitle(‘测试’)")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 合并Grid的行\n * @param grid {Ext.Grid.Panel} 需要合并的Grid\n * @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。\n * @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样\n * @return void\n * @author polk6 2015/07/21\n * @example\n * _________________                             _________________\n * |  年龄 |  姓名 |                             |  年龄 |  姓名 |\n * -----------------      mergeCells(grid,[0])   -----------------\n * |  18   |  张三 |              =>             |       |  张三 |\n * -----------------                             -  18   ---------\n * |  18   |  王五 |                             |       |  王五 |\n * -----------------                             -----------------\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeCells")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Panel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  isAllSome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do Something")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);