const cssDeclarationBrackets = document.querySelectorAll("dec").forEach((dec) => {
   const decText = dec.innerHTML;

   dec.innerHTML = "<span class='cssBracket'>&lcub;</span>" + decText + "<span class='cssBracket'>&rcub;</span>";
});

const cssComment = document.querySelectorAll("cmt[type='css']").forEach((cmt) => {
   const cmtText = cmt.innerHTML;

   cmt.innerHTML = "/* " + cmtText + " */";
});

const cssColorPrefixClrSquare = document.querySelectorAll("val[color]").forEach((clr) => {
   const clrText = clr.innerHTML;
   const color = clr.getAttribute("color");

   clr.innerHTML = `<i class="fa-solid fa-square-full" style="color: ${color};"></i>` + clrText;
});

const cssSelectorSpecification = document.querySelectorAll('val[sel]').forEach((spec) => {
   const specText = spec.innerHTML;

   spec.innerHTML = `<span class="cssBracket">&lbrack;</span>` + specText + `<span class="cssBracket">&rbrack;</span>`;
})

console.log("cssFormat.js loaded.");