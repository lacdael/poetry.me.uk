"use strict";(self.webpackChunkpoetry_me_uk=self.webpackChunkpoetry_me_uk||[]).push([[266],{25250:function(e,t,a){a.r(t);var l=a(67294),r=a(71082),i=a(7225),n=a(60262);t.default=function(e){var t=e.data,a=t.markdownRemark,c=a.frontmatter,s=a.html,d=a.excerpt,m=a.rawMarkdownBody,o=t.site.siteMetadata.url+a.fields.slug,u=null,h=0,p=0;c.icon&&(u=c.icon.childImageSharp.fluid.src,h=c.icon.childImageSharp.fluid.src.presentationWidth,p=c.icon.childImageSharp.fluid.src.presentationHeight);var g=c.tags?c.tags:"Post Writting Poet",k={"@context":"https://schema.org","@type":"Article",name:"Post | "+c.title,url:o,description:d,headline:c.title,datePublished:c.date,articleBody:m,keywords:g.split(" "),author:{"@type":"Person",name:"Christian Lacdael",url:t.site.siteMetadata.url+"/christian-lacdael"},"@id":o};return u&&(k.image={"@type":"ImageObject",url:o+u,width:h,height:p}),l.createElement(i.Z,null,l.createElement(n.Z,{title:c.title,description:d,tags:g,date:c.date,image:u,what:"article",schemaMarkup:k}),l.createElement("section",{style:{margin:"0.5em",overflow:"hidden"}},l.createElement("ul",{className:"breadcrumb"},l.createElement("li",null,l.createElement(r.Link,{to:"/"},"Home")),l.createElement("li",null,l.createElement(r.Link,{to:"/blog"},"Blog")),l.createElement("li",null,c.title)),l.createElement("div",null,l.createElement("h1",null,c.title),l.createElement("em",null,c.date)),l.createElement("div",{dangerouslySetInnerHTML:{__html:s}})))}}}]);
//# sourceMappingURL=component---src-templates-template-blog-js-8d77fa187577cd793ae6.js.map