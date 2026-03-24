"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[1802],{1802(H,T,t){t.d(T,{ProtectedListPage:()=>gt});var s=t(69751),c=t(21272),x=t(11273),C=t(42455),W=t(38413),b=t(55356),S=t(74773),g=t(30893),i=t(85963),o=t(4198),h=t(94061),d=t(35513),f=t(40216),O=t(26127),L=t(90361),l=t(33363),P=t(50215),tt=t(98765),st=t(25641),k=t(83997),y=t(92132),J=t(47610);const I=J.Ay.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ot=J.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${I} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${I}:before {
    transform: translateX(1rem);
  }
`,et=c.forwardRef(({label:n,onChange:u,onLabel:p="On",offLabel:E="Off",selected:j,visibleLabels:m=!1,...U},a)=>(0,y.jsx)(ot,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:u,visibleLabels:m,type:"button",...U,children:(0,y.jsxs)(k.s,{children:[(0,y.jsxs)(I,{children:[(0,y.jsx)("span",{children:p}),(0,y.jsx)("span",{children:E})]}),m&&(0,y.jsx)(h.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?p:E})]})}));var Q=t(88353),at=t(53563),nt=t(49654),v=t(59201),R=t(5194),X=t(50612),rt=t(41909),dt=t(36481),it=t(54894),Y=t(17703),lt=t(71389),Z=t(92129),ht=t(13210),Wt=t(15126),bt=t(63299),St=t(44633),Et=t(59080),At=t(79275),Dt=t(14718),Lt=t(82437),Pt=t(61535),pt=t(5790),$t=t(12083),Bt=t(35223),Ot=t(5409),kt=t(74930),It=t(80219),Rt=t(48940),Ut=t(41286),Ft=t(33955),Kt=t(13426),Nt=t(84624),zt=t(346),Vt=t(54257),Gt=t(48829),Ht=t(51187),Jt=t(39404),Qt=t(58692),Xt=t(501),Yt=t(57646),Zt=t(23120),wt=t(44414),qt=t(25962),_t=t(14664),ts=t(42588),ss=t(90325),os=t(62785),es=t(87443),as=t(41032),ns=t(22957),rs=t(93179),ds=t(73055),is=t(15747),ls=t(62925),hs=t(26509),cs=t(32058),gs=t(81185),ms=t(4642);const ct=()=>{const[n,u]=c.useState(!1),[p,E]=c.useState(!1),[j,m]=c.useState([]),U=(0,Z.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,it.A)(),{_unstableFormatAPIError:$}=(0,v.wq)(),M=(0,v.hN)();(0,v.L4)();const{push:mt}=(0,Y.W6)(),{pathname:w}=(0,Y.zy)(),{isLoading:vt,allowedActions:{canCreate:F,canUpdate:K,canDelete:q}}=(0,v.ec)(U),{notifyStatus:_}=(0,x.W)(),{isLoading:ut,webhooks:A,error:N,updateWebhook:xt,deleteManyWebhooks:ft}=(0,ht.u)();c.useEffect(()=>{if(N){M({type:"warning",message:$(N)});return}A&&_(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[A,N,M,a,_,$]);const jt=async e=>{try{const r=await xt(e);"error"in r&&M({type:"warning",message:$(r.error)})}catch{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},yt=async()=>{try{E(!0);const e=await ft({ids:j});if("error"in e){M({type:"warning",message:$(e.error)});return}m([])}catch{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{E(!1),u(!1)}},Mt=e=>m(e?A?.map(r=>r.id)??[]:[]),Tt=(e,r)=>m(e?G=>[...G,r]:G=>G.filter(Ct=>Ct!==r)),z=e=>()=>mt(`${w}/${e}`),V=vt||ut,B=A?.length??0,D=j.length;return(0,s.jsxs)(C.P,{children:[(0,s.jsx)(v.x7,{name:"Webhooks"}),(0,s.jsxs)(W.g,{"aria-busy":V,children:[(0,s.jsx)(b.Q,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:F&&!V&&(0,s.jsx)(nt.z,{as:lt.k2,startIcon:(0,s.jsx)(R.A,{}),variant:"default",to:`${w}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),D>0&&q&&(0,s.jsx)(S.B,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.o,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:D})}),(0,s.jsx)(i.$,{onClick:()=>u(!0),startIcon:(0,s.jsx)(X.A,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.s,{children:V?(0,s.jsx)(h.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.Bl,{})}):B>0?(0,s.jsxs)(d.X,{colCount:5,rowCount:B+1,footer:(0,s.jsx)(f.S,{onClick:z("create"),icon:(0,s.jsx)(R.A,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(O.d,{children:(0,s.jsxs)(L.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(P.J,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:D>0&&D<B,value:D===B,onValueChange:Mt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(tt.s,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(st.N,{children:A?.map(e=>(0,s.jsxs)(L.Tr,{onClick:K?z(e.id):void 0,style:{cursor:K?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(P.J,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Tt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.o,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.o,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(k.s,{children:(0,s.jsx)(et,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),jt({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(k.s,{gap:1,children:[K&&(0,s.jsx)(Q.K,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(rt.A,{}),noBorder:!0}),q&&(0,s.jsx)(Q.K,{onClick:r=>{r.stopPropagation(),m([e.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(X.A,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(at.p,{icon:(0,s.jsx)(dt.A,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(i.$,{variant:"secondary",startIcon:(0,s.jsx)(R.A,{}),disabled:!F,onClick:F?z("create"):void 0,children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.TM,{isOpen:n,onToggleDialog:()=>u(e=>!e),onConfirm:yt,isConfirmButtonLoading:p})]})},gt=()=>{const n=(0,Z.j)(u=>u.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.kz,{permissions:n,children:(0,s.jsx)(ct,{})})}},13210(H,T,t){t.d(T,{u:()=>g});var s=t(92129);const c=s.n.injectEndpoints({endpoints:i=>({getWebhooks:i.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,d)=>typeof d=="object"&&"id"in d?[{type:"Webhook",id:d.id}]:[...o?.map(({id:f})=>({type:"Webhook",id:f}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:i.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:i.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:d})=>[{type:"Webhook",id:d}]}),triggerWebhook:i.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:i.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:d})=>d.map(f=>({type:"Webhook",id:f}))})}),overrideExisting:!1}),{useGetWebhooksQuery:x,useCreateWebhookMutation:C,useUpdateWebhookMutation:W,useTriggerWebhookMutation:b,useDeleteManyWebhooksMutation:S}=c,g=(i=void 0,o)=>{const{data:h,isLoading:d,error:f}=x(i,o),[O]=C(),[L]=W(),[l]=b(),[P]=S();return{webhooks:h,isLoading:d,error:f,createWebhook:O,updateWebhook:L,triggerWebhook:l,deleteManyWebhooks:P}}},40216(H,T,t){t.d(T,{S:()=>i});var s=t(92132),c=t(47610),x=t(94061),C=t(48653),W=t(83997),b=t(30893);const S=(0,c.Ay)(x.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,g=(0,c.Ay)(x.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,i=({children:o,icon:h,...d})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(C.c,{}),(0,s.jsx)(g,{as:"button",background:"primary100",padding:5,...d,children:(0,s.jsxs)(W.s,{children:[(0,s.jsx)(S,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(x.a,{paddingLeft:3,children:(0,s.jsx)(b.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
