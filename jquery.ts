interface zQuery {
  text(
    param?:
      | string
      | number
      | ((this: zQuery, index: number) => string | number | boolean)
  ): zQuery;
  html(param: string | Document | DocumentFragment): void;
}

const $tag: zQuery = $(["p", "t"]) as unknown as zQuery;

$tag.text("123");
$tag.text(123);
$tag.text(function (index) {
  console.log(this, index);
  return true;
});
$tag.text().html(document);

$("p").removeClass("myClass noClass").addClass("yourClass");
$(["p", "t"]).text("hello");
const tag = $("ul li").addClass(function (index) {
  return "item-" + index;
});
$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data("name") + "입니다";
});
