$(document).on("click", ".print", function () {
  const section = $("section");
  const modalBody = $(".modal-body").detach();

  const content = $(".content").detach();
  section.append(modalBody);
  window.print();
  section.empty();
  section.append(content);
  $(".modal-body-wrapper").append(modalBody);
});
