(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(5),i=c.n(n),l=c(3),d=c(2),r=c.n(d),o=c(0);function b(e){var t=e.good,c=e.neutral,a=e.bad,s=e.total;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:r.a.statistic_title,children:"Statistic"}),Object(o.jsxs)("table",{className:r.a.statistic,children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Good"}),Object(o.jsx)("td",{children:t})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Neutral"}),Object(o.jsx)("td",{children:c})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Bad"}),Object(o.jsx)("td",{children:a})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Total"}),Object(o.jsx)("td",{children:s})]})]}),Object(o.jsxs)("p",{className:r.a.voiting_percent,children:["Positive feedback: ",function(){var e=100*t/s;return Math.round(e)}()," %"]})]})}function j(e){var t=e.message;return Object(o.jsx)("div",{className:r.a.section,children:Object(o.jsx)("h3",{children:t})})}function u(e){var t=e.key,c=e.value,a=e.label,s=e.onLeaveFeedback;return Object(o.jsx)("button",{className:r.a.button,value:c,onClick:s,children:a},t)}j.defaultProps={message:"No feedback given"},u.defaultProps={label:"Button"};var v=c(6);function O(e){var t=e.onLeaveFeedback;return Object(o.jsx)("div",{className:StyleSheet.options,children:v.map((function(e){var c=e.id,a=e.label,s=e.value;return Object(o.jsx)(u,{label:a,value:s,onLeaveFeedback:t},c)}))})}function h(e){var t=e.title;return Object(o.jsx)("div",{className:r.a.section,children:Object(o.jsx)("h2",{children:t})})}function x(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(0),i=Object(l.a)(n,2),d=i[0],u=i[1],v=Object(a.useState)(0),x=Object(l.a)(v,2),k=x[0],f=x[1],_=function(){return c+d+k||0};return Object(o.jsxs)("div",{className:r.a.feedbackBlock,children:[Object(o.jsx)(h,{title:"Please leave feedback"}),Object(o.jsx)(O,{onLeaveFeedback:function(e){console.log("click: ",e.target.value),"good"===e.target.value&&(s(c+1),console.log("Feedback ~ this.setState ~ good === ",c)),"neutral"===e.target.value&&u(d+1),"bad"===e.target.value&&f(k+1)}}),_()?Object(o.jsx)(b,{good:c,neutral:d,bad:k,total:_()}):Object(o.jsx)(j,{message:"No feedback given"})]})}function k(){return Object(o.jsx)("div",{children:Object(o.jsx)(x,{})})}O.defaultProps={title:"Please leave feedback"},h.defaultProps={title:"Please leave feedback"};c(12),c(13);i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={feedbackBlock:"Feedback_feedbackBlock__1UDLj",section:"Feedback_section__13Ibw",statistic:"Feedback_statistic__2pE11",statistic_title:"Feedback_statistic_title__3MF6L",button:"Feedback_button__1E_-H",voiting_percent:"Feedback_voiting_percent__1MZHE",options:"Feedback_options__1hX7O"}},6:function(e){e.exports=JSON.parse('[{"id":1,"label":"Good","value":"good"},{"id":2,"label":"Neutral","value":"neutral"},{"id":3,"label":"Bad","value":"bad"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.7ddde9aa.chunk.js.map