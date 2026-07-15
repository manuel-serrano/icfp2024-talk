import * as $$hiphop from '@hop/hiphop';import * as hh from '@hop/hiphop';import './set.mjs';const Traffic1=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':172},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':186},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':242}},$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':260},'%tag':'EMIT','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':291},'%tag':'yield'})));
const mach=new hh.ReactiveMachine(Traffic1);
mach.addEventListener('light',function (light) {
const el=document.getElementById(this.trafficId);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,l);
});});const Traffic2=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':557},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':571},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':639},'%tag':'SUSTAIN','signame':'light','apply':function () {
return new Set(['red']);
}}));
const Traffic3=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':703},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':717},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':774},'%tag':'TRAP'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':788},'%tag':'FORK'},$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':812},'%tag':'SUSTAIN','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':845},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':860},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':876},'%tag':'yield'}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':898},'%tag':'EXIT'})))));
const mach3=new hh.ReactiveMachine(Traffic3);
let lightHandler = function (light) {
const el=document.getElementById(this.trafficId);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,l);
});};mach3.addEventListener('light',lightHandler);const Traffic4=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':1212},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1226},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1283},'%tag':'TRAP'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':1297},'%tag':'FORK'},$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1321},'%tag':'SUSTAIN','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':1354},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1369},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1385},'%tag':'yield'}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1407},'%tag':'EXIT'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1437},'%tag':'SUSTAIN','signame':'light','apply':function () {
return new Set(['green']);
}}));
const mach4=new hh.ReactiveMachine(Traffic4);
mach4.addEventListener('light',lightHandler);const Traffic5=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':1606},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1620},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOCAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1676},'%tag':'LOCAL'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1683},'name':'s','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1721},'%tag':'TRAP'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':1735},'%tag':'FORK'},$$hiphop.SUSPEND({'%location':{'filename':'src/traffic.hh.mjs','pos':1751},'immediate':false,'apply':function () {
return ((() => {
const s=this.s;return s.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'s','pre':false,'val':true,'cnt':false}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1781},'%tag':'SUSTAIN','signame':'light','apply':function () {
return new Set(['red']);
}})),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':1841},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1856},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1872},'%tag':'yield'}),$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':1893},'%tag':'EMIT','signame':'s','apply':function () {
return true;
}}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1917},'%tag':'EXIT'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1947},'%tag':'SUSTAIN','signame':'light','apply':function () {
return new Set(['green']);
}})));
const mach5=new hh.ReactiveMachine(Traffic5);
mach5.addEventListener('light',lightHandler);const phase=(color,light,count) => {
return $$hiphop.LOCAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2140},'%tag':'LOCAL'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2147},'name':'s','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':2185},'%tag':'TRAP'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':2199},'%tag':'FORK'},$$hiphop.SUSPEND({'%location':{'filename':'src/traffic.hh.mjs','pos':2215},'immediate':false,'apply':function () {
return ((() => {
const s=this.s;return s.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'s','pre':false,'val':true,'cnt':false}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':2245},'%tag':'SUSTAIN','signame':light,'apply':function () {
return new Set([color]);
}})),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2298},'%tag':'par'},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2313},'%tag':'dollar'},Array.from({'length':count},(_) => {
return $$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':2355},'%tag':'yield'});
})),$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':2377},'%tag':'EMIT','signame':'s','apply':function () {
return true;
}}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':2401},'%tag':'EXIT'})))));
};
const Traffic6=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':2447},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2462},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':2518}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2531},'%tag':'dollar'},phase('red','light',2)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2565},'%tag':'dollar'},phase('green','light',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2601},'%tag':'dollar'},phase('orange','light',1))));
const mach6=new hh.ReactiveMachine(Traffic6);
mach6.addEventListener('light',lightHandler);const Traffic7=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':2767},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2781},'direction':'INOUT','name':'ns','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2834},'direction':'INOUT','name':'ew','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':2887},'%tag':'FORK'},$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':2900}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2916},'%tag':'dollar'},phase('green','ns',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2952},'%tag':'dollar'},phase('orange','ns',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2989},'%tag':'dollar'},phase('red','ns',4))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3039}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3055},'%tag':'dollar'},phase('red','ew',4)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3089},'%tag':'dollar'},phase('green','ew',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3125},'%tag':'dollar'},phase('orange','ew',1)))));
let lightHandler2 = function (light) {
const name=light.signame;
const el=document.getElementById(this.trafficId + '-' + name);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,l);
});};const mach7=new hh.ReactiveMachine(Traffic7);
mach7.addEventListener('ns',lightHandler2);mach7.addEventListener('ew',lightHandler2);const Traffic8=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':3548},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3562},'direction':'INOUT','name':'ns','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3615},'direction':'INOUT','name':'ew','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3668},'direction':'INOUT','name':'failed','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'Lfailed':'Lfailed','%location':{'filename':'src/traffic.hh.mjs','pos':3717},'%tag':'TRAP'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':3734},'%tag':'FORK'},$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3750}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3769},'%tag':'dollar'},phase('green','ns',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3808},'%tag':'dollar'},phase('orange','ns',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3848},'%tag':'dollar'},phase('red','ns',3))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3907}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3926},'%tag':'dollar'},phase('red','ew',4)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3963},'%tag':'dollar'},phase('green','ew',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':4002},'%tag':'dollar'},phase('orange','ew',1))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':4064}},$$hiphop.IF({'%location':{'filename':'src/traffic.hh.mjs','pos':4083},'%tag':'if','apply':function () {
return ((() => {
const ew=this.ew;const ns=this.ns;return !(ns.nowval.has('red') || ew.nowval.has('red'));
})());
}},$$hiphop.SIGACCESS({'signame':'ns','pre':false,'val':true,'cnt':false}),$$hiphop.SIGACCESS({'signame':'ew','pre':false,'val':true,'cnt':false}),$$hiphop.EXIT({'Lfailed':'Lfailed','%location':{'filename':'src/traffic.hh.mjs','pos':4159},'%tag':'EXIT'})),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':4194},'%tag':'yield'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':4236},'%tag':'SUSTAIN','signame':'failed','apply':function () {
return true;
}}));
export { mach };export { mach3 };export { mach4 };export { mach5 };export { mach6 };export { mach7 };
//# sourceMappingURL=src/traffic.mjs.map
