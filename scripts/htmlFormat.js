// Format
const htmlOpeningTag = document.querySelectorAll("ot").forEach((tag) => {
   const tagText = tag.innerHTML;

   tag.innerHTML = "<span class='lt'>&lt;</span>" + tagText + "<span class='gt'>&gt;</span>";
});

const htmlClosingTag = document.querySelectorAll("ct").forEach((tag) => {
   const tagText = tag.innerHTML;

   tag.innerHTML = "<span class='lt'>&lt;/</span>" + tagText + "<span class='gt'>&gt;</span>";
});

const htmlSelfClosingTag = document.querySelectorAll("sct").forEach((tag) => {
   const tagText = tag.innerHTML;

   tag.innerHTML = "<span class='lt'>&lt;</span>" + tagText + "<span class='gt'>/&gt;</span>";
});

const htmlDocumentDeclarationTag = document.querySelectorAll("doct").forEach((doc) => {
   const docText = doc.innerHTML;

   doc.innerHTML = "<span class='lt'>&lt;!</span>" + docText + "<span class='gt'>&gt;</span>";
});

const htmlAttr = document.querySelectorAll("atv").forEach((attr) => {
   const attrText = attr.innerHTML;

   attr.innerHTML = "<span class='text'>=</span>" + "&quot;" + attrText + "&quot;";
});

const htmlComment = document.querySelectorAll("cmt[type='html']").forEach((cmt) => {
   const cmtText = cmt.innerHTML;

   cmt.innerHTML = "&lt;!-- " + cmtText + " --&gt;";
});

console.log("htmlFormat.js loaded.");
