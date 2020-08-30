$(document).ready(function () {
  date = null;
  nowInteractEnabled = 0;
  function getServerTime() {
    $.ajaxSetup({
      cache: false,
    });
    $.ajax({
      type: "GET",
      cache: false,
      url: location.href,
      complete: function (req, textStatus) {
        var dateString = req.getResponseHeader("Date");
        if (dateString.indexOf("GMT") === -1) {
          dateString += " GMT";
        }
        date = new Date("August 27, 2020 10:02:00");
        //date = new Date('December 08, 1995 20:02:00');
        console.log("Date--- " + date);
        if (flase) {
          console.log("BankHol True");
          disableChat();
          disableCall();
        } else {
          checkIfOutOfHours(date);
        }
      },
    });
  }
  function checkBankHoliday(dt) {
    console.log("bankholiday");
    var bankHolidays = [
      "1.0",
      "10.3",
      "13.3",
      "8.4",
      "25.4",
      "31.7",
      "31.7",
      "25.11",
      "28.11",
    ];
    isBankHol = bankHolidays.includes(dt);
    console.log("isbank " + isBankHol);
    return isBankHol;
  }
  function checkIfOutOfHours(time) {
    console.log("Check Out of Hours Call " + time.getMinutes());
    console.log(time.getMinutes().toFixed(2));
    var chatEnablcallEnabl = [true, true];
    var mins = time.getMinutes();
    var hour = time.getHours();
    actTime = [hour, mins];

    if (time.getDay() >= 1 && time.getDay() <= 5) {
      console.log("Between Mon - Fri");
      if (
        actTime[0] < 9 ||
        actTime[0] > 17 ||
        (actTime[0] === 17) & (actTime[1] > 30)
      ) {
        console.log("Time is out of hours for chat");
        chatEnablcallEnabl[0] = false;
      }
      if (actTime[0] < 9 || actTime[0] >= 20) {
        console.log("Time is out of hours for calls");
        chatEnablcallEnabl[1] = false;
      }
    } else if (time.getDay() === 7) {
      chatEnablcallEnabl[0] = false;
      console.log("Day is Saturday");
      if (actTime[0] < 9 || actTime[0] >= 20) {
        console.log("Time is Sat out of hours");
        chatEnablcallEnabl[1] = false;
      }
    } else if (time.getDay() === 0) {
      chatEnablcallEnabl[0] = false;
      console.log("Day is Sunday");
      if (actTime[0] < 10 || actTime[0] >= 20) {
        console.log("Time is Sun out of hours");
        chatEnablcallEnabl[1] = false;
      }
    }
    if (chatEnablcallEnabl[0] === false) {
      disableChat();
    }
    if (chatEnablcallEnabl[1] === false) {
      disableCall();
    } else {
      updateCallButton();
    }
  }
  function disableChat() {
    console.log("Call to disableChat");
    $(".three-button.min-wid5.phone-span5.span2.margin-top1.bcText").prop(
      "disabled",
      true
    );
    $(".three-button.min-wid5.phone-span5.span2.margin-top1.bcText").addClass(
      "disabled"
    );
    $("a.bcText.three-link-dark").text("Please try later.");
    $(".three-button.min-wid5.phone-span5.span2.margin-top1.bcText").text(
      "Please try later"
    );
  }
  function disableCall() {
    console.log("Call to disableCall");
    $(
      ".margin-top0.pad-bottom2>.three-button.min-wid5.span2.margin-top1"
    ).unbind();
    $(".margin-top0.pad-bottom2>.three-button.min-wid5.span2.margin-top1").prop(
      "href",
      "/business-contact-us"
    );
  }

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  function updateCallButton() {
    var nowInteract =
      '<div id="ni_imp_prim" style="position: fixed; left: 50%; margin-left: -235px; width: 470px; top: 50%; margin-top: -200px; height: 400px; background: transparent none repeat scroll 0% 0%; z-index: 9999; display: block; opacity: 1; transition: all 1s ease 0s;"><iframe id="ni_imp_prim_frame" src="https://imp3.nowinteract.com/dialogue/threeuk/ThreeUKCallback6.aspx?key=478471982&amp;uk=EDC1C3F5A7F14C9C8B58831F87CADFBC" title="ni_imp_prim" scrolling="no" style="background: transparent none repeat scroll 0% 0%; height: 400px; width: 470px; transition: inherit;" allowtransparency="true" frameborder="no"></iframe><div style="position:absolute; top:14px; right:25px;cursor:pointer !important;"><img id="ni_imp_prim_close" class="Sluiten" title="Close" src="https://imp3.nowinteract.com/dialogue/threeuk/ClientCss/images/closeBlack1-transparent1.png" alt="" onclick="IMP.hide_IMPiframe(1,478471982,4)" style="display: block; opacity: 1; transition: all 1s ease-in 0s;"></div></div>';
    var nowInteractMobile =
      '<div id="ni_imp_prim" style="position: fixed; left: 0px; margin-left: 0px; width: 100%; top: 0px; margin-top: 40%; height: 370px; background: transparent; z-index: 9999; display: block; opacity: 1; transition: all 1s ease 0s;"> <iframe id="ni_imp_prim_frame" src="https://imp3.nowinteract.com/dialogue/threeuk/ThreeUKCallback6Mobile3.aspx?key=479266001&amp;uk=060C39CEF8D944FA9B50453BA8238AAC" title="ni_imp_prim" scrolling="no" frameborder="no" style="background: transparent; height: 370px; width: 100%; transition: inherit;" allowtransparency="true"></iframe> <div style="position:absolute; top:10px; right:20px;cursor:pointer !important;"><img id="ni_imp_prim_close" class="Sluiten" title="Close" src="https://imp3.nowinteract.com/dialogue/threeuk/ClientCss/images/closeBlack1-transparent1.png" alt="" onclick="IMP.hide_IMPiframe(1,479266001,4)" style="display: block; opacity: 1; transition: all 1s ease-in 0s;"></div> </div>';
    var nowInteractTablet =
      '<div id="ni_imp_prim" style="position: fixed; left: 50%; margin-left: -235px; width: 470px; top: 50%; margin-top: -200px; height: 400px; background: transparent none repeat scroll 0% 0%; z-index: 9999; display: block; opacity: 1; transition: all 1s ease 0s;"><iframe id="ni_imp_prim_frame" src="https://imp3.nowinteract.com/dialogue/threeuk/ThreeUKCallback6.aspx?key=479308797&amp;uk=E3AAD185C9884FE48385B659411D8843" title="ni_imp_prim" scrolling="no" style="background: transparent none repeat scroll 0% 0%; height: 400px; width: 470px; transition: inherit;" allowtransparency="true" frameborder="no"></iframe><div style="position:absolute; top:14px; right:25px;cursor:pointer !important;"><img id="ni_imp_prim_close" class="Sluiten" title="Sluiten" src="https://imp3.nowinteract.com/dialogue/threeuk/ClientCss/images/closeBlack1-transparent1.png" alt="" onclick="IMP.hide_IMPiframe(1,479308797,4)" style="display: block; opacity: 1; transition: all 1s ease-in 0s;"></div></div>';

    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      userAgent
    );
    $(
      ".margin-top0.pad-bottom2>.three-button.min-wid5.span2.margin-top1"
    ).click(function () {
      console.log("Call Button Click");
      if ($("#ni_imp_prim").length === 0) {
        const userAgent = navigator.userAgent.toLowerCase();
        const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          userAgent
        );
        if (isTablet) {
          console.log("isTablet");
          $("script[src='http://cdn.clicktale.net/www/WR-latest.js']").after(
            nowInteractTablet
          );
        } else if (isMobile.any()) {
          console.log("isMobile");
          $("script[src='http://cdn.clicktale.net/www/WR-latest.js']").after(
            nowInteractMobile
          );
        } else {
          console.log("isDesktop");
          $("script[src='http://cdn.clicktale.net/www/WR-latest.js']").after(
            nowInteract
          );
        }
      } else {
        console.log("Now Interact Already Displayed");
      }
    });
  }
  console.log("Time Function");
  $(
    ".margin-top0.pad-bottom2>a.three-button.min-wid5.span2.margin-top1"
  ).removeAttr("href");
  $(".margin-top0.pad-bottom2>a.three-button.min-wid5.span2.margin-top1").prop(
    "onclick",
    "return false;"
  );
  getServerTime();
});
