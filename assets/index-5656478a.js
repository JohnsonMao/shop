import{j as y}from"./jsx-runtime-c2efdcba.js";import{R as m}from"./index-2812c619.js";import{a as A,b as L}from"./inheritsLoose-25350896.js";import{R as g}from"./index-62c31eed.js";function O(i,o){if(i==null)return{};var l={},e=Object.keys(i),n,t;for(t=0;t<e.length;t++)n=e[t],!(o.indexOf(n)>=0)&&(l[n]=i[n]);return l}function I(i,o){return i.classList?!!o&&i.classList.contains(o):(" "+(i.className.baseVal||i.className)+" ").indexOf(" "+o+" ")!==-1}function M(i,o){i.classList?i.classList.add(o):I(i,o)||(typeof i.className=="string"?i.className=i.className+" "+o:i.setAttribute("class",(i.className&&i.className.baseVal||"")+" "+o))}function _(i,o){return i.replace(new RegExp("(^|\\s)"+o+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function w(i,o){i.classList?i.classList.remove(o):typeof i.className=="string"?i.className=_(i.className,o):i.setAttribute("class",_(i.className&&i.className.baseVal||"",o))}const D={disabled:!1},k=m.createContext(null);var R=function(o){return o.scrollTop},C="unmounted",v="exited",h="entering",x="entered",S="exiting",c=function(i){A(o,i);function o(e,n){var t;t=i.call(this,e,n)||this;var s=n,a=s&&!s.isMounting?e.enter:e.appear,r;return t.appearStatus=null,e.in?a?(r=v,t.appearStatus=h):r=x:e.unmountOnExit||e.mountOnEnter?r=C:r=v,t.state={status:r},t.nextCallback=null,t}o.getDerivedStateFromProps=function(n,t){var s=n.in;return s&&t.status===C?{status:v}:null};var l=o.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var t=null;if(n!==this.props){var s=this.state.status;this.props.in?s!==h&&s!==x&&(t=h):(s===h||s===x)&&(t=S)}this.updateStatus(!1,t)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n=this.props.timeout,t,s,a;return t=s=a=n,n!=null&&typeof n!="number"&&(t=n.exit,s=n.enter,a=n.appear!==void 0?n.appear:s),{exit:t,enter:s,appear:a}},l.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);s&&R(s)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:C})},l.performEnter=function(n){var t=this,s=this.props.enter,a=this.context?this.context.isMounting:n,r=this.props.nodeRef?[a]:[g.findDOMNode(this),a],p=r[0],u=r[1],d=this.getTimeouts(),f=a?d.appear:d.enter;if(!n&&!s||D.disabled){this.safeSetState({status:x},function(){t.props.onEntered(p)});return}this.props.onEnter(p,u),this.safeSetState({status:h},function(){t.props.onEntering(p,u),t.onTransitionEnd(f,function(){t.safeSetState({status:x},function(){t.props.onEntered(p,u)})})})},l.performExit=function(){var n=this,t=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:g.findDOMNode(this);if(!t||D.disabled){this.safeSetState({status:v},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:S},function(){n.props.onExiting(a),n.onTransitionEnd(s.exit,function(){n.safeSetState({status:v},function(){n.props.onExited(a)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},l.setNextCallback=function(n){var t=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,t.nextCallback=null,n(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},l.onTransitionEnd=function(n,t){this.setNextCallback(t);var s=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],p=r[0],u=r[1];this.props.addEndListener(p,u)}n!=null&&setTimeout(this.nextCallback,n)},l.render=function(){var n=this.state.status;if(n===C)return null;var t=this.props,s=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var a=O(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(k.Provider,{value:null},typeof s=="function"?s(n,a):m.cloneElement(m.Children.only(s),a))},o}(m.Component);c.contextType=k;c.propTypes={};function E(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E};c.UNMOUNTED=C;c.EXITED=v;c.ENTERING=h;c.ENTERED=x;c.EXITING=S;const V=c;var P=function(o,l){return o&&l&&l.split(" ").forEach(function(e){return M(o,e)})},T=function(o,l){return o&&l&&l.split(" ").forEach(function(e){return w(o,e)})},b=function(i){A(o,i);function o(){for(var e,n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];return e=i.call.apply(i,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(a,r){var p=e.resolveArguments(a,r),u=p[0],d=p[1];e.removeClasses(u,"exit"),e.addClass(u,d?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(a,r)},e.onEntering=function(a,r){var p=e.resolveArguments(a,r),u=p[0],d=p[1],f=d?"appear":"enter";e.addClass(u,f,"active"),e.props.onEntering&&e.props.onEntering(a,r)},e.onEntered=function(a,r){var p=e.resolveArguments(a,r),u=p[0],d=p[1],f=d?"appear":"enter";e.removeClasses(u,f),e.addClass(u,f,"done"),e.props.onEntered&&e.props.onEntered(a,r)},e.onExit=function(a){var r=e.resolveArguments(a),p=r[0];e.removeClasses(p,"appear"),e.removeClasses(p,"enter"),e.addClass(p,"exit","base"),e.props.onExit&&e.props.onExit(a)},e.onExiting=function(a){var r=e.resolveArguments(a),p=r[0];e.addClass(p,"exit","active"),e.props.onExiting&&e.props.onExiting(a)},e.onExited=function(a){var r=e.resolveArguments(a),p=r[0];e.removeClasses(p,"exit"),e.addClass(p,"exit","done"),e.props.onExited&&e.props.onExited(a)},e.resolveArguments=function(a,r){return e.props.nodeRef?[e.props.nodeRef.current,a]:[a,r]},e.getClassNames=function(a){var r=e.props.classNames,p=typeof r=="string",u=p&&r?r+"-":"",d=p?""+u+a:r[a],f=p?d+"-active":r[a+"Active"],$=p?d+"-done":r[a+"Done"];return{baseClassName:d,activeClassName:f,doneClassName:$}},e}var l=o.prototype;return l.addClass=function(n,t,s){var a=this.getClassNames(t)[s+"ClassName"],r=this.getClassNames("enter"),p=r.doneClassName;t==="appear"&&s==="done"&&p&&(a+=" "+p),s==="active"&&n&&R(n),a&&(this.appliedClasses[t][s]=a,P(n,a))},l.removeClasses=function(n,t){var s=this.appliedClasses[t],a=s.base,r=s.active,p=s.done;this.appliedClasses[t]={},a&&T(n,a),r&&T(n,r),p&&T(n,p)},l.render=function(){var n=this.props;n.classNames;var t=O(n,["classNames"]);return m.createElement(V,L({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(m.Component);b.defaultProps={classNames:""};b.propTypes={};const U=b,N=({animationName:i,classNames:o,children:l,wrapper:e,...n})=>y(U,{classNames:o??i,...n,children:e?y("div",{children:m.isValidElement(l)&&l}):l});N.defaultProps={unmountOnExit:!0};try{N.displayName="Transition",N.__docgenInfo={description:"",displayName:"Transition",props:{animationName:{defaultValue:null,description:"",name:"animationName",required:!1,type:{name:"enum",value:[{value:'"zoom-in-top"'}]}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"boolean"}},classNames:{defaultValue:null,description:"The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```",name:"classNames",required:!1,type:{name:"string | CSSTransitionClassNames"}}}}}catch{}try{N.displayName="Transition",N.__docgenInfo={description:"",displayName:"Transition",props:{animationName:{defaultValue:null,description:"",name:"animationName",required:!1,type:{name:"enum",value:[{value:'"zoom-in-top"'}]}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"boolean"}},classNames:{defaultValue:null,description:"The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```",name:"classNames",required:!1,type:{name:"string | CSSTransitionClassNames"}}}}}catch{}export{N as T};
//# sourceMappingURL=index-5656478a.js.map
