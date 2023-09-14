"use strict";(self.webpackChunkstorytellingfeedback=self.webpackChunkstorytellingfeedback||[]).push([[8999],{8999:function(e,t,n){n.r(t),n.d(t,{liveScript:function(){return u}});var r=function(e,t){var n=t.next||"start";if(n){t.next=t.next;var r=s[n];if(r.splice){for(var o=0;o<r.length;++o){var a=r[o];if(a.regex&&e.match(a.regex))return t.next=a.next||t.next,a.token}return e.next(),"error"}if(e.match(a=s[n]))return a.regex&&e.match(a.regex)?(t.next=a.next,a.token):(e.next(),"error")}return e.next(),"error"},o="(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*",a=RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*"+o+")?))\\s*$"),x="(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))",g={token:"string",regex:".+"},s={start:[{token:"docComment",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)"+x},{token:"atom",regex:"(?:true|false|yes|no|on|off|null|void|undefined)"+x},{token:"invalid",regex:"(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)"+x},{token:"className.standard",regex:"(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)"+x},{token:"variableName.function.standard",regex:"(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)"+x},{token:"variableName.standard",regex:"(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)"+x},{token:"variableName",regex:o+"\\s*:(?![:=])"},{token:"variableName",regex:o},{token:"operatorKeyword",regex:"(?:\\.{3}|\\s+\\?)"},{token:"keyword",regex:"(?:@+|::|\\.\\.)",next:"key"},{token:"operatorKeyword",regex:"\\.\\s*",next:"key"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"docString",regex:"'''",next:"qdoc"},{token:"docString",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"regexp",regex:"//",next:"heregex"},{token:"regexp",regex:"\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",next:"key"},{token:"number",regex:"(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"},{token:"paren",regex:"[({[]"},{token:"paren",regex:"[)}\\]]",next:"key"},{token:"operatorKeyword",regex:"\\S+"},{token:"content",regex:"\\s+"}],heregex:[{token:"regexp",regex:".*?//[gimy$?]{0,4}",next:"start"},{token:"regexp",regex:"\\s*#{"},{token:"comment",regex:"\\s+(?:#.*)?"},{token:"regexp",regex:"\\S+"}],key:[{token:"operatorKeyword",regex:"[.?@!]+"},{token:"variableName",regex:o,next:"start"},{token:"content",regex:"",next:"start"}],comment:[{token:"docComment",regex:".*?\\*/",next:"start"},{token:"docComment",regex:".+"}],qdoc:[{token:"string",regex:".*?'''",next:"key"},g],qqdoc:[{token:"string",regex:'.*?"""',next:"key"},g],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"key"},g],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"key"},g],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"key"},g],words:[{token:"string",regex:".*?\\]>",next:"key"},g]};for(var i in s){var k=s[i];if(k.splice)for(var l=0,c=k.length;l<c;++l){var d=k[l];"string"===typeof d.regex&&(s[i][l].regex=new RegExp("^"+d.regex))}else"string"===typeof d.regex&&(s[i].regex=new RegExp("^"+k.regex))}var u={name:"livescript",startState:function(){return{next:"start",lastToken:{style:null,indent:0,content:""}}},token:function(e,t){for(;e.pos==e.start;)var n=r(e,t);return t.lastToken={style:n,indent:e.indentation(),content:e.current()},n.replace(/\./g," ")},indent:function(e){var t=e.lastToken.indent;return e.lastToken.content.match(a)&&(t+=2),t}}}}]);
//# sourceMappingURL=8999.9b54260b.chunk.js.map