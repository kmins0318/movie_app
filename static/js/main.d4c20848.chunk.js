(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},57:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),s=a.n(i),o=a(8),c=a(1),m=a(15),l=a.n(m),u=a(29),p=a(10),v=a(11),d=a(13),y=a(12),E=a(30),g=a.n(E),f=a(4),h=a.n(f);a(57);function b(e){var t=e.year,a=e.title,n=e.summary,i=e.poster,s=e.genres;return r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:i,genres:s}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:i,alt:a,title:a}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("ul",{className:"movie_genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"..."))))}b.prototype={id:h.a.number.isRequired,year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var _=b,N=(a(61),function(e){Object(d.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var j=function(){return r.a.createElement("span",null,"About this page : I love movie.")},O=function(e){Object(d.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);a(62);var k=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var q=function(){return r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(c.a,{path:"/",exact:!0,component:N}),r.a.createElement(c.a,{path:"/about",component:j}),r.a.createElement(c.a,{path:"/movie-detail",component:O}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d4c20848.chunk.js.map