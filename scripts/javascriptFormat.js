const js = document.querySelectorAll('js').forEach(el => {
   const jsText = el.innerHTML;
   const type = el.getAttribute("type");

   if (type == 'bracket') {
      el.innerHTML = `<span class="text">(${jsText})</span>`;
   }
})

const jsDeclare = document.querySelectorAll("js[declare]").forEach((variable) => {
   const varText = variable.innerHTML;
   const type = variable.getAttribute("declare");

   variable.innerHTML = `<span class="var-type">${type}</span> ` + `${varText} <span class="text">=</span>`;

   if (type == "function") {
      const name = variable.getAttribute("fname");

      variable.innerHTML =
         `<span class="var-type">function</span> <js type="method">${name}</js>` +
         `<span class="text">(</span>` +
         `<span class="text">${varText}</span>` +
         `<span class="text">)</span>`;
   }
});

const jsCondition = document.querySelectorAll("js[condition]").forEach((condition) => {
   const conditionText = condition.innerHTML;
   const type = condition.getAttribute("condition");

   condition.innerHTML =
      `<span class="var-type">${type}</span> <span class="text">(</span>` +
      `<span class="text">${conditionText})</span>`;

   if (type == "else") {
      condition.innerHTML =
         `<span class="var-type">${type}</span> ` +
         `<span class="text">&lcub;</span>` +
         `<span class="text">${conditionText}</span>` +
         `<span class="text">&rcub;</span>`;
   }

   if (type == "dec") {
      condition.innerHTML =
         `<span class="text">&lcub;</span>` +
         `<span class="text">${conditionText}</span>` +
         `<span class="text">&rcub;</span>`;
   } 
});

const javascriptSingleLineComment = document.querySelectorAll("cmt[type='js']").forEach((cmt) => {
   const cmtText = cmt.innerHTML;

   cmt.innerHTML = "// " + cmtText;
});

const javascriptMultiLineComment = document.querySelectorAll("cmt[type='js-multi']").forEach((cmt) => {
   const cmtText = cmt.innerHTML;

   cmt.innerHTML = "/* " + cmtText + " */";
});

console.log("javascriptFormat.js loaded.");
