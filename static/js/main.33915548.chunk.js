(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2p1vu",total:"Cart_total__p_IJF",actions:"Cart_actions__1PPgg","button--alt":"Cart_button--alt__-QtQg",button:"Cart_button__9XnXe"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__ubA-O",summary:"CartItem_summary__3F1Up",price:"CartItem_price__ALUhz",amount:"CartItem_amount__22hjK",actions:"CartItem_actions__nl1G4"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3k0Qq",icon:"HeaderCartButton_icon__2xBrO",badge:"HeaderCartButton_badge__1OSM4",bump:"HeaderCartButton_bump__1hD6m"}},function(e,t,n){e.exports={meal:"MealItem_meal__3I_FY",description:"MealItem_description__1f4rz",price:"MealItem_price__3kUnV"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2c2OT",modal:"Modal_modal__3HZf3","slide-down":"Modal_slide-down__RAuCU"}},,function(e,t,n){e.exports={header:"Header_header__2NWSf","main-image":"Header_main-image__qCxZB"}},function(e,t,n){e.exports={input:"Input_input__2mLnZ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__171it","meals-appear":"AvailableMeals_meals-appear__2_LvF"}},function(e,t,n){e.exports={form:"MealItemForm_form__sdHg9"}},function(e,t,n){e.exports={summary:"MealSummary_summary__1oNvZ"}},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),r=n.n(i),s=n(2),o=(n(20),n.p+"static/media/meals.2971f633.jpg"),l=n(10),d=n.n(l),m=n(6),u=n.n(m),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),p=function(e){var t=Object(a.useContext)(x).items.reduce((function(e,t){return e+t.amount}),0);return Object(j.jsxs)("button",{className:u.a.button,onClick:e.onClick,children:[Object(j.jsx)("span",{className:u.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:u.a.badge,children:t})]})},h=function(e){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsxs)("header",{className:d.a.header,children:[Object(j.jsx)("h1",{children:"FleaMeals"}),Object(j.jsx)(p,{onClick:e.showCart})]}),Object(j.jsx)("div",{className:d.a["main-image"],children:Object(j.jsx)("img",{src:o,alt:"A table full of delicious dishes"})})]})},O=n(12),_=n.n(O),f=(n(22),function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})}),v=n(7),C=n.n(v),g=n(13),N=n.n(g),A=n(15),y=n(11),I=n.n(y),M=c.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:I.a.input,children:[Object(j.jsx)("label",{className:I.a.label,htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(A.a)({ref:t},e.input))]})})),k=function(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useRef)();return Object(j.jsxs)("form",{className:N.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,a=+n;0===n.trim().length||a<1||a>10?i(!1):e.onAddtoCartAmount(a)},children:[Object(j.jsx)(M,{label:"Amount",ref:r,input:{id:"amount_"+e.id,type:"number",min:"1",max:"10",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!c&&Object(j.jsx)("p",{children:"Please Enter a Valid amount (1-10)."})]})},w=function(e){var t=Object(a.useContext)(x),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:C.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:C.a.description,children:e.description}),Object(j.jsx)("div",{className:C.a.price,children:n})]}),Object(j.jsx)(k,{onAddtoCartAmount:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})]})},F=function(){var e=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}].map((function(e){return Object(j.jsx)(w,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:_.a.meals,children:Object(j.jsx)(f,{children:Object(j.jsx)("ul",{children:e})})})},H=n(14),B=n.n(H),S=function(){return Object(j.jsxs)("section",{className:B.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},z=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{}),Object(j.jsx)(F,{})]})},P=n(3),R=n.n(P),D=n(8),E=n.n(D),U=function(e){return Object(j.jsx)("div",{className:E.a.backdrop,onClick:e.onConfirm})},Z=function(e){return Object(j.jsx)("div",{className:E.a.modal,children:Object(j.jsx)("div",{className:E.a.content,children:e.children})})},q=function(e){return Object(j.jsxs)(c.a.Fragment,{children:[r.a.createPortal(Object(j.jsx)(U,{onConfirm:e.onConfirm}),document.getElementById("overlays")),r.a.createPortal(Object(j.jsx)(Z,{children:e.children}),document.getElementById("overlays"))]})},J=n(4),L=n.n(J),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:L.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:L.a.summary,children:[Object(j.jsx)("span",{className:L.a.price,children:t}),Object(j.jsxs)("span",{className:L.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:L.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},T=function(e){var t=Object(a.useContext)(x),n=t.items.length>0,c=function(){},i=function(){};return Object(j.jsxs)(q,{onConfirm:e.onConfirm,children:[Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:R.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(Q,{name:e.name,price:e.price,amount:e.amount,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))})}),Object(j.jsxs)("div",{className:R.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:"$".concat(t.totalAmount.toFixed(2))})]}),Object(j.jsxs)("div",{className:R.a.actions,children:[Object(j.jsx)("button",{className:R.a["button--alt"],onClick:e.onConfirm,children:"Close"}),n&&Object(j.jsx)("button",{className:R.a.button,children:"Order"})]})]})},V={items:[],totalAmount:0},Y=function(e,t){return"add"===t.type?{items:e.items.concat(t.item),totalAmount:e.totalAmount+t.item.price*t.item.amount}:(t.type,V)},$=function(e){var t=Object(a.useReducer)(Y,V),n=Object(s.a)(t,2),c=n[0],i=n[1],r={items:c.items,totalAmount:c.totalAmount,addItem:function(e){i({type:"add",item:e})},removeItem:function(e){i({type:"remove",id:e})}};return Object(j.jsx)(x.Provider,{value:r,children:e.children})};var G=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)($,{children:[n&&Object(j.jsx)(T,{onConfirm:function(){c(!1)}}),Object(j.jsx)(h,{showCart:function(){c(!0)}}),Object(j.jsx)(z,{})]})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.33915548.chunk.js.map